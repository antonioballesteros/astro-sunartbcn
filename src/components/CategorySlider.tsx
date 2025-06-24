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

export function CategorySlider() {
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
            <a href={`/categoria/${categoria.id}`}>
              <img
                src={categoria.imagen}
                alt={categoria.nombre}
                className="block w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2.5 text-center font-bold text-xl">
                {categoria.nombre}
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
