import { loginTemplate } from './routes/login.js';
import { registerTemplate } from './routes/register.js';
import { verification } from './routes/verification.js';
import { errorNotFound } from './routes/notFound.js';
import { home } from './routes/home.js';

const routes = [
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
  {
    path: '/notFound',
    render: errorNotFound,
  },
  {
    path: '/home',
    render: home,
  },
];

// import { routes } from "./routes.js";

const defaultRoute = '/';
const root = document.getElementById('root');

export function navigateTo(hash) {
  const route = routes.find((e) => e.path === hash);

  if (route && route.render) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.firstChild.remove();
    }
    root.appendChild(route.render(navigateTo));
  } else {
    navigateTo('/notFound');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
