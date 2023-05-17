import {
  renderRegisterTemplate,
  renderLoginTemplate,
  renderVerificationTemplate,
} from "./main";
import { loginTemplate } from "./routes/inicio-sesion";
import { registerTemplate } from "./routes/registro";
import { verification } from "./routes/verificacion";

export const routes = [
  {
    path: "/register",
    render: renderRegisterTemplate(registerTemplate),
  },
  { path: "/login", render: renderLoginTemplate(loginTemplate) },
  { path: "/verificacion", render: renderVerificationTemplate(verification) },
];
