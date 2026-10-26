const PRODUCTS_URL = "./data/products.json";
const queryInput = document.getElementById("query");
const statusText = document.getElementById("status");
const resultsList = document.getElementById("results");

let debounce = null;
let currentController = null;

async function searchProducts(text) {
  if (currentController) {
    currentController.abort();
  }
  currentController = new AbortController();

  statusText.textContent = "Cargando...";
  resultsList.textContent = "";

  try {
    const response = await fetch(PRODUCTS_URL, {
      signal: currentController.signal,
    });

    if (!response.ok) {
      statusText.textContent = "Error al buscar productos.";
      return;
    }

    //Se convierte JSON en lista de productos.
    const products = await response.json();
    const filtered = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(text);
      const categoryMatch = product.category.toLowerCase().includes(text);
      return nameMatch || categoryMatch;
    });

    //Estado sin resultados.
    if (filtered.length === 0) {
      statusText.textContent = "Sin resultados.";
      return;
    }

    //Estado con resultados.
    statusText.textContent = `Resultados encontrados: ${filtered.length}`;
    filtered.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - (${product.category}) - Precio: ${product.price}€`;
      resultsList.appendChild(li);
    });
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }
    statusText.textContent = "Error al cargar los datos.";
  }
}

queryInput.addEventListener("input", () => {
  //Se reinicia el reloj de 300ms cada vez que se pulsa una tecla.
  clearTimeout(debounce);
  const text = queryInput.value.trim().toLowerCase();

  //Se busca con dos caracteres o más.
  if (text.length < 2) {
    statusText.textContent = "Escribe al menos 2 caracteres.";
    resultsList.textContent = "";
    return;
  }

  //Espera 300ms desde la última pulsación.
  debounce = setTimeout(() => {
    searchProducts(text);
  }, 300);
});
