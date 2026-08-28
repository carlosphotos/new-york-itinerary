const CACHE = "new-york-guide-v13";
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./assets/nyc-skyline.png", "./assets/midtown-route.svg", "./assets/jfk-terminal.jpg", "./assets/highbridge-hotel.jpg", "./assets/bryant-park.jpg", "./assets/midtown-grand-central.jpg", "./assets/yankee-stadium.jpg", "./assets/dizzys-club.jpg", "./assets/battery.jpg", "./assets/financial-district.jpg", "./assets/seaport.jpg", "./assets/oculus.jpg", "./assets/memorial.jpg", "./assets/chinatown.jpg", "./assets/met.jpg", "./assets/gantry.jpg", "./assets/brooklyn-bridge.jpg", "./assets/williamsburg.jpg", "./assets/greenpoint.jpg", "./assets/central-park.jpg", "./assets/bow-bridge.jpg", "./assets/domino-park.jpg", "./assets/high-line.jpg", "./assets/chelsea-market.jpg", "./assets/icon-180.png", "./assets/icon-192.png", "./assets/icon-512.png"];

self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put("./index.html", copy));
      return response;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  if (url.origin !== self.location.origin) return;
  const isCoreFile = /\.(?:js|css|webmanifest)$/.test(url.pathname);
  if (isCoreFile) {
    event.respondWith(fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  })));
});
