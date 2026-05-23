const CACHE_NAME = 'compta-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// تثبيت الكاش
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// تفعيل العمل بدون إنترنت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
