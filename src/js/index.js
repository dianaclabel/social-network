// aqui exportaras las funciones que necesites

import { navigateTo } from "./main";

// RegistroTemplate
export function renderRegisterTemplate(template) {
  const templateRegister = document.createElement("template");
  templateRegister.innerHTML = template;

  document.body.classList.add("body-register");
  document.body.prepend(templateRegister.content);

  const btnRegisterEl = document.getElementById("btnRegister");
  btnRegisterEl.addEventListener("click", () => {
    navigateTo("/verification");
  });
}
// LoginTemplate

export function renderLoginTemplate(template) {
  const templateLogin = document.createElement("template");
  templateLogin.innerHTML = template;

  document.body.classList.add("body-login");
  document.body.prepend(templateLogin.content);

  const btnLoginEl = document.getElementById("btn-login");
  btnLoginEl.addEventListener("click", () => {
    navigateTo("/notFound");
  });
}

// Verification register

export function renderVerificationTemplate(template) {
  const templateVerification = document.createElement("template");
  templateVerification.innerHTML = template;

  document.body.classList.add("body-verification");
  document.body.append(templateVerification.content);

  const btnVerificationEl = document.getElementById("btn-started");
  btnVerificationEl.addEventListener("click", () => {
    navigateTo("/login");
  });
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
