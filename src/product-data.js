
// Listamos nuestros productos del menú
const products  = [
   {
    id: 1,
    name: "Hamburguesa Americana",
    price: 500,
    image: 'https://helix-aries-969.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F53c78f00-661f-4e94-be61-bb401036ef16%2F0c55e7c5-b8f9-4eaa-9e3e-59bbb8059e56%2FAmericanBurger2.jpg?table=block&id=13f62054-b771-4a0b-bb78-58c7f74b59e5&spaceId=53c78f00-661f-4e94-be61-bb401036ef16&width=2000&userId=&cache=v2', //encontrar la ruta para el acceso a las image. O subirlas y copiar el link
    description: "Hambuerguesa con queso cheddar y ensalada"
   },
   {
    id: 2,
    name: "Pizza Napolitana",
    price: 600,
    image: 'https://helix-aries-969.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F53c78f00-661f-4e94-be61-bb401036ef16%2Ffc0ac6f1-1db4-4dd5-b5c0-e5174ccd0f42%2F_93e7c5c3-d840-4e2c-98a9-2f1e15bcdee8.jpg?table=block&id=dd8b518a-31d6-48cd-8792-7cae9bf2a7ad&spaceId=53c78f00-661f-4e94-be61-bb401036ef16&width=2000&userId=&cache=v2', //encontrar la ruta para el acceso a las image
    description: "Pizza con queso muzzarela, albahaca, "
   },
   {
    id: 3,
    name: "Hamburguesa Argentina",
    price: 900,
    image: 'https://helix-aries-969.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F53c78f00-661f-4e94-be61-bb401036ef16%2Fd3662581-69ab-4b8f-b630-1d4f2ba862f3%2FHambA2.jpg?table=block&id=eb9b4652-817a-4039-a134-1f710f05702d&spaceId=53c78f00-661f-4e94-be61-bb401036ef16&width=2000&userId=&cache=v2', //encontrar la ruta para el acceso a las image
    description: "Hamburguesa completa con queso, papas y queso roquefort",
   },
   {
    id: 4,
    name: "Pasta Italiana",
    price: 500,
    image: 'https://helix-aries-969.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F53c78f00-661f-4e94-be61-bb401036ef16%2Ff72ec108-2bf1-4758-b762-e6e327fee981%2Fpasta.jpg?table=block&id=6f62b5f8-e41c-4de7-a303-ae09db448789&spaceId=53c78f00-661f-4e94-be61-bb401036ef16&width=540&userId=&cache=v2', //encontrar la ruta para el acceso a las image
    description: "Pasta con albóndigas y salsa de tomate "
   },
   {
    id: 5,
    name: "Sushi Tokyo",
    price: 1200,
    image: 'https://helix-aries-969.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F53c78f00-661f-4e94-be61-bb401036ef16%2F4b93c03f-cfa7-4fdc-8014-0c8256f5645d%2Fsushi.jpg?table=block&id=3b8c3489-ead1-42ed-8981-ab1c5ce9a47d&spaceId=53c78f00-661f-4e94-be61-bb401036ef16&width=2000&userId=&cache=v2', 
    description: "Sushi al estilo japones"
   }
];

// Exportamos la lista de diccionarios
export default products;