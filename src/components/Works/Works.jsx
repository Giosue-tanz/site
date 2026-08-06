import React, { useEffect, useRef } from 'react';
import './Works.css';
const VideoClip = '/video/video1.mp4';
import FutureWorks from '../FutureWorks/FutureWorks';

const Works = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Video play error:", e));
        }
    }, []);
    return (
        <>
            <div className='works-section'>
                <video ref={videoRef} src={VideoClip} autoPlay loop muted playsInline preload="auto">
                    Your browser does not support the video tag.
                </video>
                <h1 className='title-work'>Works</h1>
                <div className="title-line-w"></div>
                <div
                    className="sl-bottom-arrows"
                    onClick={() => {
                        const target = document.getElementById('smart-light-section');
                        if (target) {
                            window.scrollTo({
                                top: target.offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    }}
                >
                    <div className="sl-chevrons-vertical">
                        <svg className="sl-scroll-chevron" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L12 10L22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg className="sl-scroll-chevron" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L12 10L22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <FutureWorks />
        </>
    );
}

export default Works;
