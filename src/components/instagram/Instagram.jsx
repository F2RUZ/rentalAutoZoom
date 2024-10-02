import { useTranslation } from "react-i18next"
import { instagram } from "../../constants/instagram"
import './Instagram.scss'
import InstagramItem from "./instagramItem/InstagramItem"
import Location from "./location/Location";
import City from "./city/City";
function Instagram() {
    const {t} = useTranslation()
    return (
        <div>
            <div className="instagram">
                <div className="container">
                    <h2 className="instagram-title">{t("instagram")}</h2>
                    <div className="instagram-item">
                        {instagram.map(c => (
                            <InstagramItem key={c.id} {...c} />
                        ))}
                    </div>

                    <div className='address'>
                        <div>
                            <h2>{t("location")}</h2>
                            <Location />
                        </div>
                        <div>
                            <h2 className="city">{t("city")}</h2>
                            <City />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram