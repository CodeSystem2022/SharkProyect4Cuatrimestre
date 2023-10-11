// Listamos nuestros productos del menú
const products  = [
   {
    id: 1,
    name: "Combo Completo",
    price: 500,
    image: '../Imagenes/combo.png', //encontrar la ruta para el acceso a las image. O subirlas y copiar el link
    description: "Hambuerguesa, papas y bebida"
   },
   {
    id: 2,
    name: "Hamburguesa Simple",
    price: 600,
    image: '../Imagenes/hamburguesa_fritas.png', //encontrar la ruta para el acceso a las image
    description: "Deliciosa Hamburguesa con papas fritas."
   },
   {
    id: 3,
    name: "Hamburguesa Completa",
    price: 900,
    image: '../Imagenes/hamburguesas_fritas_cerveza.png', //encontrar la ruta para el acceso a las image
    description: "Hamburguesa completa con queso, papas y cerveza",
   },
   {
    id: 4,
    name: "Pizza Shark",
    price: 500,
    image: '../Imagenes/pizza_shark.png', //encontrar la ruta para el acceso a las image
    description: "Pizza grande con bebida grande"
   },
   {
    id: 5,
    name: "Hamburguesa Shark",
    price: 1200,
    image: '../Imagenes/hamburguesa_shark', //encontrar la ruta para el acceso a las image
    description: "Hamburguesa completa con queso, papas y gaseosa a elección"
   }
];

// Exportamos la lista de diccionarios
export default products;