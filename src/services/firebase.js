// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB2_RwW-ZyaOr6Qq0yv8TAFDObpo7wn0U",
  authDomain: "sonkoportraituredb.firebaseapp.com",
  projectId: "sonkoportraituredb",
  storageBucket: "sonkoportraituredb.appspot.com",
  messagingSenderId: "91609225503",
  appId: "1:91609225503:web:557ef82b800df28e78782a"
};

console.log()
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
