import Banner from "../../components/Banner/Banner";
import alice from "../../assets/images/About-page-image.png";
import bride from "../../assets/images/bride.png";

const About = () => {
  return (
    <div>
      <Banner heading={"About Us"} subheading={"Bit More About Us"} />
      <section className="about">
        <div className="about__welcom-section-wrapper">
          <div className="about__welcom-img-wrapper">
            <img src={alice} alt="Owner" className="about__welcome-img" />
          </div>
          <div className="about__welcom-text-wrapper">
            <h2 className="about__welcom-heading">Welcome To LaBella</h2>

            <p className="about__text">
              We are based right here in the vibrant heart of Manchester!
              I&apos;m Alice, the proud founder of our little slice of beauty
              heaven. For over a decade now, we&apos;ve been on a mission to
              bring the best in beauty to this wonderful city. At La Bella,
              we&apos;re all about making you feel like the best version of
              yourself. Whether it&apos;s a stylish new haircut, a relaxing
              facial, or a dazzling manicure, our talented team is here to make
              your beauty dreams come true. So, come on in and experience the La
              Bella magic for yourself. We can&apos;t wait to meet you and show
              you why we&apos;ve been Manchester&apos;s go-to salon for over a
              decade!
            </p>
          </div>
        </div>
      </section>
      <section className="about-training">
        <h2 className="about-training__heading">Training</h2>
        <div className="about-training__wrapper">
          <div className="about-training__text-wrapper">
            <h3 className="about-training__subheading">Our Commitment</h3>
            <p>
              At La Bella Salon, we understand the importance of looking your
              best on those special occasions. That&apos;s why we&apos;re
              dedicated to staying up-to-date with the latest trends and
              continuously expanding our skills. By prioritizing ongoing
              training and education, we ensure that we can always offer you the
              latest techniques and styles to make you look and feel amazing for
              any event.
            </p>
          </div>
          <div className="about-training__img-wrapper">
            <img
              className="about-training__img"
              src={bride}
              alt="bride hair style"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
