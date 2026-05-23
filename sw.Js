const CACHE_NAME = 'my-app-cache-v1';
const ASSETS = [
    'index.html',
    'manifest.json',
    'icon.png'
];

// مرحلة التثبيت: حفظ الملفات في الكاش
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// مرحلة جلب البيانات: إذا لم يتوفر إنترنت، يتم جلب الملفات من الكاش
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});