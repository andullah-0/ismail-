import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

const DEFAULT_ORIGIN = 'https://ais-pre-pewp6pv5hvu6nx2h3dw2xm-711450502041.asia-east1.run.app';

function resolveLiveOrigin() {
  const raw = process.env.URL || process.env.DEPLOY_PRIME_URL || process.env.SITE_URL || '';
  return raw ? raw.replace(/\/+$/, '') : '';
}

export default defineConfig(() => {
  const liveOrigin = resolveLiveOrigin();

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'sync-live-site-origin',
        transformIndexHtml(html) {
          return liveOrigin ? html.split(DEFAULT_ORIGIN).join(liveOrigin) : html;
        },
        closeBundle() {
          if (!liveOrigin) return;
          for (const file of ['dist/sitemap.xml', 'dist/robots.txt', 'dist/llms.txt']) {
            const fullPath = path.resolve(__dirname, file);
            if (fs.existsSync(fullPath)) {
              const content = fs.readFileSync(fullPath, 'utf-8');
              fs.writeFileSync(fullPath, content.split(DEFAULT_ORIGIN).join(liveOrigin), 'utf-8');
            }
          }
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
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      target: 'esnext',
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three')) {
              return 'three-vendor';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'lucide-vendor';
            }
            if (
              id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/react-router-dom')
            ) {
              return 'react-vendor';
            }
          },
        },
      },
      chunkSizeWarningLimit: 1200,
    },
  };
});
