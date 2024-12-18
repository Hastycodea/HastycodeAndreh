import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="hero">
      <p className="catch-phrase">Let&apos;s build something beautiful</p>
      <h3>
        Hi , I am <span>Hastycode Andreh</span>
      </h3>
      <p className="intro">I am a</p>

      <ReactTyped
        strings={[
          "Full Stack Developer",
          "React Js Developer",
          "Java Developer",
          "Python Developer",
          "Technical Writer",
        ]}
        typeSpeed={150}
        backSpeed={100}
        showCursor={false}
        loop
        className="role"
      />

      {/* <p className="role">Software Engineer</p> */}
      <p className="description">With over 4 years of hands-on experience, I specialize in crafting efficient and innovative software solutions. My expertise spans backend development with Java and Spring Boot, scalable database management using MySQL, and containerization with Docker. I also excel in designing REST APIs and building microservices to meet diverse application needs.

Why settle for less when you can have a developer who combines technical acumen, creativity, and a commitment to excellence? Let&apos;s collaborate and build something exceptional.</p>
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
    </div>
  );
};

export default Hero;
