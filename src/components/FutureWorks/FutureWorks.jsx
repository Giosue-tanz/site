import React, { useEffect, useRef } from "react";
import "./FutureWorks.css";

import VideoClip from '../../assets/VideoC5.mp4';

// Componente singolo FutureWorkItem
const FutureWorkItem = ({ title, description, bg, video, children, className, id, onClick }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play error:", e));
    }
  }, [video]);

  return (
  <div
    className={`futurework-banner ${className || ''}`}
    id={id}
    style={{
      ...(bg && !video ? { backgroundImage: `url(${bg})` } : {}),
      ...(onClick ? { cursor: 'pointer' } : {})
    }}
    onClick={onClick}
  >
    {video && (
      <video ref={videoRef} className="futurework-video-bg" autoPlay loop muted playsInline preload="auto">
        <source src={video} type="video/mp4" />
      </video>
    )}
    <div className={`futurework-banner-overlay ${bg || video ? 'center-bg' : ''}`}>
      <h2 className={`futurework-title ${bg || video ? 'dark-title' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className="futurework-desc">
          {description}
        </p>
      )}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
      </div>
    </div>
  </div>
  );
};

// Esempio di utilizzo di FutureWorkItem
const FutureWorks = () => (
  <>
    <FutureWorkItem
      title="Smart Light"
      video={VideoClip}
      id="smart-light-section"
      className="smart-light-section-new"
      onClick={() => {
        window.open('https://www.smart-light.it/', '_blank');
      }}
    >
      <div className="sl-premium-content">
        <p className="sl-description">
          A proprietary neural system that learns and continuously adapts to revolutionize
          urban mobility through Deep Reinforcement Learning.
        </p>
      </div>
      <div className="futurework-buttons">
        <button
          className="sl-business-btn"
          onClick={() => {
            window.open('https://www.smart-light.it/', '_blank');
          }}
        >
          <span>EXPLORE</span>
          <svg className="sl-btn-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </FutureWorkItem>
  </>
);

export default FutureWorks;

