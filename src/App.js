// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import './App.css';
import Enquire from './pages/Enquire';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path='/Enquire' element={<Enquire/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
