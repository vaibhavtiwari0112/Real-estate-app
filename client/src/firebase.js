// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5e07f.firebaseapp.com",
  projectId: "mern-estate-5e07f",
  storageBucket: "mern-estate-5e07f.appspot.com",
  messagingSenderId: "800976305329",
  appId: "1:800976305329:web:f6215d8e9c92881e9bf690"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);