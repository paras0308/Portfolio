import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">Designed and Developed by Paras Dhiman</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/_.paras_dhiman._" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/paras0308" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/paras-dhiman1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copyright">© {year} PD. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
