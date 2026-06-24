import React from 'react';
import './Abhome.css';
import ProfileImage from '../../assets/aaa.png';
import { Link } from 'react-router-dom';

const Abhome = () => {
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('learn-more-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-me">
      <div className="title-container">
        <div className="background-title">ABOUT</div>
        <div className="foreground-title">ABOUT ME</div>
      </div>
      <div className="contact-wrapper1">
        <div className="img-container">
          <img src={ProfileImage} alt="Profile" className="img-profile" loading="lazy" decoding="async" />
        </div>
        <div className="text-container main-left">
          <h2>Undergraduate student in  physics</h2>
          <p>
            Physics undergraduate at the University of Pisa with a rigorous academic foundation and a steadfast commitment to analytical excellence. My academic journey is driven by a profound interest in understanding the fundamental laws of nature and their subsequent
            application in cutting-edge technologies.
          </p>
          <div className="personal-info">
            <div className="column">
              <p><strong>Name:</strong> Giosuè Aiello</p>
              <p><strong>Class:</strong> 2004</p>
              <p><strong>Degree:</strong> Physics student</p>
            </div>
            <div className="column">
              <p><strong>University:</strong> University of Pisa</p>
              <p><strong>Email:</strong> giosue.tanz@gmail.com</p>
            </div>
          </div>
          <div className="button-container">
            <Link to="/contact" className="about-me-btn hire-me">
              Contact Me
            </Link>
            <Link
              to="/curriculum"
              className="about-me-btn learn-more"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abhome;