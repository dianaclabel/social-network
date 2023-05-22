import { loginTemplate } from './routes/login.js';
import { registerTemplate } from './routes/register.js';
import { verification } from './routes/verification.js';
import { errorNotFound } from './routes/notFound.js';
import { home } from './routes/homeDos.js';

export const routes = [
  {
    path: '/',
    render: home,
  },
  {
    path: '/register',
    render: registerTemplate,
  },
  {
    path: '/login',
    render: loginTemplate,
  },
  {
    path: '/verification',
    render: verification,
  },
];

const root = document.getElementById('root');

function navigateTo(path) {
  const route = routes.find((r) => r.path === path);
  let render;

  if (route) {
    render = route.render;
  } else {
    render = errorNotFound;
  }

  // salir de la ruta
  if (root.firstChild) {
    root.firstChild.remove();
  }
  // entrar a la nueva ruta;
  root.appendChild(render(navigateTo));

  // navegar -actualizar URL
  window.history.pushState({}, '', path);
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname);
