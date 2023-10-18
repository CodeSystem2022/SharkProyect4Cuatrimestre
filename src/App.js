import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Products from './components/Products';
import Product from './components/Product';
import CheckoutPage from './components/CheckoutPage';
import { ThemeProvider } from '@mui/material/styles';
import { createMyTheme } from './theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Define tu tema aquí
const theme = createMyTheme();

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navbar/>
          <Routes>
            <Route path="/checkout-page" element={<CheckoutPage/>} />
            <Route path="/" element={<Products/>} />
          </Routes>
          <Footer></Footer>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;