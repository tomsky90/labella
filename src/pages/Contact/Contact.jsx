import Banner from "../../components/Banner/Banner";
import bannerImg from "../../assets/images/wedding-6539887_1280.jpg";
import pin from "../../assets/icons/maps-pin-line-icon.png";
import phone from "../../assets/icons/phone-line-icon.png";
import mail from "../../assets/icons/envelope-line-icon.png";

const Contact = () => {
  return (
    <div>
      <Banner
        heading={"Contact"}
        subheading={"Come & Find Us"}
        img={bannerImg}
      />
      <section className="contact">
        <div className="contact__map-wrapper">
          <iframe
            className="contact__map"
            title="Google Map"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.745116344609!2d-2.2367841847992817!3d53.47769997999268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1e6f4f53c3f%3A0xc001aa83b620c90!2sManchester%20M1!5e0!3m2!1sen!2suk!4v1620672014935!5m2!1sen!2suk"
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
        <div className="contact__text-wrapper">
          <h2 className="contact__heading">Find Us</h2>
          <p className="contact__text">
            We are conveniently located in the heart of Manchester, making us
            easily accessible for all your beauty needs. Situated in a prime
            location, our salon is simple to find, ensuring that you can enjoy
            our services without any hassle. Whether you&apos;re a local
            resident or visiting the city, you&apos;ll find us conveniently
            situated for your convenience.
          </p>
          <h3 className="contact__subheading">Contact</h3>
          <div className="contact__link-wrapper">
            <img className="contact__link-icon" src={pin} alt="" />
            <p className="contact__link"> Manchester M1 LZ</p>
          </div>
          <div className="contact__link-wrapper">
            <a className="contact__link" href="tel:078645723">
              <img className="contact__link-icon" src={phone} alt="phone" />
              078645723
            </a>
          </div>
          <div className="contact__link-wrapper">
            <a className="contact__link" href="mailto:hi@labella.com">
              <img className="contact__link-icon" src={mail} alt="mail" />
              hi@labella.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
