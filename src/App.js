import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYM5PwzErz0BfBoCcfPmKB-dqizaAJeQk",
  authDomain: "sharkfood-94c26.firebaseapp.com",
  projectId: "sharkfood-94c26",
  storageBucket: "sharkfood-94c26.appspot.com",
  messagingSenderId: "1058248913893",
  appId: "1:1058248913893:web:357aa779fd92a8a167750c",
  measurementId: "G-KR52NJ28K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/checkout-page" element={<CheckoutPage />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

