// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Asegúrate de importar getStorage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb-ToNbDpgppJ2fOzg289Kc8RqvapY6FQ",
  authDomain: "brut-99566.firebaseapp.com",
  projectId: "brut-99566",
  storageBucket: "brut-99566.appspot.com",
  messagingSenderId: "429279457290",
  appId: "1:429279457290:web:06ba2b67a9f3234e686ff3",
  measurementId: "G-2H58GY62PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Exporta como exportaciones nombradas
export { app, storage };
