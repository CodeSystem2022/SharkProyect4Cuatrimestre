import React from 'react';
import './style.css';
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.scss';

function Carrousel() {
    useEffect(() => {
        new Swiper('.tranding-slider', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          loop: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        });
      }, []);
  return (
    <section>
      <div className="container">
        <h3 className="text-center section-subheading">- popular Delivery -</h3>
        <h1 className="text-center section-heading">Tranding food</h1>
      </div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* Slide-start */}
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img
                src="https://helix-aries-969.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F53c78f00-661f-4e94-be61-bb401036ef16%2F85ffc1b0-f8f3-4705-933b-1295da0b13fe%2Fcasa.jpg?table=block&id=4d16c930-f08b-4a44-9504-e8d2fc95af0a&spaceId=53c78f00-661f-4e94-be61-bb401036ef16&width=2000&userId=&cache=v2"
                alt="Tranding"
              />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Plato del dia</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          {/* Slide-end */}
          {/* Slide-start */}
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
              <img
                src=""
                alt="Tranding"
              />
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$20</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                   Pizza
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            {/* <!-- Slide-end --> */}
            {/* Slide-start */}
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
              <img
                src=""
                alt="Tranding"
              />
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$20</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                   Pizza
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            {/* <!-- Slide-end --> */}
            {/* Slide-start */}
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
              <img
                src=""
                alt="Tranding"
              />
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$20</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                   Pizza
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            {/* <!-- Slide-end --> */}
            {/* Slide-start */}
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
              <img
                src=""
                alt="Tranding"
              />
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$20</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                   Pizza
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            {/* <!-- Slide-end --> */}

        </div>

        <div className="tranding-slider-control">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
            <script src="script.js"></script>
    </section>
  );
}

export default Carrousel;

