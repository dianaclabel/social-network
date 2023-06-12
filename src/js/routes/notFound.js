import numero from '../../public/image/404Zanahoria.png';

export const errorNotFound = (navegateTo) => {
  const sectionEl = document.createElement('section');
  sectionEl.innerHTML = /* html */ `
        <div class = "fondo">
          <p class ="parrafoUno">No llores solo es un </p>
          <img class = "numero" src="${numero}" alt="">
        <p class ="parrafoDos">Déjame guiarte de <a href='/feed' class ="parrafoTres">regreso Home</a></p>
</div>
`;

  return sectionEl;
};
