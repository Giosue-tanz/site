import topografia1 from '../../assets/note_smart_light.jpg';
import './NoteSmartLight1.css';

const NoteSmartLight1 = () => (
  <article className="note-smartlight1-container" itemScope itemType="http://schema.org/Article">
    <div className="note-smartlight1-img-wrapper">
      <img
        src={topografia1}
        srcSet={`${topografia1} 480w, ${topografia1} 900w, ${topografia1} 1600w`}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 90vw, 1600px"
        alt="SmartLight for Pisa"
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
        <h1 className="note-smartlight1-title" itemProp="headline">SmartLight for Pisa</h1>
        <hr className="note-smartlight1-separator" />
        <span className="note-smartlight1-date" itemProp="datePublished">29/09/2025</span>
      </div>
      <div className="note-smartlight1-body-text">
        <p>
          The Smart Light project starts by solving a concrete problem: traffic light management. Their lack of optimization is a waste in terms of both economic and environmental resources. It is therefore with great joy that I announce today's victory: the <a href="https://www.unipi.it/news/due-idee-per-una-mobilita-sostenibile-e-inclusiva-premiati-i-vincitori-del-contest-promosso-dal-contamination-lab/" target="_blank" rel="noreferrer">Call</a> for sustainable mobility won today has filled us with enthusiasm and we still hope that initiatives and greater investments will come to the sector.
        </p>
        <p>
          I sincerely thank the commission for the recognition, and all the people who supported me: my family, my friends, and in particular <strong>Ettore Ulivieri</strong>, without whom this result would not have been possible.
        </p>
        <p>
          It's time to play!
        </p>
      </div>
    </section>
  </article>
);

export default NoteSmartLight1;
