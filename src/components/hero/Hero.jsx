import React from "react";
import "./Hero.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CenterMode from "./heroSlider/CenterMode";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const {t} = useTranslation()
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{t("hero.hero-title")}</h1>
          <p className="hero-text">{t("hero.hero-description")}</p>
          <a className="hero-link" href="/">
            <span>{t("hero.hero-link")}</span>
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
          </a>
        </div>
      </div>
      <div className="hero-slider">
        <CenterMode/>
      </div>
    </section>
  );
};

export default Hero;
