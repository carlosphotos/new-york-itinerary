const days = [
  { number: "10", name: "Thu", ready: true },
  { number: "11", name: "Fri" },
  { number: "12", name: "Sat" },
  { number: "13", name: "Sun" },
  { number: "14", name: "Mon" },
  { number: "15", name: "Tue" },
];

const timeline = [
  ["06:15", "JFK", "Llegada a Nueva York", "place-jfk"],
  ["~09:00", "Highbridge / hotel", "Dejar maletas y preparar el día", "place-hotel"],
  ["~10:15", "Bryant Park", "Primera pausa en Midtown", "place-bryant"],
  ["10:15–13:30", "Midtown clásico + tiendas", "Paseo editorial por el corazón de Manhattan", "place-midtown"],
  ["~13:30", "Comida ligera", "Ver opciones cercanas según el recorrido", "meal-lunch"],
  ["~14:30", "Regreso al hotel", "Traslado a Highbridge", ""],
  ["15:00", "Check-in", "Habitación y equipaje", ""],
  ["15:00–16:30", "Descanso", "Pausa antes del partido", ""],
  ["~17:00", "Yankee Stadium", "Llegada con tiempo para recorrer el estadio", "place-yankee"],
  ["19:05", "Yankees–Rockies", "Pinstripe Pass · standing room", "place-yankee"],
  ["~20:00", "Salir del estadio", "Traslado hacia Columbus Circle", ""],
  ["~20:40", "Dizzy’s", "Llegada y acceso al club", "place-dizzys"],
  ["21:00", "Sonny Rollins", "Jazz con vista a Central Park", "place-dizzys"],
  ["~22:30", "Cena", "Elegir una opción cerca de Columbus Circle", "meal-dinner"],
  ["~00:00", "Hotel", "Fin del día", ""],
];

const places = [
  ["JFK Airport", "Queens · Arrival", "Llegada y conexión hacia Manhattan. Añadiremos terminal, ruta y detalles del traslado."],
  ["Bryant Park", "Midtown · Park", "Punto de partida para el paseo clásico por Midtown y las tiendas."],
  ["Yankee Stadium", "The Bronx · Baseball", "Yankees vs. Rockies · 19:05. Pendiente: acceso, sección y boletos."],
  ["Dizzy’s Club", "Columbus Circle · Jazz", "Sonny Rollins · 21:00. Pendiente: confirmación y código de reserva."],
];

const placeDetails = {
  jfk: {
    kicker: "06:15 · Queens", title: "JFK Airport", address: "John F. Kennedy International Airport · Queens",
    photos: [["https://metroairportnews.com/wp-content/uploads/t4-terminal-window.jpg", "JFK International Airport"]],
    summary: "Punto de llegada. La ficha queda preparada para añadir terminal, vuelo y la ruta exacta al hotel cuando estén confirmados.",
    notes: ["Tener pasaporte y dirección del hotel a mano", "Confirmar terminal antes del viaje", "Abrir Maps al salir de equipaje"],
    map: "https://www.google.com/maps/search/?api=1&query=John+F+Kennedy+International+Airport"
  },
  hotel: {
    kicker: "~09:00 · Highbridge", title: "Hotel / Highbridge", address: "Highbridge · New York",
    photos: [["./assets/nyc-skyline.png", "Identidad visual de Nueva York"]],
    summary: "Primera parada para dejar maletas y, más tarde, hacer check-in y descansar. Falta añadir el nombre y la dirección exacta del hotel.",
    notes: ["Dejar maletas ~09:00", "Regresar ~14:30", "Check-in 15:00"],
    map: "https://www.google.com/maps/search/?api=1&query=Highbridge+New+York"
  },
  bryant: {
    kicker: "~10:15 · Midtown", title: "Bryant Park", address: "Bryant Park · 6th Ave & 42nd St",
    photos: [["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/New-York_-_Bryant_Park.jpg/960px-New-York_-_Bryant_Park.jpg", "Bryant Park y la New York Public Library"]],
    summary: "Una pausa verde entre la biblioteca y los edificios de Midtown. Es el punto de partida natural del paseo de la mañana.",
    notes: ["Recorrer el jardín central", "Ver la fachada de la NYPL", "Elegir aquí la dirección del paseo"],
    map: "https://www.google.com/maps/search/?api=1&query=Bryant+Park+New+York"
  },
  midtown: {
    kicker: "10:15–13:30 · Walking route", title: "Midtown clásico", address: "Bryant Park → Grand Central → Fifth Avenue → Rockefeller Center",
    photos: [["https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/IGrand_Central_Terminal%2C_71-105_E._42nd_St._New_York.jpg/960px-IGrand_Central_Terminal%2C_71-105_E._42nd_St._New_York.jpg", "Grand Central y el Chrysler Building"], ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/New-York_-_Bryant_Park.jpg/960px-New-York_-_Bryant_Park.jpg", "Bryant Park y la biblioteca"]],
    summary: "Un recorrido compacto por la arquitectura clásica de Midtown, con tiempo flexible para entrar a tiendas sobre Fifth Avenue.",
    notes: ["Bryant Park y New York Public Library", "Grand Central y Chrysler Building", "St. Patrick’s Cathedral", "Rockefeller Center y tiendas de Fifth Avenue"],
    routeImage: "./assets/midtown-route.svg",
    map: "https://www.google.com/maps/dir/?api=1&origin=Bryant+Park%2C+New+York&destination=Rockefeller+Center%2C+New+York&travelmode=walking&waypoints=Grand+Central+Terminal%2C+New+York%7CSt.+Patrick%27s+Cathedral%2C+New+York"
  },
  yankee: {
    kicker: "19:05 · The Bronx", title: "Yankee Stadium", address: "1 E 161 St · Bronx",
    photos: [["https://media.timeout.com/images/105745099/image.jpg", "Exterior de Yankee Stadium"]],
    summary: "Yankees–Rockies. Sus boletos son Pinstripe Pass: entrada general de pie, sin asiento asignado, con la primera bebida incluida.",
    notes: ["Llegar ~17:00 para recorrer el estadio", "Buscar zonas sociales y espacios standing room", "Canjear la bebida mostrando el boleto", "No ocupar asientos ni lugares SRO asignados"],
    callout: "PINSTRIPE PASS · Standing room only · Primera bebida incluida",
    map: "https://www.google.com/maps/search/?api=1&query=Yankee+Stadium+1+E+161+St+Bronx",
    official: "https://www.mlb.com/yankees/tickets/specials/pinstripe-pass"
  },
  dizzys: {
    kicker: "21:00 · Columbus Circle", title: "Dizzy’s Club", address: "Frederick P. Rose Hall · Broadway at 60th St",
    photos: [["./assets/nyc-skyline.png", "Vista de Manhattan, identidad del viaje"]],
    summary: "Club íntimo de Jazz at Lincoln Center con vistas panorámicas de Central Park y del skyline. Llegada prevista ~20:40.",
    notes: ["Set de las 21:00", "Reservas recomendadas", "Confirmar acceso y código de reserva"],
    map: "https://www.google.com/maps/search/?api=1&query=Dizzy%27s+Club+Broadway+at+60th+Street+New+York",
    official: "https://jazz.org/dizzys/"
  }
};

const mealOptions = {
  lunch: {
    kicker: "~13:30 · Midtown",
    title: "Comida ligera",
    intro: "Tres opciones flexibles según dónde termine el paseo. Los tiempos a pie son aproximados desde Bryant Park.",
    options: [
      ["Ole & Steen", "Danish bakery", "1–3 min", "80 W 40th St · junto a Bryant Park", "Panadería danesa tranquila, con café y espacio para sentarse antes de volver al hotel.", "Smoked salmon roll, zucchini toastie o ensalada; para compartir, un cardamom bun.", "https://oleandsteen.us/store/132030-bryant-park", "Ole %26 Steen Bryant Park 80 W 40th St New York"],
      ["The Kati Roll Company", "Indian street food", "3–5 min", "49 W 39th St · detrás de Bryant Park", "Rollos indios calientes, rápidos y fáciles de comer durante el recorrido.", "Chicken tikka o aloo masala roll. Con roti integral queda más ligero.", "https://www.thekatirollcompany.com/our-food/", "The Kati Roll Company 49 W 39th St New York"],
      ["Los Tacos No. 1", "Tijuana-style tacos", "8–12 min", "229 W 43rd St · Times Square", "Taquería rápida que funciona especialmente bien si el paseo termina hacia Times Square.", "Dos tacos por persona: adobada, carne asada o nopal; también hay aguas frescas.", "https://www.lostacos1.com/menu/food-drinks/", "Los Tacos No. 1 229 W 43rd St New York"]
    ]
  },
  dinner: {
    kicker: "~22:30 · Columbus Circle",
    title: "Cena",
    intro: "Opciones cerca de Dizzy’s para decidir según la hora de salida, el hambre y el ambiente que prefieran.",
    options: [
      ["P.J. Clarke’s", "Old New York tavern", "4–6 min", "44 W 63rd St · Lincoln Square", "Taberna neoyorquina clásica, cómoda para cerrar la noche con una cena completa.", "Hamburguesa, chicken paillard o ensalada mediterránea. Los jueves suele cerrar a medianoche.", "https://pjclarkes.com/menu/lincoln-square/", "P.J. Clarke's 44 W 63rd St New York"],
      ["Black Iron Burger", "Burger bar", "10–12 min", "250 W 54th St · Theatre District", "La opción original sigue disponible: informal, directa y abierta hasta medianoche.", "Black Iron Burger o una versión pequeña, con papas o aros de cebolla para compartir.", "https://www.blackironburger.com/locations/", "Black Iron Burger 250 W 54th St New York"],
      ["The Smith", "American brasserie", "5–7 min", "1900 Broadway · 63rd St", "Brasserie animada frente a Lincoln Center, con menú amplio y mesas para sentarse con calma.", "Mac & cheese para compartir, rigatoni alla vodka, ensalada o burger. Los jueves suele cerrar a las 23:00.", "https://thesmithrestaurant.com/location/lincoln-square/", "The Smith Lincoln Square 1900 Broadway New York"],
      ["Empanada Mama", "Latin · late night", "15–18 min", "765 9th Ave · Hell’s Kitchen", "La alternativa informal si el concierto termina tarde: muchas empanadas y servicio orientado a la noche.", "Dos o tres empanadas por persona; combinar una de carne o pollo con una vegetariana.", "https://www.empanadamama.com/hells-kitchen-menu", "Empanada Mama 765 9th Ave New York"]
    ]
  }
};

const app = document.querySelector("#app");
const navItems = [...document.querySelectorAll(".nav-item")];

function dayStrip() {
  return `<div class="day-strip" aria-label="Días del viaje">${days.map((day, i) => `
    <button class="day-chip ${i === 0 ? "active" : ""}" data-day="${i}" ${day.ready ? "" : "disabled"} aria-label="${day.name} ${day.number}">
      <span class="day-number">${day.number}</span><span class="day-name">${day.name}</span>
    </button>`).join("")}</div>`;
}

function homeView() {
  return `<div class="fade-in">
    <section class="hero">
      <img class="skyline" src="./assets/nyc-skyline.png" alt="Ilustración panorámica del skyline de Nueva York">
      <div class="hero-copy"><h1>NEW YORK</h1><p class="dates">September 10–15 · 2026</p></div>
    </section>
    <section class="section">
      <p class="section-kicker">Today · Day one</p>
      <h2 class="section-title">Your day<br>in New York</h2>
      <p class="section-note">Arrival · Midtown · Baseball · Jazz</p>
      <article class="today-card">
        <p class="today-date">Thursday, September 10</p>
        <p class="today-theme">New York begins here</p>
        <p class="next-label">First stop</p>
        <div class="next-row"><span class="next-time">06:15</span><span class="next-place">JFK</span><span class="next-detail">Arrival in New York</span></div>
        <button class="text-button" data-action="day-one">View today’s itinerary →</button>
      </article>
    </section>
    ${dayStrip()}
  </div>`;
}

function itineraryView() {
  return `<div class="fade-in">
    <header class="page-header">
      <button class="back" data-action="home">← New York</button>
      <p class="section-kicker">Day one · Thursday</p>
      <h1>September 10</h1>
      <p class="subtitle">Arrival · Midtown · Baseball · Jazz</p>
      <img class="mini-skyline" src="./assets/nyc-skyline.png" alt="">
    </header>
    <ol class="timeline">${timeline.map(([time, title, detail, kind]) => `
      <li class="timeline-item ${kind.startsWith("place-") ? "featured" : ""}">
        <time class="timeline-time">${time}</time><span class="timeline-line" aria-hidden="true"></span>
        <div class="timeline-content"><h2>${title}</h2><p>${detail}</p>${kind.startsWith("meal-") ? `<button data-meal="${kind.replace("meal-", "")}">See nearby options →</button>` : kind.startsWith("place-") ? `<button data-place="${kind.replace("place-", "")}">View place →</button>` : ""}</div>
      </li>`).join("")}</ol>
  </div>`;
}

function mealView(meal = "lunch") {
  const data = mealOptions[meal] || mealOptions.lunch;
  return `<div class="fade-in">
    <header class="page-header">
      <button class="back back-prominent" data-action="itinerary">← Volver al itinerario</button>
      <p class="section-kicker">${data.kicker}</p>
      <h1>${data.title}</h1>
      <p class="section-note">${data.intro}</p>
    </header>
    <section class="cards food-options">${data.options.map((item, index) => `
      <article class="food-card">
        <div class="food-number">0${index + 1}</div>
        <p class="food-type">${item[1]} · ${item[2]}</p>
        <h2>${item[0]}</h2>
        <p class="food-location">${item[3]}</p>
        <p>${item[4]}</p>
        <div class="order-note"><span>What to order</span><p>${item[5]}</p></div>
        <div class="food-actions">
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item[7])}" target="_blank" rel="noopener">Open in Maps ↗</a>
          <a href="${item[6]}" target="_blank" rel="noopener">Menu ↗</a>
        </div>
      </article>`).join("")}
    </section>
  </div>`;
}

function placeDetailView(id) {
  const place = placeDetails[id] || placeDetails.bryant;
  return `<div class="fade-in place-detail">
    <header class="page-header detail-header">
      <button class="back back-prominent" data-action="itinerary">← Volver al itinerario</button>
      <p class="section-kicker">${place.kicker}</p>
      <h1>${place.title}</h1>
      <p class="detail-address">${place.address}</p>
    </header>
    <div class="photo-scroll">${place.photos.map(([src, alt]) => `<img src="${src}" alt="${alt}" loading="lazy">`).join("")}</div>
    <section class="detail-body">
      <p class="detail-summary">${place.summary}</p>
      ${place.callout ? `<div class="ticket-callout"><span>Your ticket</span><strong>${place.callout}</strong></div>` : ""}
      <div class="detail-list"><p class="section-kicker">Keep in mind</p><ul>${place.notes.map(note => `<li>${note}</li>`).join("")}</ul></div>
      ${place.routeImage ? `<a class="route-card" href="${place.map}" target="_blank" rel="noopener"><img src="${place.routeImage}" alt="Recorrido a pie por Midtown"><span>Open live route in Google Maps ↗</span></a>` : ""}
      <div class="detail-actions"><a href="${place.map}" target="_blank" rel="noopener">Open in Maps ↗</a>${place.official ? `<a href="${place.official}" target="_blank" rel="noopener">Official info ↗</a>` : ""}</div>
    </section>
    <button class="return-itinerary" data-action="itinerary">← Regresar al Día 1</button>
  </div>`;
}

function placesView() {
  const ids = ["jfk", "bryant", "yankee", "dizzys"];
  return `<div class="fade-in"><header class="page-header"><p class="section-kicker">Saved for the trip</p><h1>Places</h1><p class="section-note">Toca cualquier lugar para ver su información práctica.</p></header>
    <section class="cards">${places.map(([name, meta, copy], index) => `<button class="place-card place-card-button" data-place="${ids[index]}"><h2>${name}</h2><div class="place-meta">${meta.split(" · ").map(x => `<span class="tag">${x}</span>`).join("")}</div><p>${copy}</p><span class="card-arrow">View place →</span></button>`).join("")}</section></div>`;
}

function infoView() {
  return `<div class="fade-in"><header class="page-header"><p class="section-kicker">Travel notes</p><h1>Info</h1><p class="section-note">La información esencial, disponible incluso sin conexión.</p></header>
    <section class="cards">
      <article class="info-card"><h2>Hotel</h2><p class="placeholder">Pendiente de añadir dirección, contacto y número de reserva.</p></article>
      <article class="info-card"><h2>Flights</h2><p>Arrival · JFK · September 10 · 06:15</p><p class="placeholder">Pendiente de añadir aerolínea, vuelo y terminal.</p></article>
      <article class="info-card"><h2>Getting around</h2><p>AirTrain, subway y OMNY. Añadiremos las rutas confirmadas y alternativas.</p></article>
      <article class="info-card"><h2>Reservations</h2><p>Yankees–Rockies · 19:05<br>Sonny Rollins at Dizzy’s · 21:00</p></article>
      <article class="info-card"><h2>Emergency</h2><p class="placeholder">Pendiente de añadir contactos, seguro y datos útiles.</p></article>
    </section></div>`;
}

const views = { home: homeView, itinerary: itineraryView, meal: () => mealView(sessionStorage.getItem("selectedMeal") || "lunch"), place: () => placeDetailView(sessionStorage.getItem("selectedPlace") || "bryant"), places: placesView, info: infoView };

function render(route = "home") {
  const safeRoute = views[route] ? route : "home";
  app.innerHTML = views[safeRoute]();
  navItems.forEach(item => item.classList.toggle("active", item.dataset.route === safeRoute || (["itinerary", "meal", "place"].includes(safeRoute) && item.dataset.route === "itinerary")));
  history.replaceState(null, "", `#${safeRoute}`);
  window.scrollTo({ top: 0, behavior: "instant" });
  app.focus({ preventScroll: true });
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) render(routeButton.dataset.route);
  const action = event.target.closest("[data-action]")?.dataset.action;
  const meal = event.target.closest("[data-meal]")?.dataset.meal;
  const place = event.target.closest("[data-place]")?.dataset.place;
  if (meal) { sessionStorage.setItem("selectedMeal", meal); render("meal"); }
  if (place) { sessionStorage.setItem("selectedPlace", place); render("place"); }
  if (action === "day-one") render("itinerary");
  if (action === "home") render("home");
  if (action === "itinerary") render("itinerary");
  if (action === "places") render("places");
});

window.addEventListener("hashchange", () => render(location.hash.slice(1)));
render(location.hash.slice(1) || "home");

let installPrompt;
const installButton = document.querySelector("#installButton");
window.addEventListener("beforeinstallprompt", event => { event.preventDefault(); installPrompt = event; installButton.hidden = false; });
installButton.addEventListener("click", async () => { if (!installPrompt) return; installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; installButton.hidden = true; });

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
