import "./Navbar.css";
import logo from "../../assets/images/Bowen_logo.png";
import menu_icon from "../../assets/images/menu-icon.png";
import { useEffect, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  useEffect(() => {
    addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky && "dark-nav"}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul className={`${mobileMenu ? null : "hide-mobile-menu"}`}>
        <li className="hover">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover">
          <Link to="program" smooth={true} offset={-240} duration={500}>
            Programme
          </Link>
        </li>
        <li className="hover">
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li className="hover">
          <Link to="campus" smooth={true} offset={-250} duration={500}>
            Campus
          </Link>
        </li>
        <li className="hover">
          <Link to="testimonials" smooth={true} offset={-250} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-250} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="menu-icon"
        className={"menu-icon"}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
