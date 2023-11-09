
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

import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

import { Pagination } from 'swiper/modules';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA55Cb5nZm-c4kc-slpWiDDZxVWoPH3fTM",
  authDomain: "react-firebase-58f1e.firebaseapp.com",
  projectId: "react-firebase-58f1e",
  storageBucket: "react-firebase-58f1e.appspot.com",
  messagingSenderId: "301301076579",
  appId: "1:301301076579:web:e42627ff64055fc4b05e56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export default function Carrousel() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "archivos")).then((querySnapshot) => {
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push(doc.data());
      });
      setData(newData);
    });
  }, []);

  useEffect(() => {
    getDocs(collection(db, "archivos")).then((querySnapshot) => {
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push(doc.data());
      });
      console.log(newData); // Agrega esto para verificar los datos
      setData(newData);
    });
  }, []);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>❬</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>❭</div>
        <div className="container-images">
          <ul ref={listRef}>
          <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"> 
            {
              data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item.url} width={300} height={300} alt={item.Nombre} />
                    <p>{item.Nombre}</p>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
          </ul>
        </div>
      </div>
    </div>
  )
}