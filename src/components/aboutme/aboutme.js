import React from 'react';
import './aboutme.css';
import ProfileImage from '../../assets/a1.jpg'; 

const AboutMe = () => {
  return (
    <div className='profile'>
      <img src={ProfileImage} alt="Profile" className="profile-image" />
      <div className="buttons">
        <div className="text-container">
          <h3 className="intro">I'm</h3>
          <h1 className="name">Giosue Aiello</h1>
          <h2 className="role">Inventore</h2>
        </div>
        <div className="btn-container">
          <button className="button">Download CV</button>
          <button className="play-btn"></button>
          <h5 className="text1">Play Video</h5>
        </div>
      </div>
    </div>
  )
};

export default AboutMe;












