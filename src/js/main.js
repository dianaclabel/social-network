// import { routes } from "./routes.js";

// function goToPage(event) {
//   event.preventDefault(); // stop the browser from navigating to the destination URL.
//   const hrefUrl = event.target.getAttribute("href");

//   const route = routes.find((e) => e.path === hrefUrl);
//   const page = route ? route.render() : notFound();

//   const bodyMainEl = document.getElementById("body-main");
//   bodyMainEl.innerHTML = "";
//   bodyMainEl.append(page);

//   window.history.pushState({}, window.title, hrefUrl); // Update URL as well as browser history.
// }

// // Enable client-side routing for all links on the page
// document
//   .querySelectorAll("a")
//   .forEach((link) => link.addEventListener("click", goToPage));

import {
  renderRegisterTemplate,
  renderLoginTemplate,
  renderVerificationTemplate,
  renderNotFoundTemplate,
} from "./index.js";
import { loginTemplate } from "./routes/login.js";
import { errorNotFound } from "./routes/notFound.js";
import { registerTemplate } from "./routes/register.js";
import { verification } from "./routes/verification.js";

const routes = [
  {
    path: "/register",
    render: renderRegisterTemplate(registerTemplate),
  },
  {
    path: "/login",
    render: renderLoginTemplate(loginTemplate),
  },
  {
    path: "/verification",
    render: renderVerificationTemplate(verification),
  },
  {
    path: "/notFound",
    render: renderNotFoundTemplate(errorNotFound),
  },
];

const defaultRoute = "/";
const root = document.getElementById("body-main");

export function navigateTo(hash) {
  const route = routes.find((e) => e.path === hash);

  if (route && route.render) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path
    );

    if (root.firstChild) {
      root.firstChild.remove();
    }
    root.appendChild(route.render(navigateTo));
  } else {
    navigateTo("/notFound");
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
