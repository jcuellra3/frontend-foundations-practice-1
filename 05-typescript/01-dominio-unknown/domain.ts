export interface Collection {
  id: string;
  title: string;
  category: 'learning' | 'work' | 'personal';
  note?: string;
}
export function isCollection(value: unknown): value is Collection {
  //Se comprueba que el dato sea un objeto real; no null o array.
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  //Se comprueba que id existe y es texto no vacío.
  if (
    !('id' in value) ||
    typeof value.id !== 'string' ||
    value.id.trim() === ''
  ) {
    return false;
  }

  //Se comprueba que "title" existe y es texto no vacío.
  if (
    !('title' in value) ||
    typeof value.title !== 'string' ||
    value.title.trim() === ''
  ) {
    return false;
  }

  //Se comprueba que "category" existe y es una de las 3 opciones permitidas
  if (
    !('category' in value) ||
    (value.category !== 'learning' &&
      value.category !== 'work' &&
      value.category !== 'personal')
  ) {
    return false;
  }

  //"note" es opcional. Si viene definida, tiene que ser string.
  if (
    'note' in value &&
    value.note !== undefined &&
    typeof value.note !== 'string'
  ) {
    return false;
  }
  //Se devuelve true si pasa todos los filtros (cumple con la interfaz Collection).
  return true;
}

export function parseCollection(value: unknown): Collection {
  //Se valida que sea un objeto.
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error('El dato recibido no es un objeto válido.');
  }

  //Se valida "id".
  if (
    !('id' in value) ||
    typeof value.id !== 'string' ||
    value.id.trim() === ''
  ) {
    throw new Error('El campo "id" es obligatorio y debe ser un texto.');
  }

  //Se valida "title".
  if (
    !('title' in value) ||
    typeof value.title !== 'string' ||
    value.title.trim() === ''
  ) {
    throw new Error('El campo "title" es obligatorio y debe ser un texto.');
  }

  //Se valida "category".
  if (
    !('category' in value) ||
    (value.category !== 'learning' &&
      value.category !== 'work' &&
      value.category !== 'personal')
  ) {
    throw new Error(
      'El campo "category" debe ser "learning", "work" o "personal".',
    );
  }

  //Se valida y limpia el campo opcional "note".
  let cleanNote: string | undefined = undefined;

  if ('note' in value && value.note !== undefined) {
    if (typeof value.note !== 'string') {
      throw new Error('El campo "note" debe ser un texto.');
    }

    //Solo se guarda la nota si contiene texto real tras quitar espacios.
    if (value.note.trim() !== '') {
      cleanNote = value.note.trim();
    }
  }

  //Se construye el objeto final con los datos ya limpios.
  const collection: Collection = {
    id: value.id.trim(),
    title: value.title.trim(),
    category: value.category,
  };

  //Se añade "note" si tiene contenido.
  if (cleanNote !== undefined) {
    collection.note = cleanNote;
  }

  return collection;
}
