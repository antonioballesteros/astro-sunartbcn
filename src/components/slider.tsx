import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/categorias/tmp_pendientes.jpg" alt="Pendientes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/categorias/tmp-collares.jpg" alt="Collares" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/categorias/tmp_puntos-libro.jpg"
            alt="Puntos de libro"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/categorias/tmp_porta-velas.jpg" alt="Porta velas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/categorias/tmp_lamparas.jpg" alt="Lámparas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/categorias/tmp_inciensos.jpg" alt="Inciensos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/categorias/tmp_blocks.jpg" alt="Blocks" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/categorias/tmp_bandeja.jpg" alt="Bandejas" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
