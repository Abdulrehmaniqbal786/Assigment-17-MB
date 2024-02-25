// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEQm2jAATffvFLQ7nNLopj9iEmMHS38rg",
  authDomain: "assigment-17-mb.firebaseapp.com",
  projectId: "assigment-17-mb",
  storageBucket: "assigment-17-mb.appspot.com",
  messagingSenderId: "421312770644",
  appId: "1:421312770644:web:bbe137beae2bc66380f3c1"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(firebase_app);


export {firebase_app, auth, provider,}