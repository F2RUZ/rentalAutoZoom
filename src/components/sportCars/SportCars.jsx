import React, { useEffect } from "react";
import "./sport-cars.scss";
import { useNavigate } from "react-router-dom";
import useData from "../../hooks/getData";
import CarsCard from "../carsCars/CarsCard";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SportCars = () => {
  const { data, getData } = useData({ url: "cars/category" });
  //filter
  const SportData = data?.filter((elem) => elem.name_en === "Sports cars Rental Emirates")[0];

  useEffect(() => {
    getData();
  }, []);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  function carsNavigate(id) {
    navigate(`/cars/${id}`);
  }

  return (
    <div className="sport budget">
      <div className="container">
        <div className="sport-content">
          <div className="sport-top  budget-top">
            <h2 className="sport-title budget-title">{i18n.language == "en" ? SportData?.name_en : SportData?.name_ru}</h2>
            <div
              onClick={() => carsNavigate(SportData.id)}
              className={"sport-link budget-link"}
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
          <div className="sport-bottom budget-bottom">
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
                },
              }}
            >
              {SportData?.cars?.slice(0, 3)?.map((elem) => (
                <SwiperSlide key={elem?.id}>
                  <CarsCard  {...elem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportCars;
