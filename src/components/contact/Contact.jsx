import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
const VideoClip = '/video/video.mp4';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx0jAelJTMZb8h4jJMLWXSV9txwRw-Z2doP6uyJLbgtgpT3_BVK2ZcAhuOqmNjRvHfeHA/exec';

const Contact = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play error:", e));
    }
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING...');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setStatus('MESSAGE SENT');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('ERROR SENDING');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact">
      <div className="c-section">
        <video
          ref={videoRef}
          src={VideoClip}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <h1 className="title-c">Contact</h1>
        <div className="title-line-c"></div>
      </div>

      <div className="contact-form-container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-desc">
              Fill out the form or use your email service, I will reply as soon as possible.
            </p>

            <div className="contact-details-list">
              <div className="detail-item-new">
                <strong>EMAIL</strong>
                <span><a href="mailto:giosue.tanz@gmail.com">giosue.tanz@gmail.com</a></span>
              </div>
              <div className="detail-item-new">
                <strong>LOCATION</strong>
                <span>Pisa, Italy</span>
              </div>
            </div>

            <div className="social-section">
              <hr className="social-divider top-divider" />
              <div className="social-links-wrapper">
                <ul className="social-media-list">

                  <li>
                    <a href="https://x.com/giosue_aiello" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/Giosue-tanz" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="social-divider bottom-divider" />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>FIRST NAME</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Your first name"
                />
              </div>
              <div className="form-group">
                <label>LAST NAME</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="form-group">
              <label>EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </div>
            <div className="form-group">
              <label>MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="contact-submit-btn">
              {status || 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;