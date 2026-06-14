async function cargar(id, archivo) {
  const respuesta = await fetch(archivo);
  document.getElementById(id).innerHTML = await respuesta.text();
}

cargar("boarding", "Componentes/boarding.html");
