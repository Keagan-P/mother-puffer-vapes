import React from 'react'
import './QuikProDeviceColors.css'
import device1 from '../pictures/Quikpro Grey.png'; // Replace with your image paths
import device2 from '../pictures/Quikpro Black.png';
import device3 from '../pictures/Quikpro Blue.png';
import device4 from '../pictures/Quikpro Red.png';

function QuikProDeviceColors() {
  return (
    <section className="features">
          <h2>COLOURS</h2>
          <div className="features-grid">
            <img src={device1} alt="Feature 1" className='blue'/>
            <img src={device2} alt="Feature 2" className='blue'/>
            <img src={device3} alt="Feature 3" className='blue'/>
            <img src={device4} alt="Feature 3" className='blue'/>
            </div>
    </section>
  )
}

export default QuikProDeviceColors