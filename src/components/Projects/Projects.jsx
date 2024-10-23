import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import sample from "../../assets/sample.png";

const Projects = () => {
  return (
    <div className="projects">
      <p className="desc">
        These are some of my best projects , here I used React JS for my
        frontend , Elixir and Phoenix Live View for my backend and Tailwind CSS
        for Styling .
      </p>
      <div className="selection">
        <div className="all">
          <FontAwesomeIcon icon={faStar} className="star" />
          <p>All Projects</p>
          <FontAwesomeIcon icon={faStar} className="star" />
        </div>
        <div className="all">
          <FontAwesomeIcon icon={faStar} className="star" />
          <p>Phoenix / Elixir Projects</p>
          <FontAwesomeIcon icon={faStar} className="star" />
        </div>
        <div className="all">
          <FontAwesomeIcon icon={faStar} className="star" />
          <p>React / Javascript Projects</p>
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      {/* <div className="samples">
          <img src={sample} alt="" />
          <img src={sample} alt="" />
          <img src={sample} alt="" />
          <img src={sample} alt="" />
          <img src={sample} alt="" />
          <img src={sample} alt="" />
      </div> */}
      <div className="samples">
        <div className="sample">
          <img src={sample} alt="" />
          <div className="caption">
            <h3>Engage Pro Employee Management System</h3>
            <p>React JS, Tailwind CSS</p>
            <button>More Info</button>
          </div>
        </div>
        <div className="sample">
          <img src={sample} alt="" />
          <div className="caption">
            <h3>Engage Pro Employee Management System</h3>
            <p>React JS, Tailwind CSS</p>
            <button>More Info</button>
          </div>
        </div>
        <div className="sample">
          <img src={sample} alt="" />
          <div className="caption">
            <h3>Engage Pro Employee Management System</h3>
            <p>React JS, Tailwind CSS</p>
            <button>More Info</button>
          </div>
        </div>
        <div className="sample">
          <img src={sample} alt="" />
          <div className="caption">
            <h3>Engage Pro Employee Management System</h3>
            <p>React JS, Tailwind CSS</p>
            <button>More Info</button>
          </div>
        </div>
        <div className="sample">
          <img src={sample} alt="" />
          <div className="caption">
            <h3>Engage Pro Employee Management System</h3>
            <p>React JS, Tailwind CSS</p>
            <button>More Info</button>
          </div>
        </div>
        <div className="sample">
          <img src={sample} alt="" />
          <div className="caption">
            <h3>Engage Pro Employee Management System</h3>
            <p>React JS, Tailwind CSS</p>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
