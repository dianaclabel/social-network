export const welcome = (navigateTo) => {
  const sectionEl = document.createElement('section');
  sectionEl.classList.add('section-wellcome');
  sectionEl.innerHTML = /* html */ `
<header class="header-wellcome">
            <img  class="logo-wellcome" src="../../image/logo.png" alt="logo">
    </header>
    <main class="main-wallcome">
        <h1 class="title-greetings">¡Bienvenido/a a FATFIT!</h1>

        <div class="container-wellcome">

        <img src="../../image/beam-heartbeat-popup.gif" alt="corazon" class="heartBeat">

        <img src="../../image/beam-meditation.gif" alt="chica meditando" class="yogaGirl">

        <img src="../../image/textFATFIT.png" alt="Texto de bienvenida" class="textWellcome">

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
