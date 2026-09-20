import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/erik-site-teste/',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'dev-root-fallback',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            if (req.url === '/' || req.url === '/index.html') {
              req.url = '/erik-site-teste/';
            } else if (req.url?.startsWith('/images/')) {
              req.url = '/erik-site-teste' + req.url;
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
