import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import "./cars-info.scss";
import { CiCalendarDate, CiTimer, CiUser } from "react-icons/ci";
import { IoIosSpeedometer } from "react-icons/io";
import { IoCarSport, IoColorPaletteOutline } from "react-icons/io5";
import { PiEngineDuotone } from "react-icons/pi";
import {
  FaGasPump,
  FaPhone,
  FaTelegram,
  FaTengeSign,
  FaWhatsapp,
} from "react-icons/fa6";
import { LuGitBranch } from "react-icons/lu";
import CarsInfoFom from "../../components/carsInfoForm/CarsInfoFom";
import useData from "../../hooks/getData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton, Image } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useTranslation } from "react-i18next";
import Loader from "../../components/loader/Loader";

const CarsInfoPage = () => {
  // URL dan carsId olish
  const { carsId } = useParams();

  // Ma'lumotni olish
  const { data, getData } = useData({ url: `cars?${carsId}` });

  useEffect(() => {
    getData();
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loadingImg, setLoadingImg] = useState(true);
  const handleImageLoad = () => {
    setLoadingImg(false);
  };

  // carsId ni raqamga o'girish
  // const numericCarsId = Number(carsId);

  // Ma'lumotlarni filtrlash
  const fiterData = data?.filter((elem) => elem?.id === carsId)?.[0];

  // Ternary orqali destructuring
  const {
    brand,
    car_images,
    category,
    city,
    color,
    deposit,
    drive_side,
    four_days_price,
    limitperday,
    location,
    max_people,
    max_speed,
    model,
    motor,
    petrol,
    premium_protection,
    price_in_aed,
    price_in_aed_sale,
    price_in_usd,
    price_in_usd_sale,
    seconds,
    transmission,
    two_days_price,
    year,
  } = fiterData ? fiterData : {};

  const { title } = brand ? brand : {};
  const { name } = model ? model : {};

  //translate
  const { t } = useTranslation();

  if (!fiterData) {
    return <Loader />;
  }

  return (
    <div className="cars-info">
      <div className="container">
        <div className="cars-info-content">
          <h2 className="cars-info-title">
            {t("cars-info.title")} {t("cars-info.Mirage")} (
            {t("cars-info.white")})
          </h2>
          <div className="cars-info-top">
            <div className="cars-info-left">
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {car_images?.slice(0, 4)?.map(({ image }) => (
                  <SwiperSlide key={image?.src} className="swiper--slide">
                    {loadingImg && (
                      <Skeleton.Image className="skeleton-image" active />
                    )}
                    <Image
                      src={`https://api.autozoomrental.com/api/uploads/images/${image?.src}`}
                      alt="photo"
                      onLoad={handleImageLoad}
                      style={{ display: loadingImg ? "none" : "block" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {car_images?.slice(0, 4)?.map(({ image }) => (
                  <SwiperSlide key={image?.src}>
                    {loadingImg && (
                      <Skeleton.Image className="skeleton-image-1" active />
                    )}
                    <Image
                      src={`https://api.autozoomrental.com/api/uploads/images/${image?.src}`}
                      alt="photo"
                      onLoad={handleImageLoad}
                      style={{ display: loadingImg ? "none" : "block" }}
                      preview={false}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="cars-info-right">
              <div className="cars-info-right-top">
                <div className="cars-info__box">
                  <p className="cars-info-aedText">
                    AED {price_in_aed} / <span> $ {price_in_usd}</span>
                  </p>
                  <p className="cars-info-perDay">{t("cars-info.per_day")}</p>
                  <p className="cars-info-price">AED / $</p>
                </div>
                <div className="cars-info__box">
                  <p className="cars-info__deposit">{t("cars-info.deposit")}</p>
                  <p className="cars-info__deposit">
                    {t("cars-info.premium_protection")}
                  </p>
                </div>
                <div className="cars-info__box">
                  <p className="cars-info__aed">AED 0</p>
                  <p className="cars-info__paymet">
                    {t("cars-info.AED 0 for credit cards payment")}
                  </p>
                  <p className="cars-info__aed">AED 0</p>
                  <p className="cars-info__paymet">
                    {t("cars-info.AED 0 for credit cards payment")}
                  </p>
                </div>
              </div>
              <div className="cars-info-right-bottom">
                <table className="cars-info-table">
                  <thead>
                    <tr>
                      <th>
                        <CiCalendarDate color="#485460" />
                      </th>
                      <th>
                        <CiTimer color="#485460" />
                      </th>
                      <th>
                        <IoIosSpeedometer color="#485460" />
                      </th>
                      <th>
                        <CiUser color="#485460" />
                      </th>
                      <th>
                        <IoColorPaletteOutline color="#485460" />
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{year}</td>
                      <td>{seconds}</td>
                      <td>{max_speed}</td>
                      <td>{max_people}</td>
                      <td>{t("cars-info.white")}</td>
                    </tr>
                  </tbody>
                </table>

                <table className="cars-info-table">
                  <thead>
                    <tr>
                      <th>
                        <PiEngineDuotone color="#485460" />
                      </th>
                      <th>
                        <FaTengeSign color="#485460" />
                      </th>
                      <th>
                        <LuGitBranch color="#485460" />
                      </th>
                      <th>
                        <FaGasPump color="#485460" />
                      </th>
                      <th>
                        <IoCarSport color="#485460" />
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{motor}</td>
                      <td>{transmission}</td>
                      <td>{drive_side}</td>
                      <td>{t("cars-info.petrol")}</td>
                      <td>{category?.name_en}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="cars-info-buttons">
                <NavLink className={"cars-info-links"}>
                  <FaWhatsapp fontSize={"2rem"} color="white" />
                </NavLink>
                <NavLink className={"cars-info-links"}>
                  <FaTelegram fontSize={"2rem"} color="white" />
                </NavLink>
                <NavLink className={"cars-info-links"}>
                  <FaPhone fontSize={"2rem"} color="white" />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="cars-info-bottom">
            <div className="cars-info-bottom-left">
              <div className="cars-info-bottom-left"></div>
              <h3 className="cars-info-subtitle">
                {t("cars-info.good_to_know")} {t("cars-info.title")}{" "}
                {t("cars-info.Mirage")} ({t("cars-info.white")})
              </h3>
              <p className="cars-info-subtext">{t("cars-info.km_limit")}</p>
              <h4 className="cars-info-secondtitle">
                {max_speed} KM {t("cars-info.extra_km")}
              </h4>
              <p className="cars-info-subtext">
                {t("cars-info.car_rental_deposit_amount")}
              </p>
              <h5 className="cars-info-tourthtitle">
                {t("cars-info.deposit_refund")}
              </h5>
            </div>
            <div className="cars-info-bottom-right">
              <CarsInfoFom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsInfoPage;
