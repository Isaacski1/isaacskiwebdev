const CACHE_NAME = "isaacski-webdev-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/contact.html",
  "/service.html",
  "/about.html",
  "/pricing.html",
  "/news.html",
  "/assets/css/bootstrap.min.css",
  "/assets/css/main.css",
  "/assets/js/jquery-3.7.1.min.js",
  "/assets/js/main.js",
  "/assets/img/logo/logo-1.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Service Worker: Cache opened");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log("Service Worker: Deleting old cache");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function (response) {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          if (!event.request.url.startsWith("http")) {
            return;
          }
        });
        return response;
      });
    })
  );
});
