// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

export const firebaseRegister = (name, email, password) => createUserWithEmailAndPassword(
  auth,
  email,
  password,
).then((credential) => updateProfile(credential.user, { displayName: name }));

export const firebaseUser = () => auth.currentUser;

export const firebaseLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

/* export const firebaseLoginGoogle = (auth) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
}; */

export const firebaseLoginGoogle = (auth) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)

    .then((result) => {
      // Se ha iniciado sesión exitosamente
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigateTo('/verication')
    })
    .catch((error) => {
      // Hubo un error al iniciar sesión con Google
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert('No has podido registrarte con Google!');
      // Maneja el error de acuerdo a tus necesidades
    });
};
