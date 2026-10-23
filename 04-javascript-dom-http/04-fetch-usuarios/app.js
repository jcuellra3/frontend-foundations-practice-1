const USERS_URL = "./data/users.json";
const statusText = document.getElementById("status");
const retryBtn = document.getElementById("retry");
const usersList = document.getElementById("users");

async function loadUsers() {
  //Estado "loading"
  statusText.textContent = "Cargando...";
  retryBtn.hidden = true;
  usersList.textContent = "";

  try {
    const response = await fetch(USERS_URL);
    //Se comprueba response.ok antes de leer el JSON
    if (!response.ok) {
      statusText.textContent = "Error al cargar los usuarios.";
      retryBtn.hidden = false;
      return;
    }
    const users = await response.json();

    //Estado éxito sin datos
    if (users.length === 0) {
      statusText.textContent = "No hay usuarios.";
      return;
    }

    //Estado éxito con datos
    statusText.textContent = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email} (${user.role})`;
      usersList.appendChild(li);
    });
  } catch (error) {
    //Estado error
    statusText.textContent = "Error al cargar los usuarios.";
    retryBtn.hidden = false;
  }
}
retryBtn.addEventListener("click", loadUsers);
loadUsers();
