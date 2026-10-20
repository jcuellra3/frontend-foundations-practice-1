const UNIT_PRICE = 29.99;
let quantity = 0;

//Se seleccionan elementos del DOM según su atributo id.
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const quantityOutput = document.getElementById("quantity");
const totalOutput = document.getElementById("total");

//Actualizar el DOM
function updateDOM() {
  quantityOutput.textContent = quantity;
  const totalPrice = quantity * UNIT_PRICE;

  //Formateo a dos decimales, cambiar punto por coma y añadir símbolo €.
  totalOutput.textContent = `${totalPrice.toFixed(2).replace(".", ",")} €`;

  //Botón decrease deshabilitado si cantidad es 0.
  decreaseBtn.disabled = quantity === 0;
}

//Listeners
increaseBtn.addEventListener("click", () => {
  quantity++;
  updateDOM();
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
  }
  updateDOM();
});

updateDOM();
