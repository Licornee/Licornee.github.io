"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Vesper's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c9704c68c924a303649201ae96a36919",url:"./2021/01/13/搭博客/index.html"},{revision:"4dfaa8a9ac17ce75b5809c34476aa695",url:"./2021/01/15/Markdown笔记/index.html"},{revision:"c32e458a08c74d4a4f9421bf176993a9",url:"./2021/01/20/安装、使用SQL_Server/index.html"},{revision:"7c898977d1410b09a1c1818563a84067",url:"./2021/01/20/寒假每日一题/index.html"},{revision:"d789fff04af4446f3397aff59104042f",url:"./2021/01/23/二叉树的后序遍历/index.html"},{revision:"75d6af608506fd7526cb35506038b0ba",url:"./2021/01/28/PTA题目集/index.html"},{revision:"346d694d1e2e08f5d5027cf3cc9535ab",url:"./archives/2021/01/index.html"},{revision:"9936700f70171becd7ec167a88cb6c8a",url:"./archives/2021/index.html"},{revision:"0f660ff4fbe674331d519a030da5702e",url:"./archives/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"8c02d1950dca5bcc1928647f3771d555",url:"./baidu_verify_code-GTbU4DagZ5.html"},{revision:"674b18a3b0616176831e3d33222c9b9a",url:"./baidusitemap.xml"},{revision:"9768d1937901c838a885a5cbc7c5815b",url:"./css/index.css"},{revision:"6acdc7e9f55cccd74e58a256eec30033",url:"./css/style.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"ba3414aff224d7ded55dbd6ecf5740ff",url:"./google70bb47d8f1bac302.html"},{revision:"8b2e51dd5dc52a633e547603d36530ae",url:"./img/siteicon/browserconfig.xml"},{revision:"6051a95b4fe8ee637ed90faefe1e075b",url:"./img/siteicon/README.html"},{revision:"6d03576e55ea93df2537818e1952aafa",url:"./index.html"},{revision:"7b370436ecd2d0f43b614d374894ab0d",url:"./js/banner.js"},{revision:"284b95d3ba335fd99e07ea05d0602eb7",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"8816721615e14b84664d775d8c85164f",url:"./manifest.json"},{revision:"31a5ea7e36b0774661274e93cf7f005f",url:"./sitemap.xml"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();