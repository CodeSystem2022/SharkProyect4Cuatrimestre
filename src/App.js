
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';

import { ThemeProvider } from '@mui/material/styles';
import { createMyTheme } from './theme';

// Define tu tema aquí
const theme = createMyTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        {/*<CheckoutPage></CheckoutPage>*/}
        <Products></Products>
        <Product></Product>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
