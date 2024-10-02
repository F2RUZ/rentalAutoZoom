import React, {useState} from "react";

import "../budgetCars/budget-cars.scss";
import { NavLink} from "react-router-dom";
import { Skeleton, Image } from 'antd';

const CarsCard = (props) => {
  const images = props?.car_images?.find(image => image?.is_main)?.image?.src;
  const title = props?.model?.name;
  const brand = props?.brand?.title;
  const aed = props?.price_in_aed;
  const price = props?.price_in_usd;
  const id = props?.id;

  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };

  



  return (
    <NavLink to={`/cars_info/${id}`}>
      <div className="budget-car">
        <div className="budger-card-img">
          {loading && <Skeleton.Image className="skeleton-image-card" active />}
          <Image
            src={`https://realauto.limsa.uz/api/uploads/images/${images}`}
            alt=""
            className="budget-img"
            onLoad={handleImageLoad}
            style={{ display: loading ? 'none' : 'block' }}
            preview={false}
          />
        </div>
        <h4 className="budget-cartitle"> {brand + " " + title} </h4>
        <div className="budget-model">
          <span>AED {aed}</span> <span>$ {price}</span>
        </div>
        <p className="budget-cartext">per day</p>
      </div>
    </NavLink>
  );
};

export default CarsCard;
