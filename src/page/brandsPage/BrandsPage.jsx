import React, { useEffect } from "react";
import "./BrandsPage.scss";
import useData from "../../hooks/getData";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const BrandsPage = () => {
  const { data, loading, getData } = useData({ url: "brands" });
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  function carsNavigate(id) {
    navigate(`/cars/${id}model`);
  }
  const {t} = useTranslation()
  return (
    <section className="brand">
      <div className="container">
        <div className="brands-content">
          <h2 className="brands-title">{t("brand")}</h2>
          <div className="brands-items">
            {
              loading ? <div>Loading...</div> : <Swiper
              slidesPerView={6}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination, Autoplay]}
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
              {data?.map((brand) => {
                return (
                  <SwiperSlide key={brand?.id}>
                    <div
                      className="brands-item"
                      onClick={() => {
                        carsNavigate(brand.id);
                      }}
                    >
                      <img
                        src={`https://realauto.limsa.uz/api/uploads/images/${brand?.image_src}`}
                        alt={brand?.title}
                      />
                      <h3 className="brand-card-title">{brand?.title}</h3>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsPage;
