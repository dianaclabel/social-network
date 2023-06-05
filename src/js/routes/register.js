import { GoogleAuthProvider } from 'firebase/auth';
import { firebaseRegister, firebaseGoogle } from '../firebase';

export const registerTemplate = (navigateTo) => {
  const sectionEl = document.createElement('section');
  sectionEl.classList.add('section-register');
  sectionEl.innerHTML = /* html */ `
    <header class="header-register">
        <img  class="logo-register" src="../../image/logo.png" alt="logo">
    </header>
    <main>
        <h1 class="title-greetings">Hola!</h1>
        <h2 class="sub-title">Crea una cuenta nueva</h2>
        <form action="" class="container-form" >
            <div class="container-form-items">
                <label for="" class="form-item">Nombre</label>
                <input type="text" class="form-input" name="name" required>
                <label for="" class="form-item">Correo</label>
                <input type="email" class="form-input" name="email" required>
                <label for="" class="form-item">Contraseña</label>
                <input type="password" class="form-input" name="password" required>
                <label for="" class="form-item">Verificar contraseña</label>
                <input type="password" class="form-input" name="password-verification" required>
            </div>
            <input type="submit" value="Registrarse" class="btn-register" id="btnRegister">
        </form>
        <div class="container-or">
            <div class="linea"></div>
            <p class="or" >o</p>
            <div class="linea"></div>
        </div>
    
        <button class="btn-register-google" id="btn-registerGoogle">
            <div class="container-logo">
                <img src="../../image/icon-google.png" alt="logo-google" class="logo-google">
            </div>
        
            <p >Registrarse con google</p>
        
        </button>

        <p class="terms">Al registrarte aceptas los <b class="bold-terms">términos de servicio</b> y <b class="bold-terms">la política de privacidad</b></p>
        <p class="question-register">¿Ya tienes cuenta? <a href="/" class="question-login" id="login-link">Inicio de sesion</a></p>
    
    </main>
  `;

  const registerForm = sectionEl.querySelector('form');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const passwordVerification = formData.get('password-verification');

    if (password === passwordVerification) {
      firebaseRegister(name, email, password)
        .then(() => {
          navigateTo('/verification');
        })
        .catch((error) => {
          alert('Este email ya esta registarado');
          console.log(error);
        });
    } else {
      alert('contraseñas incorrectas');
    }
  });

  // registro con boton de Google
  const btnGoogle = sectionEl.querySelector('#btn-registerGoogle');
  btnGoogle.addEventListener('click', () => {
    firebaseGoogle()
      .then((result) => {
      // Se ha iniciado sesión exitosamente

        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        const user = result.user;
        navigateTo('/verification');
      })
      .catch((error) => {
      // Hubo un error al iniciar sesión con Google
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert('Este email ya esta registrado, intente con otro');
      // Maneja el error de acuerdo a tus necesidades
      });
  });

  const loginLink = sectionEl.querySelector('#login-link');
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(loginLink.getAttribute('href'));
  });

  return sectionEl;
};
