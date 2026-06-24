import React from "react";
import { motion } from "framer-motion";
import "./FutureWorks.css";
import Img1 from '../../assets/topografia2.jpg';

import VideoClip from '../../assets/VideoC5.mp4';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom easeOut
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Componente singolo FutureWorkItem
const FutureWorkItem = ({ title, description, bg, video, children, className, id, onClick }) => (
  <motion.div
    className={`futurework-banner ${className || ''}`}
    id={id}
    style={{
      ...(bg && !video ? { backgroundImage: `url(${bg})` } : {}),
      ...(onClick ? { cursor: 'pointer' } : {})
    }}
    onClick={onClick}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-10%" }}
  >
    {video && (
      <video className="futurework-video-bg" autoPlay loop muted playsInline preload="auto" poster={bg}>
        <source src={video} type="video/mp4" />
      </video>
    )}
    <div className={`futurework-banner-overlay ${bg || video ? 'center-bg' : ''}`}>
      <motion.h2 className={`futurework-title ${bg || video ? 'dark-title' : ''}`} variants={itemVariants}>
        {title}
      </motion.h2>
      {description && (
        <motion.p className="futurework-desc" variants={itemVariants}>
          {description}
        </motion.p>
      )}
      <motion.div variants={itemVariants} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
      </motion.div>
    </div>
  </motion.div>
);

// Esempio di utilizzo di FutureWorkItem
const FutureWorks = () => (
  <>
    <FutureWorkItem
      title="Smart Light"
      video={VideoClip}
      bg={Img1}
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

