// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ3D7DQ2sNanv5WLY8ubjHK6mI1xznQn4",
  authDomain: "auth-mela-project.firebaseapp.com",
  projectId: "auth-mela-project",
  storageBucket: "auth-mela-project.appspot.com",
  messagingSenderId: "1091948368126",
  appId: "1:1091948368126:web:d85f0d2c6d0fec388215af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;