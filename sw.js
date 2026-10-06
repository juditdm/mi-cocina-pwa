const CACHE = "mi-cocina-pwa-v1";
const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS))
  );

  self.skipWaiting();
});

self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys().then(claves =>
      Promise.all(
        claves
          .filter(clave => clave !== CACHE)
          .map(clave => caches.delete(clave))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", evento => {
  evento.respondWith(
    caches.match(evento.request).then(respuesta => {
      return respuesta || fetch(evento.request);
    })
  );
});