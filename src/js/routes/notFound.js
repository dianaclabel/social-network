export const errorNotFound = (navegateTo) => {
  const sectionEl = document.createElement('section');
  sectionEl.innerHTML = /* html */ `
        <div class = "fondo">
         <p class ="parrafoUno">No llores solo es un </p>
         <img class = "numero" src="../../image/404zanahoria.png" alt="">
        <p class ="parrafoDos">Déjame guiarte de <u class = "parrafoTres">regreso Home</u></p>
</div>
`;

  return sectionEl;
};
