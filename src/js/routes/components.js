// import { firebaseUser } from '../firebase';

export const header = () => {
  const headerNodo = document.createElement('header');
  const divContenedorHeader = document.createElement('div');
  const imgLogo = document.createElement('img');
  const divContainerUser = document.createElement('div');
  const imgBell = document.createElement('img');
  const imgUserPhoto = document.createElement('img');

  divContenedorHeader.className = 'contenedor-header';
  divContainerUser.className = 'container-user';

  headerNodo.id = 'headerPrincipal';
  headerNodo.className = 'headerPrincipal';

  imgLogo.className = 'headerLogo';
  imgLogo.src = '../../image/logo.png';
  imgLogo.alt = 'logoFatFit';

  imgBell.className = 'iconBellHeader';
  imgBell.src = '../../icon/bell.png';
  imgBell.alt = 'campana-notificacion';

  imgUserPhoto.className = 'iconUserPhotoHeader';
  imgUserPhoto.src = '../../image/usuarioCarrot.png';
  imgUserPhoto.id = 'userPhoto';

  divContainerUser.appendChild(imgBell);
  divContainerUser.appendChild(imgUserPhoto);
  divContenedorHeader.appendChild(imgLogo);
  divContenedorHeader.appendChild(divContainerUser);
  headerNodo.appendChild(divContenedorHeader);

  return headerNodo;
};

export const wallZone = () => {
  const sectionNodo = document.createElement('section');
  sectionNodo.className = 'sectionWall';

  // const welcome = document.createElement('h2');
  // welcome.textContent = 'Hola';
  // welcome.classList.add('hiUser');
  // const spanUserName = document.createElement('span');
  // spanUserName.setAttribute('id', 'userName');
  // welcome.appendChild(spanUserName);
  // sectionNodo.appendChild(welcome);
  const imgUserForm = document.createElement('img');
  imgUserForm.classList.add('imgUser');
  imgUserForm.setAttribute('src', '../../image/fotoUsuario.png');
  imgUserForm.setAttribute('alt', 'imagen-usuario');

  const createPost = document.createElement('textarea');
  createPost.classList.add('containerCreatePost');
  createPost.setAttribute('id', 'inputCreatePost');
  createPost.setAttribute('cols', '30');
  createPost.setAttribute('rows', '10');
  createPost.setAttribute('placeholder', 'Publica algo aquí');


  const sharePhoto = document.createElement('img');
  sharePhoto.classList.add('share-icons');
  sharePhoto.setAttribute('src', '../../icon/sharePhoto.png');
  sharePhoto.setAttribute('alt', 'imgen-para-compartir');

  const shareMap = document.createElement('img');
  shareMap.classList.add('share-icons');
  shareMap.setAttribute('src', '../../icon/shareMap.png');
  shareMap.setAttribute('alt', 'mapa-para-compartir');

  const shareVideo = document.createElement('img');
  shareVideo.classList.add('share-icons');
  shareVideo.setAttribute('src', '../../icon/shareVideo.png');
  shareVideo.setAttribute('alt', 'video-para-compartir');

  const buttonPost = document.createElement('button');
  buttonPost.classList.add('btn-share');
  buttonPost.type = 'submit';
  buttonPost.textContent = 'Compartir';

  const divContainerShare = document.createElement('div');
  divContainerShare.classList.add('divContainerShare');
  divContainerShare.appendChild(sharePhoto);
  divContainerShare.appendChild(shareMap);
  divContainerShare.appendChild(shareVideo);

  const form = document.createElement('form');
  form.classList.add('form-post');
  form.setAttribute('id', 'form-post');
  form.appendChild(imgUserForm);
  form.appendChild(createPost);
  // form.appendChild(sharePhoto);
  // form.appendChild(shareMap);
  // form.appendChild(shareVideo);
  form.appendChild(divContainerShare);
  form.appendChild(buttonPost);

  const divContainerWall = document.createElement('div');
  divContainerWall.classList.add('container-wall');
  divContainerWall.setAttribute('id', 'container-wall');
  divContainerWall.appendChild(form);
  sectionNodo.appendChild(divContainerWall);

  return sectionNodo;
};

export const footer = () => {
  const footerNodo = document.createElement('footer');
  footerNodo.className = 'footerHome';

  const divContainerMenu = document.createElement('div');
  divContainerMenu.className = 'container-menu';

  /**  **********   ICONO DE HOME      ************ */
  const imgIconHome = document.createElement('img');
  imgIconHome.src = '../../icon/homepage.png';
  imgIconHome.className = 'iconFooter';
  imgIconHome.id = 'iconHome';
  imgIconHome.alt = 'icon-Home';
  divContainerMenu.appendChild(imgIconHome);
  const aIconHome = document.createElement('a');
  aIconHome.classList.add('linksIcons');
  aIconHome.setAttribute('href', '/');
  aIconHome.appendChild(imgIconHome);
  divContainerMenu.appendChild(aIconHome);

  /**  **********   ICONO DE SEARCH    ************ */
  const imgIconSearch = document.createElement('img');
  imgIconSearch.src = '../../icon/Search.png';
  imgIconSearch.alt = 'icon-search';
  imgIconSearch.className = 'iconFooter';
  imgIconSearch.id = 'iconSearch';
  divContainerMenu.appendChild(imgIconSearch);
  const aIconSearch = document.createElement('a');
  aIconSearch.classList.add('linksIcons');
  aIconSearch.setAttribute('href', '/');
  aIconSearch.appendChild(imgIconSearch);
  divContainerMenu.appendChild(aIconSearch);

  /**  **********   AGREGAR POST      ************ */
  const imgIconAdd = document.createElement('img');
  imgIconAdd.src = '../../icon/Add.png';
  imgIconAdd.alt = 'icon-Add';
  imgIconAdd.className = 'iconFooter';
  imgIconAdd.id = 'iconAdd';
  divContainerMenu.appendChild(imgIconAdd);
  const aIconAdd = document.createElement('a');
  aIconAdd.classList.add('linksIcons');
  aIconAdd.setAttribute('href', '/');
  aIconAdd.appendChild(imgIconAdd);
  divContainerMenu.appendChild(aIconAdd);

  /**  **********   ICONO CARROT     ************ */

  const imgIconLikes = document.createElement('img');
  imgIconLikes.src = '../../icon/carrot.png';
  imgIconLikes.alt = 'icon-Likes';
  imgIconLikes.className = 'iconFooter';
  imgIconLikes.id = 'iconLikes';
  divContainerMenu.appendChild(imgIconLikes);
  const aIconCarrot= document.createElement('a');
  aIconCarrot.classList.add('linksIcons');
  aIconCarrot.setAttribute('href', '/');
  aIconCarrot.appendChild(imgIconLikes);
  divContainerMenu.appendChild(aIconCarrot);

  /**  **********   LOGOUT      ************ */
  const imgIconLogout = document.createElement('img');
  imgIconLogout.src = '../../icon/Logout.png';
  imgIconLogout.alt = 'logout';
  imgIconLogout.className = 'iconFooter';
  imgIconLogout.id = 'logout';
  divContainerMenu.appendChild(imgIconLogout);
  const aIconLogout = document.createElement('a');
  aIconLogout.classList.add('linksIcons');
  aIconLogout.setAttribute('href', '/');
  aIconLogout.appendChild(imgIconLogout);
  divContainerMenu.appendChild(aIconLogout);

  footerNodo.appendChild(divContainerMenu);

  return footerNodo;
};
