// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPSu3hWbreCiPJdTC8uJh15mUK14_XR0Q",
  authDomain: "omega-tutorials.firebaseapp.com",
  projectId: "omega-tutorials",
  storageBucket: "omega-tutorials.firebasestorage.app",
  messagingSenderId: "401966926863",
  appId: "1:401966926863:web:e38422b513f2f551fbe77a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();