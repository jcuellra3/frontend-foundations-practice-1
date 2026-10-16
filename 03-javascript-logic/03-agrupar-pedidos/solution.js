export function groupOrdersByStatus(orders) {
  //Se crea el acumulador
  const result = {};

  for (const order of orders) {
    const status = order.status;
    //Se crea estado si no existe para soportar nuevos
    if (!result[status]) {
      result[status] = {
        count: 0,
        total: 0,
      };
    }

    result[status].count++;
    result[status].total += order.total;
  }

  return result;
}
