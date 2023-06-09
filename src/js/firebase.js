// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,

} from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, doc,
  deleteDoc, updateDoc, arrayUnion, arrayRemove,
} from 'firebase/firestore';
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

const db = getFirestore(app);

export const savePost = (content, author) => {
  console.log(content);
  return addDoc(collection(db, 'posts'), { content, author });
};

export const firebaseRegister = (name, email, password) => createUserWithEmailAndPassword(
  auth,
  email,
  password,
).then((credential) => updateProfile(credential.user, { displayName: name }));

export const firebaseUser = () => auth.currentUser;

export const firebaseLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const firebaseGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
// getTaks
export const getPosts = () => getDocs(collection(db, 'posts'));
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const editPost = (postId, content) => {
  const docRef = doc(db, 'posts', postId);
  return updateDoc(docRef, { content });
};
// --------------Logaut----------------------------------------
export const signOutUser = () => signOut(auth);

export const addLike = (postId, username) => {
  const docRef = doc(db, 'posts', postId);
  return updateDoc(docRef, {
    likes: arrayUnion(username),
  });
};

export const removeLike = (postId, username) => {
  const docRef = doc(db, 'posts', postId);
  return updateDoc(docRef, {
    likes: arrayRemove(username),
  });
};
