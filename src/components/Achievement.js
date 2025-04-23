import React from "react";
import "../styles/Achievement.css";
import prize from '../assets/Achievements/prize.jpg';
import reel from '../assets/Achievements/reel.jpg';
import nss from '../assets/Achievements/nss.jpg';

const Achievement = () => {
  return (
    <div className="achievements-container">
      <h1 className="achievements-heading">Achievements</h1>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src={nss} alt="CodeChef Streak" />
        </div>
        <div className="achievement-text">
          <h2>120+ hours in NSS</h2>
          <p>
          Successfully completed 120+ hours of active volunteer service under the National Service Scheme (NSS), demonstrating a strong commitment to social responsibility and community development. Engaged in various outreach programs, awareness drives, and service activities aimed at promoting social welfare and civic responsibility among the youth.
          </p>
        </div>
      </div>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src={prize} alt="prize" />
        </div>
        <div className="achievement-text">
          <h2>Rocket Competition</h2>
          <p>
          Secured first place in the Water Rocket Competition, showcasing innovation, precision, and strong engineering skills. The competition involved designing and launching a water-propelled rocket using principles of aerodynamics and fluid mechanics. I focused on optimizing thrust, stability, and flight trajectory to achieve maximum height and distance.
          </p>
        </div>
      </div>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src={reel} alt="1st Prize in Reel Competition" />
        </div>
        <div className="achievement-text">
          <h2>1st Prize in Reel Competition</h2>
          <p>
          Won first place in a Reel Making Competition, recognized for creativity, storytelling, and impactful visual editing. The reel showcased a unique concept with engaging content, smooth transitions, and captivating music synchronization. The project demonstrated a strong sense of visual aesthetics, timing, and audience engagement—key elements of successful digital content creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
