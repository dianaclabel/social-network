// Este es el punto de entrada de tu aplicacion
// import { myFunction } from "./index.js";
import { registerTemplate } from "./template/registro.js";

// myFunction();

const templateRegister = document.createElement("template");
templateRegister.innerHTML = registerTemplate;

document.body.prepend(templateRegister.content);
