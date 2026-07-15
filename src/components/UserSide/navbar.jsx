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
        `relative font-semibold uppercase text-[13px] tracking-widest transition-colors duration-300 ${
          isActive
            ? "text-orange-500"
            : transparent
            ? "text-white/90 hover:text-white"
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
            ? "bg-transparent py-4"
            : "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 py-2"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* ================= Logo ================= */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-16 h-14 md:w-20 md:h-16 rounded-xl overflow-hidden bg-black flex items-center justify-center shadow-lg">
              <img
                src={assets.AuricLogo}
                alt="Auric Logo"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="hidden sm:block">
              <h2
                className={`font-black tracking-wider text-xl md:text-2xl transition duration-500 ${
                  transparent ? "text-white" : "text-gray-900"
                }`}
              >
                Auric International
              </h2>
              <p
                className={`uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-medium transition duration-500 ${
                  transparent ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Premium Apparel Manufacturer
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
            
            {/* Fixed: Services is now visible */}
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
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border ${
                transparent
                  ? "border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-md"
                  : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              <FaFilePdf size={18} />
              <span>Catalogue</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`lg:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
                transparent
                  ? "bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20"
                  : "bg-gray-50 text-gray-900 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] lg:hidden"
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
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white/80 backdrop-blur-md">
                <h2 className="text-xl font-black tracking-wider text-gray-900">MENU</h2>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
                <NavLink
                  to="/"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-gray-50 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <Home size={20} />
                  <span className="font-semibold text-lg">Home</span>
                </NavLink>

                {/* Categories */}
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 pl-3">Products</p>
                  {Object.entries(productCategories).map(([category, sections]) => (
                    <div key={category} className="mb-2">
                      <div className="flex items-center justify-between">
                        <NavLink
                          to={`/product?category=${encodeURIComponent(category)}`}
                          onClick={() => {
                            setMobileMenu(false);
                            setOpenCategory(null);
                            setOpenSubCategory(null);
                          }}
                          className="flex-1 p-3 font-bold text-gray-800 hover:text-orange-500 transition"
                        >
                          {category}
                        </NavLink>
                        <button
                          onClick={() => {
                            toggleCategory(category);
                            setOpenSubCategory(null);
                          }}
                          className="p-3 text-gray-400 hover:text-gray-800 transition"
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
                            className="overflow-hidden bg-gray-50 rounded-xl"
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
                                          className="flex-1 p-2 text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-orange-500"
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
                                                  className="flex items-center gap-3 p-2 rounded-lg text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition"
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
                                          className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition"
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
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-gray-50 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <BriefcaseBusiness size={20} />
                  <span className="font-semibold text-lg">Services</span>
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-gray-50 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <Info size={20} />
                  <span className="font-semibold text-lg">About</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-gray-50 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <Phone size={20} />
                  <span className="font-semibold text-lg">Contact</span>
                </NavLink>
              </div>

              {/* Footer CTA */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <a
                  href={catalogue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gray-900 py-3.5 text-white font-semibold shadow-md hover:bg-gray-800 transition"
                >
                  <FaFilePdf size={18} />
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