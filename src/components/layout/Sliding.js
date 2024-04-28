import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

export default function Sliding() {
  return (
    <section className="md:mt-4 relative hidden md:block">
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
        <SwiperSlide style={{ position: 'relative' }}>
          <Image src="/pizzeria.jpg" alt="Pizzeria" layout='fill' objectFit='cover' />
        </SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}>
          <Image src="/second.jpg" alt="Second Image" layout='fill' objectFit='cover' />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50%', position: 'relative' }}>
            <Image src="/frame1.jpg" alt="Frame 1" layout='fill' objectFit='cover' />
          </div>
          <div style={{ width: '50%', position: 'relative' }}>
            <Image src="/frame2.jpg" alt="Frame 2" layout='fill' objectFit='cover' />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50%', position: 'relative' }}>
            <Image src="/pizza1.jpg" alt="Image 1" layout='fill' objectFit='cover' />
          </div>
          <div style={{ width: '50%', position: 'relative' }}>
            <Image src="/pizza2.jpg" alt="Image 2" layout='fill' objectFit='cover' />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50%', position: 'relative' }}>
            <Image src="/pizza3.jpg" alt="Image 3" layout='fill' objectFit='cover' />
          </div>
          <div style={{ width: '50%', position: 'relative' }}>
            <Image src="/pizza4.jpg" alt="Image 4" layout='fill' objectFit='cover' />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}