import React from 'react';
import './Navbar.css';
import logoImg from '../pictures/logo.jpg'; // Replace with your logo image

function Navbar() {
  return (
    <nav className="navbar" id='navbar'>
      <div className="logo">
        <img src={logoImg} alt="Vape Logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <a href="#navbar">HOME</a>
        <a href="#6KPuffs">6K PUFFS</a>
        <a href="#QuikPro">QUIKPRO</a>
        <a href="#contact">ABOUT US</a>
      </div>
      <div className="nav-icons">
        <a href="#search"> </a>
        <a href="#user"> </a> {/* Replace "R" with the correct icon/letter */}
      </div>
    </nav>
  );
}

export default Navbar;