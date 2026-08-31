const CACHE = "new-york-guide-v17";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/amnh-dinosaurs.jpg",
  "./assets/amnh-gilder.jpg",
  "./assets/amnh-human-origins.jpg",
  "./assets/amnh-meteorite.jpg",
  "./assets/anytime-kitchen.jpg",
  "./assets/audit-bethesda-terrace.jpg",
  "./assets/audit-bowling-green.jpg",
  "./assets/audit-canal-street.jpg",
  "./assets/audit-charging-bull.jpg",
  "./assets/audit-empire-state.jpg",
  "./assets/audit-mott-street.jpg",
  "./assets/audit-smallpox-hospital.jpg",
  "./assets/audit-washington-street-dumbo.jpg",
  "./assets/bedford-avenue.jpg",
  "./assets/black-fox-coffee.jpg",
  "./assets/bow-bridge.jpg",
  "./assets/brooklyn-bowl.jpg",
  "./assets/brooklyn-bridge.jpg",
  "./assets/brooklyn-bridge-park.jpg",
  "./assets/bryant-park.jpg",
  "./assets/central-park-mall.jpg",
  "./assets/central-park.jpg",
  "./assets/chelsea-market-interior.jpg",
  "./assets/chinatown.jpg",
  "./assets/columbus-park.jpg",
  "./assets/coney-island.jpg",
  "./assets/dizzys-club.jpg",
  "./assets/do-the-right-thing-way.jpg",
  "./assets/domino-park-correct.jpg",
  "./assets/doyers-street.jpg",
  "./assets/earwax-records.jpg",
  "./assets/face-records.jpg",
  "./assets/federal-hall.jpg",
  "./assets/four-freedoms-park.jpg",
  "./assets/fulton-ferry-landing.jpg",
  "./assets/gantry-blue-hour.jpg",
  "./assets/gantry-plaza.jpg",
  "./assets/gantry.jpg",
  "./assets/grace-street.jpg",
  "./assets/herald-square.jpg",
  "./assets/high-line-10th-square.jpg",
  "./assets/high-line-gansevoort.jpg",
  "./assets/high-line-tracks.jpg",
  "./assets/high-line.jpg",
  "./assets/highbridge-hotel.jpg",
  "./assets/janes-carousel.jpg",
  "./assets/jfk-terminal.jpg",
  "./assets/koreatown.jpg",
  "./assets/lego-fifth-avenue.jpg",
  "./assets/little-island.jpg",
  "./assets/macys-herald-square.jpg",
  "./assets/marsha-p-johnson.jpg",
  "./assets/meatpacking.jpg",
  "./assets/memorial.jpg",
  "./assets/met-american-wing.jpg",
  "./assets/met-dendur.jpg",
  "./assets/met-egyptian-galleries.jpg",
  "./assets/met-european-paintings.jpg",
  "./assets/met-greek-roman.jpg",
  "./assets/midtown-grand-central.jpg",
  "./assets/midtown-route.svg",
  "./assets/morgan-library.jpg",
  "./assets/music-hall-williamsburg.jpg",
  "./assets/new-york-or-nowhere.jpg",
  "./assets/nintendo-ny.jpg",
  "./assets/nolita.webp",
  "./assets/nyc-skyline.png",
  "./assets/nypl.jpg",
  "./assets/nyse.jpg",
  "./assets/oculus.jpg",
  "./assets/pebble-beach.jpg",
  "./assets/pell-street.jpg",
  "./assets/pier-17.jpg",
  "./assets/printemps-new-york.jpg",
  "./assets/rockefeller-center.jpg",
  "./assets/roosevelt-island.jpg",
  "./assets/rose-center.jpg",
  "./assets/seaport-fulton.webp",
  "./assets/seaport.jpg",
  "./assets/soho-greene-street.jpg",
  "./assets/square-diner.jpg",
  "./assets/st-patricks.jpg",
  "./assets/supreme.jpg",
  "./assets/the-battery.jpg",
  "./assets/tin-building.jpg",
  "./assets/transmitter-park.jpg",
  "./assets/trinity-church.jpg",
  "./assets/uniqlo-fifth-avenue.jpg",
  "./assets/vessel.jpg",
  "./assets/west-village.jpg",
  "./assets/west-street-greenpoint.webp",
  "./assets/whitney.jpg",
  "./assets/williamsburg.jpg",
  "./assets/woorijip.jpg",
  "./assets/yankee-stadium.jpg",
  "./assets/yoseka.jpg",
  "./assets/icon-180.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

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
