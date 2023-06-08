
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slider.css'

import { Parallax, Pagination, Navigation } from "swiper";
import guiter from '../../../public/images/images.jpg'
import Tabla from '../../../public/images/tabla.webp'
import harmoni from '../../../public/images/Harmoni.jpg'
const Slider = () => {
    return (
        <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                "url(https://i.ibb.co/5hLjr1n/cello-violoncello-strings-wallpaper-preview.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Guiter
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Music is good for our mind it doing relax and feelings fresh to our Health
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <img className="mx-auto mt-3 rounded-xl" src={guiter} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Tabla
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              you can visit and ENroll a skill
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <img src={ Tabla } alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
            Harmonic
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Music is the Most popular in the World
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <img className="h-40 w-60 mx-auto mt-3 rounded-xl" src={harmoni} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Slider;