/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-white py-6 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
      {/* Top Border Red Glow Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/80 to-transparent shadow-[0_0_12px_rgba(239,68,68,0.8)]" />

      {/* Single Full-Page Glassmorphic Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        {/* 1. Brand Logo & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-red-600/30">
            A
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight text-white leading-none">
              AURIC <span className="text-red-500">INTERNATIONAL</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Luxury Apparel Manufacturing & Worldwide Export
            </p>
          </div>
        </div>

        {/* 2. Quick Navigation Links (Horizontal Row) */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-300">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/product" },
            { name: "About", path: "/about" },
            { name: "Exclusive Deals", path: "/service" },
            { name: "Contact", path: "/contact" },
             { name: "Get Quotation", path: "/quote" },
          ].map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `inline-flex items-center gap-0.5 hover:text-red-400 transition-colors ${
                  isActive ? "text-red-400 font-bold" : "text-gray-300"
                }`
              }
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </NavLink>
          ))}
        </div>

        {/* 3. Compact Contact Bar */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 text-xs text-gray-300">
          <a
            href="mailto:auricinternational1111@gmail.com"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-red-500/50 hover:bg-white/[0.08] transition"
          >
            <Mail className="w-3.5 h-3.5 text-red-400" />
            <span>auricinternational1111@gmail.com</span>
          </a>

          <a
            href="https://wa.me/923709085311"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-red-500/50 hover:bg-white/[0.08] transition"
          >
            <Phone className="w-3.5 h-3.5 text-red-400" />
            <span>+92 370 9085311</span>
          </a>

          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Sialkot, Pakistan</span>
          </div>
        </div>
      </motion.div>

      {/* Minimal Copyright Line */}
      <div className="text-center text-[11px] text-gray-500 mt-3">
        © 2026 Auric International — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;