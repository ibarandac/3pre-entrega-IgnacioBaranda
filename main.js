let jugadores = JSON.parse(localStorage.getItem('jugadores')) || [
  { nombre: 'Lionel Messi', equipo: 'Inter Miami', nacionalidad: 'Argentina' },
  { nombre: 'Cristiano Ronaldo', equipo: 'Al-Nassr', nacionalidad: 'Portugal' }
];

function buscar() {
  const terminoBusqueda = document.getElementById('entradaBusqueda').value.toLowerCase();
  const jugadoresFiltrados = jugadores.filter(jugador =>
    Object.values(jugador).some(valor => valor.toLowerCase().includes(terminoBusqueda))
  );
  mostrarResultados(jugadoresFiltrados);
}

function mostrarResultados(jugadoresFiltrados) {
  const cuerpoResultados = document.getElementById('cuerpoResultados');
  const sinResultados = document.getElementById('sinResultados');
  cuerpoResultados.innerHTML = ''; 
  
  sinResultados.innerHTML = (!jugadoresFiltrados.length) ? `
    <p>No se encontraron resultados.</p>
    <p>¿Agregar nuevo jugador?</p>
  ` : '';

  document.getElementById('agregarNuevoJugador').style.display = (!jugadoresFiltrados.length) ? 'block' : 'none';

  jugadoresFiltrados.forEach(jugador => {
    const fila = cuerpoResultados.insertRow();
    Object.values(jugador).forEach(valor => {
      const celda = fila.insertCell();
      celda.textContent = valor;
    });
  });
}

function agregarNuevo() {
  const nuevoNombre = document.getElementById('nuevoJugadorNombre').value;
  const nuevoEquipo = document.getElementById('nuevoJugadorEquipo').value;
  const nuevaNacionalidad = document.getElementById('nuevoJugadorNacionalidad').value;

  if (nuevoNombre && nuevoEquipo && nuevaNacionalidad) {
    const nuevoJugador = {
      nombre: nuevoNombre,
      equipo: nuevoEquipo,
      nacionalidad: nuevaNacionalidad
    };
    jugadores = [...jugadores, nuevoJugador];
    localStorage.setItem('jugadores', JSON.stringify(jugadores));
    document.getElementById('agregarNuevoJugador').style.display = 'none';
    document.getElementById('entradaBusqueda').value = '';
    buscar();
  }
}

function inicializar() {
  mostrarResultados(jugadores);
}

inicializar();
