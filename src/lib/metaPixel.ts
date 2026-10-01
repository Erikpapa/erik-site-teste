import { BRAND_INFO } from '../data/courseData';

type PixelEvent = 'ViewContent' | 'AddToCart';

declare global {
  interface Window {
    fbq?: (command: 'track', event: PixelEvent, parameters: Record<string, string>) => void;
  }
}

function trackEvent(event: PixelEvent, target: Window): boolean {
  if (!target.fbq) return false;
  try {
    target.fbq('track', event, { content_name: BRAND_INFO.productName });
    return true;
  } catch {
    // Tracking must never interrupt reading or checkout navigation.
    return false;
  }
}

export function trackAddToCart(): void {
  trackEvent('AddToCart', window);
}

export function installViewContentTracking(target: Window = window): () => void {
  let tracked = false;

  const cleanup = () => {
    target.removeEventListener('scroll', checkScroll);
    target.removeEventListener('resize', checkScroll);
    target.removeEventListener('load', checkScroll);
  };

  function checkScroll() {
    const scrollableHeight = target.document.documentElement.scrollHeight - target.innerHeight;
    // Scroll progress is 0% at the top and 100% at the bottom.
    if (!tracked && scrollableHeight > 0 && target.scrollY / scrollableHeight >= 0.9) {
      tracked = trackEvent('ViewContent', target);
      if (tracked) cleanup();
    }
  }

  target.addEventListener('scroll', checkScroll, { passive: true });
  target.addEventListener('resize', checkScroll);
  target.addEventListener('load', checkScroll);
  checkScroll();
  return cleanup;
}
