import React, { useState } from 'react';
import '../App.css';

const SavingsCalculator = () => {
  const [solarUsage, setSolarUsage] = useState('Home');
  const [electricityBill, setElectricityBill] = useState(2500);

  const calculateResults = () => {
    const systemSize = (electricityBill / 1000).toFixed(2); // Assumed logic
    const spaceRequired = (systemSize * 80).toFixed(2); // Assumed logic (80 sqft per kW)
    const annualEnergyGenerated = (systemSize * 365 * 4).toFixed(2); // Assumed logic (4 units per day per kW)
    const annualSavings = (annualEnergyGenerated * 6).toFixed(2); // Assumed logic (₹6 per unit)
    const price = (systemSize * 65000).toFixed(2); // Assumed logic (₹65000 per kW)
    const subsidy = (price * 0.4).toFixed(2); // Assumed logic (40% subsidy)

    return {
      systemSize,
      spaceRequired,
      annualEnergyGenerated,
      annualSavings,
      price,
      subsidy,
    };
  };

  const results = calculateResults();

  return (
    <div className="savings-calculator-container">
      <h2>Calculate Your Savings</h2>
      <p>Explore the Potential of Solar Energy and Start Saving From Day 1!</p>
      <div className="savings-calculator-content">
        <div className="savings-calculator-form">
          <div className="form-group">
            <label>Do You Need Solar For</label>
            <input
              type="text"
              value={solarUsage}
              onChange={(e) => setSolarUsage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Enter Your Monthly Electricity Bill (in ₹)</label>
            <input
              type="number"
              value={electricityBill}
              onChange={(e) => setElectricityBill(e.target.value)}
            />
          </div>
          <button className="calculate-button">Calculate</button>
        </div>
        <div className="results">
          <div className="result-item">
            <span>System Size</span>
            <strong>{results.systemSize} kW</strong>
          </div>
          <div className="result-item">
            <span>Space Required</span>
            <strong>{results.spaceRequired} sqft</strong>
          </div>
          <div className="result-item">
            <span>Annual Energy Generated</span>
            <strong>{results.annualEnergyGenerated} Units</strong>
          </div>
          <div className="result-item">
            <span>Annual Savings</span>
            <strong>₹ {results.annualSavings}</strong>
          </div>
          <div className="result-item">
            <span>Price (Excluding Subsidy)</span>
            <strong>₹ {results.price}</strong>
          </div>
          <div className="result-item">
            <span>Subsidy</span>
            <strong>₹ {results.subsidy}</strong>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
