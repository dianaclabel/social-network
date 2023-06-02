// import { async } from 'regenerator-runtime';
import { savePost, getPosts } from '../firebase.js';

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

/** **************** ZONA DE MURO DE PUBLICACIONES**************** */
export const wallZone = () => {
  const sectionNodo = document.createElement('section');
  sectionNodo.className = 'sectionWall';

  const imgUserForm = document.createElement('img');
  imgUserForm.classList.add('imgUser');
  imgUserForm.setAttribute('src', '../../image/fotoUsuario.png');
  imgUserForm.setAttribute('alt', 'imagen-usuario');

  const newPostText = document.createElement('textarea');
  newPostText.classList.add('containerCreatePost');
  newPostText.setAttribute('id', 'inputCreatePost');
  newPostText.setAttribute('name', 'textareaEl');
  newPostText.setAttribute('cols', '30');
  newPostText.setAttribute('rows', '10');
  newPostText.setAttribute('placeholder', 'Publica algo aquí...');
  const sharePhoto = document.createElement('img');
  sharePhoto.classList.add('share-icons');
  sharePhoto.setAttribute('src', '../../icon/sharePhoto.png');
  sharePhoto.setAttribute('alt', 'imagen-para-compartir');

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
  buttonPost.setAttribute('id', 'btnPost');
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
  form.appendChild(newPostText);
  form.appendChild(divContainerShare);
  form.appendChild(buttonPost);

  // contenedor de publicacion
  const divContainerWall = document.createElement('div');
  divContainerWall.classList.add('container-wall');
  divContainerWall.setAttribute('id', 'container-wall');
  divContainerWall.appendChild(form);
  sectionNodo.appendChild(divContainerWall);

  // contenedor alone div vacio
  const postContainer = document.createElement('div');
  postContainer.setAttribute('id', 'post-container');
  sectionNodo.appendChild(postContainer);

  const createPost = (valuePost) => {
    // contenedor de los post
    const postElement = document.createElement('div');
    postElement.textContent = valuePost;
    postElement.classList.add('postElement');
    postContainer.appendChild(postElement);

    // CREAR POST
    const divContainerPostElement = document.createElement('div');
    divContainerPostElement.classList.add('divContainerPostElement');

    const contrainerImgAndUser = document.createElement('div');
    contrainerImgAndUser.setAttribute('id', 'imgAndUser');

    const imgUserCopia = imgUserForm.cloneNode(true);
    imgUserCopia.classList.add('imgUserCopia');

    const nameUser = document.createElement('h2');
    nameUser.classList.add('nameUser');
    nameUser.setAttribute('id', 'nameUser');
    nameUser.textContent = 'AAAAA';

    contrainerImgAndUser.appendChild(imgUserCopia);
    contrainerImgAndUser.appendChild(nameUser);

    divContainerPostElement.appendChild(contrainerImgAndUser);

    // boton de opcion de editar y eliminar
    const btnIconOption = document.createElement('button');
    btnIconOption.setAttribute('type', 'button');
    btnIconOption.setAttribute('id', 'btnIconOption');
    btnIconOption.classList.add('btnIconOption');

    const iconOptionsPost = document.createElement('img');
    iconOptionsPost.src = '../../icon/editOelimin.png';
    iconOptionsPost.alt = 'icono para opcion editar eliminar';
    iconOptionsPost.classList.add('iconOptionsPost');
    iconOptionsPost.id = 'iconOptionsPost';
    btnIconOption.appendChild(iconOptionsPost);

    // creacion de modal para editar y eliminar
    const modalPopupOption = document.createElement('div');
    modalPopupOption.classList.add('modalPopupOption');

    // crear la lista de modal
    const ulModal = document.createElement('ul');
    ulModal.classList.add('ulModal');

    // crear li dedentro de ul
    const li1 = document.createElement('li');
    const a1 = document.createElement('a');
    a1.href = '#';
    a1.textContent = 'Editar';
    li1.appendChild(a1);

    const li2 = document.createElement('li');
    const a2 = document.createElement('a');
    a2.href = '#';
    a2.textContent = 'Eliminar';
    li2.appendChild(a2);

    ulModal.appendChild(li1);
    ulModal.appendChild(li2);
    modalPopupOption.appendChild(ulModal);

    // div para cerrar modal
    const closePopup = document.createElement('div');
    closePopup.textContent = 'X';
    closePopup.classList.add('closeModal');
    modalPopupOption.appendChild(closePopup);

    divContainerPostElement.appendChild(btnIconOption);
    divContainerPostElement.appendChild(modalPopupOption);
    divContainerPostElement.appendChild(postElement);

    // funciones  de Popup
    btnIconOption.addEventListener('click', () => {
      modalPopupOption.style.display = 'block';
    });
    closePopup.addEventListener('click', () => {
      modalPopupOption.style.display = 'none';
    });

    // contenedor de iconos
    const divContainerIconPost = document.createElement('div');
    divContainerIconPost.classList.add('containerIconPost');

    const iconCarrot = document.createElement('img');
    iconCarrot.src = '../../icon/carrotNot.png';
    iconCarrot.alt = 'icono like';
    iconCarrot.classList.add('iconCarrot');
    iconCarrot.setAttribute('id', 'iconCarrot');
    divContainerIconPost.appendChild(iconCarrot);

    const iconComment = document.createElement('img');
    iconComment.src = '../../icon/Comments.png';
    iconComment.alt = 'icono comentario';
    iconComment.classList.add('iconPost');
    iconComment.setAttribute('id', 'iconComment');
    divContainerIconPost.appendChild(iconComment);

    const iconShare = document.createElement('img');
    iconShare.src = '../../icon/share.png';
    iconShare.alt = 'icono compartir';
    iconShare.classList.add('iconPost');
    iconShare.setAttribute('id', 'iconShare');
    divContainerIconPost.appendChild(iconShare);

    divContainerPostElement.appendChild(divContainerIconPost);
    // Agrega el elemento de publicación al postContaine o div vacio
    postContainer.appendChild(divContainerPostElement);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    const data = new FormData(form);
    const textareaValue = data.get('textareaEl');

    // Aquí se puede ejecutar la lógica para publicar el contenido del formulario
    console.log('Publicando:', textareaValue);

    savePost(textareaValue);
    createPost(textareaValue);

    // Puedes restablecer el formulario después de la publicación
    form.reset();
  };

  form.addEventListener('submit', handleFormSubmit);

  window.addEventListener('DOMContentLoaded', async () => {
    // los datos que existen en ese momento
    const querySnapshot = await getPosts();
    querySnapshot.forEach((post) => {
      // console.log(post.data());
      createPost(post.data().savePostInput);
    });
  });
  // window.addEventListener('DOMContentLoaded', async () => {
  //   try {
  //     const querySnapshot = await getPosts();
  //     querySnapshot.forEach((post) => {
  //       createPost(post.data().savePostInput);
  //     });
  //   } catch (error) {
  //     console.error('Error al obtener los posts:', error);
  //   }
  // });

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
  const aIconCarrot = document.createElement('a');
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
