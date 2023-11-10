import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Carousel.css'

export const Carousel = ({ children, className = '', buttons = false, ...props }) => {
  return (
    <Swiper
      className={`relative ${className}`}
      modules={[Autoplay, Navigation, Pagination, Mousewheel]}
      cssMode={true}
      navigation={true}
      mousewheel={true}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }}
      {...props}
    >
      {children.map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}