export const registerTemplate = /*html*/ `
    <header class="header-register">
        <img  class="logo-register" src="../../image/logo.png" alt="logo">
    </header>
    <main>
        <h1 class="title-greetings">Hola!</h1>
        <h2 class="sub-title">Crea una cuenta nueva</h2>
        <form action="" class="container-form">
            <div class="container-form-items">
                <label for="" class="form-item">Nombre</label>
                <input type="text" class="form-input">
                <label for="" class="form-item">Correo</label>
                <input type="email" class="form-input">
                <label for="" class="form-item">Contraseña</label>
                <input type="password" class="form-input">
                <label for="" class="form-item">Verificar contraseña</label>
                <input type="password" class="form-input">
            </div>
            <input type="button" value="Registrarse" class="btn-register">
        </form>
        <div class="container-or">
            <div class="linea"></div>
            <p class="or" >o</p>
            <div class="linea"></div>
        </div>
        
        <button class="btn-register-google">
            <div class="container-logo">
                <img src="../../image/icon-google.png" alt="logo-google" class="logo-google">
            </div>
          
            <p >Registrarse con google</p>
            
        </button>

        <p class="terms">Al registrarte aceptas los <b class="bold-terms">términos de servicio</b> y <b class="bold-terms">la política de privacidad</b></p>
        <p class="question-register">¿Ya tienes cuenta? <a href="/" class="question-login">Inicio de sesion</a></p>
        
    </main>
`;
