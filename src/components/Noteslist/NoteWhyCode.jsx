import React from 'react';
import Img1 from '../../assets/full-stack.png';
import './NoteSmartLight1.css';

const NoteWhyCode = () => (
    <article className="note-smartlight1-container" itemScope itemType="http://schema.org/Article">
        <div className="note-smartlight1-img-wrapper">
            <img
                src={Img1}
                srcSet={`${Img1} 480w, ${Img1} 900w, ${Img1} 1600w`}
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 90vw, 1600px"
                alt="Perché programmare oggi?"
                className="note-smartlight1-img"
                loading="eager"
                decoding="async"
                width={900}
                height={600}
                itemProp="image"
                style={{ objectPosition: 'center' }}
            />
            <div className="note-smartlight1-img-overlay">
                {/* Empty overlay */}
            </div>
        </div>
        <section className="note-smartlight1-content" itemProp="articleBody">
            <div className="note-smartlight1-header-text">
                <h1 className="note-smartlight1-title" itemProp="headline">Perché programmare oggi?</h1>
                <hr className="note-smartlight1-separator" />
                <span className="note-smartlight1-date" itemProp="datePublished">15/01/2026</span>
            </div>
            <div className="note-smartlight1-body-text">
                <p>
                    Durante gli anni del liceo, spesso mi chiedevo quale fosse il senso di studiare il latino. Mi sembrava una pratica fine a se stessa, un dispendio di energie mentali senza uno scopo pratico. Oggi, con l'avanzamento dell'<strong>Intelligenza Artificiale</strong>, ci troviamo di fronte a una domanda simile: <em>perché imparare a programmare, se basta una descrizione testuale per generare codice?</em>
                </p>
                <p>
                    La risposta risiede nella <strong>forma mentis</strong>. Proprio come il latino, la programmazione non è solo un insieme di regole, ma una disciplina che plasma il pensiero. Insegna il <em>problem solving</em>, la logica rigorosa e la tenacia necessaria per affrontare compiti complessi, entusiasmanti e talvolta "rognosi".
                </p>
                <p>
                    Per i clienti, affidarsi a chi possiede una conoscenza profonda di ciò che sta "sotto il cofano" fa la differenza. Un vero <strong>Full Stack Developer</strong> non si limita a generare codice, ma offre una sicurezza superiore contro le minacce informatiche e una personalizzazione estrema. Solo chi conosce a fondo gli stili e le tecnologie può andare oltre l'automazione, garantendo soluzioni non solo funzionanti, ma solide, uniche e su misura.
                </p>
            </div>
        </section>
    </article>
);

export default NoteWhyCode;
