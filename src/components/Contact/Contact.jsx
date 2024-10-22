import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import setup from "../../assets/setup.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <p>
        Reach out to me for any freelancing opportunities , contract work or
        just to say hi ! , I also offer mentorship to aspiring developers .
      </p>
      <div className="contact-section">
        <div className="left-contact">
          <img src={setup} alt="" />
          <p className="name">Hastycode Andreh</p>
          <p className="">Software Developer</p>
          <p className="ideas">
            Do you have any ideas you would love to bring to life , whether it
            is a landing page to drive more sales or a mega system that will
            make you the next Steve Jobs or Elon Musk , Reach out , I would love
            to walk this journey with you
          </p>
          <p className="connect">CONNECT WITH ME</p>
          <div className="socials">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <FontAwesomeIcon icon={faXTwitter} className="icon" />
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </div>
        </div>
        <div className="right-contact">
            <form action="">
                <label>NAME</label>
                <input type="name" />
                <label>PHONE NUMBER</label>
                <input type="phone" />
                <label>EMAIL</label>
                <input type="email" />
                <label>SUBJECT</label>
                <input type="subject" />
                <label>MESSAGE</label>
                <textarea name="message" id="" rows='14'></textarea>
            </form>
            <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
