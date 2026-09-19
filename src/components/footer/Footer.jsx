import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import CVLanguageModal from '../CVLanguageModal/CVLanguageModal';
import './FooterStyles.css';

const Footer = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
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
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => setIsCvModalOpen(true)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    font: 'inherit',
                    textAlign: 'left',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Download CV
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Research</h4>
            <ul>
              <li>
                <a href="https://giosue-tanz.github.io/smart-light.it/" className="footer-link" role="button" target="_blank" rel="noopener noreferrer">
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
      <CVLanguageModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </footer>
  );
};

export default Footer;