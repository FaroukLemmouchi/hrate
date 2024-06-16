self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('hrate-cache').then(function (cache) {
      return cache.addAll([
        '/',
        '/static/css/styles.css',
        '/static/js/app.js',
        // Add other assets you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

