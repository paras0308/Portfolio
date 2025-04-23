import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>

      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <a href={`${process.env.PUBLIC_URL}/ParasCV.pdf`} download className="download-btn">
          Download CV
        </a>
      </div>
      <div className="resume-section">
        <div className="resume-card">
          <h3>2021 - 2025</h3>
          <p><strong>B.Tech in Computer Science & Engineering</strong></p>
          <p>Lovely Professional University, Phagwara</p>
          <p>CGPA: 6.7/10</p>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Skills</h2>
        <div className="resume-card">
          <ul>
            <li><strong>Languages:</strong> Java, C++, Python, JavaScript, HTML, CSS, PHP</li>
            <li><strong>Frameworks:</strong> React, Express</li>
            <li><strong>Databases:</strong> MongoDB, MySQL</li>
            <li><strong>Tools & Platforms:</strong> AWS, Azure, Docker, Node.js, Git, GitHub, Figma</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Projects</h2>
        <div className="resume-card">
          <ul>
            <li><strong>Hotel Booking Chatbot – </strong> AWS-Powered Conversational AI</li>
            <li><strong>University Management System</strong></li>
            <li><strong>PhonePe Clone</strong> </li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Certifications</h2>
        <div className="resume-card">
          <ul>
            <li>Internet of Things(IOT) - NPTEL</li>
            <li>Capstone Training Project - Expertrons</li>
            <li>Full-Stack Web Developement Internship - Skolar</li>
            <li>Capstone and Practice Exam (AZ-500) - Coursera</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Competitive Programming</h2>
        <div className="resume-card">
          <p>Active on <strong>LeetCode</strong>, <strong>GeeksforGeeks Practice</strong>, and <strong>CodeChef</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;