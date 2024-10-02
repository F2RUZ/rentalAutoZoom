import { faq } from "../../constants/faq"
import FaqAccardion from "./faqAccardion/FaqAccardion"
import './Faq.scss'
import { useTranslation } from "react-i18next"

function Faq() {
    const {i18n} = useTranslation()
    return (
        <section className="faq-wrapper">
            <div className="container">
            <div className="faqInfo">
                <h2 className="faq-title">FAQ</h2>

                { i18n.language == "en" ? faq?.en?.map(c => (
                    <FaqAccardion key={c.id} {...c} />
                )) : faq?.ru?.map(c => (
                    <FaqAccardion key={c.id} {...c} />
                ))
                }

            </div>
        </div>
        </section>
    )
}

export default Faq