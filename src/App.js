import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Abhome from './components/Abhome/Abhome';
import Cards from './components/card/Cards';
import List from './components/List/List';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/aboutme';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/SITE' : '';

  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Abhome />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
