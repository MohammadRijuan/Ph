// this sohuold not be shared

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClhAnNuyxGFcoQR0Wn2wAlo-xmBSqyl_I",
  authDomain: "email-password-auth-e7d2b.firebaseapp.com",
  projectId: "email-password-auth-e7d2b",
  storageBucket: "email-password-auth-e7d2b.firebasestorage.app",
  messagingSenderId: "730441039046",
  appId: "1:730441039046:web:4b441c6564782743c36bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);