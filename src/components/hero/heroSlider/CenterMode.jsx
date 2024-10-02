import React from "react";

import autoImg1 from "../../../assets/hero-auto-1.png";
import autoImg2 from "../../../assets/hero-auto-2.png";
import autoImg3 from "../../../assets/hero-auto-3.png";
import autoImg4 from "../../../assets/hero-auto-4.png";
import Arrow_Left from "../../../assets/icons/arrow-left.svg";
import Arrow_Right from "../../../assets/icons/arrow-right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CenterMode.scss";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const CenterMode = () => {
  return (
    <div className="swiper_comp">
      <Swiper
        effect={"coverflow"}
        slidesPerView={3}
        spaceBetween={700}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidePrevClass={"auto"}
        slideNextClass={"auto"}
        speed={1100}
        lazy={true}
        coverflowEffect={{
          scale: 0.9,
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 0.6,
          slideShadows: true,
        }}
        breakpoints={{
          318: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          760: {
            slidesPerView: 1,
            spaceBetween: 100,
            coverflowEffect: {
              depth: 50,
            },
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 500,
            coverflowEffect: {
              depth: 10,
              modifier: 0.5,
            },
          },

          1130: {
            slidesPerView: 3,
            spaceBetween: 500,
            coverflowEffect: {
              depth: 10,
              modifier: 0.6,
            },
          },
          1222: {
            slidesPerView: 3,
            spaceBetween: 550,
            coverflowEffect: {
              depth: 50,
              modifier: 0.4,
            },
          },
          1380: {
            slidesPerView: 3,
            spaceBetween: 500,
            coverflowEffect: {
              depth: 30,
              modifier: 0.5,
            },
          },

          1525: {
            slidesPerView: 3,
            spaceBetween: 600,
            coverflowEffect: {
              depth: 20,
              modifier: 0.3,
            },
          },

          1701: {
            slidesPerView: 3,
            spaceBetween: 800,
            coverflowEffect: {
              depth: 20,
              modifier: 0.2,
            },
          },

          1800: {
            slidesPerView: 3,
            spaceBetween: 700,
            coverflowEffect: {
              depth: 30,
              modifier: 0.7,
            },
          },
        }}
        // pagination={{el: '.swiper-pagination',clickable:true,}}
        modules={[EffectCoverflow, Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="swiper-container"
      >
        <SwiperSlide className="swiper-slide-el">
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to={"/cars"}
            className="swiper_slider_el_link"
          >
            <img src={autoImg1} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-el">
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to={"/cars"}
            className="swiper_slider_el_link"
          >
            <img src={autoImg2} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-el">
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to={"/cars"}
            className="swiper_slider_el_link"
          >
            <img src={autoImg3} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-el">
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to={"/cars"}
            className="swiper_slider_el_link"
          >
            <img src={autoImg4} alt="" />
          </Link>
        </SwiperSlide>

        <div className="slider_controler">
              <div className="swiper-button-prev slider-arrow">
                  <img src={Arrow_Left} alt="slide icon left" />
              </div>

              <div className="swiper-button-next slider-arrow">
                  <img src={Arrow_Right} alt="slide icon right" />
              </div>
            </div>
      </Swiper>
    </div>
  );
};

export default CenterMode;
