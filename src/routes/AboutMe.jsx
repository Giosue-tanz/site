import React from 'react';
import Navbar from '../components/navbar/Navbar';
import AboutMeComponent from '../components/aboutme/aboutme';
import WiC from '../components/WiC/WiC'

const AboutMe = () => {
    return (
        <>
           <Navbar /> 
           <AboutMeComponent />
           <WiC />
        </>
    );
};

export default AboutMe;
