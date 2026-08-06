import React, { Suspense, lazy } from 'react';
// code-splitting: lazy-load heavier route components to improve initial bundle
const NoteSmartLight1 = lazy(() => import('./components/Noteslist/NoteSmartLight1.jsx'));
const NoteSmartLight2 = lazy(() => import('./components/Noteslist/NoteSmartLight2.jsx'));
const NoteTanz = lazy(() => import('./components/Noteslist/NoteTanz.jsx'));
const Works = lazy(() => import('./routes/Works.jsx'));
const Notes = lazy(() => import('./routes/Notes.jsx'));
const Curriculum = lazy(() => import('./components/Curriculum/Curriculum.jsx'));
const WiCPage = lazy(() => import('./routes/WiC.jsx'));
const FullStackPage = lazy(() => import('./routes/FullStackPage.jsx'));
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Abhome from './components/Abhome/Abhome.jsx';
import Cards from './components/card/Cards.jsx';
import List from './components/List/List.jsx';
import Footer from './components/footer/Footer.jsx';
import AboutMe from './components/aboutme/aboutme.jsx';
import Contact from './components/contact/Contact.jsx';
import FutureWorks from './components/FutureWorks/FutureWorks';
// SmartLightPage is rendered via the SmartLight route
import './App.css';

function MainContent() {
  return (
    <div className="main-content">
      <AboutMe />
      <Abhome />
      <Cards />
      <List />
      {/* Remove <Footer /> from here */}
    </div>
  );
}

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
    <div className="app">
      {/* render global Navbar except on smart-light route (SmartLight page has its own navbar/footer) */}
      <Navbar />

      <Suspense fallback={<div style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/site" element={<MainContent />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/works" element={<Works />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/wic" element={<WiCPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/shop/bag" element={<ShopBag />} />
          <Route path="/shop/band" element={<ShopBand />} />
          <Route path="/shop/shoes" element={<ShopShoes />} />
          <Route path="/shop/t-shirts" element={<ShopTshirts />} />

          <Route path="/note-smartlight1" element={<NoteSmartLight1 />} />
          <Route path="/note-smartlight2" element={<NoteSmartLight2 />} />
          <Route path="/note-tanz" element={<NoteTanz />} />
          <Route path="/full-stack" element={<FullStackPage />} />
        </Routes>
      </Suspense>

      {/* Global Footer: do not render on smart-light route */}
      <Footer />
    </div>
  );
}

export default App;