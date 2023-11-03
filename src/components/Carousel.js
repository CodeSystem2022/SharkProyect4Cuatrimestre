
// import React, { useEffect } from 'react';
// import Slide from './Slide'; // Importa el componente Slide
// import './Carousel.css'; // Importa tus estilos CSS aquí si es necesario


// function Carousel() {

//   return (
//     <section id="tranding">
//       <div className="container">
//         <h3 className="text-center section-subheading">- popular Delivery -</h3>
//         <h1 className="text-center section-heading">Tranding food</h1>
//       </div>
//       <div className="container">
//         <div className="swiper tranding-slider">
//           <div className="swiper-wrapper">
            
//                 <Slide
//                 imageUrl="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
//                 price="$3000"
//                 foodName="Especialidad de la casa "
//                 rating="4.5"
//                 />
//                 <Slide
//                 imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
//                 price="$5500"
//                 foodName="Pizza"
//                 rating="4.5"
//                 />
            
//                 <Slide
//                 imageUrl="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 price="$10900"
//                 foodName="Salmon especial"
//                 rating="4.5"
//                 />
            
//           </div>
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Carousel;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Carrousel() {

  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide imageUrl="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          price="$3000"
          foodName="Especialidad de la casa "
          rating="4.5">
        </SwiperSlide>
        <SwiperSlide imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
         price="$5500"                 
         foodName="Pizza"
         rating="4.5">
        </SwiperSlide>
        <SwiperSlide imageUrl="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        price="$10900"
        foodName="Salmon especial"
                rating="4.5"
                />
            
      </Swiper>
    </>
  );
}

