import { header, wallZone, footer } from './components.js';

export const feed = () => {
  const sectionEl = document.createElement('section');
  const headerNodoEl = header();
  const wallNodo = wallZone();
  const footerNodoEl = footer();
  sectionEl.append(headerNodoEl, wallNodo, footerNodoEl);

  return sectionEl;
};
