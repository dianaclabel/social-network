// import { firebaseUser } from '../firebase';

export const header = () => {
  const headerNodo = document.createElement('header');
  const divContenedorHeader = document.createElement('div');
  const imgLogo = document.createElement('img');
  const imgBell = document.createElement('img');
  const imgUserPhoto = document.createElement('img');

  divContenedorHeader.className = 'contenedor-header';

  headerNodo.id = 'hederPrincipal';
  headerNodo.className = 'hederPrincipal';

  imgLogo.className = 'hederLogo';
  imgLogo.src = '../../image/logo.png';
  imgLogo.alt = 'logoFatFit';

  imgBell.className = 'iconHeader';
  imgBell.src = '../../icon/bell.png';
  imgBell.alt = 'campana-notificacion';

  imgUserPhoto.className = 'iconHeader';
  imgUserPhoto.src = '../../image/usuarioCarrot.png';
  imgUserPhoto.id = 'userPhoto';

  divContenedorHeader.appendChild(imgLogo);
  divContenedorHeader.appendChild(imgBell);
  divContenedorHeader.appendChild(imgUserPhoto);
  headerNodo.appendChild(divContenedorHeader);

  // document.body.append(headerNodo);

  return headerNodo;
};

export const footer = () => {
  const footerNodo = document.createElement('footer');
  footerNodo.className = 'footerHome';

  const divContainerMenu = document.createElement('div');
  divContainerMenu.className = 'container-menu';

  const imgIconHome = document.createElement('img');
  imgIconHome.src = '../../icon/homepage.png';
  imgIconHome.className = 'iconFooter';
  imgIconHome.id = 'iconHome';
  imgIconHome.alt = 'icon-Home';
  divContainerMenu.appendChild(imgIconHome);

  const imgIconSearch = document.createElement('img');
  imgIconSearch.src = '../../icon/Search.png';
  imgIconSearch.alt = 'icon-search';
  imgIconSearch.className = 'iconFooter';
  imgIconSearch.id = 'iconSearch';
  divContainerMenu.appendChild(imgIconSearch);

  const imgIconAdd = document.createElement('img');
  imgIconAdd.src = '../../icon/Add.png';
  imgIconAdd.alt = 'icon-Add';
  imgIconAdd.className = 'iconFooter';
  imgIconAdd.id = 'iconAdd';
  divContainerMenu.appendChild(imgIconAdd);

  const imgIconLikes = document.createElement('img');
  imgIconLikes.src = '../../icon/carrot.png';
  imgIconLikes.alt = 'icon-Likes';
  imgIconLikes.className = 'iconFooter';
  imgIconLikes.id = 'iconLikes';
  divContainerMenu.appendChild(imgIconLikes);

  const imgIconLogout = document.createElement('img');
  imgIconLogout.src = '../../icon/Logout.png';
  imgIconLogout.alt = 'logout';
  imgIconLogout.className = 'iconFooter';
  imgIconLogout.id = 'logout';
  divContainerMenu.appendChild(imgIconLogout);

  footerNodo.appendChild(divContainerMenu);

  // document.body.append(footerNodo);

  return footerNodo;
};

export const home = () => {
  header();
  footer();
};
