import React, { useEffect, useState } from "react";
import "./CarsPage.scss";
import useData from "../../hooks/getData";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import Loader from "../../components/loader/Loader";
import { LuFilter } from "react-icons/lu";
import { GrFormPreviousLink } from "react-icons/gr";

const CarsPage = ({setCarsUrl}) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedModels, setSelectedModels] = useState("");
  const [openFilter, setOpenFilter] = useState(false)
  const { data: categoriesData, getData: getCategoriesData, loadingCategory } = useData({
    url: "categories",
  });
  const { data: brandsData, getData: getBrandsData, loadingBrand } = useData({
    url: "brands",
  });
  const { data: modelsData, getData: getModelsData, loadingModel } = useData({
    url: !selectedBrands ? "models" : `models?${selectedBrands.join("&")}`,
  });
  const navigate = useNavigate()
  
  useEffect(() => {
    getCategoriesData();
    getBrandsData();
    getModelsData();
  }, []);

  useEffect(() => {
    getModelsData();
  }, [selectedBrands]);


  function getCarsQuery(){
    const brandQuery = selectedBrands.join("&");
    const categoryQuery = selectedCategories.join("&");
    const modelQuery = selectedModels ? `model_id=${selectedModels}` : "";

    let query = "";
    if (brandQuery && categoryQuery && modelQuery) {
      query = `${categoryQuery}&${brandQuery}&${modelQuery}`;
    } else if (brandQuery && categoryQuery) {
      query = `${categoryQuery}&${brandQuery}`;
    } else if (brandQuery) {
      query = brandQuery;
    } else if (categoryQuery) {
      query = categoryQuery;
    } else if (modelQuery) {
      query = modelQuery;
    }

    return query;
  };

  const handleCheckboxChange = (id) => {
    setSelectedBrands((prevSelected) => {
      if (prevSelected.includes(`brand_id=${id}`)) {
        return prevSelected.filter((brandId) => brandId !== `brand_id=${id}`);
      } else {
        return [...prevSelected, `brand_id=${id}`];
      }
    });
  };
  const handleCheckboxChangeCategories = (id) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(`category_id=${id}`)) {
        return prevSelected.filter(
          (categoryId) => categoryId !== `category_id=${id}`
        );
      } else {
        return [...prevSelected, `category_id=${id}`];
      }
    });
  };

  const handleModelChange = (event) => {
    setSelectedModels(event.target.value);
  };
  const emptySelect = () => {
    setSelectedBrands([])
    setSelectedCategories([])
    setSelectedModels-''
  }
  const applyFilters = (e) => {
    e.preventDefault();
    const query = getCarsQuery();
    setCarsUrl(query)
    navigate("/cars")
    emptySelect()
    setOpenFilter(false)
  };
  
  
  if(loadingBrand || loadingCategory || loadingModel){
    return <Loader />
  }

  return (
    <main>
      <section className="cars">
        <div className={`filter-menu-button ${openFilter ? "filter-menu-button-active" : ''}`} onClick={() => setOpenFilter(true)}><LuFilter style={{color: "#fff", fontSize: "20px"}}/></div>
        <aside className={`filter ${openFilter ? "filter-active" : ''}`}>
        <div className={`filter-menu-close-button ${openFilter ? "filter-menu-close-button-active" : ''}`} onClick={() => setOpenFilter(false)}><GrFormPreviousLink style={{color: "#fff", fontSize: "30px"}}/></div>
          <div className="filter-container">
            <h3 className="filter-title">Filter by</h3>
            <form className="filter-part-car" onSubmit={applyFilters}>
              <div className="filter-to-offer">
                <h4 className="part-title">Car type</h4>
                {categoriesData?.map((item) => (
                  <label className="filter-labels" key={item?.id}>
                    <input
                      className="filter-inputs"
                      type="checkbox"
                      value={item.id}
                      checked={selectedCategories.includes(
                        `category_id=${item.id}`
                      )}
                      onChange={() => handleCheckboxChangeCategories(item.id)}
                    />
                    {item?.name_en}
                  </label>
                ))}
              </div>
              <div className="filter-to-offer">
                <h4 className="part-title">Brand</h4>
                {brandsData?.map((item) => (
                  <label className="filter-labels" key={item?.id}>
                    <input
                      className="filter-inputs"
                      type="checkbox"
                      value={item.id}
                      checked={selectedBrands.includes(`brand_id=${item.id}`)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    {item?.title}
                  </label>
                ))}
              </div>
              <div className="filter-to-offer">
                <h4 className="part-title">Model</h4>
                <select
                  className="filter-to-select"
                  value={selectedModels}
                  onChange={handleModelChange}
                >
                  <option value="" hidden>
                    Select Model
                  </option>
                  {modelsData?.map((item) => (
                    <option
                      className="select-option-filter"
                      value={item?.id}
                      key={item?.id}
                    >
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-buttons">
                <button className="reset-button" >Reset</button>
                <button type="submit" className="apply-button" >
                  Apply Filter
                </button>
              </div>
            </form>
          </div>
        </aside>
        <div className={`filter-cars ${openFilter ? "active-filter-cars" : ''}`}>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default CarsPage;
