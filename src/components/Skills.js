import React from "react";
import "../styles/Skills.css";
import javaImg from '../assets/images/java.jpg';
import cppImg from '../assets/images/cpp.png';
import htmlImg from '../assets/images/html.png';
import cssImg from '../assets/images/css.png';
import jsImg from '../assets/images/JavaScript.png';
import reactImg from '../assets/images/react.png';
import nodejsImg from '../assets/images/nodejs.jpg';
import expressImg from '../assets/images/express.png';
import phpImg from '../assets/images/php.svg';
import mysqlImg from '../assets/images/mysql.png';
import mongodbImg from '../assets/images/mongodb.png';
import pythonImg from '../assets/images/python.jpg';
import cImg from '../assets/images/c.png';
import awsImg from '../assets/images/aws.png';
import azureImg from '../assets/images/azure.png';
import dockerImg from '../assets/images/docker.webp';


const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">Skills & Technologies</h1>

      <div className="skills-section">
        <div className="skill-category">
          <h2>Programming Languages</h2>
          <div className="skill-icons">
            <img src={javaImg} alt="Java" />
            <img src={cppImg} alt="C++" />
            <img src={pythonImg} alt="Python" />
            <img src={cImg} alt="C" />
          </div>
        </div>

        <div className="skill-category">
          <h2>Frontend</h2>
          <div className="skill-icons">
            <img src={htmlImg} alt="HTML" />
            <img src={cssImg} alt="CSS" />
            <img src={jsImg} alt="JavaScript" />
            <img src={reactImg} alt="React" />
          </div>
        </div>

        <div className="skill-category">
          <h2>Backend</h2>
          <div className="skill-icons">
            <img src={nodejsImg} alt="Node.js" />
            <img src={expressImg} alt="Express.js" />
            <img src={phpImg} alt="PHP" />
          </div>
        </div>

        <div className="skill-category">
          <h2>Databases</h2>
          <div className="skill-icons">
            <img src={mysqlImg} alt="MySQL" />
            <img src={mongodbImg} alt="MongoDB" />
          </div>
        </div>
        <div className="skill-category">
          <h2>Platform</h2>
          <div className="skill-icons">
            <img src={awsImg} alt="AWS" />
            <img src={azureImg} alt="Azure" />
            <img src={dockerImg} alt="Docker" />
          </div>
      </div>
    </div>
  </div>
  );
};

export default Skills;
