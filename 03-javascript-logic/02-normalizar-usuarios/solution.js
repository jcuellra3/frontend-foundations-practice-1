//Función para normalizar el nombre o apellido
function formatName(name) {
  //Se quitan los espacios al principio y final
  const nameNoSpaces = name.trim();
  //Se pasan todas las letras a minúsculas
  const cleanName = nameNoSpaces.toLowerCase();
  //Se pasa la primera letra a mayúscula
  const firstLetter = cleanName[0].toUpperCase();
  //Se guarda el resto del nombre
  const restOfName = cleanName.slice(1);
  //Se une la primera letra en mayúscula con el resto del nombre
  const finalName = firstLetter + restOfName;
  return finalName;
}

export function normalizeUsers(users) {
  const validUser = users.filter(function (user) {
    const correctEmail = user.email.trim();
    const hasValidEmail = correctEmail !== "";
    return hasValidEmail;
  });

  const normalizedList = validUser.map(function (user) {
    const cleanFirstName = formatName(user.firstName);
    const cleanLastName = formatName(user.lastName);
    const nameFullName = cleanFirstName + " " + cleanLastName;
    const emailNoSpace = user.email.trim();
    const cleanEmail = emailNoSpace.toLowerCase();
    const newUserObject = {
      fullName: nameFullName,
      email: cleanEmail,
    };
    return newUserObject;
  });
  return normalizedList;
}

/* Versión refactorizada con funciones flecha.
export const normalizeUsers = (users) => {
  // Se conservan solo los usuarios cuyo email no queda vacío al limpiarlo.
  const validUser = users.filter((user) => {
    const correctEmail = user.email.trim();
    const hasValidEmail = correctEmail !== "";
    return hasValidEmail;
  });

  // Se transforma cada usuario válido en un nuevo objeto normalizado.
  const normalizedList = validUser.map((user) => {
    const cleanFirstName = formatName(user.firstName);
    const cleanLastName = formatName(user.lastName);
    const nameFullName = cleanFirstName + " " + cleanLastName;

    const emailNoSpace = user.email.trim();
    const cleanEmail = emailNoSpace.toLowerCase();

    return {
      fullName: nameFullName,
      email: cleanEmail,
    };
  });

  return normalizedList;
};*/
