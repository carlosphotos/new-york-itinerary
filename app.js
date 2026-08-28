const tripDays = [
  {
    number: "10", name: "Thu", label: "Thursday", month: "September", theme: "Arrival · Midtown · Baseball · Jazz",
    timeline: [
      ["06:15", "JFK", "Llegada a Nueva York", "place-jfk"], ["~09:00", "Highbridge Hotel", "Dejar maletas y preparar el día", "place-hotel"],
      ["~10:15", "Bryant Park", "Primera pausa en Midtown", "place-bryant"], ["10:15–13:30", "Midtown clásico + tiendas", "Arquitectura, Fifth Avenue y tiendas", "place-midtown"],
      ["~13:30", "Comida ligera", "Opciones cercanas según el recorrido", "meal-day1-lunch"], ["~14:30", "Regreso al hotel", "Traslado a Highbridge", ""],
      ["15:00", "Check-in", "Habitación y equipaje", ""], ["15:00–16:30", "Descanso", "Pausa antes del partido", ""],
      ["~17:00", "Yankee Stadium", "Llegada con tiempo para recorrer el estadio", "place-yankee"], ["19:05", "Yankees–Rockies", "Pinstripe Pass · standing room", "place-yankee"],
      ["~20:00", "Salir del estadio", "Traslado hacia Columbus Circle", ""], ["~20:40", "Dizzy’s", "Llegada y acceso al club", "place-dizzys"],
      ["21:00", "Sonny Rollins", "Jazz con vista a Central Park", "place-dizzys"], ["~22:30", "Cena", "Opciones cerca de Columbus Circle", "meal-day1-dinner"], ["~00:00", "Hotel", "Fin del día", ""]
    ]
  },
  {
    number: "11", name: "Fri", label: "Friday", month: "September", theme: "Lower Manhattan · 9/11 · Chinatown · Subway Series",
    timeline: [
      ["08:30", "Desayuno", "Inicio tranquilo", ""], ["09:30", "Lower Manhattan", "Salida hacia The Battery", ""],
      ["10:30", "The Battery", "Waterfront · Estatua de la Libertad y Ellis Island", ""], ["11:00", "Bowling Green + Charging Bull", "Paseo breve", ""],
      ["11:20–11:55", "Financial District", "Wall Street · NYSE · Federal Hall · Trinity Church", ""], ["11:55", "Black Fox Coffee", "Café rápido", ""],
      ["12:15", "Stone Street", "Calle histórica", ""], ["12:35–13:20", "South Street Seaport + Pier 17", "Waterfront · vistas del Brooklyn Bridge", ""],
      ["13:40", "Oculus", "Arquitectura y vistazo a tiendas", ""], ["14:10", "Comida en Chinatown", "Cinco alternativas cantonés / dim sum", "meal-day2-lunch"],
      ["14:40", "9/11 Memorial", "North Pool · South Pool · Survivor Tree · One WTC", ""],
      ["~15:15", "Centre 360", "Prioridad si conseguimos reserva; horario flexible", "optional"],
      ["~15:45–16:30", "Canal Street + Chinatown", "Vendedores · souvenirs · Mott Street", ""],
      ["~16:30", "Supreme + New York or Nowhere", "Opcional si el tiempo y Centre 360 lo permiten", "optional"],
      ["~16:45", "Regreso al Bronx", "Traslado al hotel", ""], ["~17:30", "Hotel / cambio rápido", "Dejar compras y prepararse", ""],
      ["18:00", "Yankee Stadium", "Llegada al estadio", "place-yankee"], ["19:05", "Yankees vs. Mets", "Subway Series", "place-yankee"],
      ["~22:30", "Cena casual", "Según la hora de salida", ""], ["~23:30", "Highbridge Hotel", "Fin del día", "place-hotel"]
    ]
  },
  {
    number: "12", name: "Sat", label: "Saturday", month: "September", theme: "Central Park · The Met · Roosevelt Island · Gantry Plaza",
    timeline: [
      ["09:00", "Desayuno", "Inicio del día", ""], ["10:00–11:45", "Central Park", "The Mall · Bethesda Terrace · Bow Bridge · The Lake", ""],
      ["12:15–15:15", "The Met", "Dendur · Egipto · Grecia y Roma · pintura europea · American Wing", ""],
      ["15:15–15:40", "Upper East Side", "Fifth Ave · Madison Ave · calles residenciales", ""],
      ["15:40–16:05", "Lexington Candy Shop", "Coca-Cola con jarabe y seltzer o malteada", ""],
      ["16:05–16:45", "Comida casual", "Home Kitchen · Sojourn Social · 787 Coffee opcional", "meal-day3-lunch"],
      ["16:45–17:30", "Hacia Roosevelt Island Tram", "Traslado", ""], ["~17:30", "Roosevelt Island Tram", "Cruce desde Manhattan", ""],
      ["~17:50–19:00", "Roosevelt Island", "Smallpox Hospital Ruins · Four Freedoms Park", ""],
      ["~19:00–19:45", "Hacia Long Island City", "Traslado", ""], ["~20:00–20:45", "Gantry Plaza + Pepsi-Cola Sign", "Skyline iluminado", ""],
      ["~21:00", "Cena en Long Island City", "Café Henri como primera opción", "meal-day3-dinner"], ["~22:30", "Highbridge Hotel", "Regreso", "place-hotel"]
    ]
  },
  {
    number: "13", name: "Sun", label: "Sunday", month: "September", theme: "Brooklyn Bridge · DUMBO · Williamsburg · Greenpoint",
    timeline: [
      ["08:30", "Desayuno", "Inicio del día", ""], ["09:15", "Hacia Brooklyn Bridge", "Acceso desde Manhattan", ""],
      ["10:00–10:45", "Brooklyn Bridge", "Cruce completo hacia Brooklyn", ""],
      ["10:45–12:15", "DUMBO + Brooklyn Bridge Park", "Washington St · Pebble Beach · Fulton Ferry Landing", ""],
      ["12:15–13:15", "Comida en DUMBO", "Pizza como primera elección", "meal-day4-lunch"], ["~13:20", "NYC Ferry", "DUMBO → Williamsburg; revisar ruta A/B días antes", ""],
      ["~14:00–16:00", "Williamsburg", "Domino Park · Bedford Ave · Marsha P. Johnson State Park", ""],
      ["Durante el paseo", "Discos + circuito musical", "Earwax · Face Records · Music Hall · Brooklyn Bowl", "optional"],
      ["Café opcional", "Qahwah House", "Bedford Avenue", "optional"], ["~16:00–16:30", "Hacia Greenpoint", "Caminar · metro G · ferry", ""],
      ["16:30–17:30", "Yoseka Stationery", "63 West St · una hora para explorar y probar", ""],
      ["17:30–19:00", "Greenpoint", "West St · WNYC Transmitter Park · waterfront", ""],
      ["~19:00–20:30", "Cena en Greenpoint", "Casual; Kirbee’s queda como opción provisional", "meal-day4-dinner"], ["~21:00", "Highbridge Hotel", "Regreso", "place-hotel"]
    ]
  },
  {
    number: "14", name: "Mon", label: "Monday", month: "September", theme: "MoMA · Midtown · Primark · Koreatown · Top of the Rock",
    timeline: [
      ["09:00", "Desayuno", "Inicio del día", ""], ["10:15", "Llegar al MoMA", "Prepararse para apertura", ""],
      ["10:30–13:00", "MoMA", "Colección y exposiciones prioritarias", ""], ["13:00–13:45", "Comida", "Kin Ramen plan A · Bill’s Bar & Burger plan B", "meal-day5-lunch"],
      ["13:45–14:30", "Midtown / Broadway", "6th Ave · Times Square de paso", ""], ["14:30–15:45", "Primark Herald Square", "Bloque principal de compras", ""],
      ["15:45–16:10", "Herald Square + Macy’s", "Exterior y entorno", ""], ["16:10–16:30", "Empire State Building", "Vista desde la calle", ""],
      ["16:30–17:30", "Koreatown", "Grace Street opcional · Woorijip si falta comida", ""],
      ["17:30–18:15", "Hacia Rockefeller Center", "Traslado con margen", ""],
      ["~18:30–20:15", "Top of the Rock", "Luz · atardecer · primeras luces nocturnas", ""],
      ["~20:30", "Cena por Rockefeller / Midtown", "Elegir según hora de salida", "meal-day5-dinner"], ["~22:00–22:30", "Highbridge Hotel", "Regreso", "place-hotel"]
    ]
  },
  {
    number: "15", name: "Tue", label: "Tuesday", month: "September", theme: "Natural History · Upper West Side · tarde flexible",
    timeline: [
      ["08:30", "Desayuno", "Inicio del día", ""], ["09:30", "Upper West Side", "Salida hacia el museo", ""],
      ["10:00–13:00", "American Museum of Natural History", "Dinosaurios · Human Origins · meteoritos · Gilder Center", ""],
      ["~13:15", "Barney Greengrass", "Deli clásico · bagel con nova o sándwich", "meal-day6-lunch"],
      ["14:15", "Upper West Side", "Amsterdam · Broadway · brownstones", ""], ["14:30–15:00", "Zabar’s", "Tienda y café opcional", ""],
      ["15:00", "Tarde flexible", "Elegir según pendientes y energía", "optional"],
      ["16:00", "New York or Nowhere", "Si no se hizo el Día 2", "optional"], ["16:20", "Supreme", "Si no se hizo el Día 2", "optional"],
      ["17:00", "Katz’s Delicatessen", "Cena temprana / clásico Lower East Side", "meal-day6-dinner"],
      ["~18:15", "Lower East Side", "Paseo o regreso", ""],
      ["Alternativa", "Coney Island", "16:15–18:00 si NYON y Supreme ya se hicieron", "optional"],
      ["Alternativa tranquila", "Riverside Park", "Compras pendientes y hotel temprano", "optional"], ["~20:30–21:00", "Highbridge Hotel", "Maletas listas para la salida", "place-hotel"]
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

const places = [
  ["JFK Airport", "Queens · Arrival", "Llegada y conexión hacia Manhattan. Añadiremos terminal, ruta y detalles del traslado."],
  ["Bryant Park", "Midtown · Park", "Punto de partida para el paseo clásico por Midtown y las tiendas."],
  ["Yankee Stadium", "The Bronx · Baseball", "Yankees vs. Rockies · 19:05. Pendiente: acceso, sección y boletos."],
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
      ["Bryant Park", "Recorrer el césped y la terraza de la biblioteca. Fijarse en el contraste entre el jardín y los rascacielos."],
      ["New York Public Library", "Ver los leones Patience y Fortitude, Astor Hall y, si el acceso está disponible, la Rose Main Reading Room."],
      ["Grand Central Terminal", "Mirar el techo celeste del Main Concourse, el reloj central y probar la Whispering Gallery junto al Oyster Bar."],
      ["Chrysler Building", "La visita principal es exterior: observar la corona Art Déco y sus formas inspiradas en automóviles. El acceso interior puede ser limitado."],
      ["Fifth Avenue + St. Patrick’s", "Entrar a la catedral para ver vitrales y bóvedas; mantener silencio si hay servicio. Elegir solo una o dos tiendas para no perder tiempo."],
      ["Rockefeller Center", "Caminar por Channel Gardens, ver la estatua de Atlas, la plaza y la fachada Art Déco de 30 Rockefeller Plaza."]
    ],
    routeImage: "./assets/midtown-route.svg",
    map: "https://www.google.com/maps/dir/?api=1&origin=Bryant+Park%2C+New+York&destination=Rockefeller+Center%2C+New+York&travelmode=walking&waypoints=Grand+Central+Terminal%2C+New+York%7CSt.+Patrick%27s+Cathedral%2C+New+York"
  },
  yankee: {
    kicker: "19:05 · The Bronx", title: "Yankee Stadium", address: "1 E 161 St · Bronx",
    photos: [["./assets/yankee-stadium.jpg", "Exterior de Yankee Stadium"]],
    summary: "Yankees–Rockies. Sus boletos son Pinstripe Pass: entrada general de pie, sin asiento asignado, con la primera bebida incluida.",
    notes: ["Llegar ~17:00 para recorrer el estadio", "Buscar zonas sociales y espacios standing room", "Canjear la bebida mostrando el boleto", "No ocupar asientos ni lugares SRO asignados"],
    callout: "PINSTRIPE PASS · Standing room only · Primera bebida incluida",
    map: "https://www.google.com/maps/search/?api=1&query=Yankee+Stadium+1+E+161+St+Bronx",
    official: "https://www.mlb.com/yankees/tickets/specials/pinstripe-pass"
  },
  dizzys: {
    kicker: "21:00 · Columbus Circle", title: "Dizzy’s Club", address: "Frederick P. Rose Hall · Broadway at 60th St",
    photos: [["./assets/dizzys-club.jpg", "Interior de Dizzy’s Club con vista al skyline"]],
    summary: "Club íntimo de Jazz at Lincoln Center con vistas panorámicas de Central Park y del skyline. Llegada prevista ~20:40.",
    notes: ["Set de las 21:00", "Reservas recomendadas", "Confirmar acceso y código de reserva"],
    map: "https://www.google.com/maps/search/?api=1&query=Dizzy%27s+Club+Broadway+at+60th+Street+New+York",
    official: "https://jazz.org/dizzys/"
  }
};

function guide(title, kicker, summary, notes, query) {
  return {
    title, kicker, address: query,
    photos: [["./assets/nyc-skyline.png", "New York City"]],
    summary, notes,
    map: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query)
  };
}

Object.assign(placeDetails, {
  battery: guide("The Battery", "Día 2 · Lower Manhattan", "Parque frente al puerto con vistas abiertas hacia la Estatua de la Libertad y Ellis Island.", ["Caminar junto al waterfront", "Localizar Castle Clinton", "Las mejores vistas están hacia el suroeste"], "The Battery New York"),
  financial: guide("Financial District", "Día 2 · Downtown", "Recorrido compacto por los símbolos financieros e históricos de Lower Manhattan.", ["Charging Bull y Bowling Green", "NYSE y Federal Hall desde el exterior", "Trinity Church y su cementerio"], "Federal Hall Wall Street New York"),
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
  amnh: guide("American Museum of Natural History", "Día 6 · Upper West Side", "Tres horas concentradas en las salas prioritarias del museo.", ["Dinosaurios y fósiles", "Hall of Human Origins", "Meteoritos, Rose Center y Gilder Center"], "American Museum of Natural History New York"),
  barney: guide("Barney Greengrass", "Día 6 · Upper West Side", "Deli judío clásico conocido por pescado ahumado, bagels y sandwiches.", ["Bagel con nova o salmón", "Compartir sándwich si quieren dejar espacio", "Zabar’s Café es el respaldo si está lleno"], "Barney Greengrass New York"),
  zabars: guide("Zabar’s", "Día 6 · Upper West Side", "Institución de comida gourmet, deli, café y utensilios de cocina.", ["Ver quesos, salmón, bagels y productos importados", "Subir a la sección de cocina", "Café rápido opcional"], "Zabar's New York"),
  katzs: guide("Katz’s Delicatessen", "Día 6 · Lower East Side", "Parada clásica para una cena temprana fuera del pico fuerte del almuerzo.", ["Conservar el ticket que entregan al entrar", "Pastrami on rye para compartir", "Pedir pickles y bebida"], "Katz's Delicatessen New York")
});

Object.assign(placeDetails, {
  blackfox: guide("Black Fox Coffee", "Día 2 · café rápido", "Parada breve antes de Stone Street.", ["Mantenerla en unos 20 minutos", "Pedir café para llevar si el día va retrasado", "No convertirla en un desayuno completo"], "Black Fox Coffee 70 Pine Street New York"),
  ferry: guide("NYC Ferry", "Día 4 · East River", "Traslado panorámico de DUMBO hacia Williamsburg.", ["Revisar la app y horarios unos días antes", "Los domingos la ruta East River puede dividirse", "Llegar al muelle con margen"], "Fulton Ferry Landing Brooklyn"),
  records: guide("Discos + circuito musical", "Día 4 · Williamsburg", "Un tramo pensado para los intereses musicales del viaje.", ["Earwax Records", "Face Records NYC", "Pasar por Music Hall of Williamsburg y Brooklyn Bowl"], "Earwax Records Brooklyn"),
  qahwah: guide("Qahwah House", "Día 4 · café opcional", "Café yemení sobre Bedford Avenue para usar solo si no hubo parada en DUMBO.", ["Probar café yemení o té", "Mantener la parada corta", "Omitirla si reduce el tiempo de Yoseka"], "Qahwah House Williamsburg Brooklyn"),
  nyon: guide("New York or Nowhere", "Días 2 o 6 · compras", "Tienda pendiente que se combina con Supreme en función del horario de Centre 360.", ["Intentar Día 2 solo si hay margen", "Plan principal del Día 6 si quedó pendiente", "Comprobar horarios antes de ir"], "New York or Nowhere New York"),
  supremeonly: guide("Supreme", "Días 2 o 6 · compras", "Parada de compras opcional que puede moverse entre días.", ["Comprobar fila", "No comprometer el regreso al estadio", "Combinar con NYON y Katz’s el Día 6"], "Supreme Bowery New York"),
  coney: guide("Coney Island", "Día 6 · alternativa", "Excursión corta si las compras pendientes ya quedaron resueltas.", ["Boardwalk y playa", "Wonder Wheel y Cyclone desde el exterior", "Nathan’s y fotografías; no intentar subir a todo"], "Coney Island Boardwalk Brooklyn"),
  riverside: guide("Riverside Park", "Día 6 · alternativa tranquila", "Opción para bajar el ritmo antes del vuelo de regreso.", ["Pasear junto al Hudson", "Resolver compras pendientes", "Volver temprano para preparar maletas"], "Riverside Park New York")
});

const placeByTitle = {
  "The Battery": "battery", "Bowling Green + Charging Bull": "financial", "Financial District": "financial", "Stone Street": "stone",
  "South Street Seaport + Pier 17": "seaport", "Oculus": "oculus", "9/11 Memorial": "memorial", "Centre 360": "centre360",
  "Canal Street + Chinatown": "chinatown", "Supreme + New York or Nowhere": "supreme", "Black Fox Coffee": "blackfox", "Central Park": "centralpark", "The Met": "met",
  "Lexington Candy Shop": "lexington", "Roosevelt Island Tram": "tram", "Roosevelt Island": "roosevelt", "Gantry Plaza + Pepsi-Cola Sign": "gantry",
  "Brooklyn Bridge": "brooklynbridge", "DUMBO + Brooklyn Bridge Park": "dumbo", "NYC Ferry": "ferry", "Williamsburg": "williamsburg", "Discos + circuito musical": "records", "Qahwah House": "qahwah",
  "Yoseka Stationery": "yoseka", "Greenpoint": "greenpoint", "MoMA": "moma", "Primark Herald Square": "primark",
  "Herald Square + Macy’s": "herald", "Empire State Building": "herald", "Koreatown": "koreatown", "Top of the Rock": "topofrock",
  "American Museum of Natural History": "amnh", "Barney Greengrass": "barney", "Zabar’s": "zabars", "New York or Nowhere": "nyon", "Supreme": "supremeonly", "Katz’s Delicatessen": "katzs", "Coney Island": "coney", "Riverside Park": "riverside"
};

const dayRoutes = [
  [{label:"Midtown walk", url:"https://www.google.com/maps/dir/?api=1&origin=Bryant+Park%2C+New+York&destination=Rockefeller+Center%2C+New+York&travelmode=walking&waypoints=Grand+Central+Terminal%2C+New+York%7CSt.+Patrick%27s+Cathedral%2C+New+York"}],
  [{label:"Lower Manhattan", url:"https://www.google.com/maps/dir/?api=1&origin=The+Battery%2C+New+York&destination=Oculus%2C+New+York&travelmode=walking&waypoints=Charging+Bull%2C+New+York%7CStone+Street%2C+New+York%7CPier+17%2C+New+York"}, {label:"Memorial to Chinatown", url:"https://www.google.com/maps/dir/?api=1&origin=9%2F11+Memorial%2C+New+York&destination=Mott+Street%2C+New+York&travelmode=walking&waypoints=City+Hall%2C+New+York"}],
  [{label:"Central Park + UES", url:"https://www.google.com/maps/dir/?api=1&origin=The+Mall+Central+Park&destination=Lexington+Candy+Shop%2C+New+York&travelmode=walking&waypoints=Bethesda+Terrace%7CThe+Metropolitan+Museum+of+Art"}, {label:"Roosevelt Island + LIC", url:"https://www.google.com/maps/dir/?api=1&origin=Roosevelt+Island+Tramway&destination=Gantry+Plaza+State+Park&travelmode=transit&waypoints=Four+Freedoms+Park"}],
  [{label:"Bridge + DUMBO", url:"https://www.google.com/maps/dir/?api=1&origin=Brooklyn+Bridge+Pedestrian+Entrance+Manhattan&destination=Fulton+Ferry+Landing&travelmode=walking&waypoints=Washington+Street+DUMBO%7CPebble+Beach"}, {label:"Williamsburg + Greenpoint", url:"https://www.google.com/maps/dir/?api=1&origin=Domino+Park&destination=WNYC+Transmitter+Park&travelmode=walking&waypoints=Bedford+Avenue%7CMarsha+P.+Johnson+State+Park%7CYoseka+Stationery"}],
  [{label:"Midtown shopping", url:"https://www.google.com/maps/dir/?api=1&origin=MoMA%2C+New+York&destination=Koreatown%2C+New+York&travelmode=walking&waypoints=Primark+Herald+Square%7CEmpire+State+Building"}, {label:"Koreatown to Top of the Rock", url:"https://www.google.com/maps/dir/?api=1&origin=Koreatown%2C+New+York&destination=Top+of+the+Rock%2C+New+York&travelmode=walking"}],
  [{label:"Upper West Side", url:"https://www.google.com/maps/dir/?api=1&origin=American+Museum+of+Natural+History&destination=Zabar%27s%2C+New+York&travelmode=walking&waypoints=Barney+Greengrass"}, {label:"SoHo + Lower East Side", url:"https://www.google.com/maps/dir/?api=1&origin=New+York+or+Nowhere&destination=Katz%27s+Delicatessen&travelmode=walking&waypoints=Supreme+Bowery"}],
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
      ["Black Iron Burger", "Burger bar", "10–12 min", "250 W 54th St · Theatre District", "La opción original sigue disponible: informal, directa y abierta hasta medianoche.", "Black Iron Burger o una versión pequeña, con papas o aros de cebolla para compartir.", "https://www.blackironburger.com/locations/", "Black Iron Burger 250 W 54th St New York"],
      ["The Smith", "American brasserie", "5–7 min", "1900 Broadway · 63rd St", "Brasserie animada frente a Lincoln Center, con menú amplio y mesas para sentarse con calma.", "Mac & cheese para compartir, rigatoni alla vodka, ensalada o burger. Los jueves suele cerrar a las 23:00.", "https://thesmithrestaurant.com/location/lincoln-square/", "The Smith Lincoln Square 1900 Broadway New York"],
      ["Empanada Mama", "Latin · late night", "15–18 min", "765 9th Ave · Hell’s Kitchen", "La alternativa informal si el concierto termina tarde: muchas empanadas y servicio orientado a la noche.", "Dos o tres empanadas por persona; combinar una de carne o pollo con una vegetariana.", "https://www.empanadamama.com/hells-kitchen-menu", "Empanada Mama 765 9th Ave New York"]
    ]
  },
  "day2-lunch": {
    kicker: "Día 2 · Chinatown",
    title: "Comida",
    intro: "Cinco opciones para elegir según tiempo, antojo y espera. Uncle Lou es la primera recomendación.",
    options: [
      ["Uncle Lou 快樂人", "Cantonese · plan A", "US$20–30", "73 Mulberry St", "Cantonés de barrio, casual y pensado para compartir.", "Char siu, pollo, arroz o noodles y algún vegetal para compartir.", "https://www.unclelounyc.com/", "Uncle Lou 73 Mulberry St New York"],
      ["Wo Hop", "Old-school Chinatown", "US$20–30", "17 Mott St", "El ambiente clásico de restaurante chino neoyorquino sin pretensiones.", "Elegir platos cantoneses al centro, arroz y noodles.", "https://www.google.com/maps/search/?api=1&query=Wo+Hop+17+Mott+St+New+York", "Wo Hop 17 Mott St New York"],
      ["Nom Wah Tea Parlor", "Historic dim sum", "US$10–20", "13 Doyers St", "Histórico y más turístico; el restaurante y Doyers Street forman parte de la experiencia.", "Dim sum para compartir: dumplings, rolls y buns.", "https://nomwah.com/", "Nom Wah Tea Parlor 13 Doyers St New York"],
      ["King’s Kitchen", "Cantonese · quick", "US$10–20", "Chinatown", "La alternativa sencilla y económica cuando el horario importa más.", "BBQ meats, arroz o noodles; pedir algo rápido.", "https://www.google.com/maps/search/?api=1&query=King%27s+Kitchen+Chinatown+New+York", "King's Kitchen Chinatown New York"],
      ["House of Joy", "Dim sum", "US$10–20", "28 Pell St", "Dim sum en Pell Street y menos orientado al turismo que Nom Wah.", "Dumplings, buns y platos pequeños para compartir.", "https://www.google.com/maps/search/?api=1&query=House+of+Joy+28+Pell+St+New+York", "House of Joy 28 Pell St New York"]
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

const app = document.querySelector("#app");
const navItems = [...document.querySelectorAll(".nav-item")];

function dayStrip() {
  const selected = Number(sessionStorage.getItem("selectedDay") || 0);
  return `<div class="day-strip" aria-label="Días del viaje">${tripDays.map((day, i) => `
    <button class="day-chip ${i === selected ? "active" : ""}" data-day="${i}" aria-label="${day.name} ${day.number}">
      <span class="day-number">${day.number}</span><span class="day-name">${day.name}</span>
    </button>`).join("")}</div>`;
}

function homeView() {
  return `<div class="fade-in">
    <section class="hero">
      <img class="skyline" src="./assets/nyc-skyline.png" alt="Ilustración panorámica del skyline de Nueva York">
      <div class="hero-copy"><h1>NEW YORK</h1><p class="dates">September 10–16 · 2026</p></div>
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
  const index = Number(sessionStorage.getItem("selectedDay") || 0);
  const day = tripDays[index] || tripDays[0];
  const routes = dayRoutes[index] || [];
  return `<div class="fade-in">
    <header class="page-header">
      <button class="back" data-action="home">← New York</button>
      <p class="section-kicker">Day ${index + 1} · ${day.label}</p>
      <h1>${day.month} ${day.number}</h1>
      <p class="subtitle">${day.theme}</p>
      <img class="mini-skyline" src="./assets/nyc-skyline.png" alt="">
    </header>
    ${dayStrip()}
    <section class="day-route-panel">
      <div><p class="section-kicker">Route map</p><h2>Recorrido del día</h2></div>
      <div class="route-segments">${routes.map((route, routeIndex) => `<a href="${route.url}" target="_blank" rel="noopener"><span>0${routeIndex + 1}</span>${route.label}<b>↗</b></a>`).join("")}</div>
    </section>
    <ol class="timeline">${day.timeline.map(([time, title, detail, kind]) => {
      const mappedPlace = placeByTitle[title];
      const placeId = kind.startsWith("place-") ? kind.slice(6) : mappedPlace;
      return `
      <li class="timeline-item ${placeId ? "featured" : ""} ${kind === "optional" ? "optional-item" : ""}">
        <time class="timeline-time">${time}</time><span class="timeline-line" aria-hidden="true"></span>
        <div class="timeline-content"><h2>${title}</h2><p>${detail}</p>
          ${kind === "optional" ? `<span class="optional-label">Optional</span>` : ""}
          ${kind.startsWith("meal-") ? `<button data-meal="${kind.slice(5)}">See options →</button>` : placeId ? `<button data-place="${placeId}">View place →</button>` : ""}
        </div>
      </li>`; }).join("")}</ol>
  </div>`;
}

function mealView(meal = "day1-lunch") {
  const data = mealOptions[meal] || mealOptions["day1-lunch"];
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
    <button class="return-itinerary" data-action="itinerary">← Regresar al itinerario</button>
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
    <div class="photo-scroll">${place.photos.map(([src, alt]) => `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='./assets/nyc-skyline.png'">`).join("")}</div>
    <section class="detail-body">
      <p class="detail-summary">${place.summary}</p>
      ${place.callout ? `<div class="ticket-callout"><span>Your ticket</span><strong>${place.callout}</strong></div>` : ""}
      ${place.sights ? `<div class="sights-section"><p class="section-kicker">Lugares a ver</p>${place.sights.map(([name, note], index) => `<article class="sight-item"><span>0${index + 1}</span><div><h2>${name}</h2><p>${note}</p></div></article>`).join("")}</div>` : ""}
      <div class="detail-list"><p class="section-kicker">Keep in mind</p><ul>${place.notes.map(note => `<li>${note}</li>`).join("")}</ul></div>
      ${place.routeImage ? `<a class="route-card" href="${place.map}" target="_blank" rel="noopener"><img src="${place.routeImage}" alt="Recorrido a pie por Midtown"><span>Open live route in Google Maps ↗</span></a>` : ""}
      <div class="detail-actions"><a href="${place.map}" target="_blank" rel="noopener">Open in Maps ↗</a>${place.official ? `<a href="${place.official}" target="_blank" rel="noopener">Official info ↗</a>` : ""}</div>
    </section>
    <button class="return-itinerary" data-action="itinerary">← Regresar al Día 1</button>
  </div>`;
}

function placesView() {
  return `<div class="fade-in"><header class="page-header"><p class="section-kicker">Saved for the trip</p><h1>Places</h1><p class="section-note">Toca cualquier lugar para ver su información práctica.</p></header>
    <section class="cards">${Object.entries(placeDetails).map(([id, place]) => `<button class="place-card place-card-button" data-place="${id}"><h2>${place.title}</h2><div class="place-meta"><span class="tag">${place.kicker}</span></div><p>${place.summary}</p><span class="card-arrow">View place →</span></button>`).join("")}</section></div>`;
}

function infoView() {
  return `<div class="fade-in"><header class="page-header"><p class="section-kicker">Travel notes</p><h1>Info</h1><p class="section-note">La información esencial, disponible incluso sin conexión.</p></header>
    <section class="cards">
      <article class="info-card"><h2>Highbridge Hotel</h2><p>1263 Edward L Grant Hwy · Bronx<br>347-508-4550</p><p class="placeholder">Añadir número de reserva cuando esté disponible.</p></article>
      <article class="info-card"><h2>Flights</h2><p>Arrival · JFK · September 10 · 06:15</p><p>Return · September 16 · Delta 3779 + Aeroméxico 633</p></article>
      <article class="info-card"><h2>Getting around</h2><p>AirTrain, subway y OMNY. Añadiremos las rutas confirmadas y alternativas.</p></article>
      <article class="info-card"><h2>Reservations</h2><p>Yankees–Rockies · Sep 10 · 19:05<br>Sonny Rollins at Dizzy’s · Sep 10 · 21:00<br>Yankees–Mets · Sep 11 · 19:05<br>Centre 360 · horario pendiente<br>Top of the Rock · horario pendiente</p></article>
      <article class="info-card"><h2>Emergency</h2><p class="placeholder">Pendiente de añadir contactos, seguro y datos útiles.</p></article>
    </section></div>`;
}

const views = { home: homeView, itinerary: itineraryView, meal: () => mealView(sessionStorage.getItem("selectedMeal") || "day1-lunch"), place: () => placeDetailView(sessionStorage.getItem("selectedPlace") || "bryant"), places: placesView, info: infoView };

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
  const dayIndex = event.target.closest("[data-day]")?.dataset.day;
  if (dayIndex !== undefined) { sessionStorage.setItem("selectedDay", dayIndex); render("itinerary"); }
  const action = event.target.closest("[data-action]")?.dataset.action;
  const meal = event.target.closest("[data-meal]")?.dataset.meal;
  const place = event.target.closest("[data-place]")?.dataset.place;
  if (meal) { sessionStorage.setItem("selectedMeal", meal); render("meal"); }
  if (place) { sessionStorage.setItem("selectedPlace", place); render("place"); }
  if (action === "day-one") { sessionStorage.setItem("selectedDay", "0"); render("itinerary"); }
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
