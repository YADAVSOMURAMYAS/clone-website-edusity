import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu from "../../assets/menu-icon.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = () => {
setMobileMenu(!mobileMenu);
}
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu? "show-mobile-menu" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-260} duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="contact" className="btn">Contact us</Link>
        </li>
      </ul>
      <img src={menu} alt=""  className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
