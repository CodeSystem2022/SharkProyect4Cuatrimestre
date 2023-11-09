import React from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import {Carousel} from "../components/Carousel";
import Carrousel2 from "../components/Carousel2";
import Footer from "../components/Footer";
import products from "../product-data";
import { data } from "../assets/data";


// Creamos la pagina como una constante, ahorramos procesos
const Home = () => {
  return (
    <div>
      {/*Seccion de productos*/}
      <Link to="/Products">
        <img
          src="https://helix-aries-969.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F53c78f00-661f-4e94-be61-bb401036ef16%2F8636c9f5-981f-4689-86a8-156b3df65142%2Fbotontienda.jpg?table=block&id=09f05d5e-3873-4b1c-85fb-0211f86aaaa1&spaceId=53c78f00-661f-4e94-be61-bb401036ef16&width=2000&userId=&cache=v2"
          height={300} //esto despues se cambia en el CSS
          alt="Ver tienda"
        />
      </Link>
      <Carousel
  className="h-[27rem]"
  slidesPerView={1}
  spaceBetween={30}
//   buttons
  navigation
  centeredSlides
  loop
  autoplay={{
    delay: 2500,
    disableOnInteraction: true,
  }}
  breakpoints={{
    880: {  
      slidesPerView: 2,
    },
    1220: {
      slidesPerView: 3,
    },
  }}
>
  {data.map((item) => {
    return <li key={item.id}>
      <img src={item.imgUrl} width={300} height={300} />
      <p>{item.text}</p>
    </li>
  })}
</Carousel>
      {/* ... */}
    </div>
  );
};

// Exportamos página
export default Home;
