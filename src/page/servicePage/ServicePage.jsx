
import { Link } from "react-router-dom"
import { cardData } from "../../constants/serviceData"
import "./ServicePage.scss"
import { useTranslation } from "react-i18next"
const ServicePage = () => {
  const { t } = useTranslation()
  const language = localStorage.getItem("i18nextLng")
  return (
    <div className="servicePage " style={{ paddingTop: "50px" }}>
      <div className="container servicePageItem" >

        <h2 className="servicePageItem-title" >
          {t("service.title")}
        </h2>

        <div className="servicePageItem-card">
          {language == "en" ? cardData?.en?.map(c => (
            <div className="servicePageItem-card-elem" key={c.id}>

              <img src={c.img} alt="serviceCardImg" />
              <h2 className="servicePage-card-item-title">
                {c.title}
              </h2>
              <p className="servicePage-card-item-descr">
                {c.descr}
              </p>

              <Link to={`/serviceinfoPage/${c.id}`} style={{ display: 'flex', alignItems: 'center', gap: "10px", width: 'max-content' }} className="linkBtn">
                <span className="learn-more">Learn more</span>
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
              </Link>
            </div>)) : cardData?.ru?.map(c => (
              <div className="servicePageItem-card-elem" key={c.id}>

              <img src={c.img} alt="serviceCardImg" />
              <h2 className="servicePage-card-item-title">
                {c.title}
              </h2>
              <p className="servicePage-card-item-descr">
                {c.descr}
              </p>

              <Link to={`/serviceinfoPage/${c.id}`} style={{ display: 'flex', alignItems: 'center', gap: "10px", width: 'max-content' }} className="linkBtn">
                <span className="learn-more">{t('service.learn-more')}</span>
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
              </Link>
            </div>
            ))}

        </div>
      </div>
    </div >
  )
}

export default ServicePage