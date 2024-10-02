import bottomImg from '../../../assets/youtubeImg.webp'
import { Link } from 'react-router-dom'
import linkLogo from '../../../assets/icons/next-icon.svg'
import { useTranslation } from 'react-i18next'
import './YoutubeBottom.scss'
function YoutubeBottom() {
    const { t } = useTranslation()
    return (
        <div className="youtube-bottom ">
            <img src={bottomImg} alt="" className="img" />
            <div className="youtube-bottom-info">
                <h2>{t("youtube.title-2")}</h2>
                <p>{t("youtube.des-2")}</p>
                <Link to={'/cars'} className="youtube-link">
                    <span>{t("youtube.see-all")}</span>
                    <img src={linkLogo} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default YoutubeBottom