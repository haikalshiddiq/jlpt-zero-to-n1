import { generateSW } from 'workbox-build';

const result = await generateSW({
  globDirectory: 'dist',
  globPatterns: ['**/*.{html,css,js,json,webmanifest,svg,png}'],
  globIgnores: ['sw.js', 'workbox-*.js'],
  swDest: 'dist/sw.js',
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  skipWaiting: true,
  navigationPreload: true,
  runtimeCaching: [
    {
      urlPattern: ({ request, url }) => request.mode === 'navigate' && !url.pathname.startsWith('/api/'),
      handler: 'NetworkFirst',
      options: {
        cacheName: 'jlpt-pages-v1',
        networkTimeoutSeconds: 4,
        cacheableResponse: { statuses: [0, 200] },
        precacheFallback: { fallbackURL: '/offline.html' },
      },
    },
    {
      urlPattern: /\.(?:png|jpe?g|webp|avif|svg)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'jlpt-images-v1',
        expiration: { maxEntries: 80, maxAgeSeconds: 30 * 24 * 60 * 60 },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
    {
      urlPattern: /\.(?:mp3|m4a|ogg|wav)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'jlpt-audio-v1',
        expiration: { maxEntries: 24, maxAgeSeconds: 7 * 24 * 60 * 60 },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
  ],
});

if (!result.count || !result.size) {
  throw new Error('PWA generation completed without precached assets.');
}

console.log(`PWA service worker generated: ${result.count} files, ${result.size} bytes precached.`);
