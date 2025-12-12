// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3owTyS7v9FFxnDKaWwUa9cWJC4QAYwwE",
  authDomain: "loan-link-1dc48.firebaseapp.com",
  projectId: "loan-link-1dc48",
  storageBucket: "loan-link-1dc48.firebasestorage.app",
  messagingSenderId: "638064628044",
  appId: "1:638064628044:web:879c9e292e1e0478da3fe9",
  measurementId: "G-KKP3CJ79T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth}