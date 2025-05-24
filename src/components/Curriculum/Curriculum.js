import React from 'react';
import './Curriculum.css';
import VideoClip from '../../assets/video1.mp4'; 

const Curriculum = () => {
    return (
        <div className='video-container curriculum-section'>
            <video src={VideoClip} autoPlay loop muted />
            <h1 className='title title-curriculum'>Curriculum</h1>
            <div className="title-line title-line-c"></div>

            <div className="curriculum-content">
                <section className="education">
                    <h2>Istruzione</h2>
                    <div className="education-item">
                        <h3>Studente di Fisica</h3>
                        <p>Università di Pisa - 2023 - Presente</p>
                        <p>Frequentando il corso di laurea in Fisica con focus su fisica applicata.</p>
                    </div>
                    <div className="education-item">
                        <h3>Diploma di Scuola Superiore</h3>
                        <p>Liceo Scientifico - [Nome Liceo], Pisa - 2019-2023</p>
                        <p>Votazione: [Inserisci votazione, es. 100/100]</p>
                    </div>
                </section>
                <section className="experience">
                    <h2>Esperienze</h2>
                    <div className="experience-item">
                        <h3>Assistente di Ricerca</h3>
                        <p>Università di Pisa - [Date, es. Giugno 2024 - Presente]</p>
                        <ul>
                            <li>Condotto esperimenti in fisica applicata</li>
                            <li>Analizzato dati sperimentali usando [specifica strumenti/software]</li>
                            <li>Collaborato alla stesura di report scientifici</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Tutor di Matematica e Fisica</h3>
                        <p>Privato - [Date, es. Settembre 2022 - Maggio 2023]</p>
                        <ul>
                            <li>Insegnato concetti di base a studenti delle superiori</li>
                            <li>Preparato materiali didattici personalizzati</li>
                        </ul>
                    </div>
                </section>
                <section className="skills">
                    <h2>Competenze</h2>
                    <ul>
                        <li>Ricerca in fisica applicata</li>
                        <li>Analisi dati con [es. Python, MATLAB]</li>
                        <li>Programmazione: [es. Python, C++, JavaScript]</li>
                        <li>Lingue: Italiano (madrelingua), Inglese (B2)</li>
                        <li>Scrittura scientifica</li>
                    </ul>
                </section>
                <section className="projects">
                    <h2>Progetti</h2>
                    <div className="project-item">
                        <h3>[Nome Progetto]</h3>
                        <p>[Breve descrizione, es. Studio sulla dinamica dei fluidi usando simulazioni numeriche] - [Date]</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Curriculum;