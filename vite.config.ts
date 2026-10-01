import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    base: process.env.BASE_PATH || process.env.BASE_URL || '/',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'save-ceo-photo-api',
        configureServer(server) {
          server.middlewares.use('/api/save-ceo-photo', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  const { dataUrl } = JSON.parse(body);
                  if (dataUrl && typeof dataUrl === 'string' && dataUrl.startsWith('data:image/')) {
                    const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                    const buffer = Buffer.from(base64Data, 'base64');
                    const targetPaths = [
                      'public/Hadiseh Dehghani CEO.jpg',
                      'public/images/team/hadiseh-dehghani-ceo.jpg',
                      'public/images/team/hadiseh_dehghani_ceo.jpg',
                      'public/images/team/hadiseh-dehghani.jpg',
                      'public/images/team/hadiseh-dehghani.webp',
                      'public/images/ceo/hadiseh-dehghani.jpg',
                      'src/assets/images/hadiseh_dehghani_ceo.jpg',
                    ];
                    for (const p of targetPaths) {
                      try {
                        const dir = path.dirname(p);
                        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
                        fs.writeFileSync(p, buffer);
                      } catch {
                        // ignore single write error
                      }
                    }
                  }
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true }));
                } catch (e) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: String(e) }));
                }
              });
            } else {
              res.statusCode = 405;
              res.end();
            }
          });
        },
      },
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon.svg'],
        manifest: {
          id: '/',
          name: 'ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
          short_name: 'ایرسا سیمرغ جهان',
          description: 'پرتال جامع ایرسا سیمرغ جهان - گردشگری سلامت، خدمات تشریفات VIP و خدمات بین‌المللی در ایران',
          theme_color: '#070a12',
          background_color: '#070a12',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          scope: '/',
          lang: 'fa',
          dir: 'rtl',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,jpg,jpeg,webp}'],
        },
        devOptions: {
          enabled: false,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'motion/react', 'lucide-react'],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
