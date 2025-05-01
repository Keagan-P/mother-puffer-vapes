// src/components/Features.js
import React from 'react';
import './Features.css'; // Create Features.css for styling
import feature1 from '../pictures/KSQ 6K Features 1.png'; // Replace with your image paths
import feature2 from '../pictures/KSQ 6K Features 2.png';
import feature3 from '../pictures/KSQ 6K Features 3.png';
import feature4 from '../pictures/KSQ 6K Features 4.png';
import feature5 from '../pictures/KSQ 6K Features 5.png';
import feature6 from '../pictures/KSQ 6K Features 6.png';

function Features() {
  return (
       <section className="features">
      <h2>FEATURES</h2>
      <div className="features-grid">
        <img src={feature1} alt="Feature 1" />
        <img src={feature2} alt="Feature 2" />
        <img src={feature3} alt="Feature 3" />
        <img src={feature4} alt="Feature 4" />
        <img src={feature5} alt="Feature 5" />
        <img src={feature6} alt="Feature 6" />
      </div>
    </section>
   
  );
}

export default Features;