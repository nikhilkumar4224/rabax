// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content container">
        <div className="footer-logo">
          <h3>SolarPower</h3>
        </div>
        <div className="footer-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SolarPower. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
