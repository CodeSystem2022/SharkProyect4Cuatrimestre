
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  return (
   
    <div className="App">
      <Navbar></Navbar>
      <CheckoutPage></CheckoutPage>
      {/*<Products></Products>*/}
      {/*<Product></Product>*/}
      <Footer></Footer>
    </div>

  );
}

export default App;
