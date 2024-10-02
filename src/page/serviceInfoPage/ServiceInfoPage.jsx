import { Link, useParams } from "react-router-dom";
import { cardData } from "../../constants/serviceData";
import "./ServiceInfoPage.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ServiceInfoPage() {
    const {t, i18n} = useTranslation()
  const [data, setData] = useState();
  const { id } = useParams();
  let language = localStorage.getItem("i18nextLng");

  useEffect(() => {
    setData(
      language == "en"
        ? cardData?.en?.find((c) => c.id === Number(id))
        : cardData?.ru?.find((c) => c.id === Number(id))
    );
  }, [i18n.language]);

  return (
    <div className="serviceInfoPage">
      <div className="container">
      <h2 className="servicePage-card-item-title">
        {t("service.info-title")}
      </h2>
      <div className="servicePage-card-item">
        {data?.cardItems?.map((c, index) => (
          <div key={index} className="servicePage-card-item-parent">
            <div className="servicePage-card-item-info">
              <img
                src={c.img}
                alt="photo"
                className="servicePage-card-item-info-img"
              />
              <div className="servicePage-card-item-info-infor">
                <h2>{c.title}</h2>
                <div className="servicePage-card-item-info-infor-counts">
                  <p className="servicePage-card-item-info-infor-counts-count">
                    {c.countPerson}
                  </p>
                  <p>{c.person}</p>
                </div>
                <p className="servicePage-card-item-info-infor-descr1">
                  {c.descr}
                </p>
                <p className="servicePage-card-item-info-infor-descr2">
                  {c.cardInfo}
                </p>
                <div>
                  {c.info.map((i, index) => (
                    <div
                      className="servicePage-card-item-info-infor-carsInfo"
                      key={index}
                    >
                      <img src={c.icon} alt="photo" />
                      {i}
                    </div>
                  ))}
                </div>
                <Link  to="tel:971527030189"><div className="serviceInfoPage-btn">BOOK NOW</div></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
   
}

export default ServiceInfoPage;
