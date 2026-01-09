import React, { useState } from 'react';
import { Instagram, MessageCircle, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* LEFT: SOCIAL ICONS */}
        <div className="nav-left">
          <a
            href="https://www.instagram.com/auric.international/"
            target="_blank"
            rel="noreferrer"
          >


            <Instagram size={20} />
          </a>

          <a
            href="https://wa.me/message/6A3UPNLFSK4KB1"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        {/* CENTER: BRAND */}
        <div className="nav-center">
          
        </div>

        {/* RIGHT: LINKS (DESKTOP) */}
        <div className="nav-right">
          <a href="#hero">Home</a>
          <a href="#categories">Categories</a>
          <a href="#services">Services</a>
          <a href="#factory">Factory</a>
          <a href="#whyus">WhyUs</a>
          <a href="#contact">Contact</a>
           <a href="/catalogue.pdf">Catalogue</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="nav-mobile-btn" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="nav-mobile">
          <a href="#hero" onClick={() => setOpen(false)}>Home</a>
          <a href="#categories" onClick={() => setOpen(false)}>Categories</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#factory" onClick={() => setOpen(false)}>Factory</a>
          <a href="#whyus" onClick={() => setOpen(false)}>Why Us</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="/catalogue.pdf"  onClick={() => setOpen(false)}>Catalogue</a>

        </div>
      )}
    </nav>
  );
}
