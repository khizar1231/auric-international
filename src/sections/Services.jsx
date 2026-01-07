import React from 'react';
import './Services.css';

const services = [
  {
    step: '01',
    title: 'Research & Planning',
    desc: 'Client consultation, market research, and production planning.',
  },
  {
    step: '02',
    title: 'Design & Sampling',
    desc: 'Mockups and samples delivered within 1–2 weeks.',
  },
  {
    step: '03',
    title: 'Manufacturing',
    desc: 'High-quality production with strict quality control.',
  },
  {
    step: '04',
    title: 'Packaging & Export',
    desc: 'Professional packaging and reliable global delivery.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-container">
      <h2 className="services-title">Our Manufacturing Process</h2>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.step} className="service-card">
            <span className="service-step">{s.step}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
