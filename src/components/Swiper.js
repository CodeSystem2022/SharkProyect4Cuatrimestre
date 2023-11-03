import './Carousel.css';
import React from 'react';
const SwiperSlide = ({ imageUrl, price, foodName, rating }) => (
    <div className='swiper-slide' >
    <div style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <h2>{foodName}</h2>
      <p>{price}</p>
      <p>Rating: {rating}</p>
    </div>
  );
  
  export default SwiperSlide;