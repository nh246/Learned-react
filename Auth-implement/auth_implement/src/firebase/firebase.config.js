// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8b6QGvXeRhbkJEAVVlGkRa-ZOwZm9wl8",
  authDomain: "auth-implementation-b51f9.firebaseapp.com",
  projectId: "auth-implementation-b51f9",
  storageBucket: "auth-implementation-b51f9.firebasestorage.app",
  messagingSenderId: "621286889163",
  appId: "1:621286889163:web:ef20b9f8b4a988be3cad4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app