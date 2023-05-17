// Este es el punto de entrada de tu aplicacion
// import { myFunction } from "./index.js";
import { registerTemplate } from './template/registro.js';
import { loginTemplate } from './template/inicio-sesion.js';
import { verification } from './template/verificacion.js';
// myFunction();
// RegistroTemplate
const templateRegister = document.createElement('template');
templateRegister.innerHTML = registerTemplate;

document.body.classList.add('body-register');
document.body.prepend(templateRegister.content);

// LoginTemplate

const templateLogin = document.createElement('template');
templateLogin.innerHTML = loginTemplate;
document.body.classList.add('body-login');
document.body.prepend(templateLogin.content);

// Verification register
const templateVerification = document.createElement('template');
templateVerification.innerHTML = verification;

document.body.classList.add('body-verification');
document.body.append(templateVerification.content);
