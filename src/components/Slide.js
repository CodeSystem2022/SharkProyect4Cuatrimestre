import React from 'react';

function Slide({ imageUrl, price, foodName, rating }) {
  return (
    <div className="swiper-slide tranding-slide">
      <div className="tranding-slide-img">
        <img src={imageUrl} alt="Tranding" />
      </div>
      <div className="tranding-slide-content">
        <h1 className="food-price">{price}</h1>
        <div className="tranding-slide-content-bottom">
          <h2 className="food-name">{foodName}</h2>
          <h3 className="food-rating">
            <span>{rating}</span>
            {/* Aca podría renderizar los íconos de estrellas según el rating */}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Slide;
