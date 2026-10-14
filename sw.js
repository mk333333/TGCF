/* Service worker de la Calculadora de TGCF
   Estrategia: red primero y copia local como respaldo (así se ven las actualizaciones
   en cuanto hay conexión y la app sigue funcionando sin ella).
   Si cambias algún archivo, sube también este y aumenta VERSION. */
const VERSION = 'tgcf-v12';
const ARCHIVOS = [
  './',
  'index.html',
  'boot.js',
  'app.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png',
  'icons/favicon.svg'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(ARCHIVOS); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (claves) {
      return Promise.all(claves.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok && res.type === 'basic') {
        const copia = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copia); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (r) { return r || caches.match('index.html'); });
    })
  );
});
