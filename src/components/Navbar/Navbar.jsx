import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
  }

  return (
    <nav className={`${sticky ? "dark-nav" : ""}`}>
      <div className={mobileMenu ? "" : 'overlay-active'}></div>
      <h3> 
        <Link to="hero" smooth={true} offset={-100} duration={500}>
          HA
        </Link>
      </h3>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <div className="mobile-title">
          <div className="top-logo">
            <h3>
              <Link to="hero" smooth={true} offset={-100} duration={500}>
                HA
              </Link>
            </h3>
            <FontAwesomeIcon icon={faXmark} className="mobile-x" onClick={hideMobileMenu}  />
          </div>
          <p>Let&apos;s build something together</p>
        </div>
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
        <Link to="hero" smooth={true} offset={-100} duration={500}>
          <li>
            <p>Webinar Talk</p>
          </li>
        </Link>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className="menu-icon"
        onClick={toggleMobileMenu}
      />
    </nav>
  );
};

export default Navbar;
