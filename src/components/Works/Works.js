import React from 'react';
import './Works.css';
import VideoClip from '../../assets/video1.mp4'; 

const Works = () => {
    return (
        <div className='works-section'>
            <video src={VideoClip} autoPlay loop muted />
            <h1 className='title-work'>Works</h1>
            <div className="title-line-w"></div>
        </div>
    );
}

export default Works;
