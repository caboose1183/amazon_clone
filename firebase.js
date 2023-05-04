// use old version with compat/app and firestore
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-50J5pQ2Cn3HGPShYKQVsufJraGkqfrk",
  authDomain: "clone-f6040.firebaseapp.com",
  projectId: "clone-f6040",
  storageBucket: "clone-f6040.appspot.com",
  messagingSenderId: "946335105771",
  appId: "1:946335105771:web:f690309fff59bb48e034ae",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
