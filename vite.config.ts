import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    base: '/airsa-webapp/',

    plugins: [
      react(),
      tailwindcss(),

      VitePWA({
        registerType: 'autoUpdate',

        includeAssets: [
          'favicon.ico',
          'apple-touch-icon.png',
          'icon.svg',
        ],

        manifest: {
          id: '/airsa-webapp/',
          name: 'ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
          short_name: 'ایرسا سیمرغ جهان',

          description:
            'پرتال جامع ایرسا سیمرغ جهان - گردشگری سلامت، خدمات تشریفات VIP و خدمات بین‌المللی در ایران',

          theme_color: '#070a12',
          background_color: '#070a12',

          display: 'standalone',
          orientation: 'portrait',

          start_url: '/airsa-webapp/',
          scope: '/airsa-webapp/',

          lang: 'fa',
          dir: 'rtl',

          icons: [
            {
              src: 'images/icons/app-icon-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'images/icons/app-icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'images/icons/app-icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },

        workbox: {
          globPatterns: [
            '**/*.{js,css,html,ico,png,svg,woff,woff2,jpg,jpeg,webp}',
          ],
        },

        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
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