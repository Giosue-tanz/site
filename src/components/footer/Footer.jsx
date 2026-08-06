import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './FooterStyles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Profile</h4>
            <ul>
              <li><Link to="/notes" className="footer-link" role="button">Notes</Link></li>
              <li><Link to="/works" className="footer-link" role="button">Works</Link></li>
              <li><Link to="/curriculum" className="footer-link" role="button">About Me</Link></li>
              <li>
                <a
                  href="/main.pdf"
                  className="footer-link"
                  role="button"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Research</h4>
            <ul>
              <li>
                <a href="https://www.smart-light.it/" className="footer-link" role="button" target="_blank" rel="noopener noreferrer">
                  Smart Light
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="https://areariservata.subito.it/annunci" className="footer-link" role="button" target="_blank" rel="noopener noreferrer">Subito</a></li>
              <li><a href="https://www.ebay.it/usr/giosue-tanz" className="footer-link" role="button" target="_blank" rel="noopener noreferrer">Ebay</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow me</h4>
            <div className="social-links">

              <a href="https://x.com/giosue_aiello" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

              <a href="https://github.com/Giosue-tanz" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;