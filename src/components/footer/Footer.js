import React from 'react';
import './FooterStyles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Tanz</h4>
            <ul>
              <li><Link to="/about-us" className="footer-link" role="button">about us</Link></li>
              <li><Link to="/goals" className="footer-link" role="button">our goals</Link></li>
              <li><Link to="/services" className="footer-link" role="button">our services</Link></li>
              <li><Link to="/projects" className="footer-link" role="button">current projects</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Profile</h4>
            <ul>
              <li><Link to="/works" className="footer-link" role="button">Works</Link></li>
              <li><Link to="/about" className="footer-link" role="button">about me</Link></li>
              <li><Link to="/education" className="footer-link" role="button">Education</Link></li>
              <li><Link to="/curriculum" className="footer-link" role="button">curriculum</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><Link to="/shop/bag" className="footer-link" role="button">bag</Link></li>
              <li><Link to="/shop/band" className="footer-link" role="button">band</Link></li>
              <li><Link to="/shop/shoes" className="footer-link" role="button">shoes</Link></li>
              <li><Link to="/shop/t-shirts" className="footer-link" role="button">T-shirts</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://x.com/giosue_aiello">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="https://www.linkedin.com/in/giosu%C3%A8-aiello-425474243/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;