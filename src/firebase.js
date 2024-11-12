// Importa las funciones necesarias de los SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, setLogLevel } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Asegúrate de importar getStorage

// Configuración de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "brut-99566.firebaseapp.com",
  projectId: "brut-99566",
  storageBucket: "brut-99566.appspot.com",
  messagingSenderId: "429279457290",
  appId: "1:429279457290:web:06ba2b67a9f3234e686ff3",
  measurementId: "G-2H58GY62PX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore sin persistencia offline y con logging detallado
const db = initializeFirestore(app, { useFetchStreams: false });
setLogLevel("debug");  // Activa el logging de depuración para Firestore

// Inicializar Firebase Storage
const storage = getStorage(app);

// Exporta como exportaciones nombradas
export { app, db, storage };
