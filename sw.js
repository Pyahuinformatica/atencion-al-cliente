// sw.js - Versión ultra simple para OFFLINE
const CACHE_NAME = 'pyahu-offline';
const ARCHIVOS = [
  '/paraguay/index.html',
  'printer-page-imagem/imagen-extra-01.png',  // Imagen del regalo offline
  'printer-page-imagem/logo-imagen-01.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});