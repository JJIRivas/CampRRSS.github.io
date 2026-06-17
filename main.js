async function cargar(id, archivo) {
  const respuesta = await fetch(archivo);
  document.getElementById(id).innerHTML = await respuesta.text();
}

cargar("mainTitle", "Componentes/mainTitle.html");
cargar("boarding", "Componentes/boarding.html");
cargar("boarding2", "Componentes/boarding2.html");
cargar("infoTitle", "Componentes/infoTitle.html");
cargar("firstInfo", "Componentes/firstInfo.html");
cargar("simulator", "Componentes/sim.html");
