import React from "react";
import "./About.css";
import profile from "../../assets/pfl.png"

const About = () => {
  return (
    <div className="about">
      <div className="left-about">
        <p>
          I am a software engineer and Full stack developer with
          <span> Elixir</span>, <span>Phoenix Live View</span>, and
          <span> React JS</span> experience. I am also a Technical Writer.
        </p>

        <p>
          Over the last four years, I have gained considerable professional
          experience in the technology industry. I am a graduate of Microverse,
          a remote international learning institution where I learned through
          pair programming and project building. We worked on many different
          technologies like
          <span> HTML</span>, <span>CSS</span>, <span>JS</span>,{" "}
          <span>React</span>,<span>PostgreSQL</span>, <span>Ruby on Rails</span>
          , and collaborated with developers across the globe. Additionally, I
          have completed a software development program at Moringa School, which
          is the top programming school in Kenya.
        </p>

        <p>
          I then started working on my own projects and exploring new
          technologies like <span>Elixir</span>, <span>Phoenix</span>,{" "}
          <span>Next JS</span>,<span>Tailwind CSS</span>, <span>Docker</span>,
          and <span>GraphQL</span>.
        </p>

        <p>
          In the past year, I have been part of a team that won 2 Hackathons and
          5 more startup competitions this year. We have won a total of 12
          competitions.
        </p>

        <p>
          I have worked at Uamuzi, Amaris Digital Solutions, GS1 Kenya, and
          Podii Consultants as a full stack developer building web-based
          solutions for real-world projects.
        </p>

        <p>
          I am currently at AMI KENYA, and I am the founder of a tech
          consultancy company, Pyraus Group Limited.
        </p>

        <p>
          Through my experiences, I discovered my passion for teaching and
          mentoring others. Currently, I write technical articles on Medium.
        </p>

        <p>
          I have written a hex package that allows <span>Elixir</span>{" "}
          developers in Kenya to integrate payments into their applications. You
          can check it out at{" "}
          <a href="https://hex.pm/packages/chpter">Chpter Hex Doc</a>.
        </p>
      </div>
      <div className="right-about">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default About;
