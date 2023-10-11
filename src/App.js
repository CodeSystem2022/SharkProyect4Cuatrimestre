// Hacemos las importaciones necesarias
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { ThemeProvider } from '@mui/material/styles';
import { createMyTheme } from './theme';

// Definimos el tema
const theme = createMyTheme();


function App() {
  // Retornamos la Clase (Div) App
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <CheckoutPage></CheckoutPage>
        <Products></Products>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

// Exportamos la funcioin App
export default App;
