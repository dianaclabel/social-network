import { loginTemplate } from './routes/login.js';
import { registerTemplate } from './routes/register.js';
import { verification } from './routes/verification.js';
import { errorNotFound } from './routes/notFound.js';
import { wellcome } from './routes/bienvenida.js';
import { feed } from './routes/feed.js';

export const routes = [
  {
    path: '/feed',
    render: feed,
  },
  {
    path: '/register',
    render: registerTemplate,
  },
  {
    path: '/',
    render: loginTemplate,
  },
  {
    path: '/verification',
    render: verification,
  },
  {
    path: '/bienvenida',
    render: wellcome,
  },
];

const root = document.getElementById('root');

function navigateTo(path) {
  console.log(path);
  const route = routes.find((r) => r.path === path);
  let render;
  console.log(route);
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
