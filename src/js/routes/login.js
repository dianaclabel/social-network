import { GoogleAuthProvider } from 'firebase/auth';
import { firebaseLogin, firebaseGoogle } from '../firebase';

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
                  <input type="email" class="form-inputLogin" name="email" required>
                  <label for="" class="form-login">Contraseña</label>
                  <input type="password" class="form-inputLogin" name="password" required>
                  <p class="forgot">¿Olvidaste tu contraseña?</p>
          
              </div>
              <input type="submit" value="Inicio de Sesion" class="btn-login" id="btn-login">
          </form>
          <div class="container-or">
              <div class="linea"></div>
              <p class="or" >o</p>
              <div class="linea"></div>
          </div>
      
          <button class="btn-login-google" id='btn-login-google'>
            <div class="container-logo">
              <img src="../../image/icon-google.png" alt="logo-google" class="logo-google">
            </div>
          
          <p >Inicio Sesion con Google</p>
            
          </button>

        <p class="question-register">¿No tienes una cuenta?<a href="/register" class="question-login" id="register-link">Registrarte</a></p>
        
    </main>;
 `;

  const loginform = sectionEl.querySelector('#formLogin');
  loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(loginform);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(formData, email, password);

    firebaseLogin(email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigateTo('/feed');
        } else {
          // alert('El usuario no está verificado. Por favor, verifique su correo electrónico');
        }
      })
      .catch((error) => {
        alert('usuario o contraseña incorrecta');
        console.log(error);
      });
  });

  // registro con boton de Google
  const btnLoginGoogle = sectionEl.querySelector('#btn-login-google');
  btnLoginGoogle.addEventListener('click', () => {
    firebaseGoogle()
      .then((result) => {
      // Se ha iniciado sesión exitosamente
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        const user = result.user;
        navigateTo('/feed');
      })
      .catch((error) => {
      // Hubo un error al iniciar sesión con Google
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      // Maneja el error de acuerdo a tus necesidades
      });
  });

  const registerLink = sectionEl.querySelector('#register-link');
  registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(registerLink.getAttribute('href'));
  });

  // cuando se carga el HTML se ejecuta la funcion flecha
  // window.addEventListener('DOMContentLoaded', () => {
  //   const prueba = document.querySelector('#btn-login');
  //   console.log(prueba);
  //   prueba.addEventListener('click', () => {
  //     navigateTo('/notFound');
  //   });
  // });

  return sectionEl;
};
