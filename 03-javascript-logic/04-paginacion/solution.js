//Si page <= 0, se usa la página 1. Si pageSize <= 0, se usa un tamaño de página de 10.
export function paginate(items, page, pageSize) {
  //Valores por defecto para parámetros inválidos
  if (!pageSize || pageSize <= 0) {
    pageSize = 10;
  }
  if (!page || page <= 0) {
    page = 1;
  }
  //Total de elementos y número total de páginas
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const data = items.slice((page - 1) * pageSize, page * pageSize);

  return {
    data: data,
    page: page,
    pageSize: pageSize,
    totalItems: totalItems,
    totalPages: totalPages,
    //Indica si existe una página anterior
    hasPrevious: page > 1,
    //Indica si existe una página siguiente
    hasNext: page < totalPages,
  };
}
