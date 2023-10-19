/*
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { ThemeProvider } from '@mui/material/styles';
import { createMyTheme } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;

*/
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
       <Navbar/>
        <Routes>
          <Route path='/checkout-page'>
           <CheckoutPage/>
          </Route>
          <Route path='/'>
            <Products/>
          </Route>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App;