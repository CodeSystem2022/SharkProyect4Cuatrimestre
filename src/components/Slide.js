import React from 'react';

function Slide({ foodItem }) {
  return (
    <div className="swiper-slide tranding-slide">
      <div className="tranding-slide-img">
        <img src={foodItem.imageUrl} alt="Tranding" />
      </div>
      <div className="tranding-slide-content">
        <h1 className="food-price">{foodItem.price}</h1>
        <div className="tranding-slide-content-bottom">
          <h2 className="food-name">{foodItem.foodName}</h2>
          <h3 className="food-rating">
            <span>{foodItem.rating}</span>
            {/* Aca podría renderizar los íconos de estrellas según el rating */}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Slide;

