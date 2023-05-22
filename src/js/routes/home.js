export const home = (navigateTo) => {
  const homeNodo = document.createElement('header');
  const imgLogo = document.createElement('img');
  const imgBell = document.createElement('img');

  homeNodo.id = 'homePrincipal';
  homeNodo.className = 'homePrincipal';

  imgLogo.className = 'homeLogo';
  imgLogo.src = '../../image/logo.png';
  imgLogo.alt = 'logoFatFit';

  imgBell.className = 'campana';
  imgBell.src = '../../icon/bell.png';
  imgBell.alt = 'campana-notificacion';

  homeNodo.appendChild(imgLogo);
  homeNodo.appendChild(imgBell);

  document.body.appendChild(homeNodo);
  document.body.appendChild(imgLogo);
  document.body.appendChild(imgBell);
};
