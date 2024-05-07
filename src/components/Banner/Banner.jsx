import bgcImage from "../../assets/images/beauty-salon-4043096_1280.jpg";

// eslint-disable-next-line react/prop-types
const Banner = ({ heading, subheading }) => {
  return (
    <section className="banner">
      <div className="banner__text-wrapper">
        <h1 className="banner__heading">{heading}</h1>
        <h2 className="banner__subheading">{subheading}</h2>
      </div>
      <div className="banner__img-wrapper">
        <div className="banner__overlay"></div>
        <img className="banner__bgc-image" src={bgcImage} alt="salon" />
      </div>
    </section>
  );
};

export default Banner;
