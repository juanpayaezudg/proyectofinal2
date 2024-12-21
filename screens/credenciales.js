// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzZB06gXGianIQ1z6ks3aiJ3REjaH_yYk",
  authDomain: "proyectofinal-b02ac.firebaseapp.com",
  projectId: "proyectofinal-b02ac",
  storageBucket: "proyectofinal-b02ac.firebasestorage.app",
  messagingSenderId: "60499440401",
  appId: "1:60499440401:web:d6e18c38c06f2ad458d2b0"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase; // Export the app instance