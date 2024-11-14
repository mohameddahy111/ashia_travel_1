'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay,  Navigation, EffectCreative } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperImage() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect='creative'
        navigation={true}
        modules={[Autoplay,  Navigation , EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src={'/img/egyptian_pyramid-wallpaper-1600x900.jpg'} width={900} height={400} alt="ashia" 
          />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={'/img/beautiful_evening_2-wallpaper-1600x900.jpg'} width={900} height={400} alt="ashia" 
          />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={'/img/dubai_marina_united_arab_emirates-wallpaper-1600x900.jpg'} width={900} height={400} alt="ashia" 
          />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={'/img/eiffel_tower_at_sunrise-wallpaper-1280x720.jpg'} width={900} height={400} alt="ashia" 
          />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={'/img/petronas_towers_kuala_lumpur_malaysia_2-wallpaper-1600x900.jpg'} width={900} height={400} alt="ashia" 
          />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={'/img/taj_mahal_india_2-wallpaper-1600x900.jpg'} width={900} height={400} alt="ashia" 
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
