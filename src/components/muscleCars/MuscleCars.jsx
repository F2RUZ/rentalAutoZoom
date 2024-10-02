import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./muscle-cars.scss";
import useData from "../../hooks/getData";
import CarsCard from "../carsCars/CarsCard";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const MuscleCars = () => {
  const { data, getData} = useData({ url: "cars/category" });

  useEffect(() => {
    getData();
  }, []);

  const Luxury = data?.filter((elem) => elem.name_en === "Luxury Cars Rental Emirates")[0];

  const navigate = useNavigate();
  function carsNavigate(id) {
    navigate(`/cars/${id}`);
  }

  const { t, i18n } = useTranslation();

  return (
    <div className="muscle">
      <div className="container">
        <div className="muscle-content">
          <div className="muscle-top budget-top">
            <h2 className="muscle-title budget-title">{i18n.language == "en" ? Luxury?.name_en : Luxury?.name_ru}</h2>
            <div
              onClick={() => carsNavigate(Luxury.id)}
              className={"muscle-link , budget-link"}
              to={"/"}
            >
              {t("see-all")}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
                  fill="white"
                ></path>
                <circle cx="16" cy="16" r="15.5" stroke="white"></circle>
              </svg>
            </div>
          </div>
          <div className="muscle-bottom budget-bottom">
          <Swiper
              slidesPerView={3}
              spaceBetween={100}
              allowSlideNext={false} 
              allowSlidePrev={false}
              className="mySwiper"
              breakpoints={{
                300: { 
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                550: { 
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                580: { 
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                880: { 
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: { 
                  slidesPerView: 3,
                  spaceBetween: 100,
                }
              }}
            >
              {Luxury?.cars?.slice(0, 3)?.map((elem) => (
                <SwiperSlide key={elem?.id}>
                  <CarsCard {...elem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuscleCars;
