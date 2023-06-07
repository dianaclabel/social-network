import { header, wallZone, footer } from './components.js';

export const feed = (navigateTo) => {
  const sectionEl = document.createElement('section');
  const headerNodoEl = header();
  const wallNodo = wallZone();
  const footerNodoEl = footer(navigateTo);
  sectionEl.append(headerNodoEl, wallNodo, footerNodoEl);

  return sectionEl;
};
