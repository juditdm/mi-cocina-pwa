const CACHE_NAME = "mi-cocina-v3";

const ARCHIVOS_BASE = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        ARCHIVOS_BASE.map(archivo => cache.add(archivo))
      );
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys().then(nombres => {
      return Promise.all(
        nombres
          .filter(nombre => nombre !== CACHE_NAME)
          .map(nombre => caches.delete(nombre))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", evento => {
  if (evento.request.method !== "GET") return;

  evento.respondWith(
    caches.match(evento.request).then(respuestaCache => {
      return (
        respuestaCache ||
        fetch(evento.request)
          .then(respuestaRed => {
            const copia = respuestaRed.clone();

            caches.open(CACHE_NAME).then(cache => {
              cache.put(evento.request, copia);
            });

            return respuestaRed;
          })
          .catch(() => {
            if (evento.request.mode === "navigate") {
              return caches.match("./index.html");
            }
          })
      );
    })
  );
});