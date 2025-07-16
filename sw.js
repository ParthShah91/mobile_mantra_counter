self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('counter-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './sw.js'
        // Add icon files here if needed
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
