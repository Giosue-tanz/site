import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './FullStackPage.css';

const FullStackPage = () => {
    const contactSectionRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToContact = () => {
        contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');
        const message = formData.get('message');

        const subjectLine = `New Project Inquiry: ${service}`;
        const bodyContent = `Name: ${name}\nEmail: ${email}\nService Interested: ${service}\n\nMessage:\n${message}`;

        window.location.href = `mailto:giosue.tanz@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    };

    return (
        <div className="fs-page">
            <div className="fs-hero-section">
                <motion.div
                    className="fs-hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeInUp}>
                        Full Stack <span className="text-gradient">Developer</span>
                    </motion.h1>
                    <motion.p className="fs-hero-desc" variants={fadeInUp}>
                        Shaping your vision into digital reality.
                    </motion.p>
                    <motion.button
                        className="fs-cta-btn"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToContact}
                    >
                        Start a Project
                    </motion.button>
                </motion.div>

                <div className="fs-hero-bg"></div>
            </div>

            <section className="fs-services-section">
                <motion.div
                    className="fs-section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="contact-title-wrapper" style={{ marginBottom: '20px' }}>
                        <span className="contact-bg-text">SKILLS</span>
                        <h2 className="contact-fg-text">MY EXPERTISE</h2>
                    </div>
                </motion.div>

                <div className="fs-cards-grid">
                    {[
                        {
                            title: "Web Applications",
                            desc: "Fast, responsive, and secure web apps built with Next.js, React, and modern CSS.",
                            icon: "💻"
                        },
                        {
                            title: "Backend & APIs",
                            desc: "Scalable REST and GraphQL APIs using Node.js, Django, and Python.",
                            icon: "⚙️"
                        },
                        {
                            title: "Android Apps",
                            desc: "Native Android applications developed with Kotlin and Java for optimal performance.",
                            icon: "📱"
                        }
                    ].map((item, index) => (
                        <motion.div
                            className="fs-card clickable"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onClick={() => window.open('https://github.com/Giosue-tanz', '_blank')}
                        >
                            <div className="fs-card-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="fs-more-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <button
                        className="fs-more-btn"
                        onClick={() => window.open('https://github.com/Giosue-tanz', '_blank')}
                    >
                        More
                    </button>
                </motion.div>
            </section>

            <section className="fs-contact-section" ref={contactSectionRef}>
                <div className="fs-contact-container">
                    <div className="contact-title-wrapper">
                        <span className="contact-bg-text">CONTACT</span>
                        <h2 className="contact-fg-text">CONTACT ME</h2>
                    </div>

                    <form className="fs-contact-form" onSubmit={handleEmailSubmit}>
                        <div className="form-row">
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="select-wrapper">
                            <select name="service" required defaultValue="" className="full-width">
                                <option value="" disabled hidden>Select a Service</option>
                                <option value="Web Development">Web Application Development</option>
                                <option value="Mobile App">Android Mobile App</option>
                                <option value="Backend System">Backend & API System</option>
                                <option value="Full Stack Project">Full Stack Project</option>
                                <option value="Other">Other Inquiry</option>
                            </select>
                        </div>
                        <textarea name="message" placeholder="Describe your project..." rows="6" required></textarea>

                        <motion.button
                            type="submit"
                            className="fs-submit-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default FullStackPage;
