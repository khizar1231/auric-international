import React from 'react';
import './Factory.css';
import stitching from '../assets/factory/stitching.jpg';
import cutting from '../assets/factory/cutting.jpg';
import production from '../assets/factory/production.jpg';
import quality from '../assets/factory/quality.jpg';


export default function Factory() {
  return (
    <section id="factory" className="factory-container">

      <div className="factory-bg"></div>
      <div className="factory-overlay"></div>

      <div className="factory-content">

        {/* MAIN HEADING */}
        <h2 className="factory-title">Our Production Facility</h2>
        <p className="factory-subtitle">
          A fully integrated apparel manufacturing unit built for quality,
          scale, and global export standards.
        </p>

        {/* IMAGE GRID */}
        <div className="factory-grid">

          <div className="factory-item">
            <img
              src={stitching} 
              alt="Stitching Unit"
            />
            <span>Precision Stitching</span>
          </div>

          <div className="factory-item">
            <img
              src={cutting}
              alt="Fabric Cutting"
            />
            <span>Fabric Cutting</span>
          </div>

          <div className="factory-item">
            <img
              src={production}
              alt="Production Floor"
            />
            <span>Production Floor</span>
          </div>

          <div className="factory-item">
            <img
              src={quality}
              alt="Quality Control"
            />
            <span>Quality Inspection</span>
          </div>

        </div>
      </div>
    </section>
  );
}
