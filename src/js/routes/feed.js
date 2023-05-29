import { header, footer } from './components.js';

/* eslint-disable max-len */
// import { firebaseUser } from '../firebase';

// export const home = () => {
//   const sectionEl = document.createElement('section');
//   sectionEl.innerHTML = /* html */ `
//        <header class="headerNodo">
//          <div class="contenedor-header">
//          <img src="../../image/logo.png" alt="hederLogo" class="hederLogo">
//          <img src="../../icon/bell.png" alt="campanita" class="iconHeader" id="bell">
//          <img src="../../image/usuarioCarrot.png" alt="usuario" class="iconHeader" id="userPhoto">
//          </div>
//        </header>
//         <section class="section-header">
//             <h2 > Bienvenida <span id="user-name"></span></h2>
//              <br>
//             <textarea id="postContent" placeholder="Publicamos algo?..." cols="30" rows="10"></textarea>
//             <br>
//             <button type="submit">Publicar</button>
//         </section>
//         <div id="post-container"><!-- Las publicaciones se agregarán aquí --></div>
//         <footer class="footerHome">
//          <div class="container-menu">
//          <img src="../../icon/homepage.png" alt="icon-Home" class="iconFooter" id="iconHome">
//          <img src="../../icon/Search.png" alt="icon-search" class="iconFooter" id="iconSearch">
//          <img src="../../icon/Add.png" alt="icon-Add" class="iconFooter" id="iconAdd">
//          <img src="../../icon/carrot.png" alt="icon-Likes" class="iconFooter" id="iconLikes">
//          <img src="../../icon/Logout.png" alt="logout" class="iconFooter" id="logout">
//          </div>
//         </footer>
//        `;
//   const name = sectionEl.querySelector('#user-name');
//   const user = firebaseUser();
//   if (user) {
//     name.textContent = user.displayName;
//   }
//   return sectionEl;
// };

// export const home = () => {
//   const headerNodo = document.createElement('header');
//   headerNodo.id = 'hederPrincipal';
//   headerNodo.className = 'hederPrincipal';

//   const imgLogo = document.createElement('img');
//   imgLogo.src = '../../image/logo.png';

//   headerNodo.append(imgLogo);

//   // document.root.appendChild(headerNodo);

//   return headerNodo;
// };
export const feed = () => {
  const sectionEl = document.createElement('section');
  const headerNodoEl = header();
  const footerNodoEl = footer();
  sectionEl.append(headerNodoEl, footerNodoEl);

  return sectionEl;
};
