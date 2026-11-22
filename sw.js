const CACHE_NAME = "palabra-v3-zh-cn";
const VERSIONED_ASSETS = [
  "./?v=20261122-cn3",
  "./index.html?v=20261122-cn3",
  "./manifest.json?v=20261122-cn3",
  "./icon.svg",
  "./data/meta.json?v=20261122-cn3",
  "./data/a1.json?v=20261122-cn3",
  "./data/a2.json?v=20261122-cn3",
  "./data/b1.json?v=20261122-cn3",
  "./data/b2.json?v=20261122-cn3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(VERSIONED_ASSETS))
      .catch(() => caches.open(CACHE_NAME))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isPage = request.mode === "navigate" ||
    url.pathname.endsWith("/index.html") ||
    url.pathname.endsWith("/palabra/");

  const isVocabulary = /\/data\/(a1|a2|b1|b2|meta)\.json$/.test(url.pathname);

  if (isPage || isVocabulary) {
    event.respondWith(
      fetch(new Request(request, { cache: "no-store" }))
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          if (isPage) return caches.match("./index.html?v=20261122-cn3");
          throw new Error("离线词库不可用");
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request))
  );
});
