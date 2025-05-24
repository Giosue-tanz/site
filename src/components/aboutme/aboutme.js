import React from 'react';
import './aboutme.css';
import ProfileImage from '../../assets/a1.jpg';

const AboutMe = () => {
  // Navigate back to the homepage or trigger CV download
  const handleHomeClick = () => {
    window.location.href = '/'; // Adjust to your homepage URL or update for CV download
  };

  // Scroll down by one viewport height
  const handleMoreClick = () => {
    window.scrollTo({
      top: window.innerHeight, // Scrolls down by 100vh
      behavior: 'smooth',
    });
  };

  return (
    <div className="profile">
      <img src={ProfileImage} alt="Profile" className="profile-image" />
      <div className="buttons">
        <div className="text-container">
          <h3 className="intro">I'm</h3>
          <h1 className="name">Giosue Aiello</h1>
        </div>
        <div className="btn-container">
          <button className="button" onClick={handleHomeClick}>
            Download CV
          </button>
          <button className="more-btn" onClick={handleMoreClick}></button>
          <h5 className="text1">Learn more</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;