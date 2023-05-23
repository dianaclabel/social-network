import { firebaseLogin } from "../firebase";

export const loginTemplate = (navigateTo) => {
  const sectionEl = document.createElement('section');
  sectionEl.classList.add('section-login');
  sectionEl.innerHTML = /* html */ `
    <header class="header-login">
         <img  class="logo-register" src="../../image/logo.png" alt="logo">
    </header>
    <main class="main-login">
         <h1 class="title-greetings">Bienvenidos!</h1>
         <form action="" class="container-form-login" id="formLogin">
             <div class="container-form-items-login">
              
                 <label for="" class="form-login">Correo</label>
                 <input type="email" class="form-inputLogin" name="email">
                 <label for="" class="form-login">Contraseña</label>
                 <input type="password" class="form-inputLogin" name="password">
                 <p class="forgot">¿Olvidaste tu contraseña?</p>
          
             </div>
             <input type="submit" value="Inicio de Sesion" class="btn-login" id="btn-login">
         </form>
         <div class="container-or">
             <div class="linea"></div>
             <p class="or" >o</p>
             <div class="linea"></div>
         </div>
      
         <button class="btn-login-google">
            <div class="container-logo">
              <img src="../../image/icon-google.png" alt="logo-google" class="logo-google">
           </div>
          
          <p >Inicio Sesion con Google</p>
            
         </button>

        <p class="question-register">¿No tienes una cuenta?<a href="/" class="question-login">Registrarte</a></p>
        
    </main>;
 `;

  const loginform = sectionEl.querySelector('#formLogin');
  loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(loginform);
    const email = formData.get('email');
    const password = formData.get('password');

    firebaseLogin(email, password)
      .then(() => {
        navigateTo('/');
      })
      .catch((error)=>{
        alert('usuario o contraseña incorrecta');
        console.log(error);
      })
  });

  // // cuando se carga el HTML se ejecuta la funcion flecha
  // window.addEventListener('DOMContentLoaded', () => {
  //   const prueba = document.querySelector('#btn-login');
  //   console.log(prueba);
  //   prueba.addEventListener('click', () => {
  //     navigateTo('/notFound');
  //   });
  // });

  return sectionEl;
};
