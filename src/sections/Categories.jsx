import React from 'react';
import './Categories.css';

const categories = [
  {
    name: 'Streetwear',
    desc: 'Trendy and modern casual apparel.',
    icon: '👕',
  },
  {
    name: 'Hoodies & Sweatshirts',
    desc: 'Comfortable hoodies with premium stitching.',
    icon: '🧥',
  },
  {
    name: 'Jackets & Outerwear',
    desc: 'Stylish jackets for all seasons.',
    icon: '🧥',
  },
  {
    name: 'T-Shirts & Casual Wear',
    desc: 'High-quality fabrics with perfect fit.',
    icon: '👚',
  },
  {
    name: 'Activewear & Sportswear',
    desc: 'Performance-oriented, comfortable designs.',
    icon: '🏃‍♂️',
  },
  {
    name: 'Workwear & Uniforms',
    desc: 'Durable clothing for professional use.',
    icon: '👔',
  },
  {
    name: 'Custom Apparel Manufacturing',
    desc: 'Tailored production according to your design.',
    icon: '✂️',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="categories-container">
      <h2 className="categories-title">Our Manufacturing Categories</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div key={cat.name} className="category-card">
            <div className="category-icon">{cat.icon}</div>
            <h3 className="category-name">{cat.name}</h3>
            <p className="category-desc">{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
