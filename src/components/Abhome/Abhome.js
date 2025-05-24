import React from 'react';
import './Abhome.css'; 
import ProfileImage from '../../assets/a3.png'; 
import { Link } from 'react-router-dom'; // Add this import

const Abhome = () => {
    return (
        <div className="about-me">
            <div className="title-container">
                <div className="background-title">ABOUT</div>
                <div className="foreground-title">ABOUT ME</div>
            </div>
            <div className="contact-wrapper1">
                <div className="img-container">
                    <img src={ProfileImage} alt="Profile" className="img-profile"/>
                </div>
                <div className="text-container">
                    <h2>Researcher in Applied Physic</h2>
                    <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor</p>
                    
                    <div className="personal-info">
                        <div className="column">
                            <p><strong>Name:</strong> Giosuè Aiello</p>
                            <p><strong>Birthday:</strong> 4 / 11 / 2004</p>
                            <p><strong>Address:</strong> Pisa, Italy</p>
                        </div>
                        <div className="column">
                            <p><strong>Degree:</strong> Physics student</p>
                            <p><strong>University:</strong> University of Pisa</p>
                            <p><strong>Email:</strong> giosue.tanz@gmail.com </p>
                        </div>
                    </div>

                    <div className="button-container">
                        <Link to="/contact" className="about-me-btn hire-me">
                            Contact Me
                        </Link>
                        <Link to="/learn-more" className="about-me-btn learn-more">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abhome;