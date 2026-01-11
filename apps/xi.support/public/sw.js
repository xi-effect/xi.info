if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          ((e.src = a), (e.onload = s), document.head.appendChild(e));
        } else ((e = a), importScripts(a), s());
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[n]) return;
    let o = {};
    const t = (e) => a(e, n),
      r = { module: { uri: n }, exports: o, require: t };
    s[n] = Promise.all(i.map((e) => r[e] || t(e))).then((e) => (c(...e), o));
  };
}
define(['./workbox-1051b61c'], function (e) {
  'use strict';
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: '742b18e54eb116c87a6d42f5031102db' },
        {
          url: '/_next/static/IrVZ7aX2CYekZ5AXmQW5C/_buildManifest.js',
          revision: 'e0a21c7d7f93d89dce16df0231dc76f2',
        },
        {
          url: '/_next/static/IrVZ7aX2CYekZ5AXmQW5C/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_next/static/chunks/12-4d0c229756093920.js', revision: 'IrVZ7aX2CYekZ5AXmQW5C' },
        { url: '/_next/static/chunks/304-59bd4af92aef5089.js', revision: 'IrVZ7aX2CYekZ5AXmQW5C' },
        { url: '/_next/static/chunks/547-fbb8463e084f4329.js', revision: 'IrVZ7aX2CYekZ5AXmQW5C' },
        { url: '/_next/static/chunks/69-226355d32dcfd66e.js', revision: 'IrVZ7aX2CYekZ5AXmQW5C' },
        {
          url: '/_next/static/chunks/app/error-ebfd945ed3ec0532.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/app/global-error-c02c8b4e1506400a.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/app/layout-5e4525546ca882b1.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/app/loading-eee6719d1f546352.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/app/not-found-b5d749364c1519db.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/app/page-6ef7d562cf7b1b20.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/app/vacancy/%5Bid%5D/page-602b1bcfe30b5e07.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/app/vacancy/page-5788ae300905ae12.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/fd9d1056-808e3f8ddb6f30ec.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/framework-9e68550641db712d.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        { url: '/_next/static/chunks/main-9253b212b7c8ae07.js', revision: 'IrVZ7aX2CYekZ5AXmQW5C' },
        {
          url: '/_next/static/chunks/main-app-97d50f260160f97c.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/pages/_app-75f6107b0260711c.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-31ecffea0bd330d9.js',
          revision: 'IrVZ7aX2CYekZ5AXmQW5C',
        },
        { url: '/_next/static/css/89e43502df8782af.css', revision: '89e43502df8782af' },
        {
          url: '/_next/static/media/05a31a2ca4975f99-s.woff2',
          revision: 'f1b44860c66554b91f3b1c81556f73ca',
        },
        {
          url: '/_next/static/media/513657b02c5c193f-s.woff2',
          revision: 'c4eb7f37bc4206c901ab08601f21f0f2',
        },
        {
          url: '/_next/static/media/51ed15f9841b9f9d-s.woff2',
          revision: 'bb9d99fb9bbc695be80777ca2c1c2bee',
        },
        {
          url: '/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2',
          revision: '74c3556b9dad12fb76f84af53ba69410',
        },
        {
          url: '/_next/static/media/d6b16ce4a6175f26-s.woff2',
          revision: 'dd930bafc6297347be3213f22cc53d3e',
        },
        {
          url: '/_next/static/media/ec159349637c90ad-s.woff2',
          revision: '0e89df9522084290e01e4127495fae99',
        },
        {
          url: '/_next/static/media/fd4db3eb5472fc27-s.woff2',
          revision: '71f3fcaf22131c3368d9ec28ef839831',
        },
        {
          url: '/assets/icons/apple-touch-icon-120x120-precomposed.png',
          revision: 'a4c255fea139db3f9ed1fa8ee41d740e',
        },
        {
          url: '/assets/icons/apple-touch-icon-120x120.png',
          revision: 'c1eb7682cfae37803b8c8a3f0c9023a3',
        },
        {
          url: '/assets/icons/apple-touch-icon-152x152-precomposed.png',
          revision: 'f08c10a0bbd03b23e3aa2df8a7f28e58',
        },
        {
          url: '/assets/icons/apple-touch-icon-152x152.png',
          revision: 'a9a10a1b6e85a906691b3ee61a81d64b',
        },
        {
          url: '/assets/icons/apple-touch-icon-180x180-precomposed.png',
          revision: '8d2663ab80b84b1363da506a3dbcd2e0',
        },
        {
          url: '/assets/icons/apple-touch-icon-180x180.png',
          revision: '54938157042b9e94517bf7332e6dc7fc',
        },
        {
          url: '/assets/icons/apple-touch-icon-60x60-precomposed.png',
          revision: 'e1cf9f51d7b7c706b79c196b826204de',
        },
        {
          url: '/assets/icons/apple-touch-icon-60x60.png',
          revision: '85ed82806641b3de9246334d43581ad9',
        },
        {
          url: '/assets/icons/apple-touch-icon-76x76-precomposed.png',
          revision: 'e6c2fdd100be720b0edceca3f9a24662',
        },
        {
          url: '/assets/icons/apple-touch-icon-76x76.png',
          revision: '5a2363031dafad468d3a52e0f3a7c1eb',
        },
        {
          url: '/assets/icons/apple-touch-icon-precomposed.png',
          revision: '8d2663ab80b84b1363da506a3dbcd2e0',
        },
        { url: '/assets/icons/apple-touch-icon.png', revision: '54938157042b9e94517bf7332e6dc7fc' },
        { url: '/assets/icons/favicon-16x16.png', revision: '9b9c3bae0d66acae5035e72062ed9786' },
        { url: '/assets/icons/favicon-32x32.png', revision: '98e18c86655c72a2ee389b5f9d9f52c7' },
        { url: '/assets/icons/html_code.html', revision: '48f61e1239824e241cffb1c4294bf927' },
        { url: '/assets/icons/icon-144x144.png', revision: 'c8b04135f67230d873a17dbe48037192' },
        { url: '/assets/icons/icon-192x192.png', revision: '5b009d152da14f621c3d58bfd0d96c93' },
        { url: '/assets/icons/icon-256x256.png', revision: '3e9cdcfe679d8188e2b360e313160fe0' },
        { url: '/assets/icons/icon-36x36.png', revision: '6cba026644288af5b1c9228e5e3eb8c6' },
        { url: '/assets/icons/icon-384x384.png', revision: '91912f5112c359f018046cc507adc9c5' },
        { url: '/assets/icons/icon-48x48.png', revision: '17f1219d11082910026ded56d610e1cc' },
        { url: '/assets/icons/icon-512x512.png', revision: 'c2f0746e098e924b2bf0017432a3059b' },
        { url: '/assets/icons/icon-72x72.png', revision: '1e4f074faf2f924d2552db62d792b769' },
        { url: '/assets/icons/icon-96x96.png', revision: '19d956b0fef5336f51aa5ddfb62aadb5' },
        { url: '/assets/icons/mstile-144x144.png', revision: 'f3b246ca663e3872c2c5e3c2c8328f58' },
        { url: '/assets/icons/mstile-150x150.png', revision: '2fe7e49a8ca19dd20d406569f83b2284' },
        { url: '/assets/icons/mstile-310x150.png', revision: '8b8b07cce22acee6f864658edbfaa7a3' },
        { url: '/assets/icons/mstile-310x310.png', revision: '9dc38c0afd454e811ab5c792fe9c01b9' },
        { url: '/assets/icons/mstile-70x70.png', revision: 'c18b9fb768c5e03f4a53a594e617d16b' },
        {
          url: '/assets/icons/safari-pinned-tab.svg',
          revision: '7d779987ad07fc1946277ce906df1576',
        },
        { url: '/favicon-for-dark.svg', revision: '6825e74a748ef61f38418d0a77983974' },
        { url: '/favicon-for-light.svg', revision: 'b1a97d320dba69a91e06391d5db81743' },
        { url: '/favicon.ico', revision: '501d94411940282fef1a69e6a8c1c0d7' },
        { url: '/logoforwhite.svg', revision: '268405147deeaad752f70fd3540c47f4' },
        { url: '/global.css', revision: '72eeea6f282a3616d04a6cd0014f745c' },
        { url: '/home/appreciate-the-team-1.jpg', revision: 'e40f5a197b95e684952b94e5217abad2' },
        { url: '/home/appreciate-the-team-2.jpg', revision: '73cb78bf3bdbfc99afa2c4a15cc2a4d2' },
        { url: '/home/appreciate-the-team-3.jpg', revision: 'b001721c74581d3c060c6d90d4384d7b' },
        { url: '/home/female-memojis-2.svg', revision: 'acc061fb5ef483802629a9f9227aa23e' },
        { url: '/home/female-memojis.svg', revision: '12d7f55bdea83a5fb4f0e94a355a0183' },
        { url: '/home/male-memojis-2.svg', revision: 'a29d307d10b34490d0f6f0e734dc8809' },
        { url: '/home/male-memojis.svg', revision: 'aa97e01ccf4274b0f418f9b9613c4ebf' },
        { url: '/home/work-together.jpg', revision: '6b9d2c1bb1a8ccb6a248254ffb567f37' },
        { url: '/iconssite/close.svg', revision: 'f82f86ca1027a9da91957119916e87f3' },
        { url: '/iconssite/drop.svg', revision: 'e02f4ca6b5127d51ae688d941b9ee648' },
        { url: '/iconssite/full.svg', revision: '329cae477ae4b7972eba0917105208b1' },
        { url: '/iconssite/gh.svg', revision: '647e210d519909ff1dcb74b1e898137a' },
        { url: '/iconssite/icon-right.svg', revision: 'c68ab2da514d3c389896abbe807c0dcf' },
        { url: '/iconssite/team.svg', revision: 'eadcba6fb62a4cfd9ed5f8f1bf6dff9d' },
        { url: '/iconssite/telegram.svg', revision: 'fd190129d5cc59ed19d56de66b55c86e' },
        { url: '/iconssite/upload.svg', revision: 'f1e421ac991689eeed6c8b336672c9c0' },
        { url: '/iconssite/vk.svg', revision: '3b61d373de5ebcefd1374699ea02f611' },
        { url: '/manifest.webmanifest', revision: '7b5388846f2d8570cd6c6e5a9c31b357' },
        { url: '/not-found/background.png', revision: '40a9415c436a68d6cb8cab1ca47b8942' },
        { url: '/robots.txt', revision: 'b8d18476845ccb7bcd28d42787c93f6d' },
        { url: '/vacancy/niqzart.jpg', revision: 'a486e3f04d70f3e4a9d1533e1b52ed72' },
        { url: '/vacancy/unknownproperty.jpg', revision: '021a7d9074f15a7cefc416bb203183be' },
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
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: i }) =>
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
    ));
});
