import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";
import "./FilterCarsCard.scss"
import { useNavigate } from "react-router";
import { Skeleton, Image } from 'antd';



const FilterCarsCard = ({ imgs, brandName, modelName, aed, usd, id }) => {
  const [loading, setLoading] = useState(true);
  const img = imgs?.filter(item => item?.is_main)[0]?.image?.src
  console.log(imgs);
  const handleImageLoad = () => {
    setLoading(false);
  };
 
  const navigate = useNavigate()
  function carsNavigate(id){
    navigate(`/cars_info/${id}`)
  }
  return (
    <div onClick={() => carsNavigate(id)} className="filter-cars-card">
      <div className="filter-cars-card-top">
        <div className="cars-picture">
        {loading && <Skeleton.Image className="skeleton-image" active />}
          <Image
            src={`https://realauto.limsa.uz/api/uploads/images/${img}`}
            alt={brandName}
            onLoad={handleImageLoad}
            style={{ display: loading ? 'none' : 'block' }}
            preview={false}
          />
        </div>
        <h3 className="filter-cars-card-title">{`${brandName} ${modelName}`}</h3>
        <h4 className="filter-cars-card-aed">
          {`AED ${aed}`}{" "}
          <span className="filter-cars-card-usd">{`/ $ ${usd}`}</span>
        </h4>
        <p className="renta-type">per day</p>
      </div>
      <div className="filter-cars-card-bottom">
        <button className="btn-w">
          <FaWhatsapp /> WhatsApp
        </button>
        <button className="btn-t">
          <ImTelegram /> Telegram
        </button>
      </div>
    </div>
  );
};

export default FilterCarsCard;
