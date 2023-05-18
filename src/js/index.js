// aqui exportaras las funciones que necesites

// Este es el punto de entrada de tu aplicacion
// import { myFunction } from "./index.js";
// import { registerTemplate } from './routes/registro.js';
// import { loginTemplate } from './routes/inicio-sesion.js';
// import { verification } from './routes/verificacion.js';
// import { notFound } from "./routes/pagina-error";

// RegistroTemplate
export function renderRegisterTemplate(template) {
  const templateRegister = document.createElement("template");
  templateRegister.innerHTML = template;

  document.body.classList.add("body-register");
  document.body.prepend(templateRegister.content);
}
// LoginTemplate

export function renderLoginTemplate(template) {
  const templateLogin = document.createElement("template");
  templateLogin.innerHTML = template;

  document.body.classList.add("body-login");
  document.body.prepend(templateLogin.content);
}

// Verification register

export function renderVerificationTemplate(template) {
  const templateVerification = document.createElement("template");
  templateVerification.innerHTML = template;

  document.body.classList.add("body-verification");
  document.body.append(templateVerification.content);
}
// Not found

export function renderNotFoundTemplate(template) {
  const templateNotFound = document.createElement("template");
  templateNotFound.innerHTML = template;

  document.body.classList.add("body-notFound");
  document.body.append(templateNotFound.content);
}

// renderRegisterTemplate(registerTemplate);
// renderLoginTemplate(loginTemplate);
// renderVerificationTemplate(verification);
// renderNotFoundTemplate(errorNotFound);
