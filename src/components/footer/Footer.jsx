import React, { useEffect } from "react";
import "./Footer.scss";
import LogoImg from "../../assets/logo2.jpg";
import { Link, useNavigate } from "react-router-dom";
import useData from "../../hooks/getData";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();
  const { data,  getData } = useData({ url: "categories" });
  useEffect(() => {
    getData()
  }, [])
  function carsNavigate(id){
    navigate(`/cars/${id}`)
    window.scrollTo(0, 0);
  }
  const {t, i18n} = useTranslation()
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div
              className="footer-logo"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={LogoImg} alt="logo photo" />
            </div>
            <h3 className="footer-title">{t("footer.title")}</h3>
            <p className="footer-description">
            {t("footer.des")}
            </p>

            <Link to="tel:971527030189"><div className="footer-btn-link">{t("footer.button")}</div></Link>
          </div>
          <div className="footer-right">
            <div className="footer-right-top">
              <div className="footer-col-1">
                <Link className="footer-col-title" to={"/cars"}>{t("header.cars")}</Link>
                <ul>
                  {
                    data?.map(category => <li key={category?.id} onClick={() => {carsNavigate(category?.id)}}>{i18n.language == "en" ? category?.name_en : category?.name_ru}</li>)
                  }
                </ul>
              </div>
              <div className="footer-col-2">
                <Link className="footer-col-title" to={"/blog"}>{t("header.blog")}</Link>
                <Link className="footer-col-title" to={"/services"}>{t("header.services")}</Link>
                <div className="footer-contact-box">
                  <Link className="footer-col-title" to={"/contacts"}>{t("header.contacts")}</Link>
                  <div className="footer-info-contact">Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates<br/>+971 52 7030189<br/>{t("footer.work")}</div>
                </div>
              </div>
              <div className="footer-col-3">
                <div className="footer-about-box">
                  <Link className="footer-col-title" to={"/about"}>{t("header.about")}</Link>
                  <ul>
                    <li>
                      <Link to={'/FAQ'}>{t("footer.faq")}</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-social-box">
                  <div className="footer-col-title">{t("footer.follow")}</div>
                  <ul>
                    <li><a href="https://www.instagram.com/autozoomrental/" target="_blank"><FaInstagram style={{fontSize: "18px", color: "#fff9"}}/></a></li>
                    <li><a href="https://www.instagram.com/autozoomrental/" target="_blank"><FaFacebook style={{fontSize: "18px", color: "#fff9"}}/></a></li>
                    <li><a href="https://www.instagram.com/autozoomrental/" target="_blank"><FaYoutube style={{fontSize: "18px", color: "#fff9"}}/></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-right-bottom">
              <div className="footer-bottom-left">© 2024 TurboRent Car Rental. <br /> {t("footer.bottom-left")}</div>
              <Link to={"/terms_and_conditions"} className="footer-bottom-right">{t("footer.bottom-right")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
