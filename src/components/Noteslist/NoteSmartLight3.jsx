import smartlightLogo from '../../assets/smartlight-logo2.jpg';
import './NoteSmartLight1.css';
import { useNavigate } from 'react-router-dom';

const NoteSmartLight3 = () => {
  const navigate = useNavigate();
  return (
  <article className="note-smartlight1-container" itemScope itemType="http://schema.org/Article">
    <div className="note-smartlight1-img-wrapper" style={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={smartlightLogo}
        srcSet={`${smartlightLogo} 480w, ${smartlightLogo} 900w, ${smartlightLogo} 1600w`}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 90vw, 1600px"
        alt="Smart Light — A Chapter Closes"
        className="note-smartlight1-img"
        style={{ objectFit: 'contain', backgroundColor: '#000', padding: '32px', boxSizing: 'border-box' }}
        loading="eager"
        decoding="async"
        width={900}
        height={600}
        itemProp="image"
      />
      <div className="note-smartlight1-img-overlay">
        {/* Empty overlay */}
      </div>
    </div>
    <section className="note-smartlight1-content" itemProp="articleBody">
      <div className="note-smartlight1-header-text">
        <h1 className="note-smartlight1-title" itemProp="headline">Smart Light — A Chapter Closes</h1>
        <hr className="note-smartlight1-separator" />
        <span className="note-smartlight1-date" itemProp="datePublished">09/09/2026</span>
      </div>
      <div className="note-smartlight1-body-text">
        <p>
          Every journey has its turning points. Smart Light was one of them — perhaps the most significant one so far.
        </p>
        <p>
          The project was born from a simple but urgent observation: traffic light systems in cities like Pisa are still managed with logic from decades ago, while the technology to change this exists today. The team designed a system based on computer vision, reinforcement learning and IoT sensors, capable of adapting traffic light cycles in real time — reducing waiting times, cutting emissions, and improving safety for pedestrians.
        </p>
        <p>
          We won a call for sustainable mobility. We presented at Bright 2025. We met with PISAMO, the Contamination Lab, and people who believed in the idea. It was real.
        </p>
        <p>
          And yet, today the team has decided to put the project on hold. Not because the idea wasn't valid — it still is. But because life moves forward: the path ahead leads toward a master's degree, new challenges, and new directions that require full commitment.
        </p>
        <p>
          Smart Light remains here, fully documented. The technical plan, the architecture, the research — it's all preserved.
          You can view the full source code and documentation on the <a href="https://github.com/Giosue-tanz/Smart-Light-pisa" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 700, textDecoration: 'underline' }}>GitHub repository</a>, and explore the dedicated <a href="https://giosue-tanz.github.io/smart-light.it/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 700, textDecoration: 'underline' }}>project website</a>.
        </p>
        <p>
          If you're someone who sees potential in this project and wants to carry it forward, I'm open to a conversation. Don't hesitate to get in touch.
        </p>
          <p>
            <span
              onClick={() => navigate('/contact')}
              style={{ color: '#fff', fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}
            >
              Contact
            </span>
          </p>

      </div>
    </section>
  </article>
  );
};

export default NoteSmartLight3;
