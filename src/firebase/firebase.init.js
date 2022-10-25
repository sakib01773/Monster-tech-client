// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfYtMzoe7Ie-Zq6KkFk-xOeTCwrfLyn18",
  authDomain: "monster-tech-website.firebaseapp.com",
  projectId: "monster-tech-website",
  storageBucket: "monster-tech-website.appspot.com",
  messagingSenderId: "745236337215",
  appId: "1:745236337215:web:3686e2785a2ddffb745e8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app