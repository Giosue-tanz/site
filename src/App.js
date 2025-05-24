import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Abhome from './components/Abhome/Abhome';
import Cards from './components/card/Cards';
import List from './components/List/List';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/aboutme';
import Works from './routes/Works';
import Notes from './routes/Notes';
import ContactPage from './routes/ContactPage';
import Curriculum from './components/Curriculum/Curriculum'; // Aggiunto Curriculum

function MainContent() {
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

// Componenti placeholder per le rotte non ancora implementate
const Education = () => <div>Education Page</div>;
const AboutUs = () => <div>About Us Page</div>;
const Goals = () => <div>Goals Page</div>;
const Services = () => <div>Services Page</div>;
const Projects = () => <div>Projects Page</div>;
const ShopBag = () => <div>Shop Bag Page</div>;
const ShopBand = () => <div>Shop Band Page</div>;
const ShopShoes = () => <div>Shop Shoes Page</div>;
const ShopTshirts = () => <div>Shop T-shirts Page</div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/SITE" element={<MainContent />} />
      <Route path="/about" element={<AboutMe />} /> {/* Allineato con Footer */}
      <Route path="/works" element={<Works />} />   {/* Minuscolo per consistenza */}
      <Route path="/notes" element={<Notes />} />   {/* Minuscolo per consistenza */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/curriculum" element={<Curriculum />} /> {/* Aggiunto */}
      <Route path="/education" element={<Education />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/shop/bag" element={<ShopBag />} />
      <Route path="/shop/band" element={<ShopBand />} />
      <Route path="/shop/shoes" element={<ShopShoes />} />
      <Route path="/shop/t-shirts" element={<ShopTshirts />} />
    </Routes>
  );
}

export default App;