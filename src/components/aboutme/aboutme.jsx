import React, { useState } from 'react';
import './aboutme.css';
import CVLanguageModal from '../CVLanguageModal/CVLanguageModal';
import ProfileImage from '../../assets/a1.jpg';

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Scroll lento ma non troppo (900ms)
  const handleMoreClick = () => {
    const isMobile = window.innerWidth <= 940;
    const extraOffset = isMobile ? 150 : 0; // Su mobile scrolla più in basso
    const targetY = window.innerHeight + extraOffset;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 800; // ms
    let startTime = null;

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startY + distance * progress);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="profile">
      <img
        src={ProfileImage}
        srcSet={`${ProfileImage} 320w, ${ProfileImage} 640w, ${ProfileImage} 1280w`}
        sizes="(max-width: 600px) 80vw, (max-width: 900px) 40vw, 320px"
        alt="Profile"
        className="profile-image"
        loading="lazy"
        decoding="async"
        width={320}
        height={320}
      />
      <div className="buttons">
        <div className="text-container">
          <h3 className="intro">I'm</h3>
          <h1 className="name">Giosue Aiello</h1>
        </div>
        <div className="btn-container">
          <button
            className="button"
            onClick={() => setIsModalOpen(true)}
            tabIndex={0}
            style={{ border: '1px solid #fff', color: 'inherit' }}
            onMouseOver={e => e.currentTarget.style.color = '#000'}
            onMouseOut={e => e.currentTarget.style.color = 'inherit'}
          >
            Download CV
          </button>
          <button className="more-btn" onClick={handleMoreClick}></button>
          <h5 className="text1">Learn more</h5>
        </div>
        <CVLanguageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default AboutMe;