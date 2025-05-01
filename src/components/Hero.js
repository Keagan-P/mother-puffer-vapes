// src/components/Hero.js
import React from 'react';
import './Hero.css';
import heroVideo from '../videos/Quik 6K.mp4'; // Replace with your product image

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
      <div className="video-container">
        <div className="video-description">
          <h1>Introducing the new Quik Pro 6K</h1>
          </div>
        <video src={heroVideo} autoPlay loop muted playsInline className="hero-video" />
        </div>
      </div>
    </section>
  );
}

export default Hero;