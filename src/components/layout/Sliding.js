import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Sliding() {
  return (
    <section className="my-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ width: '100%', height: '369px' }}
      >
        <SwiperSlide style={{ height: '100%' }}><img src="/pizzeria.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></SwiperSlide>
        <SwiperSlide><img src="/second.jpg" alt="Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></SwiperSlide>
        <SwiperSlide><img src="/pizzeria.jpg" alt="Image 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/frame1.jpg" alt="Image 1" style={{ width: '50%', height: 'auto', objectFit: 'cover' }} />
          <img src="/frame2.jpg" alt="Image 2" style={{ width: '50%', height: 'auto', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/pizza1.jpg" alt="Image 1" style={{ width: '50%', height: 'auto', objectFit: 'cover' }} />
          <img src="/pizza2.jpg" alt="Image 2" style={{ width: '50%', height: 'auto', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/pizza3.jpg" alt="Image 1" style={{ width: '50%', height: 'auto', objectFit: 'cover' }} />
          <img src="/pizza4.jpg" alt="Image 2" style={{ width: '50%', height: 'auto', objectFit: 'cover' }} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
