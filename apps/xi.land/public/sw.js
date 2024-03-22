if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, a) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[c]) return;
    let i = {};
    const o = (e) => n(e, c),
      r = { module: { uri: c }, exports: i, require: o };
    s[c] = Promise.all(t.map((e) => r[e] || o(e))).then((e) => (a(...e), i));
  };
}
define(['./workbox-1051b61c'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: '30058479989b7b488a306bb75b2ab1d8' },
        { url: '/_next/static/chunks/118-456b7b7fb699b79a.js', revision: 'pL9T7f0OnZvpoP5FeK1tk' },
        {
          url: '/_next/static/chunks/1dd3208c-49be7f8e8226bb56.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        { url: '/_next/static/chunks/309-c49aa9fc5d1df212.js', revision: 'pL9T7f0OnZvpoP5FeK1tk' },
        { url: '/_next/static/chunks/575-cabf6065d8eb0a26.js', revision: 'pL9T7f0OnZvpoP5FeK1tk' },
        { url: '/_next/static/chunks/655-e7b6cb89ecc40f75.js', revision: 'pL9T7f0OnZvpoP5FeK1tk' },
        {
          url: '/_next/static/chunks/app/error-314e8e35c886ca9c.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        {
          url: '/_next/static/chunks/app/global-error-1fe911c22c902e39.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        {
          url: '/_next/static/chunks/app/layout-315b1f9855dc0ba1.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        {
          url: '/_next/static/chunks/app/page-09f2f71175eccd77.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        {
          url: '/_next/static/chunks/framework-f8b8d5107ecb6feb.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        {
          url: '/_next/static/chunks/main-app-dfc4523cf1fa1c03.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        { url: '/_next/static/chunks/main-d68de3105e9dac6f.js', revision: 'pL9T7f0OnZvpoP5FeK1tk' },
        {
          url: '/_next/static/chunks/pages/_app-41646d0b3e6c0ef6.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        {
          url: '/_next/static/chunks/pages/_error-2f96831b6ea432e7.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-8eaf6d74cdab105e.js',
          revision: 'pL9T7f0OnZvpoP5FeK1tk',
        },
        { url: '/_next/static/css/60f90f4610d842f9.css', revision: '60f90f4610d842f9' },
        {
          url: '/_next/static/media/2aaf0723e720e8b9-s.p.woff2',
          revision: 'e1b9f0ecaaebb12c93064cd3c406f82b',
        },
        {
          url: '/_next/static/media/9c4f34569c9b36ca-s.woff2',
          revision: '2c1fc211bf5cca7ae7e7396dc9e4c824',
        },
        {
          url: '/_next/static/media/ae9ae6716d4f8bf8-s.woff2',
          revision: 'b0c49a041e15bdbca22833f1ed5cfb19',
        },
        {
          url: '/_next/static/media/b1db3e28af9ef94a-s.woff2',
          revision: '70afeea69c7f52ffccde29e1ea470838',
        },
        {
          url: '/_next/static/media/b967158bc7d7a9fb-s.p.woff2',
          revision: '08ccb2a3cfc83cf18d4a3ec64dd7c11b',
        },
        {
          url: '/_next/static/media/c0f5ec5bbf5913b7-s.woff2',
          revision: '8ca5bc1cd1579933b73e51ec9354eec9',
        },
        {
          url: '/_next/static/media/d1d9458b69004127-s.woff2',
          revision: '9885d5da3e4dfffab0b4b1f4a259ca27',
        },
        {
          url: '/_next/static/pL9T7f0OnZvpoP5FeK1tk/_buildManifest.js',
          revision: 'eed4f202e6e2838504a6c254fc187804',
        },
        {
          url: '/_next/static/pL9T7f0OnZvpoP5FeK1tk/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/xieffectlogo.svg', revision: '329cae477ae4b7972eba0917105208b1' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: n, state: t }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    );
});
