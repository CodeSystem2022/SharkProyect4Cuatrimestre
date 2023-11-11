// Importamos los hooks necesarios de React y react-router-dom
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';  // Import the state and dispatch function
import { actionTypes } from './reducer';
import products from '../product-data.js';
import './ProductPage.css';

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
        // Add other product details as needed
      },
    });
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='product-container'>
      
      <h2>{product.name}</h2>
      <div className='product-image-container'>
        <img className='product-image' src={product.image} alt={product.name} />
      </div>
      <p>{product.description}</p>
      <button onClick={addToBasket}>Add to Cart</button> {/* Add this line for the "Add to Cart" button */}
      {/* Other product details */}
    </div>
  );
}

export default ProductPage;

