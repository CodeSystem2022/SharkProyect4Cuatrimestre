import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Carousel.css';

export const Carousel = ({
  children,
  className = "",
  buttons = false,
  ...props
}) => {
  const swiperRef = useRef();

  const handlePreviousItem = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextItem = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <Swiper className={`relative ${className}`} ref={swiperRef} {...props}>
      {children.map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
      {buttons ? (
        <>
          <button
            onClick={handleNextItem}
            className="absolute right-0 top-[calc(50%-2rem)] z-50 grid h-16 w-16 place-items-center rounded-full bg-dark-gray"
          >
            <img src="/icons/arrow.svg" alt="Right arrow" />
          </button>
          <button
            onClick={handlePreviousItem}
            className="absolute left-0 top-[calc(50%-2rem)] z-50 grid h-16 w-16 place-items-center rounded-full bg-dark-gray"
          >
            <img
              className="rotate-180"
              src="/icons/arrow.svg"
              alt="Left arrow"
            />
          </button>
        </>
      ) : null}
    </Swiper>
  );
};





//CODIGO PARA CARROUSEL CON FIREBASE STORAGE

// import React, { useEffect, useRef, useState } from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './Carousel.css';

// import { Pagination } from 'swiper/modules';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA55Cb5nZm-c4kc-slpWiDDZxVWoPH3fTM",
//   authDomain: "react-firebase-58f1e.firebaseapp.com",
//   projectId: "react-firebase-58f1e",
//   storageBucket: "react-firebase-58f1e.appspot.com",
//   messagingSenderId: "301301076579",
//   appId: "1:301301076579:web:e42627ff64055fc4b05e56"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Inicializa Firestore
// const db = getFirestore(app);

// export default function Carrousel() {
//   const listRef = useRef();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getDocs(collection(db, "archivos")).then((querySnapshot) => {
//       const newData = [];
//       querySnapshot.forEach((doc) => {
//         newData.push(doc.data());
//       });
//       setData(newData);
//     });
//   }, []);

//   useEffect(() => {
//     getDocs(collection(db, "archivos")).then((querySnapshot) => {
//       const newData = [];
//       querySnapshot.forEach((doc) => {
//         newData.push(doc.data());
//       });
//       console.log(newData); // Agrega esto para verificar los datos
//       setData(newData);
//     });
//   }, []);

//   const scrollToImage = (direction) => {
//     if (direction === 'prev') {
//       setCurrentIndex(curr => {
//         const isFirstSlide = currentIndex === 0;
//         return isFirstSlide ? 0 : curr - 1;
//       })
//     } else {
//       const isLastSlide = currentIndex === data.length - 1;
//       if (!isLastSlide) {
//         setCurrentIndex(curr => curr + 1);
//       }
//     }
//   }

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   }

//   return (
//     <div className="main-container">
//       <div className="slider-container">
//         <div className='leftArrow' onClick={() => scrollToImage('prev')}>❬</div>
//         <div className='rightArrow' onClick={() => scrollToImage('next')}>❭</div>
//         <div className="container-images">
//           <ul ref={listRef}>
//           <Swiper
//           loop={true}
//           slidesPerView={3}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//           className="mySwiper"> 
//             {
//               data.map((item, index) => {
//                 return (
//                   <SwiperSlide key={index}>
//                     <img src={item.url} width={300} height={300} alt={item.Nombre} />
//                     <p>{item.Nombre}</p>
//                   </SwiperSlide>
//                 );
//               })
//             }
//           </Swiper>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

