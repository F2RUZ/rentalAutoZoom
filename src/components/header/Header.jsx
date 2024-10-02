import React, { useState } from "react";
import "./Header.scss";
import enImg from "../../assets/eng-flag.png";
import ruImg from "../../assets/rus-flag.png";
import { FiSearch } from "react-icons/fi";
import LogoImg from "../../assets/logo2.jpg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

const Header = () => {
  const { register, handleSubmit, reset } = useForm();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate(`/cars/${data.text}keyword?`);
    reset();
    setOpenSearch(false)
  };
  function changeLng(text) {
    localStorage.setItem("i18nextLng", text);
    i18n.changeLanguage(text);
  }

  return (
    <header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`mobile-search ${openSearch ? "search-active" : ""}`}
      >
        <button type="submit">
          <FiSearch style={{ fontSize: "30px", color: "#fff" }} />
        </button>
        <input
          type="text"
          {...register("text")}
          id="text"
          placeholder={t("header.input")}
        />
        <div
          className="close-search"
          onClick={() => setOpenSearch(!openSearch)}
        >
          <IoCloseCircleOutline style={{ fontSize: "35px", color: "#fff" }} />
        </div>
      </form>
      <nav className={`mobile-nav ${open ? "mobile-active" : ""}`}>
        <div className="mobile-nav-close" onClick={() => setOpen(!open)}>
          <IoClose style={{ color: "#fff", fontSize: "40px" }} />
        </div>
        <ul>
          <li onClick={() => setOpen(false)}>
            <Link to="/cars">{t("header.cars")}</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/brands">{t("header.brand")}</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/services">{t("header.services")}</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/about">{t("header.about")}</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/contacts">{t("header.contacts")}</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/blog">{t("header.blog")}</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="tel:971527030189">+971 52 7030189</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <div className="languages">
              <div className="language" onClick={() => changeLng("en")}>
                <img src={enImg} alt="photo" />
              </div>
              <div className="language">
                <img src={ruImg} alt="photo" onClick={() => changeLng("ru")} />
              </div>
            </div>
            <div
              className="mobile-search-open"
              onClick={() => setOpenSearch(!openSearch)}
            >
              <FiSearch style={{ fontSize: "24px", color: "#fff" }} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="header-search">
              <button type="submit">
                <FiSearch style={{ fontSize: "24px", color: "#fff" }} />
              </button>
              <input
                type="text"
                {...register("text")}
                id="text"
                placeholder={t("header.input")}
              />
            </form>
          </div>
          <div className="logo" onClick={() => navigate("/")}>
            <img src={LogoImg} alt="logo photo" />
          </div>
          <div className="header-right">
            <nav className="desktop-nav">
              <ul>
                <li>
                  <Link to="/cars">{t("header.cars")}</Link>
                </li>
                <li>
                  <Link to="/brands">{t("header.brand")}</Link>
                </li>
                <li>
                  <Link to="/services">{t("header.services")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("header.about")}</Link>
                </li>
                <li>
                  <Link to="/contacts">{t("header.contacts")}</Link>
                </li>
                <li>
                  <Link to="/blog">{t("header.blog")}</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="tel:971527030189">+971 52 7030189</Link>
                </li>
              </ul>
            </nav>
            <div className="mobile-nav-btn" onClick={() => setOpen(!open)}>
              <SlMenu style={{ color: "#fff", fontSize: "35px" }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
