import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Subir from "./Admin.js";


function App() {

  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/admin" element={<Subir/>}/>
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

