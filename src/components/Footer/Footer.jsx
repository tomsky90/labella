import logo from "../../assets/icons/logo.webp";
import pin from "../../assets/icons/maps-pin-line-icon.webp";
import phone from "../../assets/icons/phone-line-icon.webp";
import mail from "../../assets/icons/envelope-line-icon.webp";
import instagram from "../../assets/icons/black-instagram-icon.webp";
import x from "../../assets/icons/x-social-media-black-icon.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__links-wrapper">
          <h3 className="footer__heading">Contact</h3>
          <div className="footer__link-wrapper">
            <img className="footer__link-icon" src={pin} alt="map pin" />
            <p className="footer__link">Manchester M1 LZ</p>
          </div>
          <div className="footer__link-wrapper">
            <img className="footer__link-icon" src={phone} alt="phone" />
            <a className="footer__link" href="tel:078645723">
              078645723
            </a>
          </div>
          <div className="footer__link-wrapper">
            <img className="footer__link-icon" src={mail} alt="mail" />
            <a className="footer__link" href="mailto:hi@labella.com">
              hi@labella.com
            </a>
          </div>
        </div>
        <div className="footer__links-wrapper">
          <h3 className="footer__heading">Socials</h3>
          <div className="footer__link-wrapper">
            <img
              className="footer__link-icon"
              src={instagram}
              alt="instagram"
            />
            <a className="footer__link" href="www.instagram">
              labella-instagram
            </a>
          </div>
          <div className="footer__link-wrapper">
            <img className="footer__link-icon" src={x} alt="x" />
            <a className="footer__link" href="www.x.com">
              labella-twitter
            </a>
          </div>
        </div>
        <div className="footer__links-wrapper">
          <h3 className="footer__heading">We Are Open</h3>
          <div className="footer__link-wrapper">
            <p className="footer__link">Monday - Friday: 8am - 4pm</p>
          </div>
          <div className="footer__link-wrapper">
            {" "}
            <p className="footer__link">Saturday: 8am - 12pm</p>
          </div>
        </div>
        <div className="footer__links-wrapper">
          <img className="footer__logo" src={logo} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
