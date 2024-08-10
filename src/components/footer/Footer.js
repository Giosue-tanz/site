import React from 'react';
import './FooterStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Tanz</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Profile</h4>
            <ul>
              <li><a href="#">about me</a></li>
              <li><a href="#">school</a></li>
              <li><a href="#">goals</a></li>
              <li><a href="#">curriculum</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">T-shirts</a></li>
              <li><a href="#">bag</a></li>
              <li><a href="#">shoes</a></li>
              <li><a href="#">band</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/GiosueAiello.tanz"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com/giosue_aiello"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/giosue.aie/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/in/giosu%C3%A8-aiello-425474243/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
