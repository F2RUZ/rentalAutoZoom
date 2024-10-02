import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/grid';
import {Autoplay,  Grid,  Pagination } from "swiper/modules";

import "./HomeBrands.scss";
import useData from "../../hooks/getData";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeBrands = () => {
  const { data,  getData } = useData({ url: "brands" });
  const navigate = useNavigate()
  
  useEffect(() => {
    getData();
  }, []);

  function carsNavigate(id){
    navigate(`/cars/${id}model`)
  }
  const {t} = useTranslation()

  return (
    <section className="home-brands">
      <div className="container">
        <div className="home-brands-content">
          <div className="home-brand-title">{t("brand")}</div>
          <Swiper
            slidesPerView={6}
            grid={{
              rows: 2,
              fill: "row"
            }}
            spaceBetween={30}
            
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination, Autoplay ]}
            className="mySwiper"
            breakpoints={{
              300: { 
                slidesPerView: 1,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 20,
              },
              400: { 
                slidesPerView: 2,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 20,
              },
              650: { 
                slidesPerView: 4,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 20,
              },
              810: { 
                slidesPerView: 5,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 20,
              },
              1024: { 
                slidesPerView: 6,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 30,
              }
            }}
          >
            {
                data?.map((brand) => {
                    return <SwiperSlide key={brand?.id}><div className="brands-slider-inner" onClick={() => {carsNavigate(brand.id)}}><img src={`https://realauto.limsa.uz/api/uploads/images/${brand?.image_src}`} alt={`Brand ${brand?.title}`}  /><h3 className="brand-card-title">{brand?.title}</h3></div></SwiperSlide>
                })
            }
            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeBrands;
