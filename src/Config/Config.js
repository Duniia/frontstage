import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyChT7ADgumiOxlrJ5hFlDk-_Qkr4k0PADU",
  authDomain: "frontstage-b37b1.firebaseapp.com",
  projectId: "frontstage-b37b1",
  storageBucket: "frontstage-b37b1.appspot.com",
  messagingSenderId: "580267848582",
  appId: "1:580267848582:web:0d936fdc4867c40132b207",
  measurementId: "G-227VVVBTCC"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}