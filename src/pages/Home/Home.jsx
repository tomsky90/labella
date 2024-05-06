import { Link } from "react-router-dom";
import heroImg from "../../assets/images/woman-684686_1280.png";
import razor from "../../assets/icons/razor.png";
import aboutImg from "../../assets/images/aboutImg.jpg";

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
    </div>
  );
};

export default Home;
