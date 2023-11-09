// Importamos los hooks necesarios de React y react-router-dom
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Importamos los datos de los productos
import products from '../product-data.js';

// Definimos el componente ProductPage
function ProductPage() {
  // Utilizamos el hook useParams para obtener el id del producto de la URL
  const { id } = useParams();

  // Utilizamos el hook useState para guardar el producto en el estado del componente
  const [product, setProduct] = useState(null);

  // Utilizamos el hook useEffect para buscar el producto cuando el componente se monta o cuando el id cambia
  useEffect(() => {
    // Buscamos el producto en el array de productos
    const foundProduct = products.find((product) => String(product.id) === id);

    // Si encontramos el producto, lo guardamos en el estado del componente
    setProduct(foundProduct);
  }, [id]); // Este array de dependencias significa que useEffect se ejecutará cada vez que el id cambie

  // Si no encontramos el producto, mostramos un mensaje de "Producto no encontrado"
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Si encontramos el producto, mostramos información sobre el producto
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      {/* Aquí puedes agregar más detalles sobre el producto */}
    </div>
  );
}

// Exportamos el componente ProductPage para que pueda ser utilizado en otros archivos
export default ProductPage;

