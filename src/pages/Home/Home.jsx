import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroImg from "../../assets/images/woman-684686_1280.png";
import razor from "../../assets/icons/razor.png";
import aboutImg from "../../assets/images/aboutImg.jpg";
import badge from "../../assets/icons/excellence-honor-icon.png";
import handShake from "../../assets/icons/partner-handshake-icon.png";
import comb from "../../assets/icons/hair-salon-icon.png";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import slider4 from "../../assets/images/slider4.jpg";
import slider5 from "../../assets/images/slider5.jpg";
import slider6 from "../../assets/images/slider6.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-wrapper">
          <div className="home__hero-text-wrapper">
            <h1 className="home__hero-heading">You are worth it</h1>
            <h2 className="home__hero-sub-heading">Best salon in Manchester</h2>
            <Link to="./contact" className="home__hero-link">
              Book Now
            </Link>
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
      <section className="slider">
        <h2 className="slider__heading">Our Recent Work</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider6} alt="" />
          </SwiperSlide>
          {/* Add more slides */}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;
