import { Link } from "react-router-dom";
import heroImg from "../../assets/images/woman-684686_1280.png";
import razor from "../../assets/icons/razor.png";
import aboutImg from "../../assets/images/aboutImg.jpg";
import badge from "../../assets/icons/excellence-honor-icon.png";
import handShake from "../../assets/icons/partner-handshake-icon.png";
import comb from "../../assets/icons/hair-salon-icon.png";
import alice from "../../assets/images/alice.png";
import jenny from "../../assets/images/Jenny.png";
import betty from "../../assets/images/Betty.png";

const Home = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-wrapper">
          <div className="home__hero-text-wrapper">
            <h1 className="home__hero-heading">You are worth it</h1>
            <h2 className="home__hero-sub-heading">Best salon in Manchester</h2>
            <Link className="home__hero-link">Book Now</Link>
          </div>
          <div className="home__hero-img-wrapper">
            <img className="home__hero-img" src={heroImg} alt="smiling women" />
          </div>
        </div>
      </section>
      <section className="home-about">
        <div className="home-about__wrapper">
          <div className="home-about__tile">
            <div className="home-about__icon-wrapper">
              <img src={razor} alt="razor" />
            </div>
            <div className="home-about__text-wrapper">
              <h2 className="home-about__heading">About Us</h2>
              <p>
                Welcome to La Bella Salon, where beauty and relaxation
                intertwine seamlessly. Our expert team of stylists and beauty
                professionals is dedicated to providing personalized services to
                enhance your natural beauty and leave you feeling rejuvenated.
                Step into our luxurious oasis and experience the perfect blend
                of pampering and sophistication.
              </p>
            </div>
          </div>
          <div className="home-about__tile">
            <div className="home-about__img-wrapper">
              <div className="home-about__img-wrapper">
                <img className="home-about__img" src={aboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-choose-us">
        <h2 className="home-choose-us__heading">Why Choose Us</h2>
        <div className="home-choose-us__wrapper">
          <div className="home-choose-us__tile">
            <div className="home-choose-us__icon-wrapper">
              <img src={badge} alt="badge" />
            </div>
            <h3 className="home-choose-us__tile-heading"> Experience</h3>
            <p className="home-choose-us__tile-text">
              We have served our customers for over 10 years, with great
              results. At La Bella Salon, our passion for beauty shines through
              in every client interaction, ensuring a memorable experience that
              leaves you feeling confident and radiant.
            </p>
          </div>
          <div className="home-choose-us__tile">
            <div className="home-choose-us__icon-wrapper">
              <img src={handShake} alt="badge" />
            </div>
            <h3 className="home-choose-us__tile-heading"> Trust</h3>
            <p className="home-choose-us__tile-text">
              We are proud to have earned the trust of hundreds of satisfied
              customers who continue to choose La Bella Salon for their beauty
              needs time and time again. Our dedication to excellence and
              commitment to customer satisfaction are reflected in the loyalty
              of our clients, who trust us to consistently deliver exceptional
              service and stunning results.
            </p>
          </div>
          <div className="home-choose-us__tile">
            <div className="home-choose-us__icon-wrapper">
              <img src={comb} alt="badge" />
            </div>
            <h3 className="home-choose-us__tile-heading"> Knowledge</h3>
            <p className="home-choose-us__tile-text">
              At La Bella Salon, our team is made up of experienced and skilled
              professionals. We`&apos`re dedicated to learning and staying
              updated on the latest trends in the beauty industry. This means
              you can trust us to provide you with the best service possible,
              using the most current techniques and knowledge.
            </p>
          </div>
        </div>
      </section>
      <section className="home-team">
        <h2 className="home-team__heading">Our Team</h2>
        <div className="home-team__wrapper">
          <div className="home-team__card">
            <div className="home-team__img-wrapper">
              <img src={alice} alt="alice-owner" className="home-team__img" />
            </div>
            <h3>Alice</h3>
            <p>
              Job Title: Owner / Senior Stylist Specialist: Restyling &
              Colouring
            </p>
          </div>
          <div className="home-team__card">
            <div className="home-team__img-wrapper">
              <img src={jenny} alt="alice-owner" className="home-team__img" />
            </div>
            <h3>Jenny</h3>
            <p>
              Job Title: Receptionist / Senior Stylist Specialist: Restyling &
              Colouring
            </p>
          </div>
          <div className="home-team__card">
            <div className="home-team__img-wrapper">
              <img src={betty} alt="alice-owner" className="home-team__img" />
            </div>
            <h3>Betty</h3>
            <p>Job Title: Junior Stylist Specialist: Restyling & Colouring</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
