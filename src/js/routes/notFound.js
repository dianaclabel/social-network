export const errorNotFound = (navegateTo) => {
  const sectionEl = document.createElement('section');
  sectionEl.innerHTML = /* html */ `
         <p class ="parrafoUno">No llores solo es un </p>
         <div id ="logo">
        <img  class ="zanahoria" src="../../image/zanahoria-kawai.jpg" alt=>
        <img class ="numero" src="../../image/404final.png" alt="">
        </div>
        <p class ="parrafoDos">Déjame guiarte de <b class = "parrafoTres">regreso Home</b></p>
    `;

  return sectionEl;
};
