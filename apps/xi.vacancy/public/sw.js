if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-1051b61c"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"32e85586d13df710f2b16a1fedd56608"},{url:"/_next/static/bxbp2yzvLNuRcdPsQEau7/_buildManifest.js",revision:"e609e0c6d1d886b0d147bc138eea4911"},{url:"/_next/static/bxbp2yzvLNuRcdPsQEau7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1dd3208c-649d57c0c3e2fdef.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/445-30954d4989962003.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/553-722bd8ce74259beb.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/575-9cfd4a559e365ade.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/704-8b3dc53fdbeb0b48.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/app/error-103252b94d9e283b.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/app/global-error-2b5339ed0c70e9c7.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/app/layout-96d4387d2fbb4779.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/app/loading-59bceab4913f016a.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/app/page-7f7be622a675ca88.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/app/vacancy/%5Bid%5D/page-1d13cbd697519b83.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/app/vacancy/page-46d44826805f0b1b.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/framework-0857c1c24dbfb1d6.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/main-app-b2c3a086c2b99c81.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/main-d65131b52c63264a.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/pages/_app-12a7bb3ca92362ee.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/pages/_error-309efe0edcf52fb0.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-e532c79816e644ce.js",revision:"bxbp2yzvLNuRcdPsQEau7"},{url:"/_next/static/css/ba4d1421d5031f2c.css",revision:"ba4d1421d5031f2c"},{url:"/_next/static/css/dafe1d95346ecb39.css",revision:"dafe1d95346ecb39"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/full-logo-xieffect.svg",revision:"268405147deeaad752f70fd3540c47f4"},{url:"/global.css",revision:"fe02d77b6123ca843702962f123a6da9"},{url:"/home/appreciate-the-team-1.jpg",revision:"e40f5a197b95e684952b94e5217abad2"},{url:"/home/appreciate-the-team-2.jpg",revision:"73cb78bf3bdbfc99afa2c4a15cc2a4d2"},{url:"/home/appreciate-the-team-3.jpg",revision:"b001721c74581d3c060c6d90d4384d7b"},{url:"/home/female-memojis-2.svg",revision:"acc061fb5ef483802629a9f9227aa23e"},{url:"/home/female-memojis.svg",revision:"12d7f55bdea83a5fb4f0e94a355a0183"},{url:"/home/male-memojis-2.svg",revision:"a29d307d10b34490d0f6f0e734dc8809"},{url:"/home/male-memojis.svg",revision:"aa97e01ccf4274b0f418f9b9613c4ebf"},{url:"/home/work-together.jpg",revision:"6b9d2c1bb1a8ccb6a248254ffb567f37"},{url:"/icons/close.svg",revision:"f82f86ca1027a9da91957119916e87f3"},{url:"/icons/drop.svg",revision:"e02f4ca6b5127d51ae688d941b9ee648"},{url:"/icons/full.svg",revision:"329cae477ae4b7972eba0917105208b1"},{url:"/icons/icon-right.svg",revision:"c68ab2da514d3c389896abbe807c0dcf"},{url:"/icons/team.svg",revision:"eadcba6fb62a4cfd9ed5f8f1bf6dff9d"},{url:"/icons/upload.svg",revision:"f1e421ac991689eeed6c8b336672c9c0"},{url:"/vacancy/unknownproperty.jpg",revision:"4f6e5c79cef72c7813f6aea631d23278"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
