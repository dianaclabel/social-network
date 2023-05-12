export const registerTemplate = /*html*/ `
    <header class="header-register">
        <img  class="logo-register" src="../../image/logo.png" alt="logo">
    </header>
    <main class="main-register">
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
                <img src="../../image/icon-google.png" alt="logo-google" class="logo-google">
          
            <p class="btn-titulo">Registrarse con google</p>
            
        </button>

        <p>Al registrarte aceptas los <b>términos de servicio</b> y <b>la política de privacidad</b></p>
        <p>¿Ya tienes cuenta? <b>Inicio de sesion</b></p>
        
    </main>
`;
