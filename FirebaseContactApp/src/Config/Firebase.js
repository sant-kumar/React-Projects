// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyCTyWrST24-yfU9s-_hxfp1ipuLa2Z4M",
  authDomain: "vite-contact-6f64f.firebaseapp.com",
  projectId: "vite-contact-6f64f",
  storageBucket: "vite-contact-6f64f.firebasestorage.app",
  messagingSenderId: "58425229578",
  appId: "1:58425229578:web:b854136835a82f48ddbaf3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);