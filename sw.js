const CACHE = "new-york-guide-v9";
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./assets/nyc-skyline.png", "./assets/midtown-route.svg", "./assets/jfk-terminal.jpg", "./assets/highbridge-hotel.jpg", "./assets/bryant-park.jpg", "./assets/midtown-grand-central.jpg", "./assets/yankee-stadium.jpg", "./assets/dizzys-club.jpg", "./assets/battery.jpg", "./assets/financial-district.jpg", "./assets/seaport.jpg", "./assets/oculus.jpg", "./assets/memorial.jpg", "./assets/chinatown.jpg", "./assets/met.jpg", "./assets/gantry.jpg", "./assets/brooklyn-bridge.jpg", "./assets/williamsburg.jpg", "./assets/icon-180.png", "./assets/icon-192.png", "./assets/icon-512.png"];

self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response;
  }).catch(() => event.request.mode === "navigate" ? caches.match("./index.html") : Response.error())));
});
