export const loginTemplate = /* html */ `
<header class="header-login">
<img  class="logo-register" src="../../image/logo.png" alt="logo">
    </header>
    <main class="main-login">
        <h1 class="title-greetings">Bienvenidos!</h1>
        <form action="" class="container-form-login">
            <div class="container-form-items-login">
                
                <label for="" class="form-login">Correo</label>
                <input type="email" class="form-inputLogin">
                <label for="" class="form-login">Contraseña</label>
                <input type="password" class="form-inputLogin">
                <p class="forgot">¿Olvidaste tu contraseña?</p>
            
            </div>
            <input type="button" value="Inicio de Sesion" class="btn-login">
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
        
    </main>
    `;
