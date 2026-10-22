//Controles del formulario.
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsInput = document.getElementById("terms");

//Elementos que muestran los errores.
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const termsError = document.getElementById("terms-error");

nameInput.setAttribute("aria-describedby", "name-error");
emailInput.setAttribute("aria-describedby", "email-error");
passwordInput.setAttribute("aria-describedby", "password-error");
termsInput.setAttribute("aria-describedby", "terms-error");

//Formulario completo.
const form = document.getElementById("form");

//Mensaje de estado.
const statusMsg = document.getElementById("status");

function validarNombre() {
  const texto = nameInput.value.trim();

  if (texto.length < 2) {
    nameError.textContent = "Escribe al menos 2 caracteres.";
    return false;
  } else {
    //Se borra el error si se corrige.
    nameError.textContent = "";
    return true;
  }
}

function validarEmail() {
  if (!emailInput.checkValidity()) {
    emailError.textContent = "Introduce un email válido.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validarPassword() {
  const passwordValida = /^(?=.*\d).{8,}$/.test(passwordInput.value);

  if (!passwordValida) {
    passwordError.textContent =
      "Usa al menos 8 caracteres e incluye un número.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validarTerminos() {
  if (!termsInput.checked) {
    termsError.textContent = "Debes aceptar las condiciones.";
    return false;
  } else {
    termsError.textContent = "";
    return true;
  }
}

let envioIntentado = false;
nameInput.addEventListener("blur", validarNombre);

emailInput.addEventListener("blur", validarEmail);

passwordInput.addEventListener("blur", validarPassword);

termsInput.addEventListener("change", () => {
  if (envioIntentado) validarTerminos();
});

form.addEventListener("submit", (e) => {
  //Se detiene el envío automático.
  e.preventDefault();
  envioIntentado = true;

  //Se revisan los 4 campos y se guarda si true o false.
  const nombreOk = validarNombre();
  const emailOk = validarEmail();
  const passwordOk = validarPassword();
  const terminosOk = validarTerminos();

  //Si nombre false, cursor a nombre y para.
  if (!nombreOk) {
    nameInput.focus();
    return;
  }

  //Si email false, cursor a email y para.
  if (!emailOk) {
    emailInput.focus();
    return;
  }

  //Si password false, cursor a password y para.
  if (!passwordOk) {
    passwordInput.focus();
    return;
  }

  //Si no aceptó términos, cursor a términos.
  if (!terminosOk) {
    termsInput.focus();
    return;
  }

  //Si nada false
  statusMsg.textContent = "Cuenta creada correctamente.";
});
