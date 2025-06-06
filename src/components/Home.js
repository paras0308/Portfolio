import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import HomeImg from '../assets/images/home1.png';
import bgimg from '../assets/images/bg.jpg';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const roles = ['Cloud Enginner ☁️💻', 'Problem Solver 🧠', 'Tech Enthusiast 🚀'];
  
  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1));
      
      setTypingSpeed(isDeleting ? 30 : 150);
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <div className="home-container">
      <img
      src={bgimg}
      height="100%"
      width="100%"

      style={{position :"absolute", opacity:"3%", overflow:"hidden"}}

      
      />
      <div className="home-left">
        <h1>Hi there,<br />I am <span className="highlight">Paras Dhiman</span></h1>
        <div className="dynamic-text">
          <span className="typing">{text}</span>
          <span className="cursor">|</span>
        </div>
      </div>
      <div className="home-right">
        <img
          src={HomeImg}
          alt="Paras Dhiman"
          className="home-image floating circle"
        />
      </div>
    </div>
  );
};

export default Home;
