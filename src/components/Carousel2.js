import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import products from '../product-data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';
// import SwiperSlide from './Swiper';
// import required modules
import { Pagination } from 'swiper/modules';

export default function Carousel2() {
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
    const isLastSlide = currentIndex === products.length - 1;
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
            products.map((item) => {
              return <li key={item.id}>
                <img src={item.image} width={300} height={300} />
                <p>{item.name}</p>
              </li>
            })
          }
        </ul>
      </div>
      <div className="dots-container">
        {
          products.map((_, idx) => (
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