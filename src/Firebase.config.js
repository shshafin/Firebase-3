// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAKwTkdPGi7Scf0ASt20RETKSECJGFmbE",
  authDomain: "module-51-77c7c.firebaseapp.com",
  projectId: "module-51-77c7c",
  storageBucket: "module-51-77c7c.appspot.com",
  messagingSenderId: "602523447542",
  appId: "1:602523447542:web:679b90cce6b1e23d46fcd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
