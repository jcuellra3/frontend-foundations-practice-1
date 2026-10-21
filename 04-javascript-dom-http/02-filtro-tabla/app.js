//Referencias a los controles y mensajes del HTML para poder actualizarlos.
const searchInput = document.getElementById("search");
const clearBtn = document.getElementById("clear");
const emptyMsg = document.getElementById("empty");
const resultsCount = document.getElementById("results-count");
//Se recogen todas las filas del tbody.
const rows = document.querySelectorAll("#rows tr");
//Compara la búsqueda con el texto de cada fila y actualiza qué filas se ven.
function filterTable() {
  const query = searchInput.value.trim().toLowerCase();
  let matchesCount = 0;

  //forEach() ejecuta esta función una vez por cada fila de la lista.
  rows.forEach((row) => {
    //textContent incluye el texto de todas las celdas de la fila.
    const rowText = row.textContent.toLowerCase();

    //includes() devuelve true si el texto de la fila contiene la búsqueda.
    const matches = rowText.includes(query);

    //La propiedad hidden oculta la fila cuando no coincide.
    row.hidden = !matches;

    if (matches) {
      //Cuenta solo las filas que permanecen visibles.
      matchesCount++;
    }
  });

  //Actualiza el contador y usa el singular solo cuando hay una coincidencia.
  resultsCount.textContent = `${matchesCount} ${
    matchesCount === 1 ? "resultado" : "resultados"
  }`;

  //Si ninguna fila coincide, muestra el aviso de que no hay resultados.
  emptyMsg.hidden = matchesCount > 0;
}

//Ejecuta el filtro al cargar para mostrar el contador inicial.
filterTable();

//El evento input se dispara al escribir, pegar o borrar texto en el campo.
searchInput.addEventListener("input", () => {
  filterTable();
});

//Al limpiar, vacía el campo y vuelve a filtrar; una búsqueda vacía muestra todo.
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  filterTable();
});
