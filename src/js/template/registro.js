export const registerTemplate = /*html*/ `
    <header>
        <img src="../../image/logo.png" alt="logo">
    </header>
    <main>
        <h1 class="title-greetings">Hola!</h1>
        <h2 class="sub-title">Crea una cuenta nueva</h2>
        <form action="">
            <div class="container-form">
                <label for="">Nombre</label>
                <input type="text">
                <label for="">Correo</label>
                <input type="email">
                <label for="">Contraseña</label>
                <input type="password">
                <label for="">Verificar contraseña</label>
                <input type="password">
            </div>
            <input type="button" value="Registrarse" >
        </form>
        <div class="container-or">
            <div class="linea"></div>
            <p class="or" >o</p>
            <div class="linea"></div>
        </div>
        
        <button>Registrarse con google</button>

        <p>Al registrarte aceptas los <b>términos de servicio</b> y <b>la política de privacidad</b></p>
        <p>¿Ya tienes cuenta? <b>Inicio de sesion</b></p>
        
    </main>
`;
