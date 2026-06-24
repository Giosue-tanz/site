import React from 'react';
import Img1 from '../../assets/logo_rid.png';
import './NoteSmartLight1.css';

const NoteTanz = () => (
  <article className="note-smartlight1-container" itemScope itemType="http://schema.org/Article">
    <div className="note-smartlight1-img-wrapper">
      <img
        src={Img1}
        srcSet={`${Img1} 480w, ${Img1} 900w, ${Img1} 1600w`}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 90vw, 1600px"
        alt="Why Tanz Article"
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
        <h1 className="note-smartlight1-title" itemProp="headline">Why Tanz?</h1>
        <hr className="note-smartlight1-separator" />
        <span className="note-smartlight1-date" itemProp="datePublished">28/2/2024</span>
      </div>
      <div className="note-smartlight1-body-text">
        <p>
          <strong>Tanz</strong>, which in German means "dance", is the name of the visionary company led by Darius Tanz in the series <em>Salvation</em>.
        </p>
        <p>
          Despite the obvious inspiration from real-life figures and the vivid imagination of the events characterizing the series, this company has led me to think that the entrepreneurial path I am about to embark on is a fun way to leave a contribution.
        </p>
        <p>
          And so here we are, on my website: my place where I have the freedom to publish whatever I want, in the way I want. So, to anyone who will support me, well, thank you.
        </p>
      </div>
    </section>
  </article>
);

export default NoteTanz;
