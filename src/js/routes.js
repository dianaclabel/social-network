import {
  renderRegisterTemplate,
  renderLoginTemplate,
  renderVerificationTemplate,
  renderNotFoundTemplate,
} from "./index.js";
import { loginTemplate } from "./routes/inicio-sesion.js";
import { errorNotFound } from "./routes/pagina-error.js";
import { registerTemplate } from "./routes/registro.js";
import { verification } from "./routes/verificacion.js";

export const routes = [
  {
    path: "/register",
    render: renderRegisterTemplate(registerTemplate),
  },
  { path: "/login", render: renderLoginTemplate(loginTemplate) },
  { path: "/verificacion", render: renderVerificationTemplate(verification) },
  { path: "/notFound", render: renderNotFoundTemplate(errorNotFound) },
];
