import React from 'react'
import './AboutUs.css'
import img1 from '../pictures/CulesvDyk.jpg'

function AboutUs() {
  return (
  
      <div className="about-us-container" id='contact'>
        <div className="about-us-content">
          <div className="about-us-image">
            {/* Replace this with your friend's image */}
            <img
              src={img1} // Replace with the actual path to the image
              alt="About Us"
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
          </div>
          <div className="about-us-text">
            <h2>About Cules van Dyk</h2>
            <p>
              Meet the driving force behind Mother Puffer. Cules is a highly motivated and dedicated professional with a
              passion for [mention something specific related to vaping or the
              business]. He brings a strong work ethic and a results-oriented
              approach to everything he does.
            </p>
            <p>
              Beyond his professional life, Cules is an avid rugby
              fan and enjoys the camaraderie and discipline the sport embodies.
              He also works as a consultant, leveraging his expertise to help
              others succeed.
            </p>
            <p>
              Cules's commitment to quality and customer
              satisfaction is at the heart of Mother Puffer. He strives to
              provide a premium experience for every customer.
            </p>

            <div className="contact-details">
            <h3>Contact Us</h3>
            <p>
              <strong>Phone:</strong> <a href="tel:[Your Friend's Phone Number]">0823114868</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:[Your Friend's Email Address]">cules.vandyk@gmail.com</a>
            </p>
          </div>
          </div>
        </div>
      </div>
    );
}

export default AboutUs