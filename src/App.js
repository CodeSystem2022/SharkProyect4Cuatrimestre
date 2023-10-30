import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";



function App() {
  return (
    <Router>
      <div className="App">
          <Navbar></Navbar>
          <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/checkout-page" element={<CheckoutPage />}/>
            <Route path="/" element={<Products />}/>
          </Routes>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

