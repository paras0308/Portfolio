import React from "react";
import "../styles/Projects.css";
import chatVideo from '../assets/images/chat2.mp4';
import UMSImg from '../assets/images/UMS.png';
import phonepeImg from '../assets/images/phonepe.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>

      <div className="project-card">
        <h2 className="project-title">Hotel Booking Chatbot – AWS-Powered Conversational AI</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            Developed an AI-powered chatbot for seamless hotel booking using Amazon Lex, handling real-time user interactions. Integrated Amazon Bedrock for advanced AI capabilities, enhancing natural language understanding (NLU) and user experience. Stored and managed structured booking data using AWS S3 and DynamoDB, ensuring high availability and fault tolerance. Implemented AWS Lambda to automate backend workflows, improving response time by 40% and reducing server costs. Designed a scalable and serverless architecture, capable of handling thousands of user queries with minimal latency
            </p>
            <p><strong>Tech Stack:</strong> Amazon Lex, AWS S3, Amazon Bedrock, Lambda, DynamoDB, AWS Lambda, serverless architecture, and fault tolerance</p>
            <div className="project-buttons">
              <a href=" " target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href=" " target="_blank" rel="noopener noreferrer" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
          <video controls width="100%" className="rounded shadow">
        <source src={chatVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">University Management System</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            Developed a responsive and interactive front-end application for a University Management System, designed to streamline the management of teacher and student data. The system allows users to input new records and perform edits on existing teacher and student profiles. The intuitive user interface ensures ease of navigation and efficient data entry, enhancing the overall user experience.
            </p>
            <p><strong>Tech Stack:</strong> React.js, HTML5, CSS3, JavaScript, Tailwind, Git/GitHub for version control.</p>
            <div className="project-buttons">
              <a href=" " target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={UMSImg} alt="UMS" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">PhonePe Clone</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            Built a fully responsive front-end clone of the popular digital payment platform PhonePe, replicating its core user interface and essential features. The application simulates digital wallet functionality, allowing users to experience the look and feel of a real-time transaction environment. The project focuses on UI/UX, navigation flow, and modular component design for an app-like experience.
            </p>
            <p><strong>Tech Stack:</strong> React.js, HTML5, CSS3, JavaScript, Tailwind CSS, Git/GitHub for version control.</p>
            <div className="project-buttons">
              <a href=" " target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={phonepeImg} alt="phonepe " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
