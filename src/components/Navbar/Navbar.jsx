import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const hideMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`${sticky ? "dark-nav" : ""}`}>
      <div className={mobileMenu ? "overlay-active" : ""}></div>
      <div className={`mobile-nav ${sticky ? "dark-nav" : ""}`}>
        <h3 className="logo-title">
          <Link to="hero" smooth={true} offset={-100} duration={500}>
            HA
          </Link>
        </h3>
        <FontAwesomeIcon
          icon={faBars}
          className="menu-icon"
          onClick={toggleMobileMenu}
        />
      </div>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <div className="mobile-title">
          <div className="top-logo">
            <h3>
              <Link to="hero" smooth={true} offset={-100} duration={500}>
                HA
              </Link>
            </h3>
            <FontAwesomeIcon
              icon={faXmark}
              className="mobile-x"
              onClick={hideMobileMenu}
            />
          </div>
          <p>Let&apos;s build something together</p>
        </div>
        <div>
          <Link to="hero" smooth={true} offset={-100} duration={500}>
            <li>
              <p>Home</p>
            </li>
          </Link>
          <Link to="about" smooth={true} offset={-210} duration={500}>
            <li>
              <p>About</p>
            </li>
          </Link>
          <Link to="skills" smooth={true} offset={-200} duration={500}>
            <li>
              <p>Skills</p>
            </li>
          </Link>
          <Link to="projects" smooth={true} offset={-220} duration={500}>
            <li>
              <p>Projects</p>
            </li>
          </Link>
          <Link to="blogs" smooth={true} offset={-190} duration={500}>
            <li>
              <p>Blogs</p>
            </li>
          </Link>
          <Link to="contact" smooth={true} offset={-190} duration={500}>
            <li>
              <p>Contact</p>
            </li>
          </Link>
        </div>
        <p className="connect">Let&apos;s connect</p>
        <div className="icons">
        <a href="https://www.linkedin.com/in/andreh-andere/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://github.com/Hastycodea" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://x.com/hastycode_ke" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} className="icon" />
        </a>
        <a href="tel:+254710594179" target="_blank">
          <FontAwesomeIcon icon={faPhone} className="icon" />
        </a>
        <a href="https://wa.me/254710594179" target="_blank" >
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
