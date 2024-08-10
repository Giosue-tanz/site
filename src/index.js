import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './routes/AboutMe';
import Works from './routes/Works';
import ContactPage from './routes/ContactPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Works" element={<Works/>} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
