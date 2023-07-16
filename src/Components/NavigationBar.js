import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="Logo" className="logo-image" />
        <h1 className="logo-text">Dereba</h1>
      </div>
      <nav>
        <ul className="menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Services</li>
          <li className="menu-item">Sign Up</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
