import React from 'react';
import Navbar from '../components/navbar/Navbar';  
import NotesComponent from '../components/Notes/NotesComponent';  
import Footer from '../components/footer/Footer';  
import WiC from '../components/WiC/WiC';

const Notes = () => {
    return (
        <>
            <Navbar /> 
            <NotesComponent /> 
            <WiC />
            <Footer />
        </>
    );
}

export default Notes;
