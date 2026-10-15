export function calculateCartTotal(items, taxRate) {
  let subtotal = 0;
  let itemCount = 0;

  //Recorrer el array de items y calcular subtotal y itemCountS
  for (const item of items) {
    subtotal = subtotal + item.price * item.quantity;
    itemCount = itemCount + item.quantity;
  }

  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return {
    subtotal: subtotal,
    itemCount: itemCount,
    tax: tax,
    total: total,
  };
}
