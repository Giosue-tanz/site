import sml2 from '../../assets/sml22.jpeg';
import './NoteSmartLight1.css';

const NoteSmartLight2EN = () => (
  <article className="note-smartlight1-container" itemScope itemType="http://schema.org/Article">
    <div className="note-smartlight1-img-wrapper">
      <img
        src={sml2}
        srcSet={`${sml2} 480w, ${sml2} 900w, ${sml2} 1600w`}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 90vw, 1600px"
        alt="Update from Smart Light"
        className="note-smartlight1-img"
        loading="eager"
        decoding="async"
        width={900}
        height={600}
        itemProp="image"
      />
      <div className="note-smartlight1-img-overlay">
        {/* Empty overlay, no title/date here */}
      </div>
    </div>
    <section className="note-smartlight1-content" itemProp="articleBody">
      <div className="note-smartlight1-header-text">
        <h1 className="note-smartlight1-title" itemProp="headline">Update from Smart Light</h1>
        <hr className="note-smartlight1-separator" />
        <span className="note-smartlight1-date" itemProp="datePublished">16/03/2026</span>
      </div>
      <div className="note-smartlight1-body-text">
        <p>
          On March 4th, the results presentation phase of the "Innovation for Sustainable Mobility" initiative took place as part of the Bright 2025 event. This was a significant milestone for the Smart Light project, providing an opportunity to showcase the latest progress in our artificial intelligence development.
The meeting was also a valuable occasion to acknowledge the partners who have supported us over these months, including the Contamination Lab and Marcello Marzano, and to engage with Alessandro Fiorini, director of PISAMO, with whom we hope to continue a productive collaboration for mutual benefit.
This represents an important update: the Smart Light team continues its work optimizing intelligent traffic lights, with the goal of reducing congestion and contributing to increasingly sustainable mobility solutions.
        </p>
        
      </div>
    </section>
  </article>
);

export default NoteSmartLight2EN;
