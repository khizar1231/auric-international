/** @format */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaFilePdf } from "react-icons/fa";
import { NavLink, Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import MegaMenu from "./MegaMenu";
import catalogue from "../../assets/catalogue.pdf";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Info,
  Phone,
  Menu,
  X,
  BriefcaseBusiness,
} from "lucide-react";
import { productCategories } from "../../assets/assets";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);
  
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleSubCategory = (subCategory) => {
    setOpenSubCategory(openSubCategory === subCategory ? null : subCategory);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable NavItem component for Desktop Navigation
  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative font-bold uppercase text-[13px] tracking-[0.15em] transition-colors duration-300 ${
          isActive
            ? "text-orange-500"
            : transparent
            ? "text-white/90 hover:text-white drop-shadow-sm"
            : "text-gray-700 hover:text-orange-500"
        }`
      }
    >
      {({ isActive }) => (
        <span className="relative py-2 block group">
          {label}
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-orange-500 rounded-full transition-all duration-300 ease-out ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </span>
      )}
    </NavLink>
  );

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          transparent
            ? "bg-transparent py-5" // Slightly taller when at the very top
            : "bg-white/75 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/20 py-2.5"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* ================= Logo (Updated for Transparent Image) ================= */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 group">
            {/* Removed the black background, rounded corners, and hidden overflow */}
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center relative">
              <img
                src={assets.AuricLogo}
                alt="Auric Logo"
                className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out ${
                  transparent ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" : "drop-shadow-sm"
                }`}
              />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <h2
                className={`font-black tracking-widest text-xl md:text-2xl transition duration-500 ${
                  transparent ? "text-white drop-shadow-md" : "text-gray-900"
                }`}
              >
                AURIC
              </h2>
              <p
                className={`uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-semibold transition duration-500 ${
                  transparent ? "text-gray-200 drop-shadow-sm" : "text-gray-500"
                }`}
              >
                International
              </p>
            </div>
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center gap-8"
          >
            <NavItem to="/" label="Home" />
            
            {/* Mega Menus Dropdowns */}
            {Object.entries(productCategories).map(([title, categories]) => (
              <MegaMenu
                key={title}
                title={title}
                categories={categories}
                transparent={transparent}
              />
            ))}
            
            <NavItem to="/service" label="Services" />
            <NavItem to="/about" label="About" />
            <NavItem to="/contact" label="Contact" />
          </motion.nav>

          {/* ================= Right Side Actions ================= */}
          <div className="flex items-center gap-4">
            <a
              href={catalogue}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold tracking-wider text-[13px] uppercase transition-all duration-300 border-2 ${
                transparent
                  ? "border-white/40 text-white hover:bg-white hover:text-black hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm"
                  : "border-gray-900 bg-gray-900 text-white hover:bg-orange-500 hover:border-orange-500 shadow-lg hover:shadow-orange-500/30"
              }`}
            >
              <FaFilePdf size={16} />
              <span>Catalogue</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 border ${
                transparent
                  ? "bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20"
                  : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50 shadow-sm"
              }`}
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= Mobile Menu Slide-out ================= */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] lg:hidden"
            />
            
            {/* Side Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-full z-[999] bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50/80 backdrop-blur-md">
                <h2 className="text-xl font-black tracking-widest text-gray-900">MENU</h2>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-red-500 flex items-center justify-center transition shadow-sm"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
                <NavLink
                  to="/"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors group"
                >
                  <Home size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-[15px] uppercase tracking-wider">Home</span>
                </NavLink>

                {/* Categories */}
                <div className="pt-4 pb-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 pl-3">Products</p>
                  {Object.entries(productCategories).map(([category, sections]) => (
                    <div key={category} className="mb-2">
                      <div className="flex items-center justify-between group">
                        <NavLink
                          to={`/product?category=${encodeURIComponent(category)}`}
                          onClick={() => {
                            setMobileMenu(false);
                            setOpenCategory(null);
                            setOpenSubCategory(null);
                          }}
                          className="flex-1 p-3 font-bold text-[15px] text-gray-800 group-hover:text-orange-500 transition"
                        >
                          {category}
                        </NavLink>
                        <button
                          onClick={() => {
                            toggleCategory(category);
                            setOpenSubCategory(null);
                          }}
                          className="p-3 text-gray-400 hover:text-orange-500 transition"
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${
                              openCategory === category ? "rotate-180 text-orange-500" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <AnimatePresence>
                        {openCategory === category && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden bg-gray-50 rounded-xl mt-1 border border-gray-100"
                          >
                            {Object.entries(sections).map(([heading, products]) => {
                              const hasMultipleSubCategories = Object.keys(sections).length > 1;

                              return (
                                <div key={heading} className="p-2">
                                  {hasMultipleSubCategories ? (
                                    <>
                                      <div className="flex items-center justify-between">
                                        <NavLink
                                          to={`/product?category=${encodeURIComponent(category)}&subCategory=${encodeURIComponent(heading)}`}
                                          onClick={() => setMobileMenu(false)}
                                          className="flex-1 p-2 text-[12px] font-bold uppercase tracking-wider text-gray-500 hover:text-orange-500 transition"
                                        >
                                          {heading}
                                        </NavLink>
                                        <button
                                          onClick={() => toggleSubCategory(heading)}
                                          className="p-2 text-gray-400"
                                        >
                                          <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${
                                              openSubCategory === heading ? "rotate-180 text-orange-500" : ""
                                            }`}
                                          />
                                        </button>
                                      </div>

                                      <AnimatePresence>
                                        {openSubCategory === heading && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                          >
                                            <div className="space-y-1 pl-4 pb-2">
                                              {products.map((item) => (
                                                <NavLink
                                                  key={item}
                                                  to={`/product?category=${encodeURIComponent(category)}&subCategory=${encodeURIComponent(heading)}&productType=${encodeURIComponent(item)}`}
                                                  onClick={() => setMobileMenu(false)}
                                                  className="flex items-center gap-2 p-2 rounded-lg text-[13px] font-medium text-gray-600 hover:bg-white hover:text-orange-600 hover:shadow-sm transition"
                                                >
                                                  <ChevronRight size={14} className="text-orange-400" />
                                                  {item}
                                                </NavLink>
                                              ))}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <div className="space-y-1">
                                      {products.map((item) => (
                                        <NavLink
                                          key={item}
                                          to={`/product?category=${encodeURIComponent(category)}&subCategory=${encodeURIComponent(heading)}&productType=${encodeURIComponent(item)}`}
                                          onClick={() => setMobileMenu(false)}
                                          className="flex items-center gap-2 p-2.5 rounded-lg text-[13px] font-medium text-gray-600 hover:bg-white hover:text-orange-600 hover:shadow-sm transition"
                                        >
                                          <ChevronRight size={14} className="text-orange-400" />
                                          {item}
                                        </NavLink>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-gray-100 my-4" />

                <NavLink
                  to="/service"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors group"
                >
                  <BriefcaseBusiness size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-[15px] uppercase tracking-wider">Services</span>
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors group"
                >
                  <Info size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-[15px] uppercase tracking-wider">About</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors group"
                >
                  <Phone size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-[15px] uppercase tracking-wider">Contact</span>
                </NavLink>
              </div>

              {/* Footer CTA */}
              <div className="p-6 bg-white border-t border-gray-100 pb-8">
                <a
                  href={catalogue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 py-4 text-white font-bold tracking-wider uppercase text-[13px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaFilePdf size={16} />
                  View Catalogue
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}