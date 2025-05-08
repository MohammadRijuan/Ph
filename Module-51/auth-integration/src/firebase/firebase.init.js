//not to share

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL5MBflul0Q0UIVRnvcHpfiakhk3IFsOU",
  authDomain: "auth-integration-f48df.firebaseapp.com",
  projectId: "auth-integration-f48df",
  storageBucket: "auth-integration-f48df.firebasestorage.app",
  messagingSenderId: "1062530838570",
  appId: "1:1062530838570:web:b4f03589a5ede345c71353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);