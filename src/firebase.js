import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCLmHbDjhQqdPR2ts6Prsvg6QCSuhmYiEw",
    authDomain: "sharkfinal-d4828.firebaseapp.com",
    projectId: "sharkfinal-d4828",
    storageBucket: "sharkfinal-d4828.appspot.com",
    messagingSenderId: "470734937387",
    appId: "1:470734937387:web:95f2a3bcf8a9a85e50796e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}
