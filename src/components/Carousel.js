import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {data} from '../assets/data'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';
// import SwiperSlide from './Swiper';
// import required modules
import { Pagination } from 'swiper/modules';

export default function Carrousel() {
 const listRef = useRef();
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const listNode = listRef.current;
  const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

  if (imgNode) {
    imgNode.scrollIntoView({
      behavior: "smooth"
    });
  }

}, [currentIndex]);

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
      <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
      <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
      <div className="container-images">
        <ul ref={listRef}>
          {
            data.map((item) => {
              return <li key={item.id}>
                <img src={item.imgUrl} width={300} height={300} />
                <p>{item.text}</p>
              </li>
            })
          }
        </ul>
      </div>
      <div className="dots-container">
        {
          data.map((_, idx) => (
            <div key={idx}
              className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}>
              &#9865;
            </div>))
        }
      </div>
    </div>
  </div >
)
}





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

