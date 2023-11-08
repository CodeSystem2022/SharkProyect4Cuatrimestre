// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

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
export const storage = getStorage(app)

/**
 * Upload a file to firebase storage
 * @param {File} file the file t upload
 * @returns {Promise<string>} url of the upload file
 */

export async function uploadFile(file) {
    const storage = getStorage();
    const storageRef = ref(storage, uuidv4()); // Reemplaza 'some-child' con la ubicación adecuada
     await uploadBytes(storageRef, file)
     const url = await getDownloadURL(storageRef)
     return url
 
}

   