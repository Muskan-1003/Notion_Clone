import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../../assets/community/community-slide-01.png";
import img from "../../assets/community/community-slide-02.png";
import img3 from "../../assets/community/community-slide-02.png";
import img4 from "../../assets/community/community-slide-02.png";

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><div className=' bg-black/5'><img
            src={img1}
            alt="engineering"
            height={600}
            width={600}
            className="object-fill  h-[600px] w-[600px] aspect-square	 overflow-hidden"
          /><h1 className=' '>Sharing Notion setups in San Francisco</h1></div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>
    </>
  );
}
