/*function armarEquipo() {
    const nombreUsuario = prompt("Ingrese su nombre de usuario:");
    let puntosRestantes = 15;
    const equipo = {
      arquero: "",
      defensa: "",
      mediocampistas: [],
      delantero: ""
    };
  
    function seleccionarJugador(posicion, opciones) {
      let mensaje = `Seleccione un ${posicion}:\n`;
      for (let i = 0; i < opciones.length; i++) {
        mensaje += `${i + 1}. ${opciones[i]}\n`;
      }
      mensaje += `Tiene ${puntosRestantes} puntos restantes.`;
      const eleccion = parseInt(prompt(mensaje)) - 1;
  
      if (eleccion >= 0 && eleccion < opciones.length) {
        const puntosJugador = eleccion + 1;
        if (puntosJugador <= puntosRestantes) {
          equipo[posicion] = opciones[eleccion];
          puntosRestantes -= puntosJugador;
          return true;
        } else {
          alert("No tiene suficientes puntos para seleccionar a este jugador.");
          return false;
        }
      } else {
        alert("Opción inválida.");
        return false;
      }
    }
  
    const arqueros = ["Ederson Moraes 1", "Jan Oblak 2", "Edouard Mendy 3", "Alisson Becker 4", "Thibaut Courtois 5"];
    const defensas = ["David Alaba 1", "Marquinhos 2", "Rúben Dias 3", "Jules Koundé 4", "Virgil Van Dijk 5"];
    const mediocampistas = ["Mediocampista 1", "Mediocampista 2", "Mediocampista 3", "Mediocampista 4", "Mediocampista 5"];
    const delanteros = ["Delantero 1", "Delantero 2", "Delantero 3", "Delantero 4", "Delantero 5"];
  
    if (seleccionarJugador("arquero", arqueros) &&
        seleccionarJugador("defensa", defensas) &&
        seleccionarJugador("mediocampista", mediocampistas) &&
        seleccionarJugador("mediocampista", mediocampistas) &&
        seleccionarJugador("delantero", delanteros)) {
      const equipoCreado = `
        Equipo de ${nombreUsuario}:
        Arquero: ${equipo.arquero}
        Defensa: ${equipo.defensa}
        Mediocampistas: ${equipo.mediocampistas.join(', ')}
        Delantero: ${equipo.delantero}
      `;
      alert(equipoCreado);
    } else {
      alert("No se ha completado la formación del equipo.");
    }
  }
  
  // Llama a la función para armar el equipo al inicio
  armarEquipo();*/

 /* function Jugador(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }
  
  function armarEquipo() {
    let continuar = true;
    let nombreUsuario = prompt("Ingrese su nombre de usuario:");
  
    while (continuar) {
      let puntosRestantes = 15;
      let equipo = {
        arquero: null,
        defensa: null,
        mediocampistas: {
          ofensivo: null,
          defensivo: null
        },
        delantero: null
      };
  
      function seleccionarJugador(posicion, opciones) {
        let eleccion = -1;
        while (eleccion === -1) {
          let mensaje = `Seleccione un ${posicion}:\n`;
          for (let i = 0; i < opciones.length; i++) {
            mensaje += `${i + 1}. ${opciones[i].nombre} (${opciones[i].valor} puntos)\n`;
          }
          mensaje += `Puntos restantes: ${puntosRestantes}\nIngrese el número correspondiente al jugador:`;
          const input = prompt(mensaje);
          eleccion = parseInt(input) - 1;
  
          if (eleccion >= 0 && eleccion < opciones.length) {
            const puntosJugador = opciones[eleccion].valor;
            if (puntosJugador <= puntosRestantes) {
              puntosRestantes -= puntosJugador;
              equipo[posicion] = opciones[eleccion];
            } else {
              alert("No tiene suficientes puntos para seleccionar a este jugador.");
              eleccion = -1;
            }
          } else {
            alert("Opción inválida.");
            eleccion = -1;
          }
        }
      }
  
      const arqueros = [
        new Jugador("Arquero 1", 1),
        new Jugador("Arquero 2", 2),
        new Jugador("Arquero 3", 3),
        new Jugador("Arquero 4", 4),
        new Jugador("Arquero 5", 5)
      ];
  
      const defensas = [
        new Jugador("Defensa 1", 1),
        new Jugador("Defensa 2", 2),
        new Jugador("Defensa 3", 3),
        new Jugador("Defensa 4", 4),
        new Jugador("Defensa 5", 5)
      ];
  
      const mediocampistasOfensivos = [
        new Jugador("Mediocampista Ofensivo 1", 1),
        new Jugador("Mediocampista Ofensivo 2", 2),
        new Jugador("Mediocampista Ofensivo 3", 3),
        new Jugador("Mediocampista Ofensivo 4", 4),
        new Jugador("Mediocampista Ofensivo 5", 5)
      ];
  
      const mediocampistasDefensivos = [
        new Jugador("Mediocampista Defensivo 1", 1),
        new Jugador("Mediocampista Defensivo 2", 2),
        new Jugador("Mediocampista Defensivo 3", 3),
        new Jugador("Mediocampista Defensivo 4", 4),
        new Jugador("Mediocampista Defensivo 5", 5)
      ];
  
      const delanteros = [
        new Jugador("Delantero 1", 1),
        new Jugador("Delantero 2", 2),
        new Jugador("Delantero 3", 3),
        new Jugador("Delantero 4", 4),
        new Jugador("Delantero 5", 5)
      ];
  
      seleccionarJugador("arquero", arqueros);
      if (puntosRestantes >= 1) {
        seleccionarJugador("defensa", defensas);
      } else {
        alert("¡Se ha quedado sin puntos! Vuelva a iniciar el proceso.");
        continue;
      }
      if (puntosRestantes >= 1) {
        seleccionarJugador("mediocampistas", mediocampistasOfensivos);
      } else {
        alert("¡Se ha quedado sin puntos! Vuelva a iniciar el proceso.");
        continue;
      }
      if (puntosRestantes >= 1) {
        seleccionarJugador("mediocampistas", mediocampistasDefensivos);
      } else {
        alert("¡Se ha quedado sin puntos! Vuelva a iniciar el proceso.");
        continue;
      }
      if (puntosRestantes >= 1) {
        seleccionarJugador("delantero", delanteros);
      } else {
        alert("¡Se ha quedado sin puntos! Vuelva a iniciar el proceso.");
        continue;
      }
  
      if (puntosRestantes < 0) {
        alert("Las selecciones superan los 15 puntos. Vuelva a intentarlo.");
      } else  {
        alert(`
        El equipo de ${nombreUsuario} está conformado por:
        Arquero: ${equipo.arquero.nombre}
        Defensa: ${equipo.defensa.nombre}
        Mediocampista Ofensivo: ${equipo.mediocampistas.ofensivo.nombre}
        Mediocampista Defensivo: ${equipo.mediocampistas.defensivo.nombre}
        Delantero: ${equipo.delantero.nombre}
      `);
      }
  
      const opcion = confirm("¿Desea armar otro equipo?");
      continuar = opcion;
      if (continuar) {
        nombreUsuario = prompt("Ingrese su nombre de usuario:");
      }
    }
  }
  
  armarEquipo(); */


  function Jugador(nombre, equipo, nacionalidad) {
    const nombreDividido = nombre.toLowerCase().split(' ');
    for (let i = 0; i < nombreDividido.length; i++) {
      nombreDividido[i] = nombreDividido[i].charAt(0).toUpperCase() + nombreDividido[i].slice(1);
    }
    this.nombre = nombreDividido.join(' ');
    this.equipo = equipo.toUpperCase();
    this.nacionalidad = nacionalidad.toUpperCase();
  }
// Array para almacenar los jugadores
const jugadores = [
  new Jugador("Marc-André ter Stegen", "Barcelona", "Alemania"),
  new Jugador("Gavi", "Barcelona", "España"),
  new Jugador("Pedri", "Barcelona", "España"),
  new Jugador("Raphinha", "Barcelona", "Brasil"),
  new Jugador("Joao Felix", "Barcelona", "Portugal"),
  new Jugador("Jude Bellingham", "Real Madrid", "Inglaterra"),
  new Jugador("Thibaut Courtois", "Real Madrid", "Bélgica"),
  new Jugador("Vinicius Jr", "Real Madrid", "Brasil"),
  new Jugador("Rodrygo Goes", "Real Madrid", "Brasil"),
  new Jugador("Luka Modric", "Real Madrid", "Croacia"),
  new Jugador("Ederson", "Manchester City", "Brasil"),
  new Jugador("Rodri", "Manchester City", "España"),
  new Jugador("Kevin De Bruyne", "Manchester City", "Bélgica"),
  new Jugador("Erling Haaland", "Manchester City", "Noruega"),
  new Jugador("Phil Foden", "Manchester City", "Inglaterra"),
  new Jugador("Mohamed Salah", "Liverpool", "Egipto"),
  new Jugador("Alisson Becker", "Liverpool", "Brasil"),
  new Jugador("Virgil Van Dijk", "Liverpool", "Paises Bajos"),
  new Jugador("Luis Díaz", "Liverpool", "Colombia"),
  new Jugador("Darwin Nuñez", "Liverpool", "Uruguay"),
  new Jugador("Gregor Kobel", "Borussia Dortmund", "Suiza"),
  new Jugador("Mats Hummels", "Borussia Dortmund", "Alemania"),
  new Jugador("Marco Reus", "Borussia Dortmund", "Alemania"),
  new Jugador("Karim Adeyemi", "Borussia Dortmund", "Alemania"),
  new Jugador("Felix Nmecha", "Borussia Dortmund", "Alemania"),
  new Jugador("Manuel Neuer", "Bayern Munich", "Alemania"),
  new Jugador("Mathijs De Light", "Bayern Munich", "Paises Bajos"),
  new Jugador("Harry Kane", "Bayern Munich", "Inglaterra"),
  new Jugador("Leroy Sane", "Bayern Munich", "Alemania"),
  new Jugador("Jamal Musiala", "Bayern Munich", "Alemania"),
  new Jugador("Lionel Messi", "I. Miami", "Argentina"),
  new Jugador("Cristiano Ronaldo", "Al Nasr", "Portugal"),
  new Jugador("Alexis Sanchez", "Inter de Milan", "Chile"),
  new Jugador("Arturo Vidal", "Paranaense", "Chile"),
];

// Función para buscar o añadir jugadores
function buscarOAnadirJugador() {
  let equipoBuscado = prompt('Ingrese el equipo a buscar:');
  let jugadoresFiltrados = jugadores.filter(jugador => 
    jugador.equipo.toLowerCase().includes(equipoBuscado.toLowerCase())
  );

  while (jugadoresFiltrados.length === 0) {
    const confirmacion = confirm(`No se encontraron jugadores del equipo ${equipoBuscado}. ¿Desea intentar con otro equipo?`);

    if (confirmacion) {
      equipoBuscado = prompt('Ingrese otro equipo a buscar:');
      jugadoresFiltrados = jugadores.filter(jugador => 
        jugador.equipo.toLowerCase().includes(equipoBuscado.toLowerCase())
      );
    } else {
      alert('No se agregó ningún jugador nuevo.');
      return;
    }
  }

  if (jugadoresFiltrados.length > 0) {
    let listaJugadores = 'Jugadores encontrados:\n';
    jugadoresFiltrados.forEach((jugador, index) => {
      listaJugadores += `${index + 1}. ${jugador.nombre}\n`;
    });

    const seleccion = prompt(`${listaJugadores}Ingrese el NÚMERO del jugador para más detalles o 'nuevo' para agregar un nuevo jugador:`);

    if (seleccion.toLowerCase() === 'nuevo') {
      const nombreNuevoJugador = prompt('Ingrese el nombre del nuevo jugador:');
      const nacionalidadNuevoJugador = prompt('Ingrese la nacionalidad del nuevo jugador:');
      jugadores.push(new Jugador(nombreNuevoJugador, jugadoresFiltrados[0].equipo, nacionalidadNuevoJugador));
      alert(`¡Nuevo jugador ${nombreNuevoJugador} agregado al equipo ${jugadoresFiltrados[0].equipo}!`);

      // Mostrar la lista actualizada de jugadores del equipo
      const jugadoresEquipoActualizado = jugadores.filter(jugador => jugador.equipo.toLowerCase() === jugadoresFiltrados[0].equipo.toLowerCase());
      mostrarListaJugadores(jugadoresEquipoActualizado);
    } else {
      const seleccionIndex = parseInt(seleccion) - 1;

      if (seleccionIndex >= 0 && seleccionIndex < jugadoresFiltrados.length) {
        const jugadorSeleccionado = jugadoresFiltrados[seleccionIndex];
        alert(`Detalles del jugador seleccionado:\nNombre: ${jugadorSeleccionado.nombre}\nEquipo: ${jugadorSeleccionado.equipo}\nNacionalidad: ${jugadorSeleccionado.nacionalidad}`);
      } else {
        alert('Número de jugador inválido.');
      }
    }

    const continuar = confirm('¿Desea buscar o añadir otro jugador?');
    if (continuar) {
      buscarOAnadirJugador();
    } else {
      console.table('Lista completa de jugadores:');
      jugadores.forEach(jugador => {
        console.table(`Nombre: ${jugador.nombre} | Equipo: ${jugador.equipo} | Nacionalidad: ${jugador.nacionalidad}`);
      });
      alert('Operación completada. ¡Gracias!');
    }
  }
}

// Función para mostrar la lista de jugadores en un alert
function mostrarListaJugadores(jugadores) {
  const jugadoresTabla = jugadores.map(jugador => {
    return {
      'Nombre': jugador.nombre,
      'Equipo': jugador.equipo,
      'Nacionalidad': jugador.nacionalidad
    };
  });

  console.table(jugadoresTabla);

  
}


// Buscar o añadir jugadores al llamar la función
buscarOAnadirJugador();