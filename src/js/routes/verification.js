import logo from '../../public/image/logo.png';

export const verification = (navigateTo) => {
  const sectionEl = document.createElement('section');
  sectionEl.classList.add('section-verification');
  sectionEl.innerHTML = /* html */ `      
    <header class="header-login">
         <img  class="logo-register" src="${logo}" alt="logo">
    </header>
     <main class="main-verification">
         <h1 class="titleGreetings"> Bienvenid@</h1>      
         <div class="container-check">
             <p class="paragraphVerication">Te haz registrado Correctamente</p>
             <div class="wrapper"> 
                 <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
                     <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
                     <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                 </svg>
        </div>
        </div>  
         <a class="btnStarted" id="btn-started" href="/welcome">Comencemos</a>
     </main>
    `;
  const btnStarted = sectionEl.querySelector('#btn-started');
  btnStarted.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(btnStarted.getAttribute('href'));
  });
  return sectionEl;
};
