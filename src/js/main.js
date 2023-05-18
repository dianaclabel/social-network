import { routes } from "./routes.js";

function goToPage(event) {
  event.preventDefault(); // stop the browser from navigating to the destination URL.
  const hrefUrl = event.target.getAttribute("href");

  const route = routes.find((e) => e.path === hrefUrl);
  let page;

  if (route) {
    page = route.render();
  } else {
    page = notFound();
  }

  // const pageToLoad = hrefUrl.slice(1); // remove the leading slash
  document.getElementById("placeholder").innerHTML = load(pageToLoad);
  window.history.pushState({}, window.title, hrefUrl); // Update URL as well as browser history.
}

// Enable client-side routing for all links on the page
document
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", goToPage));
