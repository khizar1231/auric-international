/** @format */

import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden ">
      {/* Top Border Glow */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-black">Auric International</h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Premium Luxury Apparel Manufacturing Company.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <NavLink to="/" className="hover:text-red-400 transition">
                Home
              </NavLink>

              <NavLink to="/product" className="hover:text-red-400 transition">
                Products
              </NavLink>

              <NavLink to="/about" className="hover:text-red-400 transition">
                About
              </NavLink>

              <NavLink to="/contact" className="hover:text-red-400 transition">
                Contact
              </NavLink>
              <NavLink to="/service" className="hover:text-red-400 transition">
                Services
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <p>auricinternational1111@gmail.com</p>
              <p>+92 3709085311</p>
              <p>Head Office: Sialkot Pakistan</p>
              <p>Worldwide Shipping Available</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">
          © 2026 Auric International — All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
