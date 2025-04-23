import React from "react";
import "../styles/Certifications.css";
import iot from "../assets/certifications/iot.jpg";
import expertrons from "../assets/certifications/expertrons.jpg";
import skolar from "../assets/certifications/skolar.png";
import AZ104 from "../assets/certifications/AZ-104.jpg";
import AZ500 from "../assets/certifications/AZ-500.jpg";

const Certifications = () => {
  const certificates = [
    {
      image: iot,
      name: "Internet of Things(IOT) - NPTEL",
    },
    {
      image: expertrons,
      name: "Capstone Training Project - Expertrons",
    },
    {
      image: skolar,
      name: "Full-Stack Web Developement Internship - Skolar",
    },
    {
      image: AZ500,
      name: "Capstone and Practice Exam (AZ-500) - Coursera",
    },
    {
      image: AZ104,
      name: "AZ-104: Networking, Monitoring, and Backup Strategies - Coursera",
    },
  ];

  return (
    <div className="certifications-container">
      <h1 className="certifications-heading">Certifications</h1>
      {certificates.map((cert, index) => (
        <div className="cert-card" key={index}>
          <div className="cert-image">
            <img src={cert.image} alt={`Certificate ${index + 1}`} />
          </div>
          <div className="cert-name">
            <h2>{cert.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
