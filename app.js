const days = [
  { number: "10", name: "Thu", ready: true },
  { number: "11", name: "Fri" },
  { number: "12", name: "Sat" },
  { number: "13", name: "Sun" },
  { number: "14", name: "Mon" },
  { number: "15", name: "Tue" },
];

const timeline = [
  ["06:15", "JFK", "Llegada a Nueva York", "place"],
  ["~09:00", "Highbridge / hotel", "Dejar maletas y preparar el día", "place"],
  ["~10:15", "Bryant Park", "Primera pausa en Midtown", "place"],
  ["10:15–13:30", "Midtown clásico + tiendas", "Paseo editorial por el corazón de Manhattan", "featured"],
  ["~13:30", "Comida ligera", "Ver opciones cercanas según el recorrido", "meal-lunch"],
  ["~14:30", "Regreso al hotel", "Traslado a Highbridge", ""],
  ["15:00", "Check-in", "Habitación y equipaje", ""],
  ["15:00–16:30", "Descanso", "Pausa antes del partido", ""],
  ["~17:00", "Yankee Stadium", "Llegada con tiempo para recorrer el estadio", "place"],
  ["19:05", "Yankees–Rockies", "Primer lanzamiento", "featured"],
  ["~20:00", "Salir del estadio", "Traslado hacia Columbus Circle", ""],
  ["~20:40", "Dizzy’s", "Llegada y acceso al club", "place"],
  ["21:00", "Sonny Rollins", "Jazz con vista a Central Park", "featured"],
  ["~22:30", "Cena", "Elegir una opción cerca de Columbus Circle", "meal-dinner"],
  ["~00:00", "Hotel", "Fin del día", ""],
];

const places = [
  ["JFK Airport", "Queens · Arrival", "Llegada y conexión hacia Manhattan. Añadiremos terminal, ruta y detalles del traslado."],
  ["Bryant Park", "Midtown · Park", "Punto de partida para el paseo clásico por Midtown y las tiendas."],
  ["Yankee Stadium", "The Bronx · Baseball", "Yankees vs. Rockies · 19:05. Pendiente: acceso, sección y boletos."],
  ["Dizzy’s Club", "Columbus Circle · Jazz", "Sonny Rollins · 21:00. Pendiente: confirmación y código de reserva."],
];

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
      <li class="timeline-item ${kind === "featured" ? "featured" : ""}">
        <time class="timeline-time">${time}</time><span class="timeline-line" aria-hidden="true"></span>
        <div class="timeline-content"><h2>${title}</h2><p>${detail}</p>${kind.startsWith("meal-") ? `<button data-meal="${kind.replace("meal-", "")}">See nearby options →</button>` : kind === "place" ? `<button data-action="places">View place →</button>` : ""}</div>
      </li>`).join("")}</ol>
  </div>`;
}

function mealView(meal = "lunch") {
  const data = mealOptions[meal] || mealOptions.lunch;
  return `<div class="fade-in">
    <header class="page-header">
      <button class="back" data-action="itinerary">← Day one</button>
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

function placesView() {
  return `<div class="fade-in"><header class="page-header"><p class="section-kicker">Saved for the trip</p><h1>Places</h1><p class="section-note">Direcciones, reservas y notas prácticas vivirán aquí.</p></header>
    <section class="cards">${places.map(([name, meta, copy]) => `<article class="place-card"><h2>${name}</h2><div class="place-meta">${meta.split(" · ").map(x => `<span class="tag">${x}</span>`).join("")}</div><p>${copy}</p></article>`).join("")}</section></div>`;
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

const views = { home: homeView, itinerary: itineraryView, meal: () => mealView(sessionStorage.getItem("selectedMeal") || "lunch"), places: placesView, info: infoView };

function render(route = "home") {
  const safeRoute = views[route] ? route : "home";
  app.innerHTML = views[safeRoute]();
  navItems.forEach(item => item.classList.toggle("active", item.dataset.route === safeRoute || (["itinerary", "meal"].includes(safeRoute) && item.dataset.route === "itinerary")));
  history.replaceState(null, "", `#${safeRoute}`);
  window.scrollTo({ top: 0, behavior: "instant" });
  app.focus({ preventScroll: true });
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) render(routeButton.dataset.route);
  const action = event.target.closest("[data-action]")?.dataset.action;
  const meal = event.target.closest("[data-meal]")?.dataset.meal;
  if (meal) { sessionStorage.setItem("selectedMeal", meal); render("meal"); }
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
