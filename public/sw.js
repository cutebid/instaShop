if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Fe5yxWT2_x91EulnOKqiB/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/Fe5yxWT2_x91EulnOKqiB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/190-f31018b6ef563e5d.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/3d47b92a-11c79a117c68d23a.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/456-abaa13c4a9b453da.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/562-cc872119eb50c020.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/737-5e98091c45a47675.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/86-a421b26d22eb416c.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/937-1834f0c0b8d15007.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/9c4e2130-50f81a4a6d08ec6f.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/app/_not-found/page-b335a6d8a63a682a.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/app/getStarted/page-9b470be115a15447.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/app/layout-cae2a7501e5e134c.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/app/page-492fc270ee24fa41.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/app/productEdit/page-3926a371eff4cb52.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/app/productPreview/page-daf2c7d39e78a411.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/eec3d76d-7a9f1d80e9a0cf04.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/fd9d1056-13aa76f036058ae3.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/main-app-b4f64e5d71d3e674.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/main-f056818f1582f4f9.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-1f3820a06378ae34.js",revision:"Fe5yxWT2_x91EulnOKqiB"},{url:"/_next/static/css/2b8706936de98c5f.css",revision:"2b8706936de98c5f"},{url:"/_next/static/css/338f1d3eda0865bf.css",revision:"338f1d3eda0865bf"},{url:"/_next/static/media/56d4c7a1c09c3371-s.woff2",revision:"43b1d1276722d640d51608db4600bb69"},{url:"/_next/static/media/7bb1b3388411e623-s.woff2",revision:"eacee02fc442e61205277f62a53075ff"},{url:"/_next/static/media/7e6a2e30184bb114-s.p.woff2",revision:"bca21fe1983e7d9137ef6e68e05f3aee"},{url:"/_next/static/media/Google.299181cc.png",revision:"752158430a6bfef3bed0bad0d974a474"},{url:"/_next/static/media/avatar.ef125d35.png",revision:"823ca1f5fb4a3c234000640e7f1886d2"},{url:"/_next/static/media/b27868729ad8c262-s.p.woff2",revision:"2ec3f5ca433288e854067f776a00f76b"},{url:"/_next/static/media/camera-icon.a506484b.png",revision:"1496bad9f309bcd6a95963309901cfca"},{url:"/_next/static/media/instagram.f0ddbf92.png",revision:"e6e89928087b5f3690a10e7dc8551067"},{url:"/_next/static/media/product-image.44543468.png",revision:"dd5de6e072c9f8d6a8e4039ba942f09b"},{url:"/_next/static/media/profile-icon.00454ce0.png",revision:"1ad656cf5b6bc13a2e3c86971b35fe99"},{url:"/_next/static/media/shopping-sale-icon.8c92b9f0.png",revision:"bf2b22806dd8b4af31c9b29a705af0e7"},{url:"/_next/static/media/tiktok.c92c53f9.png",revision:"b5a0f89cae8a3b098014d39a8c3dcf59"},{url:"/icons/apple-touch-icon.png",revision:"09502f34f611b89adb4a210d26bc40fc"},{url:"/icons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/icons/favicon-16x16.png",revision:"cb8cf9f70d09b27fbc3ebc5222f3419d"},{url:"/icons/favicon-32x32.png",revision:"7f13be0e29c12e6cd8277faa722df5fb"},{url:"/icons/favicon.ico",revision:"16282c7af98b62a246f45b99bf6ce7a9"},{url:"/icons/icon-192x192.png",revision:"254f5dbe0863273182012891eeeefd68"},{url:"/icons/icon-512x512.png",revision:"9c8a9bda08302520517e8d0f405225df"},{url:"/icons/mstile-150x150.png",revision:"f19fff244e77024af042ab64434ce6f4"},{url:"/manifest.json",revision:"fd35891d6e894e817e8eafffe8526a30"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
