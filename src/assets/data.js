import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA55Cb5nZm-c4kc-slpWiDDZxVWoPH3fTM",
  authDomain: "react-firebase-58f1e.firebaseapp.com",
  projectId: "react-firebase-58f1e",
  storageBucket: "react-firebase-58f1e.appspot.com",
  messagingSenderId: "301301076579",
  appId: "1:301301076579:web:e42627ff64055fc4b05e56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Declara la variable 'data' fuera del alcance de la función de devolución de llamada
let data = [];

// Consulta la colección "archivos" y obtén los datos
getDocs(collection(db, "archivos")).then((querySnapshot) => {
  const newData = [];
  querySnapshot.forEach((doc) => {
    newData.push(doc.data());
  });

  // Reemplaza el array "data" con el nuevo array "newData"
  data = newData;
  console.log("El array 'data' ha sido actualizado con los datos de Firebase.");
});

// Exporta la variable 'data'
export { data }