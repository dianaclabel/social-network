import { firebaseUser } from '../firebase';

export const home = () => {
  const sectionEl = document.createElement('section');
  sectionEl.innerHTML = /* html */ `      
      <header class="header-login">
           <img  class="logo-register" src="../../image/logo.png" alt="logo">
      </header>
       <main class="main-verification">
           <h1 class="titleGreetings"> home</h1>    
           <h2 > Tedamos la bienvenida <span id="user-name"></span></h2>  
           
       </main>
      `;
  const name = sectionEl.querySelector('#user-name');

  const user = firebaseUser();

  if (user) {
    name.textContent = user.displayName;
  }

  return sectionEl;
};
