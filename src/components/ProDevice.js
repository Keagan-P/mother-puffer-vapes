import React from 'react'
import './ProDevice.css'
import ProDeviceVideo from '../videos/Quikpro.mp4';

function ProDevice() {
  return (
     
        <section className="hero" id='QuikPro'>
          <div className="hero-content">
          <div className="video-container">
            <div className="video-description">
              <h1>Introducing the new Quik Pro 15K Device</h1>
              </div>
            <video src={ProDeviceVideo} autoPlay loop muted playsInline className="hero-video" />
            </div>
          </div>
        </section>
  )
}

export default ProDevice