import React from 'react';
//import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Abhome from './components/Abhome/Abhome';
import Cards from './components/card/Cards'; 
import List from './components/List/List'; 
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/aboutme';

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Abhome />
      <List /> 
      <Cards />
      <Footer />
    </>
  );
}

export default App;

