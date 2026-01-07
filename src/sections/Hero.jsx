import React from 'react';
import './Hero.css'; // we’ll create this for neon glow

export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      {/* Background image */}
      <div className="hero-bg"></div>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">Auric International</h1>
        <p className="hero-slogan">Perfection in every stitch</p>
        <p className="hero-desc">
          We bring your clothing vision to life with premium manufacturing, precision craftsmanship, and global export expertise.
        </p>
        <a href="#contact" className="hero-button">
          Contact Us
        </a>
      </div>
    </section>
  );
}
