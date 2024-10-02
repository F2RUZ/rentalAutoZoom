import React from "react";
import "./HomePage.scss";
import Hero from "../../components/hero/Hero";
import BudgetCars from "../../components/budgetCars/BudgetCars";
import SportCars from "../../components/sportCars/SportCars";
import HyperCars from "../../components/hyperCars/HyperCars";
import MuscleCars from "../../components/muscleCars/MuscleCars";
import ConvertableCars from "../../components/convertableCars/ConvertableCars";
import HomeBrands from "../../components/HomeBrands/HomeBrands";
import SuvCars from "../../components/suvCars/SuvCars";
import YoutubeInfo from "../../components/youtubeInfo/YoutubeInfo";
import Faq from "../../components/faq/Faq";
import Luxory from "../../components/luxory/Luxory";
import ServicePage from "../servicePage/ServicePage";
import Instagram from "../../components/instagram/Instagram";
import YoutubeBottom from "../../components/youtubeInfo/youtubeBottom/YoutubeBottom";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <HomeBrands />
      <BudgetCars />
      <SportCars />
      <HyperCars />
      <MuscleCars />
      <SuvCars />
      <ConvertableCars />
      <ServicePage />
      <Luxory />
      <YoutubeInfo />
      <YoutubeBottom />
      <Faq />
      <Instagram />
    </main>
  );
};

export default HomePage;
