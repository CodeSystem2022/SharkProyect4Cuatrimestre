
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Products from './components/Products';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {themeOptions } from './theme';

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar></Navbar>
      <Products></Products>
      {/*<Product></Product>*/}
      <Footer></Footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
