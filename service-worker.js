"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/kitten-clicker/index.html","da8145dcabaedf28aec3f45f7e00000a"],["/kitten-clicker/static/css/main.64d5cba8.css","ea2c7c7991ab2eafa4ef3b05825e0971"],["/kitten-clicker/static/js/main.27d466c6.js","6adbce34d87b1d714629155f54aba768"],["/kitten-clicker/static/media/kitten01.83920499.jpg","83920499fe382238a90d88747a31689d"],["/kitten-clicker/static/media/kitten02.e000d859.jpg","e000d859771c3c2ea93dfd46f90333c2"],["/kitten-clicker/static/media/kitten03.460e4377.png","460e4377334b211ea94c548f1ee823ee"],["/kitten-clicker/static/media/kitten04.4539037a.png","4539037a3569d69c5230625a2bfa19b3"],["/kitten-clicker/static/media/kitten05.111f66b4.jpg","111f66b40571111ccfd57a52bac162e0"],["/kitten-clicker/static/media/kitten06.c8b94e3f.jpg","c8b94e3f71ba9e7b8f896d72e2ee9aeb"],["/kitten-clicker/static/media/kitten07.c792534a.jpg","c792534a92e6a10e126d14fe32cb235c"],["/kitten-clicker/static/media/kitten08.90fceb21.jpg","90fceb21ce7606a8628b1c322745d2cc"],["/kitten-clicker/static/media/kitten09.f61692d0.jpg","f61692d05efca165482a401a5341c575"],["/kitten-clicker/static/media/kitten10.915e2d72.png","915e2d724bd436c5e1e4e4fadfeb83d2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/kitten-clicker/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});