import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { ThemeProvider } from '@mui/material/styles';
import { createMyTheme } from './theme';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Define tu tema aquí
const theme = createMyTheme();

function App() {
  return (
    <Router>
<div className="App">
        <ThemeProvider theme={theme}>
          <Navbar/>
          <Switch>
            <Route path="/checkout-page">
                  <CheckoutPage/>
            </Route>  
            <Route path="/">
                  <Products/>
            </Route>  
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;