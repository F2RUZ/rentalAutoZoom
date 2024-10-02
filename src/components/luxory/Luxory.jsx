import { useTranslation } from 'react-i18next'
import './Luxory.scss'
function Luxory() {
    const {t} = useTranslation()
    return (
        <div className='luxory'>
            <div className="container ">
                <h2 className="luxory-title">{t("luxury-section.title-1")}</h2>
                <p className="luxory-descr">{t("luxury-section.des-1")}</p>
                <h2 className="luxory-title">{t("luxury-section.title-2")}</h2>
                <p className="luxory-descr">{t("luxury-section.des-2")}</p>
            </div>
        </div>
    )
}

export default Luxory