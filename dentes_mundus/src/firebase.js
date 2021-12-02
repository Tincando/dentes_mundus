import { initializeApp } from 'firebase/app';
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, getDocs, query, where } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuczdzY02cYRlHcA14g_iSlpzdI9Zxw9A",
  authDomain: "dentes-mundus.firebaseapp.com",
  projectId: "dentes-mundus",
  storageBucket: "dentes-mundus.appspot.com",
  messagingSenderId: "357827395368",
  appId: "1:357827395368:web:b942724df4262c8b6e9a1d",
  measurementId: "G-KNSVVZN4X3"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


export {getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, collection,db,addDoc, doc, getDocs,query, where};