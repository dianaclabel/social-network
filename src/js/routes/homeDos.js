import { firebaseUser } from '../firebase';

// export const home = () => {
//   const sectionEl = document.createElement('section');
//   sectionEl.innerHTML = /* html */ `
//       <header class="header-login">
//            <img  class="logo-register" src="../../image/logo.png" alt="logo">
//       </header>
//        <main class="main-verification">
//            <h1 class="titleGreetings"> home</h1>
//            <h2 > Tedamos la bienvenida <span id="user-name"></span></h2>

//        </main>
//       `;
//   const name = sectionEl.querySelector('#user-name');

//   const user = firebaseUser();

//   if (user) {
//     name.textContent = user.displayName;
//   }

//   return sectionEl;
// };
export const home = (navigateTo) => {
  const headerNodo = document.createElement('header');
  const imgLogo = document.createElement('img');
  const imgBell = document.createElement('img');
  const userImg = document.createElement('img');

  headerNodo.id = 'hederNodo';
  headerNodo.className = 'hederNodo';

  imgLogo.className = 'headerLogo';
  imgLogo.src = '../../image/logo.png';
  imgLogo.alt = 'logoFatFit';

  imgBell.className = 'campana';
  imgBell.src = '../../icon/bell.png';
  imgBell.alt = 'campana-notificacion';

  userImg.className = 'usuarioFoto';
  userImg.src = '../../image/usuarioZanahoria.png';
  userImg.alt = 'imagen-de-usuario';

  headerNodo.appendChild(imgLogo);
  headerNodo.appendChild(imgBell);
  headerNodo.appendChild(userImg);

  document.body.append(imgLogo, imgBell, userImg);
};
