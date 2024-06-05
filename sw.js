"use strict";
self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
})
// importScripts('/pwa-starter/sw-toolbox.js');
// toolbox.precache(['index.html','style/style.css']);
// toolbox.router.get('/images/*', toolbox.cacheFirst);
// toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});