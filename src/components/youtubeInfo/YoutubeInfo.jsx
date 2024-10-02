import { Link } from "react-router-dom"
import './YoutubeInfo.scss'
import linkLogo from '../../assets/icons/next-icon.svg'
import { useTranslation } from "react-i18next"
function YoutubeInfo() {
    const {t} = useTranslation()
    return (
        <div>
            <div className="youtube">
                <div className="youtube-video">
                    <iframe width="835" height="560" src="https://www.youtube.com/embed/6Bcg46rxqAE" title="Auto Zoom Car Rental" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  ></iframe>
                </div>
                <div className="youtube-info">
                    <h2>{t("youtube.title")}</h2>
                    <p>{t("youtube.des")}</p>
                    <Link to={'/cars'} className="youtube-link">
                        <span>{t("youtube.all-cars")}</span>
                        <img src={linkLogo} alt="" />
                    </Link>
                </div>

            </div>
           
        </div>
    )
}

export default YoutubeInfo