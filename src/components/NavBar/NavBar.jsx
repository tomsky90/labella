import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import menuCloseBtn from "../../assets/icons/close.png";
import menuBtn from "../../assets/icons/burger-icon.png";

const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const closeNav = () => {
    setIsNavActive(false);
  };

  const showNav = () => {
    setIsNavActive(true);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo-wrapper">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav__desktop-nav">
          <NavLink className="nav__link" to="./">
            Home
          </NavLink>
          <NavLink className="nav__link" to="./about">
            About
          </NavLink>
          <NavLink className="nav__link" to="./prices">
            Prices
          </NavLink>
          <NavLink className="nav__link" to="./contact">
            Contact
          </NavLink>
        </ul>
        <button className="nav__mobile-show-btn" onClick={showNav}>
          <img src={menuBtn} alt="" />
        </button>
        <ul
          className={isNavActive ? "nav__mobile-nav active" : "nav__mobile-nav"}
        >
          <button onClick={closeNav} className="nav__mobile-close-btn">
            <img src={menuCloseBtn} alt="menu close button" />
          </button>
          <NavLink
            onClick={closeNav}
            className="nav__link nav__link--mobile"
            to="./"
          >
            Home
          </NavLink>
          <NavLink
            onClick={closeNav}
            className="nav__link nav__link--mobile"
            to="./about"
          >
            About
          </NavLink>
          <NavLink
            onClick={closeNav}
            className="nav__link nav__link--mobile"
            to="./prices"
          >
            Prices
          </NavLink>
          <NavLink
            onClick={closeNav}
            className="nav__link nav__link--mobile"
            to="./contact"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
