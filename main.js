async function cargar(id, archivo) {
  const respuesta = await fetch(archivo);
  document.getElementById(id).innerHTML = await respuesta.text();
}

cargar("main-title", "Componentes/mainTitle.html");
cargar("boarding-card1", "Componentes/boarding.html");
cargar("boarding-card2", "Componentes/boarding2.html");
cargar("info-title", "Componentes/infoTitle.html");
cargar("first-info", "Componentes/firstInfo.html");
cargar("simulator", "Componentes/sim.html");
