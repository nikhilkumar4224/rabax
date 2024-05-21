// Home.js

import React from 'react';
import SavingsCalculator from './SavingsCalculator'; // Import the SavingsCalculator component
import '../App.css'// Import custom styles for the Home page

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Let the sun pay your bills, Switch to solar</h1>
        <p>Turning the sunlight into savings</p>
        <button>Get a Quote</button>
      </header>
      <section className="savings-section">
        <SavingsCalculator />
      </section>
      {/* Additional sections like Services, About Us, Projects, and Contact Us */}
    </div>
  );
}

export default Home;
