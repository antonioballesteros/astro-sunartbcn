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
import { categorias } from "../lib/categorias";

export function Slider() {
  // Filtrar categorías que tienen imágenes
  const categoriasConImagen = categorias.filter(
    (categoria) => categoria.imagen
  );

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
        {categoriasConImagen.map((categoria) => (
          <SwiperSlide key={categoria.id}>
            <a href={categoria.ruta}>
              <img src={categoria.imagen} alt={categoria.nombre} />
              <div className="categoria-nombre">{categoria.nombre}</div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
