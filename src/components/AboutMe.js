import React from "react";
import { Link } from "react-router-dom";
import MyImage from "../assets/images/my.jpg";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img
          src={MyImage}
          alt="About Me"
          className="about-image"
        />
      </div>
      <div className="about-right">
        <h1>About Me</h1>
        <p>
        Hi, I’m Paras Dhiman, a B.Tech student at Lovely Professional University, with a strong passion for IoT, Cloud Computing, and Embedded Systems.
        </p>
        <p>
        I specialize in building intelligent and efficient tech solutions using real-time data processing, sensor integration, and cloud platforms like AWS and Azure. With a foundation in both software and hardware, I’m focused on continuously improving my skills in emerging technologies and creating impactful innovations.
        </p>
        <div className="about-buttons">
          <Link to="/resume" className="about-btn">Resume</Link>
          <Link to="/projects" className="about-btn">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
