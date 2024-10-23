import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import setup from "../../assets/setup.jpg";
import { Link } from "react-scroll";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "51d2f1c5-d4b5-4749-b659-0ffa8991bc98");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
          <p className="name-title">Software Developer</p>
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
          <form action="" onSubmit={onSubmit}>
            <label>NAME</label>
            <input type="name" name="text" placeholder="Enter your name" />
            <label>PHONE NUMBER</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" />
            <label>EMAIL</label>
            <input type="email" name="email" placeholder="Enter your email address"/>
            <label>SUBJECT</label>
            <input type="subject" name="subject" placeholder="Enter your subject" />
            <label>MESSAGE</label>
            <textarea name="message" placeholder="Enter your message" required></textarea>
            <p>{result}</p>
            <button type="submit" className="form-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>
      <Link to="hero" duration={500} smooth={true} offset={-100}>
        <div className="scroll-up">
          <FontAwesomeIcon icon={faChevronUp} />
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </Link>
    </div>
  );
};

export default Contact;
