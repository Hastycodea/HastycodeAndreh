import React from "react";
import "./About.css";
import profile from "../../assets/pfpf.png";

const About = () => {
  return (
    <div className="about">
      <div className="left-about">
        <p>
          I am a software engineer and full-stack developer with expertise in
          <span>Java</span>, <span>Spring Boot</span>, <span>React</span>, and a
          strong foundation in tools like <span>Docker</span> and{" "}
          <span>MySQL</span>. With over four years of professional experience, I
          have developed innovative web-based solutions for various
          organizations, including <span>Epsilon Engineering Works</span>
          and <span>H&F Company</span>.
        </p>

        <p>
          I completed training at the Sankyana Bootcamp, where I gained hands-on
          experience in software development, focusing on building scalable
          applications using modern tools and frameworks. Throughout my journey,
          I have explored diverse technologies and tools, including{" "}
          <span>Elixir</span>,<span>Phoenix Live View</span>,{" "}
          <span>Next.js</span>, and <span>Tailwind CSS</span>.
        </p>

        <p>
          I am passionate about innovation, technical writing, and mentoring
          others. My experience includes winning multiple hackathons and startup
          competitions, authoring technical articles on Medium, and
          collaborating with teams to deliver meaningful projects.
        </p>
      </div>
      <div className="right-about">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default About;
