export const errorNotFound = (navegateTo) => {
  const sectionEl = document.createElement("section");
  sectionEl.innerHTML = /* html */ `
         <p>No llores solo es un </p>
        <img src="" alt="logo-404">
        <p>déjame guiarte de <b>regreso Home</b></p>
    `;

  return sectionEl;
};
