// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src={Logo} alt='rabax Solor Logo' className="logo-img"></img></Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to='/enquire'>Enquire</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
