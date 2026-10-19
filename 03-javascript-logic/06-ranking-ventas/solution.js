export function buildSalesRanking(sales, limit = 3) {
  //Se crea lista vacía para guardar cada vendedor con su total
  const ranking = [];

  //Se recorren todas las ventas
  for (const sale of sales) {
    //Se busca si el vendedor fue añadido anteriormente
    const existingSeller = ranking.find(function (item) {
      return item.seller === sale.seller;
    });
    //Se comprueba si se ha encontrado o no
    if (existingSeller) {
      //Si ya existe en la lista, se suma el importe
      existingSeller.total = existingSeller.total + sale.amount;
    } else {
      //Si no existe, se añade a la lista por primera vez
      ranking.push({
        seller: sale.seller,
        total: sale.amount,
      });
    }
  }

  //Se ordena la lista comparando vendedores
  ranking.sort(function (a, b) {
    //Se comprueba si hay empate en el monto total
    if (a.total === b.total) {
      //Si empatan, se desempata alfabéticamente
      if (a.seller < b.seller) {
        return -1;
      }
      if (a.seller > b.seller) {
        return 1;
      }
      return 0;
    }
    //Se ordena de mayor a menor
    return b.total - a.total;
  });
  //Se devuelve el nuevo array
  return ranking.slice(0, limit);
}
