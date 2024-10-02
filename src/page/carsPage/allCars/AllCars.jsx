import React, { useEffect } from "react";
import useData from "../../../hooks/getData";
import "./AllCars.scss";
import FilterCarsCard from "../filterCarsCard/FilterCarsCard";

const AllCars = ({ carsUrl }) => {
  const {
    data: carsData,
    loading,
    getData: getCarsData,
  } = useData({
    url: !carsUrl ? "cars?limit=300&category_id=" : `cars?${carsUrl}`,
  });
  useEffect(() => {
    getCarsData();
  }, [carsUrl]);
  return (
    <div className="all-cars">
      {loading ? (
        <div className="loading">
          Loading...
        </div>
      ) : carsData?.length ? (
        carsData?.map((item) => (
          <FilterCarsCard
            key={item?.id}
            id={item?.id}
            imgs={item?.car_images}
            brandName={item?.brand?.title}
            modelName={item?.model?.name}
            aed={item?.price_in_aed}
            usd={item?.price_in_usd}
          />
        ))
      ) : (
        <div className="empty">Data not found</div>
      )}
    </div>
  );
};

export default AllCars;
