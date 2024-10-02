import { NavLink } from "react-router-dom";
import "./ContactsPage.scss";
import { FaLocationDot } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const ContactsPage = () => {
  const {t} = useTranslation()
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-links">
            <NavLink to={"/"}>{t("contact.link")}</NavLink>
          </div>

          <h2 className="contact-title">{t("contact.title")}</h2>
          <p className="contact-text">
          {t("contact.text-1")} <br /> {t("contact.text-2")}
          </p>

          <h2 className="contact-subtitle">{t("contact.title-1")}</h2>
          <div className="contact-media">
            <div className="contact-location">
              <FaLocationDot color="grey" fontSize={"1.3rem"} />
              <span>
                Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
              </span>
            </div>
            <div className="contact-location">
              <BiPhoneCall color="grey" fontSize={"1.3rem"} />
              <span>+971 52 7030189</span>
            </div>
            <div className="contact-location">
              <MdEmail color="grey" fontSize={"1.3rem"} />
              <span>
                <a href="mailto:@office@autozoomrental.com">
                  office@autozoomrental.com
                </a>
              </span>
            </div>
          </div>

          <hr className="contact-hr" />

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616725.355795074!2d51.723780299999966!3d33.5690702865071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6db3eeca94db%3A0x413d7a5c11a503a8!2sAuto%20Zoom%20Car%20Rental!5e0!3m2!1sru!2s!4v1725997531878!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{ border: "0", borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
