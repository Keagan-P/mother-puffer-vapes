import React from 'react'
import './ProDevice.css'
import feature1 from '../pictures/Quikpro_Features_1.jpg'; // Replace with your image paths
import feature2 from '../pictures/Quikpro_Features_2.jpg';
import feature3 from '../pictures/Quikpro_Features_3.jpg';
import feature4 from '../pictures/Quikpro_Features_4.jpg';
import feature5 from '../pictures/Quikpro_Features_5.jpg';
import feature6 from '../pictures/Quikpro_Features_6.jpg';

function QuikProDevice() {
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
)
}

export default QuikProDevice