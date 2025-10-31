// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,  getAuth, signInWithPopup} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACoFzFcnXTvBu-s965LLtaQ5GsdzrM3Q0",
  authDomain: "full90-db.firebaseapp.com",
  projectId: "full90-db",
  storageBucket: "full90-db.firebasestorage.app",
  messagingSenderId: "691582972367",
  appId: "1:691582972367:web:a54f353e80bed19a9222ba",
  measurementId: "G-GPFC5XTSCK"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
