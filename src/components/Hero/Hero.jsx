import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faXTwitter, faWhatsapp  } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <div className="hero">
      <p className="catch-phrase">Let&apos;s build something beautiful</p>
      <h3>
        Hi , I am <span>Hastycode Andreh</span>
      </h3>
      <p className="intro">I am a</p>
      <p className="role">Software Engineer</p>
      <p className="description">
        Looking for a full-stack developer with a track record of success for
        your next project? Look no further! With 4 years of self-taught
        experience and graduation from top bootcamps Microverse and Moringa, I
        have the skills and passion to build stunning, scalable web
        applications. From small to large-scale projects, I have used React ,
        Elixir and Phoenix to create solutions that delight users and drive
        results. So why settle for less when you can have the best? Let&apos;s
        build something great together
      </p>
      <div className="icons">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <FontAwesomeIcon icon={faXTwitter} className="icon" />
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
      </div>
    </div>
  );
};

export default Hero;
