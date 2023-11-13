// Importamos los hooks necesarios de React y react-router-dom
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';  // Import the state and dispatch function
import { actionTypes } from './reducer';
import products from '../product-data.js';
import './ProductPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


// Definimos el componente ProductPage
function ProductPage() {
  const { id } = useParams();
  const [{ basket }, dispatch] = useStateValue();  // Destructure the state and dispatch function
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((product) => String(product.id) === id);
    setProduct(foundProduct);
  }, [id]);

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: product.id,
        name: product.name,
        image: product.image,
        precio: product.price
      },
    });
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className= 'parent-container'>
    <div className='product-container'>
      <div className='product-image-container'>
        <img className='product-image' src={product.image} alt={product.name} />
      <div className='product-details'>
        <h2>{product.name}</h2>
      <div className='texto'>
        <p>{product.description}</p>
      </div>
      <div className='precio'>
        <p>Precio: ${product.price}</p>
      </div>
        <button onClick={addToBasket}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        </div>
      </div>
    </div>
    </div>
  );
  
}

export default ProductPage;

