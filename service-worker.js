const CACHE_NAME = "admin-cache-v1";
const urlsToCache = [
  "./index.html",
  "./manifest.json",
  "./styles.css",
  "./script.js",
  "https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css",
  "https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
