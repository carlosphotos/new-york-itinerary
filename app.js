const APP_VERSION = "18";

const tripDays = [
  {
    number: "10", name: "Thu", label: "Thursday", month: "September", theme: "JFK · Midtown clásico · Yankees · Dizzy’s",
    timeline: [
      ["06:15", "JFK", "Llegada a Nueva York", "place-jfk"], ["~09:00", "Highbridge Hotel", "Dejar maletas y preparar el día", "place-hotel"],
      ["~10:15", "Bryant Park", "Primera pausa en Midtown", "place-bryant"], ["10:15–12:40", "Midtown clásico", "Bryant Park · NYPL · Grand Central · Chrysler · St. Patrick’s · Rockefeller", "place-midtown"],
      ["12:40–13:30", "Nintendo + LEGO + UNIQLO", "Tres tiendas prioritarias alrededor de Rockefeller y Fifth Avenue", "place-midtownstores"],
      ["~13:30", "Comida ligera", "Opciones cercanas según el recorrido", "meal-day1-lunch"], ["~14:30", "Regreso al hotel", "Traslado a Highbridge", ""],
      ["15:00", "Check-in", "Habitación y equipaje", ""], ["15:00–16:30", "Descanso", "Pausa antes del partido", ""],
      ["~17:00", "Yankee Stadium", "Llegar temprano para recorrer y asegurar el giveaway", "place-yankee"], ["19:05", "Yankees–Rockies", "Pinstripe Pass · gorro Yankees + NYON para los primeros 18,000", "place-yankee"],
      ["~20:00", "Salir del estadio", "Traslado hacia Columbus Circle", ""], ["~20:40", "Dizzy’s", "Llegada y acceso al club", "place-dizzys"],
      ["21:00", "Saxophone Colossus", "Celebrating Sonny Rollins · Dizzy’s Club", "place-dizzys"], ["~22:30", "Cena tardía", "Opciones cerca de Columbus Circle", "meal-day1-dinner"], ["~00:00", "Hotel", "Fin del día", ""]
    ]
  },
  {
    number: "11", name: "Fri", label: "Friday", month: "September", theme: "Lower Manhattan · 9/11 · Chinatown · Subway Series",
    timeline: [
      ["08:30", "Desayuno", "Inicio tranquilo", ""], ["09:30", "Lower Manhattan", "Salida hacia The Battery", ""],
      ["10:30", "The Battery", "Waterfront · Estatua de la Libertad y Ellis Island", ""], ["11:00", "Bowling Green + Charging Bull", "Paseo breve", ""],
      ["11:20–11:50", "Financial District", "Wall Street · NYSE · Federal Hall · Trinity Church", ""],
      ["11:50–12:15", "Printemps New York", "One Wall Street · Red Room · diseño y moda", "place-printemps"],
      ["Opcional", "Square Diner o Black Fox Coffee", "Diner clásico visto en Daredevil vs. café rápido; elegir solo si el horario lo permite", "optional"],
      ["12:15", "Stone Street", "Calle histórica", ""], ["12:35–13:20", "South Street Seaport + Pier 17", "Waterfront · vistas del Brooklyn Bridge", ""],
      ["13:40", "Oculus", "Arquitectura y vistazo a tiendas", ""],
      ["14:10–14:40", "9/11 Memorial", "North Pool · South Pool · Survivor Tree · One WTC", ""],
      ["~15:15", "Centre 360", "Prioridad si conseguimos reserva; horario flexible", "optional"],
      ["15:45–16:05", "Canal Street + Chinatown", "Canal · Mott · Pell · Doyers Street", "place-chinatown"],
      ["~16:05", "Comida en Chinatown", "Uncle Lou vs. Wo Hop · ajustar según Centre 360", "meal-day2-lunch"],
      ["~16:30", "Supreme + New York or Nowhere", "Opcional si el tiempo y Centre 360 lo permiten", "optional"],
      ["~16:45", "Regreso al Bronx", "Traslado al hotel", ""], ["~17:30", "Hotel / cambio rápido", "Dejar compras y prepararse", ""],
      ["18:00", "Yankee Stadium", "Llegada al estadio", "place-yankeemets"], ["19:05", "Yankees vs. Mets", "Section 421 · Row 14 · Seats 20–21", "place-yankeemets"],
      ["~22:30", "Cena casual", "Según la hora de salida", ""], ["~23:30", "Highbridge Hotel", "Fin del día", "place-hotel"]
    ]
  },
  {
    number: "12", name: "Sat", label: "Saturday", month: "September", theme: "Central Park · The Met · Roosevelt Island · Gantry Plaza",
    timeline: [
      ["09:00", "Desayuno", "Inicio del día", ""], ["10:00–10:25", "The Mall", "Paseo arbolado hacia Bethesda", "place-centralpark"],
      ["10:25–10:55", "Bethesda Terrace + Fountain", "Arcadas, fuente y vista de The Lake", "place-centralpark"],
      ["10:55–11:25", "Bow Bridge + The Lake", "Cruce, fotografías y regreso hacia el este", "place-centralpark"],
      ["11:25–11:45", "Hacia The Met", "Salir por el lado este del parque", ""],
      ["12:15–12:55", "The Met · Egipto", "Templo de Dendur y galerías egipcias", "place-met"],
      ["12:55–13:30", "The Met · Grecia y Roma", "Escultura y patio neoclásico", "place-met"],
      ["13:30–14:15", "The Met · Pintura europea", "Elegir artistas y salas prioritarias", "place-met"],
      ["14:15–15:00", "The Met · American Wing", "Patio, pintura y artes decorativas", "place-met"],
      ["15:00–15:15", "The Met · margen", "Tienda, descanso o una sala pendiente", "place-met"],
      ["15:15–15:40", "Upper East Side", "Fifth Ave · Madison Ave · calles residenciales", ""],
      ["15:40–16:05", "Lexington Candy Shop", "Coca-Cola con jarabe y seltzer o malteada", ""],
      ["16:05–16:45", "Comida casual", "Home Kitchen · Sojourn Social · 787 Coffee opcional", "meal-day3-lunch"],
      ["16:45–17:30", "Hacia Roosevelt Island Tram", "Traslado", ""], ["~17:30", "Roosevelt Island Tram", "Cruce desde Manhattan", ""],
      ["~17:50–18:10", "Roosevelt Island waterfront", "Caminar hacia el extremo sur", "place-roosevelt"],
      ["18:10–18:25", "Smallpox Hospital Ruins", "Vista exterior de las ruinas", "place-roosevelt"],
      ["18:25–19:00", "Four Freedoms Park", "Recorrer el memorial antes del cierre", "place-roosevelt"],
      ["~19:00–19:45", "Hacia Long Island City", "Traslado", ""], ["~20:00–20:45", "Gantry Plaza + Pepsi-Cola Sign", "Skyline y letrero iluminados de noche", "place-gantry"],
      ["~21:00", "Cena en Long Island City", "Café Henri como primera opción", "meal-day3-dinner"], ["~22:30", "Highbridge Hotel", "Regreso", "place-hotel"]
    ]
  },
  {
    number: "13", name: "Sun", label: "Sunday", month: "September", theme: "Brooklyn Bridge · DUMBO · Williamsburg · Greenpoint",
    timeline: [
      ["08:30", "Desayuno", "Inicio del día", ""], ["09:15", "Hacia Brooklyn Bridge", "Acceso desde Manhattan", ""],
      ["10:00–10:45", "Brooklyn Bridge", "Cruce completo hacia Brooklyn", ""],
      ["10:45–11:05", "Washington Street", "Vista clásica del Manhattan Bridge", "place-dumbo"],
      ["11:05–11:30", "Brooklyn Bridge Park", "Paseo junto al East River", "place-dumbo"],
      ["11:30–11:50", "Pebble Beach", "Waterfront y skyline de Manhattan", "place-dumbo"],
      ["11:50–12:15", "Fulton Ferry Landing", "Solo visita; aquí todavía no se toma el ferry", "place-dumbo"],
      ["12:15–13:15", "Comida en DUMBO", "Pizza como primera elección", "meal-day4-lunch"],
      ["Opcional", "Bed-Stuy · Do the Right Thing", "Desvío de 60–90 min por Stuyvesant Ave; retrasaría el ferry y recortaría cafés/tiendas", "optional"],
      ["~13:20", "NYC Ferry", "Ahora sí: DUMBO → Williamsburg; revisar ruta A/B días antes", "place-ferry"],
      ["~14:00–14:35", "Domino Park", "Elementos industriales y vistas del East River", "place-williamsburg"],
      ["14:35–15:10", "Bedford Avenue", "Tiendas, cafés y calles del barrio", "place-williamsburg"],
      ["15:10–15:30", "Marsha P. Johnson State Park", "Antiguo muelle y waterfront", "place-williamsburg"],
      ["15:30–15:50", "Discos + circuito musical", "Earwax · Face Records · Music Hall · Brooklyn Bowl", "optional"],
      ["15:50–16:00", "Qahwah House", "Café opcional si no hubo parada en DUMBO", "optional"], ["~16:00–16:30", "Hacia Greenpoint", "Caminar · metro G · ferry", ""],
      ["16:30–17:30", "Yoseka Stationery", "63 West St · una hora para explorar y probar", ""],
      ["17:30–18:00", "West Street", "Tiendas y arquitectura industrial", "place-greenpoint"],
      ["18:00–18:35", "WNYC Transmitter Park", "Pier y vistas de Manhattan", "place-greenpoint"],
      ["18:35–19:00", "Greenpoint waterfront", "Paseo libre antes de cenar", "place-greenpoint"],
      ["~19:00–20:30", "Cena en Greenpoint", "Casual; Kirbee’s queda como opción provisional", "meal-day4-dinner"],
      ["Opcional", "Evento público de NYFW", "Solo sustituir el cierre/cena si el monitoreo encuentra algo especialmente bueno", "optional"], ["~21:00", "Highbridge Hotel", "Regreso", "place-hotel"]
    ]
  },
  {
    number: "14", name: "Mon", label: "Monday", month: "September", theme: "MoMA · High Line · Chelsea · Village · Top of the Rock",
    timeline: [
      ["09:00", "Desayuno", "Inicio del día", ""], ["10:15", "Llegar al MoMA", "Prepararse para apertura", ""],
      ["10:30–11:15", "MoMA · Collection 1880s–1940s", "Modernismo, Van Gogh, Picasso y Matisse", "place-moma"],
      ["11:15–12:00", "MoMA · 1940s–1970s", "Expresionismo, Pop Art y diseño", "place-moma"],
      ["12:00–12:40", "MoMA · Contemporary", "Salas actuales y exposiciones temporales", "place-moma"],
      ["12:40–13:00", "MoMA · Sculpture Garden", "Pausa final y tienda si hay tiempo", "place-moma"], ["13:00–13:45", "Comida", "Kin Ramen plan A · Bill’s Bar & Burger plan B", "meal-day5-lunch"],
      ["~14:00–15:00", "Primark Herald Square", "Bloque principal de compras", "place-primark"],
      ["~15:00–15:10", "Empire State Building", "Vista exterior desde 34th Street", "place-herald"],
      ["Opcional", "Koreatown", "Primer sacrificio del día; solo 20–30 min si existe margen real", "optional"],
      ["~15:30–16:35", "High Line", "Entrar por Hudson Yards / 30th St y caminar de norte a sur", "place-highline"],
      ["~16:35–17:00", "Chelsea Market", "Mercado · antigua fábrica Nabisco · snack o café opcional", "place-chelsea"],
      ["~17:00–17:15", "Meatpacking District", "Gansevoort Street · adoquines · edificios industriales · Whitney exterior", "place-chelsea"],
      ["~17:15–18:00", "West / Greenwich Village + 4 tiendas", "Bleecker · Greenwich Letterpress · an.mé · C.O. Bigelow · The Locavore", "place-village"],
      ["18:00–18:30", "Hacia Rockefeller Center", "Traslado con margen para la entrada", ""],
      ["~18:30–20:00", "Top of the Rock", "Entrada 18:30–18:45 · luz · atardecer · noche · vista del Empire State", "place-topofrock"],
      ["~20:15", "Cena por Rockefeller / Midtown", "Elegir según hora de salida", "meal-day5-dinner"],
      ["~21:15–21:45", "Times Square de noche", "Luces · pantallas · Broadway · visita breve", "place-timessquare"],
      ["~22:00–22:30", "Highbridge Hotel", "Regreso", "place-hotel"]
    ]
  },
  {
    number: "15", name: "Tue", label: "Tuesday", month: "September", theme: "Natural History · Upper West Side · Riverside Park · Coney Island",
    timeline: [
      ["08:30", "Desayuno", "Inicio del día", ""], ["09:30", "Upper West Side", "Salida hacia el museo", ""],
      ["10:00–10:50", "AMNH · Dinosaurios", "Fósiles y grandes esqueletos", "place-amnh"],
      ["10:50–11:30", "AMNH · Human Origins", "Evolución humana y cultura", "place-amnh"],
      ["11:30–12:05", "AMNH · Meteoritos", "Meteoritos y ciencias planetarias", "place-amnh"],
      ["12:05–12:40", "AMNH · Gilder Center", "Arquitectura, insectario y nuevas galerías", "place-amnh"],
      ["12:40–13:00", "AMNH · Rose Center", "Hayden Sphere y exterior del planetario", "place-amnh"],
      ["~13:15", "Barney Greengrass", "Deli clásico · bagel con nova o sándwich", "meal-day6-lunch"],
      ["14:15–14:35", "Upper West Side + Zabar’s", "Broadway · brownstones · deli · cocina · café opcional", "place-zabars"],
      ["14:35–15:00", "Riverside Park", "Paseo de 15–20 min junto al Hudson; no intentar recorrerlo entero", "place-riverside"],
      ["~15:00–16:15", "Hacia Coney Island", "Traslado desde Riverside Park / Upper West Side", ""],
      ["~16:15–18:45", "Coney Island", "Boardwalk · playa · Wonder Wheel/Cyclone exterior · Nathan’s · ambiente", "place-coney"],
      ["~18:45–20:00", "Regreso", "Volver al Bronx y preparar maletas", ""],
      ["~20:30–21:00", "Highbridge Hotel", "Maletas listas para la salida", "place-hotel"]
    ]
  },
  {
    number: "16", name: "Wed", label: "Wednesday", month: "September", theme: "Return · JFK · San Antonio · Mexico City",
    timeline: [
      ["~05:00", "Despertar", "Maletas listas desde la noche anterior", ""], ["05:15", "Check-out", "Highbridge Hotel", "place-hotel"],
      ["~05:30", "Salida hacia JFK", "Traslado reservado", ""], ["~06:15", "JFK", "Check-in · equipaje · seguridad", "place-jfk"],
      ["09:00", "Delta 3779", "JFK → San Antonio", ""], ["12:15", "San Antonio", "Conexión · 2 h 06 min", ""],
      ["14:21", "Aeroméxico 633", "SAT → MEX", ""], ["15:30", "Ciudad de México", "Fin del viaje", ""]
    ]
  }
];

const day2FerryTimeline = [
  ["08:30", "Desayuno", "Inicio tranquilo", ""], ["09:30", "Lower Manhattan", "Salida hacia The Battery", ""],
  ["10:15", "The Battery", "Vista desde tierra antes de iniciar el tramo común", "place-battery"],
  ["10:35", "Bowling Green + Charging Bull", "Paseo breve", ""],
  ["10:50–11:20", "Financial District", "Wall Street · NYSE · Federal Hall · Trinity Church", ""],
  ["11:20–11:45", "Printemps New York", "One Wall Street · Red Room · diseño y moda", "place-printemps"],
  ["Opcional", "Square Diner o Black Fox Coffee", "Elegir solo uno si el horario del ferry y Centre 360 lo permiten", "optional"],
  ["11:45", "Stone Street", "Parada breve por la calle histórica", ""],
  ["~12:05–13:20", "Staten Island Ferry", "Ida y vuelta · mejor vista de la Estatua y del skyline desde el agua", "place-statenferry"],
  ["13:35", "Oculus", "Arquitectura y vistazo rápido", "place-oculus"],
  ["14:00–14:30", "9/11 Memorial", "North Pool · South Pool · Survivor Tree · One WTC", "place-memorial"],
  ["~14:40", "Centre 360", "Sujeto al horario que consigamos", "optional"],
  ["15:10–15:40", "Canal Street + Chinatown", "Canal · Mott · Pell · Doyers Street", "place-chinatown"],
  ["~15:40", "Comida en Chinatown", "Uncle Lou vs. Wo Hop · ajustar según Centre 360", "meal-day2-lunch"],
  ["16:15", "Supreme + New York or Nowhere", "Opcional según el tiempo", "optional"],
  ["~16:30–16:45", "Regreso al Bronx", "Traslado al hotel", ""],
  ["~17:30", "Hotel / cambio rápido", "Dejar compras y prepararse", ""],
  ["18:00", "Yankee Stadium", "Llegada al estadio", "place-yankeemets"],
  ["19:05", "Yankees vs. Mets", "Section 421 · Row 14 · Seats 20–21", "place-yankeemets"],
  ["~22:30", "Cena casual", "Según la hora de salida", ""], ["~23:30", "Highbridge Hotel", "Fin del día", "place-hotel"]
];

const day2FerryRoutes = [
  {label:"Battery → Financial District → Printemps", url:"https://www.google.com/maps/dir/?api=1&origin=The+Battery%2C+New+York&destination=Printemps+New+York&travelmode=walking&waypoints=Charging+Bull%7CFederal+Hall"},
  {label:"Printemps → Stone Street → Ferry", url:"https://www.google.com/maps/dir/?api=1&origin=Printemps+New+York&destination=Whitehall+Terminal%2C+New+York&travelmode=walking&waypoints=Stone+Street"},
  {label:"Ferry → Oculus → Memorial", url:"https://www.google.com/maps/dir/?api=1&origin=Whitehall+Terminal%2C+New+York&destination=9%2F11+Memorial%2C+New+York&travelmode=walking&waypoints=Oculus+World+Trade+Center"},
  {label:"Memorial → Centre 360 → Chinatown", url:"https://www.google.com/maps/dir/?api=1&origin=9%2F11+Memorial%2C+New+York&destination=Mott+Street%2C+New+York&travelmode=walking&waypoints=City+Hall%2C+New+York"}
];

const day6ManhattanTimeline = [
  ["08:30", "Desayuno", "Inicio del día", ""], ["09:30", "Upper West Side", "Salida hacia el museo", ""],
  ["10:00–10:50", "AMNH · Dinosaurios", "Fósiles y grandes esqueletos", "place-amnh"],
  ["10:50–11:30", "AMNH · Human Origins", "Evolución humana y cultura", "place-amnh"],
  ["11:30–12:05", "AMNH · Meteoritos", "Meteoritos y ciencias planetarias", "place-amnh"],
  ["12:05–12:40", "AMNH · Gilder Center", "Arquitectura, insectario y nuevas galerías", "place-amnh"],
  ["12:40–13:00", "AMNH · Rose Center", "Hayden Sphere y exterior del planetario", "place-amnh"],
  ["~13:15", "Barney Greengrass", "Deli clásico · bagel con nova o sándwich", "meal-day6-lunch"],
  ["14:15–14:35", "Upper West Side + Zabar’s", "Broadway · brownstones · deli · cocina · café opcional", "place-zabars"],
  ["14:35–15:00", "Riverside Park", "Paseo de 15–20 min junto al Hudson; no intentar recorrerlo entero", "place-riverside"],
  ["~15:00–15:45", "Hacia Morgan Library", "Traslado a Madison Avenue", ""],
  ["15:45–16:45", "Morgan Library", "Biblioteca histórica, manuscritos y arquitectura", "place-morgan"],
  ["~17:15–17:50", "SoHo / Nolita", "Broadway · Prince · Greene · arquitectura cast-iron · New York or Nowhere", "place-soho"],
  ["~17:50", "Supreme", "Bowery · solo si quedó pendiente del Día 2", "place-supremeonly"],
  ["~18:15–19:15", "Katz’s Delicatessen", "Cena temprana · pastrami clásico", "meal-day6-dinner"],
  ["~19:15–19:45", "Lower East Side", "Paseo breve antes de regresar", ""],
  ["~20:30–21:00", "Highbridge Hotel", "Maletas listas para la salida", "place-hotel"]
];

const day6ManhattanRoutes = [
  {label:"AMNH → Zabar’s → Riverside Park", url:"https://www.google.com/maps/dir/?api=1&origin=American+Museum+of+Natural+History&destination=Riverside+Park+West+79th+Street&travelmode=walking&waypoints=Zabar%27s"},
  {label:"Riverside Park → Morgan", url:"https://www.google.com/maps/dir/?api=1&origin=Riverside+Park+West+79th+Street&destination=The+Morgan+Library+%26+Museum&travelmode=transit"},
  {label:"Morgan → SoHo / Nolita", url:"https://www.google.com/maps/dir/?api=1&origin=The+Morgan+Library+%26+Museum&destination=Prince+Street+and+Greene+Street%2C+New+York&travelmode=transit"},
  {label:"NYON → Supreme → Katz’s", url:"https://www.google.com/maps/dir/?api=1&origin=New+York+or+Nowhere&destination=Katz%27s+Delicatessen&travelmode=walking&waypoints=Supreme+Bowery"}
];

function timelineForDay(index) {
  if (index === 1 && sessionStorage.getItem("day2Option") === "ferry") return day2FerryTimeline;
  if (index === 5 && sessionStorage.getItem("day6Option") === "manhattan") return day6ManhattanTimeline;
  return tripDays[index].timeline;
}

const places = [
  ["JFK Airport", "Queens · Arrival", "Llegada y conexión hacia Manhattan. Añadiremos terminal, ruta y detalles del traslado."],
  ["Bryant Park", "Midtown · Park", "Punto de partida para el paseo clásico por Midtown y las tiendas."],
  ["Yankee Stadium", "The Bronx · Baseball", "Sep 10: Pinstripe Pass confirmado. Sep 11: Section 421 · Row 14 · Seats 20–21."],
  ["Dizzy’s Club", "Columbus Circle · Jazz", "Sonny Rollins · 21:00. Pendiente: confirmación y código de reserva."],
];

const placeDetails = {
  jfk: {
    kicker: "06:15 · Queens", title: "JFK Airport", address: "John F. Kennedy International Airport · Queens",
    photos: [["./assets/jfk-terminal.jpg", "JFK International Airport"]],
    summary: "Punto de llegada. La ficha queda preparada para añadir terminal, vuelo y la ruta exacta al hotel cuando estén confirmados.",
    notes: ["Tener pasaporte y dirección del hotel a mano", "Confirmar terminal antes del viaje", "Abrir Maps al salir de equipaje"],
    map: "https://www.google.com/maps/search/?api=1&query=John+F+Kennedy+International+Airport"
  },
  hotel: {
    kicker: "~09:00 · The Bronx", title: "Highbridge Hotel", address: "1263 Edward L Grant Hwy · Bronx",
    photos: [["./assets/highbridge-hotel.jpg", "Exterior del Highbridge Hotel"]],
    summary: "Primera parada para dejar maletas y, más tarde, hacer check-in y descansar. El hotel está cerca de Yankee Stadium.",
    notes: ["Dejar maletas ~09:00", "Regresar ~14:30", "Check-in 15:00"],
    map: "https://www.google.com/maps/search/?api=1&query=Highbridge+Hotel+1263+Edward+L+Grant+Hwy+Bronx",
    official: "https://www.highbridgehotel.com/"
  },
  bryant: {
    kicker: "~10:15 · Midtown", title: "Bryant Park", address: "Bryant Park · 6th Ave & 42nd St",
    photos: [["./assets/bryant-park.jpg", "Bryant Park y la New York Public Library"]],
    summary: "Una pausa verde entre la biblioteca y los edificios de Midtown. Es el punto de partida natural del paseo de la mañana.",
    notes: ["Recorrer el jardín central", "Ver la fachada de la NYPL", "Elegir aquí la dirección del paseo"],
    map: "https://www.google.com/maps/search/?api=1&query=Bryant+Park+New+York"
  },
  midtown: {
    kicker: "10:15–13:30 · Walking route", title: "Midtown clásico", address: "Bryant Park → Grand Central → Fifth Avenue → Rockefeller Center",
    photos: [["./assets/midtown-grand-central.jpg", "Grand Central y el Chrysler Building"], ["./assets/bryant-park.jpg", "Bryant Park y la biblioteca"]],
    summary: "Un recorrido compacto por la arquitectura clásica de Midtown, con tiempo flexible para entrar a tiendas sobre Fifth Avenue.",
    notes: ["Mantener el paseo flexible: entrar solo a los interiores que no tengan fila", "Reservar la mayor parte de las tiendas para Fifth Avenue", "Salir hacia la comida alrededor de las 13:30 para proteger el regreso al hotel"],
    sights: [
      ["Bryant Park", "Recorrer el césped y la terraza de la biblioteca. Fijarse en el contraste entre el jardín y los rascacielos.", "./assets/bryant-park.jpg", "Bryant Park"],
      ["New York Public Library", "Ver los leones Patience y Fortitude, Astor Hall y, si el acceso está disponible, la Rose Main Reading Room.", "./assets/nypl.jpg", "Stephen A. Schwarzman Building · NYPL"],
      ["Grand Central Terminal", "Mirar el techo celeste del Main Concourse, el reloj central y probar la Whispering Gallery junto al Oyster Bar.", "./assets/midtown-grand-central.jpg", "Grand Central Terminal"],
      ["Chrysler Building", "La visita principal es exterior: observar la corona Art Déco y sus formas inspiradas en automóviles. El acceso interior puede ser limitado.", "./assets/midtown-grand-central.jpg", "Chrysler Building desde Grand Central"],
      ["Fifth Avenue + St. Patrick’s", "Entrar a la catedral para ver vitrales y bóvedas; mantener silencio si hay servicio. Elegir solo una o dos tiendas para no perder tiempo.", "./assets/st-patricks.jpg", "St. Patrick’s Cathedral"],
      ["Rockefeller Center", "Caminar por Channel Gardens, ver la estatua de Atlas, la plaza y la fachada Art Déco de 30 Rockefeller Plaza.", "./assets/rockefeller-center.jpg", "Channel Gardens · Rockefeller Center"]
    ],
    routeImage: "./assets/midtown-route.svg",
    map: "https://www.google.com/maps/dir/?api=1&origin=Bryant+Park%2C+New+York&destination=Rockefeller+Center%2C+New+York&travelmode=walking&waypoints=Grand+Central+Terminal%2C+New+York%7CSt.+Patrick%27s+Cathedral%2C+New+York"
  },
  yankee: {
    kicker: "19:05 · The Bronx", title: "Yankee Stadium", address: "1 E 161 St · Bronx",
    photos: [["./assets/yankee-stadium.jpg", "Exterior de Yankee Stadium"]],
    summary: "Yankees–Rockies. Pinstripe Pass de pie, primera bebida incluida y giveaway Yankees + New York or Nowhere Knit Hat.",
    notes: ["Llegar ~17:00 para recorrer el estadio y entrar antes de que se agote el regalo", "Giveaway para los primeros 18,000 asistentes; sujeto a disponibilidad y cambios", "Buscar zonas sociales y espacios standing room", "Canjear la bebida mostrando el boleto", "No ocupar asientos ni lugares SRO asignados"],
    callout: "PINSTRIPE PASS · Standing room · Primera bebida · Gorro NYY + NYON, primeros 18,000",
    map: "https://www.google.com/maps/search/?api=1&query=Yankee+Stadium+1+E+161+St+Bronx",
    official: "https://www.mlb.com/yankees/tickets/specials/pinstripe-pass"
  },
  dizzys: {
    kicker: "21:00 · Columbus Circle", title: "Dizzy’s Club", address: "Frederick P. Rose Hall · Broadway at 60th St",
    photos: [["./assets/dizzys-club.jpg", "Interior de Dizzy’s Club con vista al skyline"]],
    summary: "Saxophone Colossus: Celebrating Sonny Rollins. Club íntimo de Jazz at Lincoln Center con vistas panorámicas; llegada prevista ~20:40.",
    notes: ["Set de las 21:00", "Melissa Aldana, Jerry Weldon, Chris Lewis y Jacob Chung", "Confirmar acceso y código de reserva", "Salir del estadio alrededor de las 20:00 para proteger la llegada"],
    map: "https://www.google.com/maps/search/?api=1&query=Dizzy%27s+Club+Broadway+at+60th+Street+New+York",
    official: "https://jazz.org/dizzys/"
  }
};

function guide(title, kicker, summary, notes, query) {
  return {
    title, kicker, address: query,
    photos: [],
    summary, notes,
    map: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query)
  };
}

Object.assign(placeDetails, {
  midtownstores: {
    ...guide("Nintendo + LEGO + UNIQLO", "Día 1 · Fifth Avenue", "Tres tiendas prioritarias integradas al final del recorrido clásico, sin regresar sobre los mismos pasos.", ["Nintendo NY: Rockefeller Center · 10 Rockefeller Plaza", "LEGO Store: 636 Fifth Avenue", "UNIQLO Fifth Avenue: 660 Fifth Avenue", "Mantener el bloque entre 45 y 50 minutos para proteger comida y regreso al hotel"], "Nintendo New York Rockefeller Center"),
    photos: [["./assets/nintendo-ny.jpg", "Nintendo NY · Rockefeller Center"], ["./assets/lego-fifth-avenue.jpg", "LEGO Store · Fifth Avenue"], ["./assets/uniqlo-fifth-avenue.jpg", "UNIQLO Fifth Avenue"]],
    sights: [["Nintendo NY", "Flagship de dos plantas con mercancía exclusiva y exhibiciones de Mario, Zelda, Pokémon y otras franquicias.", "./assets/nintendo-ny.jpg", "Nintendo NY · Rockefeller Center"], ["LEGO Store Fifth Avenue", "Flagship con grandes construcciones, personalización y zonas interactivas; decidir compras antes de entrar para controlar el tiempo.", "./assets/lego-fifth-avenue.jpg", "LEGO Store · Fifth Avenue"], ["UNIQLO Fifth Avenue", "Flagship amplio de tres niveles; priorizar la lista de prendas para evitar recorrer toda la tienda.", "./assets/uniqlo-fifth-avenue.jpg", "UNIQLO Fifth Avenue"]]
  },
  yankeemets: {
    kicker: "19:05 · viernes 11", title: "Yankees–Mets", address: "Yankee Stadium · 1 E 161 St · Bronx",
    photos: [["./assets/yankee-stadium.jpg", "Exterior de Yankee Stadium"]],
    summary: "Subway Series en Yankee Stadium con lugares asignados en el nivel Grandstand.",
    notes: ["Section 421 · Row 14 · Seats 20–21", "Llegar alrededor de las 18:00", "Guardar los boletos en Wallet antes de salir", "Esta entrada sí tiene asiento asignado; no confundir con el Pinstripe Pass del jueves"],
    callout: "SECTION 421 · ROW 14 · SEATS 20–21",
    map: "https://www.google.com/maps/search/?api=1&query=Yankee+Stadium+1+E+161+St+Bronx",
    official: "https://www.mlb.com/yankees/ballpark"
  },
  battery: guide("The Battery", "Día 2 · Lower Manhattan", "Parque frente al puerto con vistas abiertas hacia la Estatua de la Libertad y Ellis Island.", ["Caminar junto al waterfront", "Localizar Castle Clinton", "Las mejores vistas están hacia el suroeste"], "The Battery New York"),
  financial: guide("Financial District", "Día 2 · Downtown", "Recorrido compacto por los símbolos financieros e históricos de Lower Manhattan.", ["Charging Bull y Bowling Green", "NYSE y Federal Hall desde el exterior", "Trinity Church y su cementerio"], "Federal Hall Wall Street New York"),
  printemps: {
    ...guide("Printemps New York", "Día 2 · One Wall Street", "Flagship neoyorquino de la tienda francesa dentro del edificio Art Déco One Wall Street.", ["Entrar después de Federal Hall y antes de Stone Street", "Priorizar el Red Room, el acceso Art Déco y una vuelta breve por diseño/moda", "Mantener la visita alrededor de 25 minutos", "No convertirla en una sesión larga de compras antes de Centre 360"], "Printemps New York One Wall Street"),
    photos: [["./assets/printemps-new-york.jpg", "Printemps New York · One Wall Street"]],
    official: "https://us.printemps.com/visit"
  },
  stone: guide("Stone Street", "Día 2 · Financial District", "Pequeña calle adoquinada, histórica y peatonal, ideal para un paseo breve.", ["Entrar por Hanover Square", "Observar las fachadas bajas entre los rascacielos", "Mantener la parada corta"], "Stone Street New York"),
  seaport: guide("South Street Seaport + Pier 17", "Día 2 · East River", "Waterfront histórico con barcos, edificios restaurados y vistas del Brooklyn Bridge.", ["Caminar por Fulton Street", "Subir al paseo de Pier 17", "Fotografiar Brooklyn Bridge desde el waterfront"], "Pier 17 New York"),
  oculus: guide("Oculus", "Día 2 · World Trade Center", "Intercambiador y centro comercial diseñado como una gran estructura blanca de costillas.", ["Ver el eje central desde ambos extremos", "Mirar hacia One World Trade Center al salir", "Usar la visita también como pausa y baño"], "Oculus World Trade Center New York"),
  memorial: guide("9/11 Memorial", "Día 2 · World Trade Center", "Espacio de memoria formado por las dos piscinas ubicadas en las huellas de las Torres Gemelas.", ["North Pool y South Pool", "Survivor Tree", "Mantener un tono respetuoso y contemplativo"], "9/11 Memorial New York"),
  centre360: guide("Centre 360", "Día 2 · reserva flexible", "Parada condicionada al horario disponible; será el compromiso fuerte de la tarde si se consigue reserva.", ["No fijar el resto de la tarde hasta confirmar hora", "Llegar con margen", "Reordenar Oculus, Memorial y Chinatown alrededor de la reserva"], "Centre 360 New York City Hall"),
  chinatown: guide("Canal Street + Chinatown", "Día 2 · Chinatown", "Calles comerciales, restaurantes cantoneses, souvenirs y el tejido histórico del barrio.", ["Canal Street para vendedores y souvenirs", "Mott y Pell para ambiente de barrio", "Doyers Street si el tiempo permite"], "Mott Street Chinatown New York"),
  supreme: guide("Supreme + New York or Nowhere", "Días 2 o 6 · opcional", "Dos paradas de compras que pueden hacerse juntas si el tiempo lo permite.", ["Comprobar existencias y posibles filas", "Hacerlas el Día 6 si Centre 360 ocupa la tarde", "No sacrificar el regreso al estadio"], "Supreme Bowery New York"),
  centralpark: guide("Central Park", "Día 3 · Manhattan", "Paseo concentrado por algunos de los paisajes más reconocibles del parque.", ["The Mall y Bethesda Terrace", "Bow Bridge y The Lake", "Salir por el lado este para llegar a The Met"], "Bethesda Terrace Central Park New York"),
  met: guide("The Metropolitan Museum of Art", "Día 3 · Museum Mile", "Tres horas para una selección prioritaria, sin intentar recorrer todo el museo.", ["Templo de Dendur", "Egipto, Grecia y Roma", "Pintura europea y American Wing"], "The Metropolitan Museum of Art New York"),
  lexington: guide("Lexington Candy Shop", "Día 3 · Upper East Side", "Luncheonette clásica para una Coca-Cola preparada con jarabe y seltzer o una malteada.", ["Sentarse en la barra si hay lugar", "Pedir la Coca-Cola clásica o malteada", "Mantener la parada en unos 25 minutos"], "Lexington Candy Shop New York"),
  tram: guide("Roosevelt Island Tram", "Día 3 · East River", "Teleférico urbano con vistas del East River y Midtown durante el cruce.", ["Entrar con OMNY/MetroCard según disponibilidad", "Buscar lugar junto a la ventana", "El cruce es breve: tener la cámara lista"], "Roosevelt Island Tramway Manhattan Station"),
  roosevelt: guide("Roosevelt Island", "Día 3 · East River", "Paseo hacia el extremo sur de la isla con ruinas, parques y vistas de Manhattan.", ["Smallpox Hospital Ruins desde el exterior", "Four Freedoms Park antes de las 19:00", "Caminar por el waterfront oriental"], "Four Freedoms Park Roosevelt Island"),
  gantry: guide("Gantry Plaza + Pepsi-Cola Sign", "Día 3 · Long Island City", "Waterfront de Queens para ver el skyline encendido al otro lado del East River.", ["Los antiguos gantries industriales", "Pepsi-Cola Sign", "Llegar cerca de blue hour para mejores fotografías"], "Gantry Plaza State Park New York"),
  brooklynbridge: guide("Brooklyn Bridge", "Día 4 · East River", "Cruce peatonal completo desde Manhattan hacia Brooklyn.", ["Mantenerse en el carril peatonal", "Mirar atrás hacia Lower Manhattan", "La llegada hacia DUMBO ofrece la mejor transición"], "Brooklyn Bridge Pedestrian Entrance Manhattan"),
  dumbo: guide("DUMBO + Brooklyn Bridge Park", "Día 4 · Brooklyn", "Arquitectura industrial, calles adoquinadas y algunos de los mejores waterfronts del viaje.", ["Washington Street y Manhattan Bridge", "Pebble Beach", "Fulton Ferry Landing y vistas de Manhattan"], "Washington Street DUMBO Brooklyn"),
  williamsburg: guide("Williamsburg", "Día 4 · Brooklyn", "Dos horas de paseo libre combinando waterfront, tiendas, discos y circuito musical.", ["Domino Park es imprescindible", "Bedford Avenue como eje", "Marsha P. Johnson State Park", "Earwax y Face Records", "Music Hall y Brooklyn Bowl desde fuera"], "Domino Park Brooklyn"),
  yoseka: guide("Yoseka Stationery", "Día 4 · Greenpoint", "Tienda especializada en papelería donde conviene dedicar tiempo a probar plumas y papeles.", ["Reservar una hora completa", "Probar papel y herramientas antes de comprar", "Dirección: 63 West St"], "Yoseka Stationery 63 West Street Brooklyn"),
  greenpoint: guide("Greenpoint", "Día 4 · Brooklyn", "Final relajado por calles residenciales y waterfront antes de cenar.", ["West Street", "WNYC Transmitter Park", "Buscar tiendas y cafés sin convertirlos en obligación"], "WNYC Transmitter Park Brooklyn"),
  moma: guide("MoMA", "Día 5 · Midtown", "Visita de dos horas y media a la colección de arte moderno y contemporáneo.", ["Elegir previamente obras o plantas prioritarias", "No intentar completar todas las galerías", "Salir a las 13:00 para proteger el resto del día"], "Museum of Modern Art New York"),
  primark: guide("Primark Herald Square", "Día 5 · compras", "Bloque principal de compras del día en Herald Square.", ["Fijar un presupuesto o lista", "Dejar margen para cajas", "Guardar compras antes de Top of the Rock si fuera necesario"], "Primark Herald Square New York"),
  herald: guide("Herald Square + Empire State", "Día 5 · Midtown South", "Paseo exterior por Macy’s, Herald Square y el Empire State Building.", ["Macy’s desde el exterior", "Fotografiar Empire State desde 34th Street", "No dedicar demasiado tiempo: Koreatown sigue después"], "Empire State Building New York"),
  koreatown: guide("Koreatown", "Día 5 · W 32nd Street", "Una pausa entre compras y el mirador, con opciones de café, postre o comida coreana.", ["Grace Street para postre", "Woorijip si falta una comida rápida", "Anytime Kitchen si prefieren sentarse"], "Koreatown West 32nd Street New York"),
  topofrock: guide("Top of the Rock", "Día 5 · sunset", "Mirador elegido para ver Midtown con luz, atardecer y primeras luces nocturnas.", ["Reservar aproximadamente 18:30–19:00", "Llegar antes de la hora asignada", "Buscar la vista sur hacia Empire State y la norte hacia Central Park"], "Top of the Rock New York"),
  timessquare: guide("Times Square de noche", "Día 5 · 21:15", "Una visita breve para vivir las pantallas, las luces y el pulso nocturno de Broadway sin convertirla en otra actividad larga.", ["Treinta minutos son suficientes", "Ver la plaza desde las gradas rojas de TKTS si están abiertas", "Cuidar pertenencias entre la multitud", "Al terminar, caminar a 42 St–Bryant Park para tomar el D al hotel"], "Times Square New York"),
  amnh: guide("American Museum of Natural History", "Día 6 · Upper West Side", "Tres horas concentradas en las salas prioritarias del museo.", ["Dinosaurios y fósiles", "Hall of Human Origins", "Meteoritos, Rose Center y Gilder Center"], "American Museum of Natural History New York"),
  barney: guide("Barney Greengrass", "Día 6 · Upper West Side", "Deli judío clásico conocido por pescado ahumado, bagels y sandwiches.", ["Bagel con nova o salmón", "Compartir sándwich si quieren dejar espacio", "Zabar’s Café es el respaldo si está lleno"], "Barney Greengrass New York"),
  zabars: guide("Zabar’s", "Día 6 · Upper West Side", "Institución de comida gourmet, deli, café y utensilios de cocina.", ["Ver quesos, salmón, bagels y productos importados", "Subir a la sección de cocina", "Café rápido opcional"], "Zabar's New York"),
  katzs: guide("Katz’s Delicatessen", "Día 6 · Lower East Side", "Parada clásica para una cena temprana fuera del pico fuerte del almuerzo.", ["Conservar el ticket que entregan al entrar", "Pastrami on rye para compartir", "Pedir pickles y bebida"], "Katz's Delicatessen New York")
});

Object.assign(placeDetails, {
  day2coffee: {
    ...guide("Square Diner o Black Fox Coffee", "Día 2 · parada opcional", "Dos formas distintas de hacer una pausa: el diner clásico asociado visualmente con Daredevil o un café rápido más cercano al recorrido financiero.", ["Elegir solo uno", "Square Diner funciona mejor si quieren sentarse o priorizar la referencia de Daredevil", "Black Fox funciona mejor si el horario está apretado", "Omitir la parada si condiciona Centre 360 o el ferry"], "Square Diner 33 Leonard Street New York"),
    sights: [["Square Diner", "Diner clásico de Tribeca cuya fachada aparece como referencia de barrio en Daredevil. Conviene para café, huevos, pancakes o algo pequeño.", "./assets/square-diner.jpg", "Square Diner · Tribeca"], ["Black Fox Coffee", "Alternativa más rápida para pedir café y seguir hacia Printemps o Stone Street sin convertir la pausa en otra actividad.", "./assets/black-fox-coffee.jpg", "Black Fox Coffee · Financial District"]]
  },
  statenferry: guide("Staten Island Ferry", "Día 2 · opción Estatua", "Ferry público de ida y vuelta para conseguir una vista mucho más cercana de la Estatua de la Libertad y del skyline desde el agua.", ["El ferry es gratuito; no comprar boletos a vendedores", "Hay que desembarcar en Staten Island y volver a abordar", "Buscar el lado derecho al salir de Manhattan para la Estatua", "Dejar margen para espera y controles de acceso"], "Whitehall Terminal Staten Island Ferry New York"),
  squarediner: guide("Square Diner", "Día 2 · opcional", "Café o desayuno tardío en un diner clásico de Tribeca, reconocible por su asociación visual con Daredevil.", ["Pedir café y algo pequeño si desayunaron temprano", "No asignarle una hora fija hasta confirmar Centre 360", "Omitirla si obliga a recortar Printemps, el ferry o el regreso al Bronx"], "Square Diner 33 Leonard Street New York"),
  ferry: guide("NYC Ferry", "Día 4 · East River", "Traslado panorámico de DUMBO hacia Williamsburg.", ["Revisar la app y horarios unos días antes", "Los domingos la ruta East River puede dividirse", "Llegar al muelle con margen"], "Fulton Ferry Landing Brooklyn"),
  records: guide("Discos + circuito musical", "Día 4 · Williamsburg", "Un tramo pensado para los intereses musicales del viaje.", ["Earwax Records", "Face Records NYC", "Pasar por Music Hall of Williamsburg y Brooklyn Bowl"], "Earwax Records Brooklyn"),
  qahwah: guide("Qahwah House", "Día 4 · café opcional", "Café yemení sobre Bedford Avenue para usar solo si no hubo parada en DUMBO.", ["Probar café yemení o té", "Mantener la parada corta", "Omitirla si reduce el tiempo de Yoseka"], "Qahwah House Williamsburg Brooklyn"),
  nyon: guide("New York or Nowhere", "Días 2 o 6 · compras", "Tienda pendiente que se combina con Supreme en función del horario de Centre 360.", ["Intentar Día 2 solo si hay margen", "Plan principal del Día 6 si quedó pendiente", "Comprobar horarios antes de ir"], "New York or Nowhere New York"),
  supremeonly: guide("Supreme", "Días 2 o 6 · compras", "Parada de compras opcional que puede moverse entre días.", ["Comprobar fila", "No comprometer el regreso al estadio", "Combinar con NYON y Katz’s el Día 6"], "Supreme Bowery New York"),
  coney: {
    ...guide("Coney Island", "Día 6 · opción A", "Dos horas y media para el boardwalk, la playa y los iconos clásicos del distrito de diversiones.", ["Wonder Wheel y Cyclone desde el exterior", "Nathan’s Famous", "No intentar subir a todo", "Revisar el tiempo antes de iniciar el traslado largo"], "Coney Island Boardwalk Brooklyn"),
    photos: [["./assets/coney-island.jpg", "Wonder Wheel · Coney Island"]]
  },
  bedstuy: {
    ...guide("Bed-Stuy · Do the Right Thing", "Día 4 · desvío opcional", "Visita breve al bloque donde Spike Lee filmó Do the Right Thing, sin sustituir el recorrido principal de Brooklyn.", ["Stuyvesant Avenue entre Quincy Street y Lexington Avenue", "Buscar el letrero honorífico Do the Right Thing Way", "Sal’s Famous Pizzeria fue un set temporal y ya no existe", "Calcular 60–90 minutos incluyendo traslados; recortar cafés o tiendas si se activa"], "Do the Right Thing Way Brooklyn"),
    photos: [["./assets/do-the-right-thing-way.jpg", "Do the Right Thing Way · Bed-Stuy"]]
  },
  village: {
    ...guide("West / Greenwich Village + 4 tiendas", "Día 5 · 17:15–18:00", "Paseo compacto desde Meatpacking por Bleecker y las calles residenciales del Village, enlazando cuatro tiendas independientes.", ["Entrar desde Gansevoort Street al terminar Meatpacking", "Mantener el bloque en unos 45 minutos", "Greenwich Letterpress está un piso arriba y no tiene rampa", "Si una tienda tiene fila, priorizar el paseo y salir hacia Rockefeller a las 18:00"], "West Village New York"),
    photos: [["./assets/west-village.jpg", "Calles del West Village"], ["./assets/greenwich-letterpress.jpg", "Greenwich Letterpress · 15 Christopher Street"], ["./assets/an-me-bleecker.webp", "an.mé · 249 Bleecker Street"], ["./assets/co-bigelow.jpg", "C.O. Bigelow · 414 Sixth Avenue"], ["./assets/the-locavore.jpg", "The Locavore Variety Store · 434 Sixth Avenue"]],
    sights: [["West Village + Bleecker Street", "Calles irregulares, brownstones, fachadas bajas y pequeños comercios durante la transición desde Meatpacking.", "./assets/west-village.jpg", "Calles del West Village"], ["Greenwich Letterpress", "Papelería independiente con tarjetas, pequeños regalos y productos de letterpress. Dirección: 15 Christopher Street.", "./assets/greenwich-letterpress.jpg", "Interior de Greenwich Letterpress"], ["an.mé", "Boutique de ropa, juguetes, accesorios y regalos para niños. Dirección: 249 Bleecker Street.", "./assets/an-me-bleecker.webp", "an.mé · Bleecker Street"], ["C.O. Bigelow", "Farmacia y botica histórica con productos de belleza, cuidado personal y remedios. Dirección: 414 Sixth Avenue.", "./assets/co-bigelow.jpg", "C.O. Bigelow · Sixth Avenue"], ["The Locavore", "Variety store centrada en productos independientes hechos o producidos alrededor de Nueva York. Dirección: 434 Sixth Avenue.", "./assets/the-locavore.jpg", "The Locavore Variety Store"]],
    map: "https://www.google.com/maps/dir/?api=1&origin=Whitney+Museum+of+American+Art&destination=The+Locavore+Variety+Store&travelmode=walking&waypoints=an.me+249+Bleecker+Street%7CGreenwich+Letterpress%7CC.O.+Bigelow"
  },
  morgan: {
    ...guide("Morgan Library", "Día 6 · opción B", "Biblioteca y museo en la antigua colección de J. Pierpont Morgan, con interiores históricos, manuscritos y exposiciones.", ["225 Madison Avenue, entre 36th y 37th Streets", "Priorizar la biblioteca original y el despacho de Morgan", "La biblioteca histórica suele tener acceso gratuito los martes de 15:00 a 17:00; confirmar antes del viaje", "Mantener la visita en aproximadamente una hora"], "The Morgan Library and Museum 225 Madison Avenue New York"),
    photos: [["./assets/morgan-library.jpg", "The Morgan Library & Museum · Madison Avenue"]],
    official: "https://www.themorgan.org/visit"
  },
  riverside: {
    ...guide("Riverside Park", "Día 6 · 14:35–15:00", "Pausa breve junto al Hudson integrada en la mañana común del Día 6, antes de elegir Coney Island o Manhattan.", ["Entrar desde el entorno de West 79th Street después de Zabar’s", "Dedicar solo 15–20 minutos al waterfront", "No intentar recorrer el parque entero", "Salir puntualmente a las 15:00 para proteger cualquiera de las dos opciones"], "Riverside Park West 79th Street New York"),
    photos: [["./assets/riverside-park.jpg", "Riverside Park junto al Hudson"]],
    sights: [["Hudson River promenade", "Bajar hacia el agua, caminar un tramo corto y usar las bancas como pausa antes del traslado largo de la tarde.", "./assets/riverside-park.jpg", "Riverside Park · Hudson River"]]
  }
});

Object.assign(placeDetails.supreme, {
  photos: [["./assets/new-york-or-nowhere.jpg", "New York or Nowhere · 250 Lafayette Street"], ["./assets/supreme.jpg", "Supreme · 190 Bowery"]],
  sights: [["New York or Nowhere", "Tienda de ropa y objetos inspirados en la ciudad. Entrar solo si el horario deja margen antes del regreso al Bronx.", "./assets/new-york-or-nowhere.jpg", "New York or Nowhere"], ["Supreme", "Flagship dentro del histórico edificio de 190 Bowery. Comprobar la fila antes de comprometer tiempo.", "./assets/supreme.jpg", "Supreme · Bowery"]]
});
placeDetails.nyon.photos = [["./assets/new-york-or-nowhere.jpg", "New York or Nowhere · 250 Lafayette Street"]];
placeDetails.supremeonly.photos = [["./assets/supreme.jpg", "Supreme · 190 Bowery"]];
Object.assign(placeDetails.records, {
  photos: [["./assets/earwax-records.jpg", "Earwax Records"], ["./assets/music-hall-williamsburg.jpg", "Music Hall of Williamsburg"]],
  sights: [["Earwax Records", "Tienda independiente con novedades y vinilos usados.", "./assets/earwax-records.jpg", "Earwax Records"], ["Face Records NYC", "Selección de importaciones japonesas, jazz, city pop y discos usados.", "./assets/face-records.jpg", "Face Records NYC"], ["Music Hall of Williamsburg", "Reconocer desde fuera uno de los recintos centrales del circuito musical del barrio.", "./assets/music-hall-williamsburg.jpg", "Music Hall of Williamsburg"], ["Brooklyn Bowl", "Sala de conciertos y boliche dentro de una antigua nave industrial.", "./assets/brooklyn-bowl.jpg", "Brooklyn Bowl"]]
});

const placeByTitle = {
  "The Battery": "battery", "Bowling Green + Charging Bull": "financial", "Financial District": "financial", "Printemps New York": "printemps", "Stone Street": "stone",
  "South Street Seaport + Pier 17": "seaport", "Oculus": "oculus", "9/11 Memorial": "memorial", "Centre 360": "centre360",
  "Canal Street + Chinatown": "chinatown", "Supreme + New York or Nowhere": "supreme", "Square Diner": "squarediner", "Square Diner o Black Fox Coffee": "day2coffee", "Staten Island Ferry": "statenferry", "Central Park": "centralpark", "The Met": "met",
  "Lexington Candy Shop": "lexington", "Roosevelt Island Tram": "tram", "Roosevelt Island": "roosevelt", "Gantry Plaza + Pepsi-Cola Sign": "gantry",
  "Brooklyn Bridge": "brooklynbridge", "DUMBO + Brooklyn Bridge Park": "dumbo", "Bed-Stuy · Do the Right Thing": "bedstuy", "NYC Ferry": "ferry", "Williamsburg": "williamsburg", "Discos + circuito musical": "records", "Qahwah House": "qahwah",
  "Yoseka Stationery": "yoseka", "Greenpoint": "greenpoint", "MoMA": "moma", "Primark Herald Square": "primark",
  "Herald Square + Macy’s": "herald", "Empire State Building": "herald", "Koreatown": "koreatown", "West / Greenwich Village + 4 tiendas": "village", "Top of the Rock": "topofrock", "Times Square de noche": "timessquare",
  "American Museum of Natural History": "amnh", "Barney Greengrass": "barney", "Zabar’s": "zabars", "Morgan Library": "morgan", "High Line": "highline", "Chelsea + Meatpacking District": "chelsea", "Chelsea Market": "chelsea", "Meatpacking District": "chelsea", "SoHo + Nolita": "soho", "SoHo / Nolita": "soho", "New York or Nowhere": "nyon", "Supreme": "supremeonly", "Katz’s Delicatessen": "katzs", "Coney Island": "coney", "Riverside Park": "riverside"
};

const localPhotoByPlace = {
  battery: "the-battery.jpg", financial: "nyse.jpg", squarediner: "square-diner.jpg", day2coffee: "square-diner.jpg",
  seaport: "seaport.jpg", oculus: "oculus.jpg", memorial: "memorial.jpg", chinatown: "chinatown.jpg",
  met: "met-dendur.jpg", roosevelt: "roosevelt-island.jpg", gantry: "gantry-plaza.jpg",
  brooklynbridge: "brooklyn-bridge.jpg", dumbo: "audit-washington-street-dumbo.jpg", williamsburg: "williamsburg.jpg", greenpoint: "transmitter-park.jpg"
};

Object.entries(localPhotoByPlace).forEach(([id, filename]) => {
  if (placeDetails[id]) placeDetails[id].photos = [["./assets/" + filename, placeDetails[id].title]];
});

const groupedPlaceDetails = {
  financial: {
    photos: [["./assets/nyse.jpg", "New York Stock Exchange · Wall Street"], ["./assets/federal-hall.jpg", "Federal Hall"]],
    sights: [["Bowling Green", "El parque público más antiguo de Nueva York. Observar la verja histórica y su posición entre Broadway y los edificios financieros.", "./assets/audit-bowling-green.jpg", "Bowling Green"], ["Charging Bull", "La escultura de bronce suele tener mucha gente; mirar también la fuerza y el movimiento desde los costados, no solo la fotografía frontal.", "./assets/audit-charging-bull.jpg", "Charging Bull"], ["Wall Street + NYSE", "La Bolsa se contempla desde fuera. Fijarse en su fachada neoclásica, las columnas y la bandera sobre Broad Street.", "./assets/nyse.jpg", "New York Stock Exchange"], ["Federal Hall", "Frente a la Bolsa, marca el lugar donde George Washington prestó juramento como primer presidente.", "./assets/federal-hall.jpg", "Federal Hall"], ["Trinity Church", "Contraste neogótico entre rascacielos. Si está abierto, entrar al cementerio histórico y buscar la tumba de Alexander Hamilton.", "./assets/trinity-church.jpg", "Trinity Church Wall Street"]]
  },
  seaport: {
    photos: [["./assets/seaport.jpg", "South Street Seaport"], ["./assets/pier-17.jpg", "Pier 17"]],
    sights: [["Fulton Street", "Calles adoquinadas y edificios mercantiles que conservan la escala del antiguo puerto.", "./assets/seaport-fulton.webp", "Schermerhorn Row · Fulton Street"], ["South Street Seaport Museum", "Ver desde fuera los barcos históricos y los edificios marítimos; entrar solo si hay tiempo adicional.", "./assets/seaport.jpg", "South Street Seaport Museum y barcos históricos"], ["Pier 17", "Subir al waterfront y buscar vistas abiertas del Brooklyn Bridge, DUMBO y el East River.", "./assets/pier-17.jpg", "Pier 17"], ["Tin Building", "Mercado gastronómico restaurado junto al muelle; útil como pausa breve o para usar servicios.", "./assets/tin-building.jpg", "Tin Building"]]
  },
  chinatown: {
    photos: [["./assets/chinatown.jpg", "Calles de Chinatown"], ["./assets/doyers-street.jpg", "Doyers Street"]],
    sights: [["Canal Street", "Zona más intensa de vendedores y souvenirs. Mantener pertenencias controladas y comparar antes de comprar.", "./assets/audit-canal-street.jpg", "Canal Street"], ["Mott Street", "Eje histórico con restaurantes, fruterías y comercios tradicionales; mirar también los letreros y fachadas.", "./assets/audit-mott-street.jpg", "Mott Street"], ["Pell Street", "Calle corta y muy fotogénica que concentra peluquerías, restaurantes y rótulos verticales.", "./assets/pell-street.jpg", "Pell Street"], ["Doyers Street", "Curva histórica conocida como Bloody Angle; hoy reúne pequeños negocios, restaurantes, faroles y arte sobre el pavimento.", "./assets/doyers-street.jpg", "Doyers Street"], ["Columbus Park", "Buen punto para observar la vida del barrio, músicos y partidas de cartas si el tiempo permite.", "./assets/columbus-park.jpg", "Columbus Park"]]
  },
  centralpark: {
    photos: [["./assets/central-park.jpg", "Bethesda Terrace en Central Park"], ["./assets/bow-bridge.jpg", "Bow Bridge sobre The Lake"]],
    sights: [["The Mall", "Paseo recto bajo olmos americanos; caminar hacia Bethesda observando estatuas y artistas callejeros.", "./assets/central-park-mall.jpg", "The Mall & Literary Walk"], ["Bethesda Terrace", "Bajar por las escaleras para ver los azulejos del techo de las arcadas y el eje hacia la fuente.", "./assets/central-park.jpg", "Bethesda Terrace"], ["Bethesda Fountain", "La escultura Angel of the Waters es el centro visual; desde aquí se abre la vista hacia The Lake.", "./assets/audit-bethesda-terrace.jpg", "Bethesda Fountain y Terrace"], ["Bow Bridge", "Puente de hierro fundido con una de las vistas más clásicas del parque y del skyline sobre los árboles.", "./assets/bow-bridge.jpg", "Bow Bridge"], ["The Lake", "Mirar las barcas, The Ramble y los reflejos; no hace falta rodearlo completo antes de The Met.", "./assets/bow-bridge.jpg", "The Lake junto a Bow Bridge"]]
  },
  met: {
    photos: [["./assets/met-dendur.jpg", "Sala 131 · Templo de Dendur"], ["./assets/met-american-wing.jpg", "Charles Engelhard Court · American Wing"]],
    sights: [["Templo de Dendur", "El gran templo egipcio se entiende mejor rodeándolo y observando la luz del espacio.", "./assets/met-dendur.jpg", "Sala 131 · Templo de Dendur"], ["Galerías egipcias", "Seguir la secuencia cronológica sin detenerse en cada vitrina.", "./assets/met-egyptian-galleries.jpg", "Galerías de arte egipcio"], ["Grecia y Roma", "Priorizar el gran patio de esculturas y algunas piezas señaladas.", "./assets/met-greek-roman.jpg", "Leon Levy and Shelby White Court"], ["Pintura europea", "Elegir previamente artistas imprescindibles para evitar recorrer salas sin dirección.", "./assets/met-european-paintings.jpg", "Galerías de pintura europea 1300–1800"], ["American Wing", "Buscar el patio, los interiores históricos y las vistas hacia Central Park.", "./assets/met-american-wing.jpg", "Charles Engelhard Court · American Wing"]]
  },
  roosevelt: {
    photos: [["./assets/roosevelt-island.jpg", "Roosevelt Island · extremo sur"]],
    sights: [["Waterfront oriental", "Camino junto al East River con vistas de Queens y del tráfico fluvial.", "./assets/roosevelt-island.jpg", "Roosevelt Island y el East River"], ["Smallpox Hospital Ruins", "Ruinas neogóticas visibles desde el exterior; no se puede entrar al recinto.", "./assets/audit-smallpox-hospital.jpg", "Smallpox Hospital Ruins"], ["Southpoint Park", "Transición tranquila hacia el extremo sur y buenas perspectivas del skyline.", "./assets/roosevelt-island.jpg", "Southpoint Park y el extremo sur de Roosevelt Island"], ["Four Freedoms Park", "Memorial geométrico de Louis Kahn. Llegar antes del cierre y caminar hasta el busto de Roosevelt.", "./assets/four-freedoms-park.jpg", "Franklin D. Roosevelt Four Freedoms Park"]]
  },
  gantry: {
    photos: [["./assets/gantry-plaza.jpg", "Gantry Plaza State Park"], ["./assets/gantry.jpg", "Pepsi-Cola Sign · Long Island City"]],
    sights: [["Gantry cranes", "Estructuras industriales que servían para cargar vagones en barcazas; enmarcan el skyline.", "./assets/gantry-plaza.jpg", "Gantry cranes frente a Manhattan"], ["Pepsi-Cola Sign", "Letrero histórico de neón trasladado al waterfront; se aprecia mejor al caer la noche.", "./assets/gantry.jpg", "Pepsi-Cola Sign"], ["Long Island City waterfront", "Recorrer los muelles y plataformas para cambiar la perspectiva de Midtown.", "./assets/gantry-plaza.jpg", "Long Island City waterfront"], ["Blue hour", "La combinación de cielo azul profundo y primeras luces de Manhattan suele ser el mejor momento fotográfico.", "./assets/gantry-blue-hour.jpg", "Blue hour desde Gantry Plaza State Park"]]
  },
  dumbo: {
    photos: [["./assets/audit-washington-street-dumbo.jpg", "Washington Street · DUMBO"], ["./assets/brooklyn-bridge-park.jpg", "Brooklyn Bridge Park"]],
    sights: [["Washington Street", "La vista clásica del Manhattan Bridge entre edificios; respetar la circulación y fotografiar desde la acera.", "./assets/audit-washington-street-dumbo.jpg", "Washington Street y Manhattan Bridge"], ["Pebble Beach", "Playa de piedras con perspectiva abierta de Lower Manhattan y Brooklyn Bridge.", "./assets/pebble-beach.jpg", "Pebble Beach · Brooklyn Bridge Park"], ["Jane’s Carousel", "Carrusel histórico dentro de un pabellón de cristal; verlo desde el paseo aunque no se suban.", "./assets/janes-carousel.jpg", "Jane’s Carousel"], ["Fulton Ferry Landing", "Antiguo punto de ferry y mirador hacia Manhattan; aquí también se toma NYC Ferry.", "./assets/fulton-ferry-landing.jpg", "Fulton Ferry Landing"], ["Brooklyn Bridge Park", "Muelles, jardines y bancas para caminar sin convertir la visita en una lista de monumentos.", "./assets/brooklyn-bridge-park.jpg", "Brooklyn Bridge Park"]]
  },
  williamsburg: {
    photos: [["./assets/domino-park-correct.jpg", "Domino Park y la antigua refinería"], ["./assets/williamsburg.jpg", "Williamsburg waterfront"]],
    sights: [["Domino Park", "Antigua refinería Domino Sugar: observar grúas, conductos conservados, paseo elevado y vistas de Manhattan.", "./assets/domino-park-correct.jpg", "Domino Park y Domino Sugar Refinery"], ["Bedford Avenue", "Eje comercial para recorrer tiendas, cafés y el movimiento cotidiano del barrio.", "./assets/bedford-avenue.jpg", "Bedford Avenue"], ["Marsha P. Johnson State Park", "Waterfront gratuito con restos del antiguo muelle ferroviario y vistas del skyline.", "./assets/marsha-p-johnson.jpg", "Marsha P. Johnson State Park"], ["Earwax Records", "Tienda de discos independiente en North 9th Street; revisar novedades y usados sin convertirla en una parada larga.", "./assets/earwax-records.jpg", "Earwax Records"], ["Face Records NYC", "Selección especialmente interesante de importaciones japonesas, jazz, city pop y vinilos usados.", "./assets/face-records.jpg", "Face Records NYC"], ["Music Hall of Williamsburg", "Pasar por el exterior para reconocer uno de los principales recintos de conciertos del barrio.", "./assets/music-hall-williamsburg.jpg", "Music Hall of Williamsburg"], ["Brooklyn Bowl", "Recinto que combina conciertos y boliche dentro de un edificio industrial sobre Wythe Avenue.", "./assets/brooklyn-bowl.jpg", "Brooklyn Bowl"]]
  },
  greenpoint: {
    photos: [["./assets/transmitter-park.jpg", "WNYC Transmitter Park · Greenpoint"]],
    sights: [["West Street", "Antiguos edificios industriales mezclados con estudios, tiendas y residencias.", "./assets/west-street-greenpoint.webp", "West Street · arquitectura industrial de Greenpoint"], ["Yoseka Stationery", "Tienda para probar plumas y papel con calma; reservar la hora completa prevista.", "./assets/yoseka.jpg", "Yoseka Stationery"], ["WNYC Transmitter Park", "Parque construido en una antigua estación de radio con muelle y vistas directas de Manhattan.", "./assets/transmitter-park.jpg", "WNYC Transmitter Park"], ["Greenpoint waterfront", "Caminar sin ruta rígida y observar el contraste entre el barrio residencial y el borde industrial.", "./assets/transmitter-park.jpg", "Greenpoint waterfront"]]
  },
  herald: {
    photos: [["./assets/herald-square.jpg", "Herald Square y Empire State Building"]],
    sights: [["Herald Square", "Pequeña plaza en la intersección de Broadway, Sixth Avenue y 34th Street.", "./assets/herald-square.jpg", "Herald Square"], ["Macy’s", "Ver la fachada histórica y los escaparates; entrar solo si quieren convertirlo en parada de compras.", "./assets/macys-herald-square.jpg", "Macy’s Herald Square"], ["Empire State Building", "Buscar una perspectiva desde 34th Street y otra desde Broadway para apreciar el remate Art Déco.", "./assets/audit-empire-state.jpg", "Empire State Building"]]
  },
  koreatown: {
    photos: [["./assets/koreatown.jpg", "Korea Way · West 32nd Street"]],
    sights: [["W 32nd Street", "Calle principal con letreros verticales, tiendas de belleza, karaoke y restaurantes en varios pisos.", "./assets/koreatown.jpg", "West 32nd Street · Korea Way"], ["Grace Street", "Parada opcional para café, té, shaved ice o postre.", "./assets/grace-street.jpg", "Grace Street Coffee & Desserts"], ["Woorijip", "Opción informal para probar varios platos coreanos sin hacer una comida larga.", "./assets/woorijip.jpg", "Woorijip · West 32nd Street"], ["Anytime Kitchen", "Alternativa para sentarse con más calma si el horario y el hambre lo permiten.", "./assets/anytime-kitchen.jpg", "Anytime Kitchen · Koreatown"]]
  },
  amnh: {
    photos: [["./assets/amnh-dinosaurs.jpg", "Fossil Halls · American Museum of Natural History"], ["./assets/amnh-gilder.jpg", "Richard Gilder Center"]],
    sights: [["Dinosaurios", "Priorizar los grandes esqueletos y fósiles más representativos sin detenerse en todas las vitrinas.", "./assets/amnh-dinosaurs.jpg", "Fossil Halls · dinosaurios"], ["Hall of Human Origins", "Recorrido claro por evolución humana, herramientas y reconstrucciones.", "./assets/amnh-human-origins.jpg", "Spitzer Hall of Human Origins"], ["Meteoritos", "Buscar el meteorito Willamette y las piezas relacionadas con ciencias planetarias.", "./assets/amnh-meteorite.jpg", "Cullman Hall of the Universe · meteorito"], ["Gilder Center", "Arquitectura contemporánea, insectario y nuevas galerías conectadas con el museo histórico.", "./assets/amnh-gilder.jpg", "Richard Gilder Center"], ["Rose Center", "La esfera de Hayden domina el espacio; decidir con anticipación si añadirán una función del planetario.", "./assets/rose-center.jpg", "Rose Center for Earth and Space · Hayden Sphere"]]
  }
};

Object.entries(groupedPlaceDetails).forEach(([id, enhancement]) => Object.assign(placeDetails[id], enhancement));

Object.assign(placeDetails, {
  highline: {
    ...guide("High Line", "Día 5 · norte a sur", "Parque elevado construido sobre una antigua vía ferroviaria. La ruta entra en Hudson Yards y desciende hacia Chelsea.", ["Entrar por 30th Street", "Caminar hacia el sur para evitar retrocesos", "Reservar alrededor de 65 minutos", "Llevar agua y protección solar; hay pocos tramos cubiertos"], "High Line 30th Street Entrance New York"),
    photos: [["./assets/high-line-tracks.jpg", "High Line · antiguos rieles"], ["./assets/high-line-10th-square.jpg", "10th Avenue Square"]],
    sights: [["Hudson Yards + Vessel", "Antes de entrar, mirar el nuevo conjunto urbano y el exterior de Vessel; no es necesario añadir otra visita.", "./assets/vessel.jpg", "Vessel · Hudson Yards"], ["30th Street Grove", "Inicio más tranquilo con vegetación, antiguos rieles y vistas hacia el Hudson.", "./assets/high-line-tracks.jpg", "High Line · rieles y plantaciones"], ["10th Avenue Square", "Gradas y gran ventanal sobre la avenida; buen punto para detenerse y observar la ciudad.", "./assets/high-line-10th-square.jpg", "10th Avenue Square"], ["Chelsea Market Passage", "Tramo donde la vía atraviesa edificios industriales y conecta con el acceso al mercado.", "./assets/high-line.jpg", "High Line a través de Chelsea"], ["Gansevoort Woodland", "Final arbolado cerca del Meatpacking District y del Whitney Museum.", "./assets/high-line-gansevoort.jpg", "Gansevoort Woodland"]]
  },
  chelsea: {
    ...guide("Chelsea Market + Meatpacking", "Día 5 · 16:35–17:15", "Transición natural desde High Line hacia el Village, pasando por la antigua fábrica Nabisco y el distrito de antiguos almacenes.", ["Chelsea Market: visita rápida de 25 minutos", "Snack o café solo si no provoca retraso", "Meatpacking: paseo exterior de unos 15 minutos", "Las calles adoquinadas pueden ser incómodas con calzado poco estable", "Salir hacia el Village alrededor de las 17:15"], "Chelsea Market New York"),
    photos: [["./assets/chelsea-market-interior.jpg", "Interior de Chelsea Market"], ["./assets/meatpacking.jpg", "Gansevoort Street · Meatpacking District"]],
    sights: [["Chelsea Market", "Mercado dentro de la antigua fábrica de Nabisco. Recorrer el pasillo principal, observar detalles industriales y usarlo como descanso.", "./assets/chelsea-market-interior.jpg", "Chelsea Market · pasillo principal"], ["Meatpacking District", "Calles adoquinadas, antiguos almacenes y arquitectura contemporánea alrededor de Gansevoort Street.", "./assets/meatpacking.jpg", "Gansevoort Street · Meatpacking District"], ["Whitney Museum exterior", "Edificio de Renzo Piano al final de High Line; verlo desde fuera salvo que decidan sustituir otra actividad.", "./assets/whitney.jpg", "Whitney Museum of American Art"], ["Little Island", "Parque sobre pilotes visible desde el waterfront; solo añadirlo si llevan buen ritmo.", "./assets/little-island.jpg", "Little Island"]]
  },
  soho: {
    ...guide("SoHo / Nolita + NYON", "Día 6 · opción B", "Paseo de 30–40 minutos por arquitectura cast-iron, calles comerciales y Nolita antes de continuar hacia Bowery y Lower East Side.", ["Entrar por Broadway, Prince o Greene según la ruta desde Morgan", "No convertirlo en un recorrido exhaustivo de compras", "New York or Nowhere forma parte de este mismo bloque", "Salir hacia Supreme alrededor de las 17:50", "Proteger la llegada a Katz’s alrededor de las 18:15"], "SoHo New York"),
    photos: [["./assets/soho-greene-street.jpg", "Greene Street · SoHo Cast-Iron Historic District"], ["./assets/nolita.webp", "Nolita · Elizabeth Street"]],
    sights: [["Broadway + Prince Street", "Ejes comerciales para entrar al barrio y orientar el paseo sin intentar recorrerlo completo.", "./assets/soho-greene-street.jpg", "SoHo Historic District"], ["Greene Street · cast-iron", "Fijarse en columnas, grandes ventanas y fachadas prefabricadas de hierro, además de los tramos adoquinados.", "./assets/soho-greene-street.jpg", "Cast-iron architecture · Greene Street"], ["Nolita", "Calles de menor escala, boutiques independientes y transición natural hacia Lafayette y Bowery.", "./assets/nolita.webp", "Nolita · Elizabeth Street"], ["New York or Nowhere", "Tienda de ropa y objetos inspirados en la ciudad. Dirección: 250 Lafayette Street.", "./assets/new-york-or-nowhere.jpg", "New York or Nowhere · 250 Lafayette Street"]]
  }
});

const dayRoutes = [
  [{label:"Midtown clásico", url:"https://www.google.com/maps/dir/?api=1&origin=Bryant+Park%2C+New+York&destination=Rockefeller+Center%2C+New+York&travelmode=walking&waypoints=Grand+Central+Terminal%2C+New+York%7CSt.+Patrick%27s+Cathedral%2C+New+York"}, {label:"Nintendo → LEGO → UNIQLO", url:"https://www.google.com/maps/dir/?api=1&origin=Nintendo+NY%2C+New+York&destination=UNIQLO+Fifth+Avenue%2C+New+York&travelmode=walking&waypoints=LEGO+Store+Fifth+Avenue%2C+New+York"}],
  [{label:"Battery → Printemps → Seaport", url:"https://www.google.com/maps/dir/?api=1&origin=The+Battery%2C+New+York&destination=Pier+17%2C+New+York&travelmode=walking&waypoints=Charging+Bull%7CFederal+Hall%7CPrintemps+New+York%7CStone+Street"}, {label:"Oculus → Memorial → Centre 360 → Chinatown", url:"https://www.google.com/maps/dir/?api=1&origin=Oculus%2C+New+York&destination=Mott+Street%2C+New+York&travelmode=walking&waypoints=9%2F11+Memorial%7CCity+Hall%2C+New+York"}],
  [{label:"Central Park + UES", url:"https://www.google.com/maps/dir/?api=1&origin=The+Mall+Central+Park&destination=Lexington+Candy+Shop%2C+New+York&travelmode=walking&waypoints=Bethesda+Terrace%7CThe+Metropolitan+Museum+of+Art"}, {label:"Roosevelt Island + LIC", url:"https://www.google.com/maps/dir/?api=1&origin=Roosevelt+Island+Tramway&destination=Gantry+Plaza+State+Park&travelmode=transit&waypoints=Four+Freedoms+Park"}],
  [{label:"Bridge + DUMBO", url:"https://www.google.com/maps/dir/?api=1&origin=Brooklyn+Bridge+Pedestrian+Entrance+Manhattan&destination=Fulton+Ferry+Landing&travelmode=walking&waypoints=Washington+Street+DUMBO%7CBrooklyn+Bridge+Park%7CPebble+Beach"}, {label:"Bed-Stuy opcional", url:"https://www.google.com/maps/dir/?api=1&origin=Fulton+Ferry+Landing&destination=Do+the+Right+Thing+Way+Brooklyn&travelmode=transit"}, {label:"Williamsburg + Greenpoint", url:"https://www.google.com/maps/dir/?api=1&origin=Domino+Park&destination=WNYC+Transmitter+Park&travelmode=walking&waypoints=Bedford+Avenue%7CMarsha+P.+Johnson+State+Park%7CYoseka+Stationery"}],
  [{label:"MoMA → Primark → High Line", url:"https://www.google.com/maps/dir/?api=1&origin=MoMA%2C+New+York&destination=High+Line+30th+Street+Entrance&travelmode=walking&waypoints=Primark+Herald+Square%7CEmpire+State+Building"}, {label:"High Line norte → sur", url:"https://www.google.com/maps/dir/?api=1&origin=High+Line+30th+Street+Entrance&destination=High+Line+Gansevoort+Street&travelmode=walking"}, {label:"Chelsea Market → Meatpacking", url:"https://www.google.com/maps/dir/?api=1&origin=High+Line+Gansevoort+Street&destination=Whitney+Museum+of+American+Art&travelmode=walking&waypoints=Chelsea+Market"}, {label:"Village + cuatro tiendas", url:"https://www.google.com/maps/dir/?api=1&origin=Whitney+Museum+of+American+Art&destination=The+Locavore+Variety+Store&travelmode=walking&waypoints=an.me+249+Bleecker+Street%7CGreenwich+Letterpress%7CC.O.+Bigelow"}, {label:"Village → Top of the Rock → Times Square", url:"https://www.google.com/maps/dir/?api=1&origin=The+Locavore+Variety+Store&destination=Times+Square%2C+New+York&travelmode=transit&waypoints=Top+of+the+Rock"}],
  [{label:"AMNH → Zabar’s → Riverside Park", url:"https://www.google.com/maps/dir/?api=1&origin=American+Museum+of+Natural+History&destination=Riverside+Park+West+79th+Street&travelmode=walking&waypoints=Zabar%27s"}, {label:"Riverside Park → Coney Island", url:"https://www.google.com/maps/dir/?api=1&origin=Riverside+Park+West+79th+Street&destination=Coney+Island+Boardwalk%2C+Brooklyn&travelmode=transit"}],
  [{label:"Highbridge Hotel to JFK", url:"https://www.google.com/maps/dir/?api=1&origin=Highbridge+Hotel%2C+Bronx&destination=John+F.+Kennedy+International+Airport&travelmode=driving"}]
];

const mealOptions = {
  "day1-lunch": {
    kicker: "~13:30 · Midtown",
    title: "Comida ligera",
    intro: "Tres opciones flexibles según dónde termine el paseo. Los tiempos a pie son aproximados desde Bryant Park.",
    options: [
      ["Ole & Steen", "Danish bakery", "1–3 min", "80 W 40th St · junto a Bryant Park", "Panadería danesa tranquila, con café y espacio para sentarse antes de volver al hotel.", "Smoked salmon roll, zucchini toastie o ensalada; para compartir, un cardamom bun.", "https://oleandsteen.us/store/132030-bryant-park", "Ole %26 Steen Bryant Park 80 W 40th St New York"],
      ["The Kati Roll Company", "Indian street food", "3–5 min", "49 W 39th St · detrás de Bryant Park", "Rollos indios calientes, rápidos y fáciles de comer durante el recorrido.", "Chicken tikka o aloo masala roll. Con roti integral queda más ligero.", "https://www.thekatirollcompany.com/our-food/", "The Kati Roll Company 49 W 39th St New York"],
      ["Los Tacos No. 1", "Tijuana-style tacos", "8–12 min", "229 W 43rd St · Times Square", "Taquería rápida que funciona especialmente bien si el paseo termina hacia Times Square.", "Dos tacos por persona: adobada, carne asada o nopal; también hay aguas frescas.", "https://www.lostacos1.com/menu/food-drinks/", "Los Tacos No. 1 229 W 43rd St New York"]
    ]
  },
  "day1-dinner": {
    kicker: "~22:30 · Columbus Circle",
    title: "Cena",
    intro: "Opciones cerca de Dizzy’s para decidir según la hora de salida, el hambre y el ambiente que prefieran.",
    options: [
      ["P.J. Clarke’s", "Old New York tavern", "4–6 min", "44 W 63rd St · Lincoln Square", "Taberna neoyorquina clásica, cómoda para cerrar la noche con una cena completa.", "Hamburguesa, chicken paillard o ensalada mediterránea. Los jueves suele cerrar a medianoche.", "https://pjclarkes.com/menu/lincoln-square/", "P.J. Clarke's 44 W 63rd St New York"],
      ["The Smith", "American brasserie", "5–7 min", "1900 Broadway · 63rd St", "Brasserie animada frente a Lincoln Center, con menú amplio y mesas para sentarse con calma.", "Mac & cheese para compartir, rigatoni alla vodka, ensalada o burger. Los jueves suele cerrar a las 23:00.", "https://thesmithrestaurant.com/location/lincoln-square/", "The Smith Lincoln Square 1900 Broadway New York"],
      ["Empanada Mama", "Latin · late night", "15–18 min", "765 9th Ave · Hell’s Kitchen", "La alternativa informal si el concierto termina tarde: muchas empanadas y servicio orientado a la noche.", "Dos o tres empanadas por persona; combinar una de carne o pollo con una vegetariana.", "https://www.empanadamama.com/hells-kitchen-menu", "Empanada Mama 765 9th Ave New York"]
    ]
  },
  "day2-lunch": {
    kicker: "Día 2 · Chinatown",
    title: "Comida",
    intro: "Dos alternativas finales: Uncle Lou como primera recomendación o Wo Hop para una experiencia más old-school.",
    options: [
      ["Uncle Lou 快樂人", "Cantonese · plan A", "US$20–30", "73 Mulberry St", "Cantonés de barrio, casual y pensado para compartir.", "Char siu, pollo, arroz o noodles y algún vegetal para compartir.", "https://www.unclelounyc.com/", "Uncle Lou 73 Mulberry St New York"],
      ["Wo Hop", "Old-school Chinatown", "US$20–30", "17 Mott St", "El ambiente clásico de restaurante chino neoyorquino sin pretensiones.", "Elegir platos cantoneses al centro, arroz y noodles.", "https://www.google.com/maps/search/?api=1&query=Wo+Hop+17+Mott+St+New+York", "Wo Hop 17 Mott St New York"]
    ]
  },
  "day3-lunch": {
    kicker: "Día 3 · Upper East Side", title: "Comida casual", intro: "Bloque flexible; puede convertirse en paseo si ya comieron en The Met.",
    options: [
      ["Home Kitchen", "American casual", "Cerca", "E 84th St", "Comida americana informal para sentarse sin convertirlo en evento.", "Elegir un plato sencillo o compartir.", "https://www.google.com/maps/search/?api=1&query=Home+Kitchen+E+84th+St+New+York", "Home Kitchen E 84th St New York"],
      ["Sojourn Social", "Lively casual", "Cerca", "Upper East Side", "Más animado, pero todavía informal.", "Un plato ligero o algo para compartir.", "https://www.google.com/maps/search/?api=1&query=Sojourn+Social+New+York", "Sojourn Social New York"],
      ["787 Coffee", "Optional coffee", "E 80th St", "Upper East Side", "Café opcional, no una actividad obligatoria.", "Café puertorriqueño para llevar.", "https://www.google.com/maps/search/?api=1&query=787+Coffee+E+80th+St+New+York", "787 Coffee E 80th St New York"]
    ]
  },
  "day3-dinner": {
    kicker: "Día 3 · Long Island City", title: "Cena", intro: "Opciones casuales o medias después de Gantry Plaza.",
    options: [
      ["Café Henri", "French casual · plan A", "US$20–30", "Long Island City", "Relajado y apropiado después de un día largo caminando.", "Crêpe salada, ensalada, sandwich o plato del día.", "https://www.cafehenrilic.com/", "Cafe Henri Long Island City"],
      ["Blend on the Water", "Latin American", "Waterfront", "Long Island City", "Pegado al waterfront y con ambiente más animado.", "Plato latinoamericano para compartir o principal.", "https://www.blendonthewater.com/", "Blend on the Water Long Island City"],
      ["4747LIC", "Contemporary", "Higher price", "Long Island City", "Una alternativa algo más elaborada.", "Revisar menú y reserva ese día.", "https://www.google.com/maps/search/?api=1&query=4747LIC", "4747LIC Long Island City"]
    ]
  },
  "day4-lunch": {
    kicker: "Día 4 · DUMBO", title: "Comida", intro: "Pizza como primera elección antes de tomar el ferry.",
    options: [
      ["Juliana’s Pizza", "Brooklyn pizza · plan A", "Sit-down", "Old Fulton St", "La elección clásica y más propia de la zona.", "Pizza para compartir.", "https://julianaspizza.com/", "Juliana's Pizza Brooklyn"],
      ["Time Out Market", "Food hall", "Flexible", "DUMBO", "Útil si cada persona quiere algo diferente; además tiene vistas.", "Elegir entre los puestos disponibles.", "https://www.timeoutmarket.com/newyork/", "Time Out Market New York"],
      ["Shake Shack DUMBO", "Quick", "Fast option", "DUMBO", "Opción rápida para recuperar tiempo.", "Burger o chicken bites.", "https://shakeshack.com/", "Shake Shack DUMBO"]
    ]
  },
  "day4-dinner": {
    kicker: "Día 4 · Greenpoint", title: "Cena", intro: "Final casual en el barrio; Kirbee’s sigue como opción provisional.",
    options: [
      ["Kirbee’s", "Texas BBQ · provisional", "New / demand possible", "Greenpoint", "Brisket, costillas y acompañamientos con influencia tex-mex.", "Brisket y dos acompañamientos para compartir.", "https://www.google.com/maps/search/?api=1&query=Kirbee%27s+Greenpoint", "Kirbee's Greenpoint"],
      ["Cena libre en Greenpoint", "Pizza · Polish · American", "Flexible", "Greenpoint", "Elegir según lo que encuentren durante el paseo.", "Pizza, hamburguesa o comida polaca.", "https://www.google.com/maps/search/?api=1&query=casual+dinner+Greenpoint+Brooklyn", "casual dinner Greenpoint Brooklyn"]
    ]
  },
  "day5-lunch": {
    kicker: "Día 5 · MoMA", title: "Comida", intro: "Kin Ramen es el plan A; Bill’s queda como alternativa.",
    options: [
      ["Kin Ramen", "Ramen · plan A", "US$20–30", "Cerca del MoMA", "Sentarse 35–45 minutos y comer bien.", "Un ramen por persona.", "https://www.google.com/maps/search/?api=1&query=Kin+Ramen+New+York", "Kin Ramen New York"],
      ["Bill’s Bar & Burger", "Burgers", "US$20–30", "W 51st St", "Alternativa casual si no quieren ramen.", "Hamburguesa y acompañamiento.", "https://www.billsbarandburger.com/", "Bill's Bar and Burger W 51st New York"]
    ]
  },
  "day5-dinner": {
    kicker: "Día 5 · Rockefeller Center", title: "Cena", intro: "Elegir al salir de Top of the Rock según la hora y energía.",
    options: [
      ["Cena por Rockefeller Center", "Flexible", "Nearby", "Midtown", "Mantener la decisión abierta hasta confirmar el horario del mirador.", "Algo casual o ligero.", "https://www.google.com/maps/search/?api=1&query=casual+dinner+Rockefeller+Center", "casual dinner Rockefeller Center"]
    ]
  },
  "day6-lunch": {
    kicker: "Día 6 · Upper West Side", title: "Comida clásica", intro: "Deli judío después del museo; Zabar’s funciona como respaldo.",
    options: [
      ["Barney Greengrass", "Jewish deli · plan A", "Classic", "Amsterdam Ave & 86th", "Institución del Upper West Side conocida por pescado ahumado y deli.", "Bagel con nova/salmón o un sándwich para compartir.", "https://www.barneygreengrass.com/", "Barney Greengrass New York"],
      ["Zabar’s Café", "Quick backup", "Casual", "Broadway & 80th", "Alternativa si Barney Greengrass está lleno.", "Bagel con nova y café.", "https://www.zabars.com/zabars-cafe-pickup.html", "Zabar's Cafe New York"]
    ]
  },
  "day6-dinner": {
    kicker: "Día 6 · Lower East Side", title: "Katz’s Delicatessen", intro: "Cena temprana si NYON y Supreme quedan pendientes.",
    options: [
      ["Katz’s Delicatessen", "NYC classic", "~17:00", "205 E Houston St", "El clásico del Lower East Side fuera del pico fuerte del almuerzo.", "Pastrami on rye para compartir, pickles y una bebida.", "https://katzsdelicatessen.com/", "Katz's Delicatessen New York"]
    ]
  }
};

const transportDays = [
  { day: "Día 1 · jueves 10", summary: "JFK → Highbridge → Midtown → Bronx → Columbus Circle", legs: [
    ["JFK → Highbridge Hotel", "AirTrain a Jamaica + E hasta 7 Av + D hasta 167 St. Con maletas, comparar con taxi/rideshare.", "JFK Airport", "Highbridge Hotel Bronx"],
    ["Midtown → hotel", "D desde 42 St–Bryant Park hasta 167 St; caminar al hotel.", "Bryant Park New York", "Highbridge Hotel Bronx"],
    ["Yankee Stadium → Dizzy’s", "D desde 161 St–Yankee Stadium hasta 59 St–Columbus Circle.", "Yankee Stadium", "Dizzy's Club New York"],
    ["Dizzy’s → hotel", "D desde 59 St–Columbus Circle hasta 167 St.", "Dizzy's Club New York", "Highbridge Hotel Bronx"]
  ]},
  { day: "Día 2 · viernes 11", summary: "Highbridge → Lower Manhattan → Printemps → Seaport o ferry → Chinatown → Bronx", legs: [
    ["Hotel → The Battery", "D desde 167 St hasta 145 St; A hasta Fulton St y caminar hacia Battery.", "Highbridge Hotel Bronx", "The Battery New York"],
    ["Chinatown → hotel", "D directo desde Grand St hasta 167 St. Es el regreso más simple antes del juego.", "Grand Street Station Manhattan", "Highbridge Hotel Bronx"],
    ["Hotel → Yankee Stadium", "Caminar o revisar el autobús local en Maps según energía y servicio del momento.", "Highbridge Hotel Bronx", "Yankee Stadium"]
  ]},
  { day: "Día 3 · sábado 12", summary: "Bronx → Central Park/The Met → Tram → Roosevelt Island → LIC", legs: [
    ["Hotel → Central Park", "D desde 167 St hasta 59 St–Columbus Circle; entrar al parque desde el suroeste.", "Highbridge Hotel Bronx", "The Mall Central Park"],
    ["Roosevelt Island → LIC", "F desde Roosevelt Island a 21 St–Queensbridge o ferry según el recorrido confirmado.", "Roosevelt Island", "Gantry Plaza State Park"],
    ["LIC → hotel", "7 desde Vernon Blvd–Jackson Av hasta 42 St; caminar a Bryant Park y tomar D hasta 167 St.", "Gantry Plaza State Park", "Highbridge Hotel Bronx"]
  ]},
  { day: "Día 4 · domingo 13", summary: "Bronx → Brooklyn Bridge → ferry → Williamsburg/Greenpoint", legs: [
    ["Hotel → Brooklyn Bridge", "D desde 167 St a Broadway–Lafayette; 6 hasta Brooklyn Bridge–City Hall.", "Highbridge Hotel Bronx", "Brooklyn Bridge Pedestrian Entrance Manhattan"],
    ["DUMBO → Williamsburg", "NYC Ferry; Fulton Ferry Landing primero se visita y después funciona como punto de embarque. Revisar ruta East River A/B.", "Fulton Ferry Landing", "North Williamsburg Ferry Landing"],
    ["Bed-Stuy opcional", "El desvío a Do the Right Thing Way requiere transporte y añade 60–90 minutos; activarlo solo si el día va adelantado.", "Fulton Ferry Landing", "Do the Right Thing Way Brooklyn"],
    ["Greenpoint → hotel", "G desde Greenpoint Av a Court Sq; 7 a 42 St–Bryant Park y D a 167 St.", "WNYC Transmitter Park", "Highbridge Hotel Bronx"]
  ]},
  { day: "Día 5 · lunes 14", summary: "Bronx → MoMA → Primark → High Line → Chelsea Market → Meatpacking → Village → Top of the Rock", legs: [
    ["Hotel → MoMA", "D desde 167 St hasta 7 Av; caminar hacia el museo.", "Highbridge Hotel Bronx", "Museum of Modern Art New York"],
    ["Empire State → High Line", "Caminar hacia el acceso de 30th St / Hudson Yards; Koreatown solo entra si hay margen real.", "Empire State Building", "High Line 30th Street Entrance"],
    ["High Line → Village", "Salir por Gansevoort; entrar brevemente a Chelsea Market, cruzar Meatpacking y continuar por Bleecker hacia las cuatro tiendas.", "High Line Gansevoort Street", "The Locavore Variety Store"],
    ["Village → Top of the Rock", "Usar metro desde West 4 St al terminar en Sixth Avenue; confirmar la ruta más rápida en Maps.", "The Locavore Variety Store", "Top of the Rock New York"],
    ["Times Square → hotel", "Caminar a 42 St–Bryant Park y tomar D directo hasta 167 St.", "Times Square New York", "Highbridge Hotel Bronx"]
  ]},
  { day: "Día 6 · martes 15", summary: "Bronx → Upper West Side → Riverside Park → Coney Island o Morgan/SoHo/LES", legs: [
    ["Hotel → Natural History", "D desde 167 St a 145 St; cambiar al C hasta 81 St–Museum of Natural History.", "Highbridge Hotel Bronx", "American Museum of Natural History"],
    ["Zabar’s → Riverside Park", "Caminar hacia el Hudson y dedicar solo 15–20 minutos al waterfront antes de iniciar el traslado.", "Zabar's New York", "Riverside Park West 79th Street"],
    ["Riverside Park → Coney Island", "Ruta larga en metro; confirmar servicio y calcular aproximadamente 70–80 minutos por trayecto.", "Riverside Park West 79th Street", "Coney Island Boardwalk Brooklyn"],
    ["Riverside Park → Morgan", "Bajar hacia Midtown y continuar a Madison Avenue; Maps definirá la combinación más rápida.", "Riverside Park West 79th Street", "The Morgan Library and Museum"],
    ["Morgan → SoHo / Nolita", "Bajar a Prince Street; caminar por Greene, pasar por NYON y continuar hacia Supreme y Katz’s.", "The Morgan Library and Museum", "New York or Nowhere"],
    ["Katz’s / LES → hotel", "F desde 2 Av a Broadway–Lafayette; cambiar al D hasta 167 St.", "Katz's Delicatessen", "Highbridge Hotel Bronx"],
    ["Upper West Side → hotel", "C desde 81 St a 145 St; cambiar al D hasta 167 St.", "Zabar's New York", "Highbridge Hotel Bronx"]
  ]},
  { day: "Día 7 · miércoles 16", summary: "Highbridge → JFK", legs: [
    ["Hotel → JFK", "Por la salida de madrugada y el equipaje, taxi/rideshare reservado es el plan principal.", "Highbridge Hotel Bronx", "JFK Airport"],
    ["Alternativa en transporte", "D a 145 St; A a Howard Beach–JFK; AirTrain a la terminal. Confirmar obras nocturnas la víspera.", "Highbridge Hotel Bronx", "JFK Airport"]
  ]}
];

function transitUrl(origin, destination) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=transit`;
}

const app = document.querySelector("#app");
const navItems = [...document.querySelectorAll(".nav-item")];

function selectedDay() {
  const index = Number(sessionStorage.getItem("selectedDay") || 0);
  return { index, day: tripDays[index] || tripDays[0] };
}

function backToDayLabel() {
  return `← Regresar al Día ${selectedDay().index + 1}`;
}

function placeBackLabel() {
  return sessionStorage.getItem("detailOrigin") === "places" ? "← Regresar a Lugares" : backToDayLabel();
}

function dayStrip() {
  const selected = Number(sessionStorage.getItem("selectedDay") || 0);
  const shortDays = ["Jue", "Vie", "Sáb", "Dom", "Lun", "Mar", "Mié"];
  return `<div class="day-strip-wrap"><div class="day-strip" aria-label="Días del viaje">${tripDays.map((day, i) => `
    <button class="day-chip ${i === selected ? "active" : ""}" data-day="${i}" aria-label="Día ${i + 1}, septiembre ${day.number}">
      <span class="day-number">${day.number}</span><span class="day-name">${shortDays[i]}</span>
    </button>`).join("")}</div><span class="day-strip-hint">Desliza para ver todos los días →</span></div>`;
}

function tripContext() {
  const today = new Date();
  const start = new Date(2026, 8, 10);
  const end = new Date(2026, 8, 16, 23, 59, 59);
  const oneDay = 86400000;
  if (today < start) return { index: 0, kicker: `Faltan ${Math.max(1, Math.ceil((start - today) / oneDay))} días`, title: "Tu viaje a Nueva York", theme: "El itinerario ya está listo", button: "Ver el primer día →" };
  if (today > end) return { index: 0, kicker: "Guía del viaje", title: "Nueva York, día por día", theme: "Septiembre 10–16 · 2026", button: "Abrir el itinerario →" };
  const index = Math.min(6, Math.floor((today - start) / oneDay));
  return { index, kicker: `Hoy · Día ${index + 1}`, title: "Tu día en Nueva York", theme: tripDays[index].theme, button: "Ver el itinerario de hoy →" };
}

function homeView() {
  const context = tripContext();
  const day = tripDays[context.index];
  const first = timelineForDay(context.index)[0];
  return `<div class="fade-in">
    <section class="hero">
      <img class="skyline" src="./assets/nyc-skyline.png" alt="Ilustración panorámica del skyline de Nueva York">
      <div class="hero-copy"><h1>NEW YORK</h1><p class="dates">September 10–16 · 2026</p></div>
    </section>
    <section class="section">
      <p class="section-kicker">${context.kicker}</p>
      <h2 class="section-title">${context.title}</h2>
      <p class="section-note">${context.theme}</p>
      <article class="today-card">
        <p class="today-date">Día ${context.index + 1} · Septiembre ${day.number}</p>
        <p class="today-theme">${day.theme}</p>
        <p class="next-label">Primera parada</p>
        <div class="next-row"><span class="next-time">${first[0]}</span><span class="next-place">${first[1]}</span><span class="next-detail">${first[2]}</span></div>
        <button class="text-button" data-action="current-day" data-current-day="${context.index}">${context.button}</button>
      </article>
    </section>
    ${dayStrip()}
  </div>`;
}

function periodFor(time) {
  const match = String(time).match(/(\d{1,2}):/);
  if (!match) return "Opciones";
  const hour = Number(match[1]);
  if (hour === 0 || hour >= 20) return "Noche";
  if (hour <= 11) return "Mañana";
  if (hour <= 14) return "Mediodía";
  return "Tarde";
}

function itineraryView() {
  const index = Number(sessionStorage.getItem("selectedDay") || 0);
  const day = tripDays[index] || tripDays[0];
  const day2Option = sessionStorage.getItem("day2Option") || "urban";
  const day6Option = sessionStorage.getItem("day6Option") === "manhattan" ? "manhattan" : "coney";
  const timeline = timelineForDay(index);
  const routes = index === 1 && day2Option === "ferry" ? day2FerryRoutes : index === 5 && day6Option === "manhattan" ? day6ManhattanRoutes : (dayRoutes[index] || []);
  const displayedTheme = index === 1 && day2Option === "ferry" ? "Printemps · Staten Island Ferry · 9/11 · Chinatown · Subway Series" : index === 5 && day6Option === "manhattan" ? "Natural History · Riverside Park · Morgan Library · SoHo · Katz’s" : day.theme;
  return `<div class="fade-in">
    <header class="page-header">
      <button class="back" data-action="home">← New York</button>
      <p class="section-kicker">Día ${index + 1}</p>
      <h1>${day.month} ${day.number}</h1>
      <p class="subtitle">${displayedTheme}</p>
      <img class="mini-skyline" src="./assets/nyc-skyline.png" alt="">
    </header>
    ${dayStrip()}
    ${index === 1 ? `<section class="day2-options" aria-label="Versiones del Día 2"><p class="section-kicker">Elige el enfoque del día</p><div class="day2-option-grid">
      <button class="${day2Option === "urban" ? "active" : ""}" data-day2-option="urban"><span>Opción 1</span><strong>Recorrido urbano completo</strong><small>Printemps · Seaport · Pier 17</small></button>
      <button class="${day2Option === "ferry" ? "active" : ""}" data-day2-option="ferry"><span>Opción 2</span><strong>Mejor vista de la Estatua</strong><small>Printemps · Staten Island Ferry</small></button>
    </div><p class="option-status">${day2Option === "ferry" ? "Activa: ferry y vista cercana de la Estatua" : "Activa: paseo urbano completo por Lower Manhattan"}</p></section>` : ""}
    ${index === 5 ? `<section class="day2-options" aria-label="Versiones del Día 6"><p class="section-kicker">Elige el enfoque de la tarde</p><div class="day2-option-grid">
      <button class="${day6Option === "coney" ? "active" : ""}" data-day6-option="coney"><span>Opción A</span><strong>Coney Island</strong><small>Boardwalk · playa · Wonder Wheel · Nathan’s</small></button>
      <button class="${day6Option === "manhattan" ? "active" : ""}" data-day6-option="manhattan"><span>Opción B</span><strong>Manhattan pendiente</strong><small>Morgan · SoHo/Nolita · NYON · Supreme · Katz’s</small></button>
    </div><p class="option-status">${day6Option === "manhattan" ? "Activa: Riverside Park, Morgan, SoHo/Nolita y Lower East Side" : "Activa: Riverside Park y Coney Island durante 2–2½ horas"}</p></section>` : ""}
    <section class="day-route-panel">
      <div><p class="section-kicker">Mapa de ruta</p><h2>Recorrido del día</h2><span class="online-note">Requiere internet</span></div>
      <div class="route-segments">${routes.map((route, routeIndex) => `<a href="${route.url}" target="_blank" rel="noopener"><span>0${routeIndex + 1}</span>${route.label}<b>Maps ↗</b></a>`).join("")}</div>
    </section>
    <div class="timeline-toolbar"><p>Vista del itinerario</p><button data-action="toggle-summary" aria-pressed="${sessionStorage.getItem("summaryMode") === "true"}">${sessionStorage.getItem("summaryMode") === "true" ? "Ver todo" : "Ver resumen"}</button></div>
    <ol class="timeline">${(() => {
      const summary = sessionStorage.getItem("summaryMode") === "true";
      let lastPeriod = "";
      const seenPlaces = new Set();
      return timeline.map(([time, title, detail, kind], itemIndex) => {
      const mappedPlace = placeByTitle[title];
      const placeId = kind.startsWith("place-") ? kind.slice(6) : mappedPlace;
      const important = placeId || kind.startsWith("meal-") || itemIndex === 0 || itemIndex === timeline.length - 1;
      const repeatedPlace = placeId && seenPlaces.has(placeId);
      if (summary && (!important || repeatedPlace)) return "";
      if (placeId) seenPlaces.add(placeId);
      const period = periodFor(time);
      const divider = period !== lastPeriod ? `<li class="time-period"><span>${period}</span></li>` : "";
      lastPeriod = period;
      return `${divider}
      <li class="timeline-item ${placeId ? "featured" : ""} ${kind.startsWith("meal-") ? "meal-item" : ""} ${kind === "optional" ? "optional-item" : ""}" data-timeline-item="${itemIndex}">
        <time class="timeline-time">${time}</time><span class="timeline-line" aria-hidden="true"></span>
        <div class="timeline-content"><h2>${title}</h2><p>${detail}</p>
          ${kind === "optional" ? `<span class="optional-label">Opcional</span>` : ""}
          ${kind.startsWith("meal-") ? `<button data-meal="${kind.slice(5)}">Ver opciones →</button>` : placeId ? `<button data-place="${placeId}">Ver lugar →</button>` : ""}
        </div>
      </li>`; }).join(""); })()}</ol>
  </div>`;
}

function mealView(meal = "day1-lunch") {
  const data = mealOptions[meal] || mealOptions["day1-lunch"];
  return `<div class="fade-in">
    <button class="sticky-back" data-action="itinerary">${backToDayLabel()}</button>
    <header class="page-header">
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
        <div class="order-note"><span>Qué pedir</span><p>${item[5]}</p></div>
        <div class="food-actions">
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item[7])}" target="_blank" rel="noopener">Abrir Maps ↗</a>
          <a href="${item[6]}" target="_blank" rel="noopener">Menú ↗</a>
        </div>
        <span class="online-note">Enlaces externos · requieren internet</span>
      </article>`).join("")}
    </section>
    <button class="return-itinerary" data-action="itinerary">${backToDayLabel()}</button>
  </div>`;
}

function placeDetailView(id) {
  const place = placeDetails[id] || placeDetails.bryant;
  return `<div class="fade-in place-detail">
    <button class="sticky-back" data-action="back-origin">${placeBackLabel()}</button>
    <header class="page-header detail-header">
      <p class="section-kicker">${place.kicker}</p>
      <h1>${place.title}</h1>
      <p class="detail-address">${place.address}</p>
    </header>
    ${place.photos.length ? `<div class="gallery-label"><span>Fotografías</span>${place.photos.length > 1 ? "<b>Desliza →</b>" : ""}</div><div class="photo-scroll">${place.photos.map(([src, alt]) => `<figure><img src="${src}" alt="${alt}" loading="lazy" onerror="this.closest('figure').hidden=true"><figcaption>${alt}</figcaption></figure>`).join("")}</div>` : ""}
    <section class="detail-body">
      <p class="detail-summary">${place.summary}</p>
      ${place.callout ? `<div class="ticket-callout"><span>Tu boleto</span><strong>${place.callout}</strong></div>` : ""}
      ${place.sights ? `<div class="sights-section"><p class="section-kicker">Lugares a ver</p>${place.sights.map(([name, note, photo, caption], index) => `<article class="sight-item"><span>${String(index + 1).padStart(2, "0")}</span><div>${photo ? `<figure class="sight-photo"><img src="${photo}" alt="${caption || name}" loading="lazy" onerror="this.closest('figure').hidden=true"><figcaption>${caption || name}</figcaption></figure>` : ""}<h2>${name}</h2><p>${note}</p></div></article>`).join("")}</div>` : ""}
      <div class="detail-list"><p class="section-kicker">Qué tener en cuenta</p><ul>${place.notes.map(note => `<li>${note}</li>`).join("")}</ul></div>
      ${place.routeImage ? `<a class="route-card" href="${place.map}" target="_blank" rel="noopener"><img src="${place.routeImage}" alt="Recorrido a pie por Midtown"><span>Abrir ruta en Google Maps ↗</span></a>` : ""}
      <div class="detail-actions"><a href="${place.map}" target="_blank" rel="noopener">Abrir Maps ↗</a>${place.official ? `<a href="${place.official}" target="_blank" rel="noopener">Información oficial ↗</a>` : ""}<button data-copy="${place.address.replace(/"/g, "&quot;")}">Copiar dirección</button></div>
      <p class="online-note">Maps e información oficial requieren internet. La dirección y esta ficha quedan guardadas.</p>
    </section>
    <button class="return-itinerary" data-action="back-origin">${placeBackLabel()}</button>
  </div>`;
}

function placesView() {
  const categoryFor = place => {
    const text = `${place.kicker} ${place.title}`.toLowerCase();
    if (/muse|moma|metropolitan|morgan|library/.test(text)) return "museos";
    if (/compras|stationery|supreme|nowhere|printemps|nintendo|lego|uniqlo|primark/.test(text)) return "compras";
    if (/tram|ferry|airport|hotel/.test(text)) return "transporte";
    return "barrios";
  };
  return `<div class="fade-in"><header class="page-header"><p class="section-kicker">Guardados para el viaje</p><h1>Lugares</h1><p class="section-note">Busca o filtra para encontrar rápidamente una ficha.</p></header>
    <section class="places-tools"><label><span>Buscar</span><input type="search" id="placeSearch" placeholder="Nombre, barrio o día"></label><div class="filter-row">${["todos","museos","barrios","compras","transporte"].map((filter, index) => `<button class="${index === 0 ? "active" : ""}" data-place-filter="${filter}">${filter}</button>`).join("")}</div><div class="places-results" aria-live="polite"><strong id="placesResultsLabel">Todos los lugares</strong><span id="placesResultsCount">${Object.keys(placeDetails).length} lugares</span></div></section>
    <section class="cards places-list">${Object.entries(placeDetails).map(([id, place]) => `<button class="place-card place-card-button" data-place="${id}" data-category="${categoryFor(place)}" data-search="${`${place.title} ${place.kicker} ${place.summary}`.toLowerCase()}"><h2>${place.title}</h2><div class="place-meta"><span class="tag">${place.kicker}</span></div><p>${place.summary}</p><span class="card-arrow">Ver lugar →</span></button>`).join("")}</section><p class="empty-results" hidden>No encontramos lugares con ese filtro.</p></div>`;
}

function infoView() {
  return `<div class="fade-in"><header class="page-header"><p class="section-kicker">Datos del viaje · versión ${APP_VERSION}</p><h1>Info</h1><p class="section-note">La información esencial, disponible incluso sin conexión.</p><span class="offline-badge">✓ Guardada para consultar sin conexión</span></header>
    <section class="cards">
      <article class="info-card emergency-card"><p class="section-kicker">Acceso rápido</p><h2>Emergencia y regreso</h2><div class="emergency-actions"><a href="tel:911">Llamar 911</a><a href="tel:311">Llamar 311</a><a href="tel:+13475084550">Hotel</a></div><p><strong>911</strong> · policía, incendio o ambulancia<br><strong>311</strong> · servicios y ayuda no urgente de NYC</p><button class="info-link-button" data-action="transport">Cómo regresar al hotel →</button></article>
      <article class="info-card"><h2>Highbridge Hotel</h2><p>1263 Edward L Grant Hwy · Bronx<br>347-508-4550</p><p><strong>Reserva:</strong> <span class="placeholder">pendiente de añadir</span></p><div class="inline-actions"><button data-copy="1263 Edward L Grant Hwy, Bronx, NY">Copiar dirección</button><a href="https://www.google.com/maps/search/?api=1&query=Highbridge+Hotel+Bronx" target="_blank" rel="noopener">Maps ↗</a></div></article>
      <article class="info-card"><h2>Vuelos</h2><p>Llegada · JFK · septiembre 10 · 06:15</p><p>Septiembre 16 · Delta 3779 · JFK → SAT<br><strong>Reserva:</strong> <span class="placeholder">pendiente</span></p><p>Aeroméxico 633 · SAT → MEX<br><strong>Reserva:</strong> <span class="placeholder">pendiente</span></p></article>
      <article class="info-card info-feature"><p class="section-kicker">Hoja independiente</p><h2>Guía de transporte</h2><p>Tarifas, OMNY, AirTrain, ferry y rutas recomendadas de cada día para llegar y regresar al hotel.</p><button class="info-link-button" data-action="transport">Abrir guía →</button></article>
      <article class="info-card"><h2>Reservas</h2><p><strong>Sep 10 · Yankees–Rockies</strong><br>Pinstripe Pass · confirmado</p><p><strong>Sep 11 · Yankees–Mets</strong><br>Section 421 · Row 14 · Seats 20–21 · confirmado</p><p>Sonny Rollins at Dizzy’s · Sep 10 · 21:00<br>Centre 360 · horario pendiente<br>Top of the Rock · horario pendiente</p></article>
      <article class="info-card photo-credits"><h2>Imágenes de la guía</h2><p>Cada fotografía fue seleccionada para corresponder al lugar o sala que describe. La ilustración panorámica aportada por el usuario se utiliza únicamente como identidad visual del encabezado, no como fotografía de un destino.</p><p>Las imágenes proceden de sitios oficiales de los recintos y parques, Wikimedia Commons y publicaciones que documentan los lugares indicados.</p><a href="https://commons.wikimedia.org/" target="_blank" rel="noopener">Consultar Wikimedia Commons ↗</a></article>
    </section></div>`;
}

function transportView() {
  return `<div class="fade-in"><header class="page-header"><button class="back back-prominent" data-action="info">← Regresar a Info</button><p class="section-kicker">Hoja independiente</p><h1>Guía de transporte</h1><p class="section-note">Rutas sugeridas para 2026. Abre Maps antes de salir para confirmar servicio, obras y el mejor andén.</p><span class="online-note">Las instrucciones quedan guardadas; Maps requiere internet</span></header>
    <section class="fare-grid">
      <article><span>Metro + local bus</span><strong>US$3.00</strong><p>OMNY · tope semanal US$35. Cada persona debe usar siempre su propia tarjeta o dispositivo.</p></article>
      <article><span>Roosevelt Tram</span><strong>US$3.00</strong><p>Misma tarifa MTA y acepta OMNY. Se vuelve a pagar para el viaje de regreso.</p></article>
      <article><span>NYC Ferry</span><strong>US$4.50</strong><p>Sistema separado; comprar en la app o máquinas del muelle.</p></article>
      <article><span>AirTrain JFK</span><strong>US$8.75</strong><p>Tarifa separada al entrar o salir en Jamaica/Howard Beach; acepta contactless y OMNY.</p></article>
    </section>
    <section class="transport-days">${transportDays.map((item, index) => `<article class="transport-day"><p class="section-kicker">0${index + 1}</p><h2>${item.day}</h2><p class="transport-summary">${item.summary}</p><div>${item.legs.map(([name, instructions, origin, destination]) => `<a href="${transitUrl(origin, destination)}" target="_blank" rel="noopener"><span><strong>${name}</strong><small>${instructions}</small></span><b>Maps ↗</b></a>`).join("")}</div></article>`).join("")}</section>
    <p class="transport-note">Las rutas son una base práctica, no instrucciones en tiempo real. En Nueva York los cambios de servicio nocturnos y de fin de semana son frecuentes.</p>
    <button class="return-itinerary" data-action="info">← Regresar a Info</button>
  </div>`;
}

const views = { home: homeView, itinerary: itineraryView, meal: () => mealView(sessionStorage.getItem("selectedMeal") || "day1-lunch"), place: () => placeDetailView(sessionStorage.getItem("selectedPlace") || "bryant"), places: placesView, info: infoView, transport: transportView };

function render(route = "home") {
  const safeRoute = views[route] ? route : "home";
  app.innerHTML = views[safeRoute]();
  navItems.forEach(item => item.classList.toggle("active", item.dataset.route === safeRoute || (["itinerary", "meal", "place"].includes(safeRoute) && item.dataset.route === "itinerary") || (safeRoute === "transport" && item.dataset.route === "info")));
  history.replaceState(null, "", `#${safeRoute}`);
  app.focus({ preventScroll: true });
  if (safeRoute === "itinerary" && sessionStorage.getItem("restoreTimeline") === "true") {
    const savedItem = app.querySelector(`[data-timeline-item="${sessionStorage.getItem("timelineItem")}"]`);
    const savedScroll = Number(sessionStorage.getItem("itineraryScroll") || 0);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (savedItem) savedItem.scrollIntoView({ block: "center", behavior: "auto" });
      else window.scrollTo({ top: savedScroll, behavior: "auto" });
    }));
    sessionStorage.removeItem("restoreTimeline");
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  requestAnimationFrame(() => app.querySelector(".day-chip.active")?.scrollIntoView({ inline: "center", block: "nearest", behavior: "auto" }));
}

function rememberTimeline(element) {
  const item = element.closest("[data-timeline-item]");
  sessionStorage.setItem("itineraryScroll", String(window.scrollY));
  if (item) sessionStorage.setItem("timelineItem", item.dataset.timelineItem);
}

function filterPlaces() {
  const query = (document.querySelector("#placeSearch")?.value || "").trim().toLowerCase();
  const activeFilter = document.querySelector("[data-place-filter].active")?.dataset.placeFilter || "todos";
  let visible = 0;
  document.querySelectorAll(".places-list .place-card").forEach(card => {
    const matchesFilter = activeFilter === "todos" || card.dataset.category === activeFilter;
    const matchesQuery = !query || card.dataset.search.includes(query);
    card.hidden = !(matchesFilter && matchesQuery);
    if (!card.hidden) visible += 1;
  });
  const empty = document.querySelector(".empty-results");
  if (empty) empty.hidden = visible !== 0;
  const filterLabels = { todos: "Todos los lugares", museos: "Museos", barrios: "Barrios y recorridos", compras: "Compras", transporte: "Transporte" };
  const resultLabel = document.querySelector("#placesResultsLabel");
  const resultCount = document.querySelector("#placesResultsCount");
  if (resultLabel) resultLabel.textContent = query ? `Resultados para “${query}”` : filterLabels[activeFilter];
  if (resultCount) resultCount.textContent = `${visible} ${visible === 1 ? "lugar" : "lugares"}`;
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) render(routeButton.dataset.route);
  const dayIndex = event.target.closest("[data-day]")?.dataset.day;
  if (dayIndex !== undefined) { sessionStorage.setItem("selectedDay", dayIndex); render("itinerary"); }
  const action = event.target.closest("[data-action]")?.dataset.action;
  const meal = event.target.closest("[data-meal]")?.dataset.meal;
  const place = event.target.closest("[data-place]")?.dataset.place;
  if (meal) { rememberTimeline(event.target); sessionStorage.setItem("selectedMeal", meal); render("meal"); }
  if (place) { rememberTimeline(event.target); sessionStorage.setItem("detailOrigin", location.hash.slice(1) === "places" ? "places" : "itinerary"); sessionStorage.setItem("selectedPlace", place); render("place"); }
  if (action === "day-one") { sessionStorage.setItem("selectedDay", "0"); render("itinerary"); }
  if (action === "current-day") { sessionStorage.setItem("selectedDay", event.target.closest("[data-current-day]")?.dataset.currentDay || "0"); render("itinerary"); }
  if (action === "home") render("home");
  if (action === "itinerary") { if (["meal", "place"].includes(location.hash.slice(1))) sessionStorage.setItem("restoreTimeline", "true"); render("itinerary"); }
  if (action === "back-origin") { const origin = sessionStorage.getItem("detailOrigin"); if (origin === "places") render("places"); else { sessionStorage.setItem("restoreTimeline", "true"); render("itinerary"); } }
  if (action === "places") render("places");
  if (action === "info") render("info");
  if (action === "transport") render("transport");
  if (action === "toggle-summary") { sessionStorage.setItem("summaryMode", sessionStorage.getItem("summaryMode") === "true" ? "false" : "true"); render("itinerary"); }
  const day2Option = event.target.closest("[data-day2-option]")?.dataset.day2Option;
  if (day2Option) { sessionStorage.setItem("day2Option", day2Option); sessionStorage.removeItem("restoreTimeline"); render("itinerary"); }
  const day6Option = event.target.closest("[data-day6-option]")?.dataset.day6Option;
  if (day6Option) { sessionStorage.setItem("day6Option", day6Option); sessionStorage.removeItem("restoreTimeline"); render("itinerary"); }
  const filter = event.target.closest("[data-place-filter]")?.dataset.placeFilter;
  if (filter) { document.querySelectorAll("[data-place-filter]").forEach(button => button.classList.toggle("active", button.dataset.placeFilter === filter)); filterPlaces(); }
  const copy = event.target.closest("[data-copy]");
  if (copy) navigator.clipboard?.writeText(copy.dataset.copy).then(() => { copy.textContent = "Copiado ✓"; });
});

document.addEventListener("input", event => { if (event.target.matches("#placeSearch")) filterPlaces(); });

window.addEventListener("hashchange", () => render(location.hash.slice(1)));
render(location.hash.slice(1) || "home");

let installPrompt;
const installButton = document.querySelector("#installButton");
window.addEventListener("beforeinstallprompt", event => { event.preventDefault(); installPrompt = event; installButton.hidden = false; });
installButton.addEventListener("click", async () => { if (!installPrompt) return; installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; installButton.hidden = true; });

if ("serviceWorker" in navigator) window.addEventListener("load", async () => {
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloading) return;
    reloading = true;
    window.location.reload();
  });
  const registration = await navigator.serviceWorker.register("./sw.js");
  registration.update();
});
