import { Link } from "react-router-dom";
import heroImg from "../../assets/images/woman-684686_1280.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
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
      </div>
    </div>
  );
};

export default Home;
