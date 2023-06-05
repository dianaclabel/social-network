// import { async } from 'regenerator-runtime';
import {
  firebaseUser, savePost, getPosts, editPost,
} from '../firebase.js';

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

  // Seccion de historias
  const storiesImg = document.createElement('img');
  storiesImg.className = 'historias';
  storiesImg.setAttribute('src', '../../image/historias.png');
  storiesImg.setAttribute('alt', 'imagenes de historias');
  sectionNodo.append(storiesImg);

  // Creación de elementos para el formulario de publicación
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

  // Contenedor de publicación
  const divContainerWall = document.createElement('div');
  divContainerWall.classList.add('container-wall');
  divContainerWall.setAttribute('id', 'container-wall');
  divContainerWall.appendChild(form);
  sectionNodo.appendChild(divContainerWall);

  // Contenedor para las publicaciones
  const postContainer = document.createElement('div');
  postContainer.setAttribute('id', 'post-container');
  sectionNodo.appendChild(postContainer);

  const createPost = (valuePost) => {
    // Contenedor de cada publicación
    const postElement = document.createElement('div');
    postElement.textContent = valuePost;
    postElement.classList.add('postElement');
    postContainer.appendChild(postElement);

    // Contenedor de imagen de usuario y nombre de usuario
    const contrainerImgAndUser = document.createElement('div');
    contrainerImgAndUser.setAttribute('id', 'imgAndUser');

    const imgUserCopia = imgUserForm.cloneNode(true);
    imgUserCopia.classList.add('imgUserCopia');

    // nombre del usuario
    const nameUser = document.createElement('h2');
    nameUser.classList.add('nameUser');
    nameUser.setAttribute('id', 'nameUser');
    const user = firebaseUser();
    if (user) {
      nameUser.textContent = user.displayName;
    }

    contrainerImgAndUser.appendChild(imgUserCopia);
    contrainerImgAndUser.appendChild(nameUser);

    // Botón de opciones de editar y eliminar
    const btnIconOption = document.createElement('button');
    btnIconOption.setAttribute('type', 'button');
    btnIconOption.setAttribute('id', 'btnIconOption');
    btnIconOption.classList.add('btnIconOption');

    const iconOptionsPost = document.createElement('img');
    iconOptionsPost.src = '../../icon/editOelimin.png';
    iconOptionsPost.alt = 'icono para opción editar eliminar';
    iconOptionsPost.classList.add('iconOptionsPost');
    iconOptionsPost.id = 'iconOptionsPost';
    btnIconOption.appendChild(iconOptionsPost);

    // Modal para opciones de editar y eliminar
    const modalPopupOption = document.createElement('div');
    modalPopupOption.classList.add('modalPopupOption');

    // Lista de opciones en el modal
    const ulModal = document.createElement('ul');
    ulModal.classList.add('ulModal');

    // Opción de editar
    const li1 = document.createElement('li');
    li1.classList.add('liOption');
    li1.setAttribute('id', 'li1');

    const editIcon = document.createElement('img');
    editIcon.setAttribute('src', '../../icon/Pencil.png');
    editIcon.classList.add('optionIcon');

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btnOptionEdit');
    btnEdit.setAttribute('id', 'btnEdit');
    btnEdit.setAttribute('data-id', savePost.id);
    btnEdit.textContent = 'Editar';

    li1.appendChild(editIcon);
    li1.appendChild(btnEdit);

    // Opción de eliminar
    const li2 = document.createElement('li');
    li2.classList.add('liOption');
    li2.setAttribute('id', 'li2');

    const deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', '../../icon/Delete.png');
    deleteIcon.classList.add('optionIcon');
    li2.appendChild(deleteIcon);

    const btndelete = document.createElement('button');
    btndelete.classList.add('btnOptionDelete');
    btndelete.setAttribute('id', 'btnDelete');
    btndelete.textContent = 'Eliminar';

    li2.appendChild(deleteIcon);
    li2.appendChild(btndelete);

    ulModal.appendChild(li1);
    ulModal.appendChild(li2);

    modalPopupOption.appendChild(ulModal);

    // Botón para cerrar el modal
    const closePopup = document.createElement('img');
    closePopup.setAttribute('src', '../../icon/cancel.png');
    closePopup.classList.add('closeModal');
    modalPopupOption.appendChild(closePopup);

    // Agregar elementos al contenedor de la publicación
    const divContainerPostElement = document.createElement('div');
    divContainerPostElement.classList.add('divContainerPostElement');
    divContainerPostElement.appendChild(contrainerImgAndUser);
    divContainerPostElement.appendChild(btnIconOption);
    divContainerPostElement.appendChild(modalPopupOption);
    divContainerPostElement.appendChild(postElement);

    // Funciones del modal
    btnIconOption.addEventListener('click', () => {
      modalPopupOption.style.display = 'block';
    });
    closePopup.addEventListener('click', () => {
      modalPopupOption.style.display = 'none';
    });

    //* *********  POPUP PARA BORRAR **************
    const containerDeletePost = document.createElement('div');
    containerDeletePost.classList.add('containerDeletePost');
    containerDeletePost.setAttribute('id', 'containerDeletePost');

    const iconBack = document.createElement('img');
    iconBack.setAttribute('src', '../../icon/Back.png');
    iconBack.classList.add('iconBack');
    iconBack.setAttribute('id', 'iconBack');

    const btnBack = document.createElement('button');
    btnBack.setAttribute('id', 'btnBack');
    btnBack.appendChild(iconBack);

    const questionDelete = document.createElement('h2');
    questionDelete.classList.add('question-Delete');
    questionDelete.textContent = '¿Eliminar publicación?';

    const paragraphDelete = document.createElement('p');
    paragraphDelete.classList.add('paragraph-Delete');
    paragraphDelete.textContent = 'Realmente quieres eliminar esta publicación.';

    const btnNotSure = document.createElement('button');
    btnNotSure.classList.add('btnNotSure');
    btnBack.setAttribute('id', 'btnNotSure');
    btnNotSure.textContent = 'No, estoy segur@';

    const btnSure = document.createElement('button');
    btnSure.classList.add('btnSure');
    btnBack.setAttribute('id', 'btnSure');
    btnSure.textContent = 'Si, estoy segur@';

    containerDeletePost.appendChild(btnBack);
    containerDeletePost.appendChild(questionDelete);
    containerDeletePost.appendChild(paragraphDelete);
    containerDeletePost.appendChild(btnNotSure);
    containerDeletePost.appendChild(btnSure);
    divContainerPostElement.appendChild(containerDeletePost);

    // funciones  de Popup para borrar
    btndelete.addEventListener('click', () => {
      containerDeletePost.style.display = 'flex';
    });
    btnNotSure.addEventListener('click', () => {
      containerDeletePost.style.display = 'none';
      modalPopupOption.style.display = 'none';
    });

    // contenedor de iconos
    const imgUserCopia2 = imgUserForm.cloneNode(true);
    imgUserCopia2.classList.add('imgUserCopia2');
    divContainerPostElement.appendChild(imgUserCopia2);

    const coment = document.createElement('input');
    coment.classList.add('coment');
    coment.setAttribute('type', 'text');
    coment.setAttribute('placeholder', 'Deja tu comentario...');
    divContainerPostElement.appendChild(coment);
    // Contenedor de iconos
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

    // Agrega la publicación al contenedor de publicaciones
    postContainer.appendChild(divContainerPostElement);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    const data = new FormData(form);
    const textareaValue = data.get('textareaEl');

    // console.log('Publicando:', textareaValue);

    savePost(textareaValue);
    createPost(textareaValue);

    // Restablecer el formulario después de la publicación
    form.reset();
  };

  form.addEventListener('submit', handleFormSubmit);

  window.addEventListener('DOMContentLoaded', async () => {
    // Obtener los datos existentes en ese momento
    const querySnapshot = await getPosts();
    querySnapshot.forEach((post) => {
      createPost(post.data().savePostInput);
    });

    const btnsEdit = sectionNodo.querySelectorAll('.btnOptionEdit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        // console.log(e.target.dataset.id);
        const doc = await editPost(e.target.dataset.id);
        console.log(doc.data);

        // const post = doc.data();
      });
    });
  });

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
  const btnIconAdd = document.createElement('button');
  btnIconAdd.classList.add('linksIcons');
  btnIconAdd.setAttribute('id', 'btnIconAdd');
  btnIconAdd.appendChild(imgIconAdd);
  divContainerMenu.appendChild(btnIconAdd);

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
