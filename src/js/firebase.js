// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRBJOZ53j3GiOBti86oKXnCeYkX0Xt5yA',
  authDomain: 'sn-fitfat.firebaseapp.com',
  projectId: 'sn-fitfat',
  storageBucket: 'sn-fitfat.appspot.com',
  messagingSenderId: '252019254666',
  appId: '1:252019254666:web:ef670fc616bd325ab5d473',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const btnSubmitRegister = document.getElementById('btnRegister');
btnSubmitRegister.addEventListener('click', () => {
  const emailRegisterValue = document.getElementById('emailRegister').value;
  const passwordRegisterValue = document.getElementById('passwordRegister').value;
  const passVerifyRegisterValue = document.getElementById(
    'passwordVerifyRegister',
  ).value;

  if (passwordRegisterValue === passVerifyRegisterValue) {
    createUserWithEmailAndPassword(
      auth,
      emailRegisterValue,
      passwordRegisterValue,
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('¡Usuario Logeado!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Usuario NO Logeado!!');
        // ..
      });
  } else {
    console.log('contraseñas incorrectas');
  }
});
