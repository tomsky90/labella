import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";

const NavBar = () => {
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
      </div>
    </nav>
  );
};

export default NavBar;
