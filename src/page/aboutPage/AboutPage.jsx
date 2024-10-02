import React from "react";
import "./AboutPage.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation()
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-links">
            <NavLink to={"/"}>Luxury Cars for Rent in Dubai / aboutUs2</NavLink>
          </div>
          <h2 className="about-title">{t("about.about-title")}</h2>
          <p className="about-text">{t("about.text")}</p>
          <p className="about-subtext">{t("about.sub-text")}</p>
          <h3 className="about-subtitle">{t("about.subtitle")}</h3>
          <p className="about-subtext"><span className="about-span">{t("about.about-text-1")}</span>{t("about.about-span-1")}</p>
          <p className="about-subtext"><span className="about-span">{t("about.about-text-2")}</span>{t("about.about-span-2")}</p>
          <p className="about-subtext"><span className="about-span">{t("about.about-text-3")}</span>{t("about.about-span-3")}</p>
          <p className="about-subtext"><span className="about-span">{t("about.about-text-4")}</span>{t("about.about-span-4")}</p>

          <div>
            <h4 className="about-fourth-title">{t("about.title-1")}</h4>
            <p className="about-subtext">{t("about.sub-text-2")}</p>
          </div>

          <div>
            <h4 className="about-fourth-title">{t("about.title-2")}</h4>
            <p className="about-subtext">{t("about.sub-text-3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
