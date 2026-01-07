import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <h3>Auric International</h3>
        <p>Premium Apparel Manufacturing & Export</p>
        <span>© {new Date().getFullYear()} All Rights Reserved</span>
      </div>
    </footer>
  );
}
