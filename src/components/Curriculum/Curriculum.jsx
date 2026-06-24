import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Curriculum.css';
import ProfilePic from '../../assets/a1.jpg';
import BackgroundImg from '../../assets/cur2.png';

const Curriculum = () => {
    return (
        <div className='curriculum-section'>
            <div className="video-container">
                <img src={BackgroundImg} alt="Background" className="video-bg" />
                <h1 className="title-curriculum">About Me</h1>
                <div className="title-line-w"></div>
            </div>
            <div className="curriculum-content">
                <div className="curriculum-columns">
                    <aside className="sidebar">
                        {/* Barre decorative blu/white emulate CSS padding/borders if needed */}

                        <div className="sidebar-top">
                            <h1 className="cv-name">Giosù Aiello</h1>
                            <img src={ProfilePic} alt="Giosue Aiello" className="profile-pic" />
                        </div>

                        <div className="sidebar-block">
                            <div className="sidebar-heading-wrapper">
                                <h3 className="sidebar-heading">Professional Skills</h3>
                                <div className="heading-line"></div>
                            </div>
                            <ul>
                                <li>Teamwork</li>
                                <li>Effective Communication</li>
                                <li>Project Design and Presentation</li>
                                <li>Scientific and Technical Writing</li>
                                <li>Data Analysis with Python and MATLAB</li>
                                <li>Commitment to Stakeholder Satisfaction</li>
                                <li>Programming: Python, JavaScript, C++, LaTeX</li>
                                <li>And more...</li>
                            </ul>
                        </div>

                        <div className="sidebar-block">
                            <div className="sidebar-heading-wrapper">
                                <h3 className="sidebar-heading">Languages</h3>
                                <div className="heading-line"></div>
                            </div>
                            <p className="detail-row"><strong>Italian</strong> (Native)</p>
                            <p className="detail-row"><strong>English</strong> (B2)</p>
                        </div>

                        <div className="sidebar-block">
                            <div className="sidebar-heading-wrapper">
                                <h3 className="sidebar-heading">Personal Details</h3>
                                <div className="heading-line"></div>
                            </div>
                            <p className="detail-row">Citizenship: <strong>Italian</strong></p>
                            <p className="detail-row">Residence: <strong>Pisa, Italy</strong></p>
                        </div>

                        <div className="sidebar-block contact-block">
                            <div className="sidebar-heading-wrapper">
                                <h3 className="sidebar-heading">Contact</h3>
                                <div className="heading-line"></div>
                            </div>
                            <p className="contact-line">✉️ <a href="mailto:giosue.tanz@gmail.com">giosue.tanz@gmail.com</a></p>
                            <p className="contact-line">🌐 <a href="https://giosueaiello.com">giosueaiello.com</a></p>
                            <p className="contact-line">🔗 <a href="https://github.com/Giosue-tanz">github.com/Giosue-tanz</a></p>
                        </div>
                    </aside>

                    <main className="main">
                        <section className="cv-profile">
                            <h2 className="section-title">Profile</h2>
                            <p>
                                Physics undergraduate at the University of Pisa with a rigorous academic foundation and a steadfast commitment to analytical excellence. My academic journey is driven by a profound interest in understanding the fundamental laws of nature and their subsequent application in cutting-edge technologies.
                            </p>
                            <p>
                                I have developed a solid background in both theoretical and experimental physics, with a specific focus on quantum systems and computational modeling. My approach integrates mathematical rigor with proactive problem-solving, aimed at contributing to innovative research.
                            </p>
                            <p>
                                Beyond the core curriculum, I am actively engaged in research projects involving deep neural networks.
                            </p>
                        </section>

                        <section className="experience">
                            <h2 className="section-title">Experience</h2>

                            <div className="experience-item">
                                <div className="item-header">
                                    <h3><span className="role-title">CEO & CTO</span> – <a href="https://www.smart-light.it/" className="link-blue"><em>SmartLight</em></a></h3>
                                    <span className="dates">2025–Present</span>
                                </div>
                                <div className="item-content">
                                    <p className="small-desc">Leading the SmartLight initiative, an AI-driven project focused on optimising urban traffic flow in Pisa. The adaptive management system leverages Reinforcement Learning and computer vision to control traffic signals in real-time, reducing congestion and energy consumption. Project <strong>winner of the sustainable mobility idea contest</strong> promoted by the <a href="https://www.unipi.it/news/due-idee-per-una-mobilita-sostenibile-e-inclusiva-premiati-i-vincitori-del-contest-promosso-dal-contamination-lab/" className="link-blue">University of Pisa's Contamination Lab</a>.</p>
                                </div>
                            </div>

                            <div className="experience-division"></div>

                            <div className="experience-item">
                                <div className="item-header">
                                    <h3><span className="role-title">Author of University Study Notes</span></h3>
                                    <span className="dates">2024–Present</span>
                                </div>
                                <div className="item-content">
                                    <p className="small-desc">Author and editor of comprehensive university study notes and academic resources for core Physics and Mathematics courses, typeset in LaTeX to facilitate conceptual mastery.</p>
                                </div>
                            </div>
                        </section>

                        <section className="education">
                            <h2 className="section-title">Education</h2>

                            <div className="education-item">
                                <div className="item-header">
                                    <h3><span className="role-title">Undergraduate Student in Physics</span> – <em>University of Pisa</em></h3>
                                    <span className="dates">2023–Present</span>
                                </div>
                            </div>

                            <div className="experience-division"></div>

                            <div className="education-item">
                                <div className="item-header">
                                    <h3><span className="role-title">Scientific High School Diploma (Applied Sciences Option)</span> – <em>Liceo Scientifico Enrico Boggio Lera, Catania</em></h3>
                                    <span className="dates">2017–2022</span>
                                </div>
                            </div>
                        </section>

                        <div className="cv-separator"></div>

                        <section className="cv-download-section">
                            <a href="/CV_en.pdf" download="CV_Giosue_Aiello_EN.pdf" className="cv-download-btn">
                                <span>Download CV (English)</span>
                            </a>
                            <a href="/CV_it.pdf" download="CV_Giosue_Aiello_IT.pdf" className="cv-download-btn cv-download-btn-it">
                                <span>Scarica CV (Italiano)</span>
                            </a>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;