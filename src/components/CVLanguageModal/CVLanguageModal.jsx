import React from 'react';
import './CVLanguageModal.css';

const CVLanguageModal = ({ isOpen, onClose }) => {
  const handleDownload = (language) => {
    let filename = '';
    let filepath = '';

    if (language === 'en') {
      filepath = '/CV_en.pdf';
      filename = 'CV_Giosue_Aiello_EN.pdf';
    } else if (language === 'it') {
      filepath = '/CV_it.pdf';
      filename = 'CV_Giosue_Aiello_IT.pdf';
    }

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = filepath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close the modal after download
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Select CV Language</h2>
        <p>Seleziona la lingua del CV</p>
        
        <div className="cv-modal-buttons">
          <button
            className="cv-modal-btn cv-modal-btn-en"
            onClick={() => handleDownload('en')}
          >
            English
          </button>
          <button
            className="cv-modal-btn cv-modal-btn-it"
            onClick={() => handleDownload('it')}
          >
            Italiano
          </button>
        </div>

        <button className="cv-modal-close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default CVLanguageModal;
