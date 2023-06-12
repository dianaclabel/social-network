import logo from '../../public/image/logo.png';
import heartbeat from '../../public/image/beam-heartbeat-popup.gif';
import meditation from '../../public/image/beam-meditation.gif';
import textFATFIT from '../../public/image/textFATFIT.png';

export const welcome = (navigateTo) => {
  const sectionEl = document.createElement('section');
  sectionEl.classList.add('section-wellcome');
  sectionEl.innerHTML = /* html */ `
<header class="header-wellcome">
            <img  class="logo-wellcome" src="${logo}" alt="logo">
    </header>
    <main class="main-wallcome">
        <h1 class="title-greetings">¡Bienvenido/a a FATFIT!</h1>

        <div class="container-wellcome">

        <img src=${heartbeat} alt="corazon" class="heartBeat">

        <img src="${meditation}" alt="chica meditando" class="yogaGirl">

        <img src="${textFATFIT}" alt="Texto de bienvenida" class="textWellcome">

        </div>

        <button type="button" class="btnVamos" value="VAMOS!!!">VAMOS!!!</button>

    </main>
    `;

  const btnPresents = sectionEl.querySelector('.btnVamos');
  btnPresents.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/feed');
  });
  return sectionEl;
};
