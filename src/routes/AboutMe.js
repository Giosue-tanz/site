import React from 'react';
import Navbar from '../components/navbar/Navbar';
import AboutMeComponent from '../components/aboutme/aboutme';
import Footer from '../components/footer/Footer';
import WiC from '../components/WiC/WiC'

const AboutMe = () => {
    return (
        <>
           <Navbar /> 
           <AboutMeComponent />
           <WiC />
           <Footer />
        </>
    );
};

export default AboutMe;
