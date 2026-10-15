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
  //Se filtra por usuarios con email válido
  const validUser = users.filter(function (user) {
    const correctEmail = user.email.trim();

    const hasValidEmail = correctEmail !== "";
    return hasValidEmail;
  });

  //Se transforma la lista de usuarios con email válido
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
