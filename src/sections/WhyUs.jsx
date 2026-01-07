import React from 'react';
import './WhyUs.css';

export default function WhyUs() {
  return (
    <section id="whyus" className="whyus-container">
      <div className="whyus-content">

        <h2 className="whyus-title">Why Choose Auric International</h2>
        <p className="whyus-subtitle">
          Trusted by global clients for precision manufacturing, ethical
          practices, and consistent export-quality apparel.
        </p>

        <div className="whyus-grid">

          <div className="whyus-card">
            <h3>Premium Quality Control</h3>
            <p>
              Every garment passes multi-stage inspections to meet
              international quality standards.
            </p>
          </div>

          <div className="whyus-card">
            <h3>On-Time Global Delivery</h3>
            <p>
              Reliable production timelines with efficient export logistics
              worldwide.
            </p>
          </div>

          <div className="whyus-card">
            <h3>Scalable Production Capacity</h3>
            <p>
              From small batches to bulk orders, we scale seamlessly
              with your business.
            </p>
          </div>

          <div className="whyus-card">
            <h3>Ethical Manufacturing</h3>
            <p>
              Responsible sourcing, fair labor practices, and sustainable
              production methods.
            </p>
          </div>

          <div className="whyus-card">
            <h3>Custom Branding Solutions</h3>
            <p>
              Private labeling, custom tags, packaging, and branding
              support.
            </p>
          </div>

          <div className="whyus-card">
            <h3>Worldwide Export Experience</h3>
            <p>
              Years of experience serving clients across multiple
              international markets.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
