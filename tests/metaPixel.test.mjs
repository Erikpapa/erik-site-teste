import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import vm from 'node:vm';
import { buildSync } from 'esbuild';

const root = new URL('../', import.meta.url).pathname;
const bundled = buildSync({
  stdin: {
    contents: `export * from './src/lib/metaPixel';
      export * from './src/components/SectionOpening';
      export * from './src/components/SectionOffer';`,
    resolveDir: root,
    loader: 'ts',
  },
  bundle: true,
  write: false,
  platform: 'node',
  format: 'cjs',
  packages: 'external',
  define: { 'import.meta.env.BASE_URL': '"/"' },
}).outputFiles[0].text;

function makeWindow(height = 2000, viewport = 1000) {
  const events = [];
  const listeners = new Map();
  const target = {
    document: { documentElement: { scrollHeight: height } },
    innerHeight: viewport,
    scrollY: 0,
    fbq: (...args) => events.push(args),
    addEventListener: (name, fn) => listeners.set(name, fn),
    removeEventListener: (name, fn) => {
      if (listeners.get(name) === fn) listeners.delete(name);
    },
  };
  return { target, events, listeners, scroll: y => {
    target.scrollY = y;
    listeners.get('scroll')?.();
  } };
}

function loadCode(target) {
  const module = { exports: {} };
  vm.runInNewContext(bundled, {
    module, exports: module.exports, window: target, require: createRequire(import.meta.url),
  });
  return module.exports;
}

test('the bootstrap initializes the requested pixel and queues one PageView', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  const inserted = [];
  const context = {
    window: {},
    document: {
      createElement: () => ({}),
      getElementsByTagName: () => [{ parentNode: { insertBefore: element => inserted.push(element) } }],
    },
  };
  Object.defineProperty(context, 'fbq', { get: () => context.window.fbq });
  vm.runInNewContext(script, context);
  const queued = context.window.fbq.queue.map(args => Array.from(args));
  assert.equal(queued.filter(args => args[0] === 'init' && args[1] === '1970948660258719').length, 1);
  assert.equal(queued.filter(args => args[0] === 'track' && args[1] === 'PageView').length, 1);
  assert.equal(inserted[0].src, 'https://connect.facebook.net/en_US/fbevents.js');
  assert.match(html, /id=1970948660258719&amp;ev=PageView&amp;noscript=1/);
});

test('ViewContent waits for 90% and does not repeat after scrolling back', () => {
  const page = makeWindow();
  loadCode(page.target).installViewContentTracking(page.target);
  page.scroll(899);
  assert.equal(page.events.length, 0);
  page.scroll(900);
  assert.equal(page.events.length, 1);
  assert.equal(page.events[0][1], 'ViewContent');
  page.scroll(0);
  page.scroll(1000);
  assert.equal(page.events.length, 1);
  assert.equal(page.listeners.size, 0);
});

test('a short page does not count as 90% scrolled, and restored scroll does', () => {
  const short = makeWindow(1000, 1000);
  loadCode(short.target).installViewContentTracking(short.target);
  short.scroll(0);
  assert.equal(short.events.length, 0);
  const restored = makeWindow();
  restored.target.scrollY = 950;
  loadCode(restored.target).installViewContentTracking(restored.target);
  assert.equal(restored.events[0][1], 'ViewContent');
});

test('only the two named CTAs fire AddToCart, preserving the correct checkout', () => {
  const page = makeWindow();
  const code = loadCode(page.target);
  const links = [];
  function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) return node.forEach(walk);
    if (node.type === 'a') links.push(node);
    walk(node.props?.children);
  }
  walk(code.SectionOpening());
  walk(code.SectionOffer());
  assert.equal(links.length, 3);
  const tracked = links.filter(link => link.props.onClick);
  assert.equal(tracked.length, 2);
  for (const link of tracked) {
    assert.equal(link.props.href, 'https://pay.cakto.com.br/ni7jvkp_1127223');
    assert.equal(link.props.children[0], 'Quero começar minha leitura com mais clareza');
    link.props.onClick();
  }
  assert.equal(page.events.length, 2);
  assert.ok(page.events.every(args => args[0] === 'track' && args[1] === 'AddToCart'));
  page.target.fbq = () => { throw new Error('Tracking blocked'); };
  assert.doesNotThrow(() => tracked[0].props.onClick());
  delete page.target.fbq;
  assert.doesNotThrow(() => tracked[0].props.onClick());
});
