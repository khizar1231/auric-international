/** @format */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp ,FaFilePdf } from "react-icons/fa";
import { NavLink, Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import MegaMenu from "./MegaMenu";
import catalogue from "../../assets/catalogue.pdf"
import {
  ChevronDown,
  ChevronRight,
  Home,
  Info,
  Phone,
  Menu,
  X,
  BriefcaseBusiness ,
  Shirt,
  Dumbbell,
  ShoppingBag,
  Shield
} from "lucide-react";
import { productCategories } from "../../assets/assets";
export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };
  const location = useLocation();
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const toggleSubCategory = (subCategory) => {
    setOpenSubCategory(openSubCategory === subCategory ? null : subCategory);
  };
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-white/80 backdrop-blur-2xl shadow-sm border-b border-gray-200/60"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-24" : "h-22"
            }`}
          >
            {/* ================= Logo ================= */}
            <Link to="/" className="flex items-center gap-4 group">
              <div
                className={`w-20 h-16 rounded-2xl overflow-hidden transition-all duration-500 ${
                  transparent
                    ? "bg-black"
                    : "bg-black"
                }`}
              >
                <img
                  src={assets.AuricLogo}
                  alt=""
                  className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
                />
              </div>

              <div>
                <h2
                  className={`font-black tracking-wide text-2xl transition duration-500 ${
                    transparent ? "text-white" : "text-gray-900"
                  }`}
                >
                  Auric International
                </h2>

                <p
                  className={`uppercase tracking-[4px] text-[10px] transition duration-500 ${
                    transparent ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  Premium  Apparel Manufacturer
                </p>
              </div>
            </Link>
            {/* ================= Desktop Navigation ================= */}
            {/* ================= Desktop Navigation ================= */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex items-center gap-10"
            >
              {/* Home */}

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative font-semibold uppercase text-[14px] tracking-wide group ${
                    isActive
                      ? "text-orange-500"
                      : transparent
                        ? "text-white"
                        : "text-gray-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Home
                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-orange-500 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>

              {/* Mega Menus */}

              {Object.entries(productCategories).map(([title, categories]) => (
                <MegaMenu
                  key={title}
                  title={title}
                  categories={categories}
                  transparent={transparent}
                />
              ))}

              {/* About */}

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative font-semibold uppercase text-[14px] tracking-wide group ${
                    isActive
                      ? "text-orange-500"
                      : transparent
                        ? "text-white"
                        : "text-gray-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    About
                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-orange-500 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>

              {/* Contact */}

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative font-semibold uppercase text-[14px] tracking-wide group ${
                    isActive
                      ? "text-orange-500"
                      : transparent
                        ? "text-white"
                        : "text-gray-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Contact
                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-orange-500 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </motion.nav>
            {/* ================= Right Side ================= */}
            <div className="flex items-center gap-4">
              <a
                href={catalogue}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-500 border ${
                  transparent
                    ? "border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-lg"
                    : "border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                }`}
              >
                <FaFilePdf size={20} />
                <span className="font-semibold">Catalogue</span>
              </a>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className={`lg:hidden w-11 h-11 rounded-xl flex items-center justify-center transition ${
                  transparent
                    ? "bg-white/10 backdrop-blur-lg text-white border border-white/20"
                    : "bg-gray-100 text-black"
                }`}
              >
                {mobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
              {/* ================= Mobile Menu ================= */}
            </div>{" "}
            {/* Right Side */}
          </div>{" "}
          {/* justify-between */}
        </div>{" "}
        {/* max-width */}
      </motion.header>
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] lg:hidden bg-white"
          >
            {/* Header */}

            <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-20 flex items-center justify-between shadow-sm">
              <h2 className="text-2xl font-black tracking-wide">MENU</h2>

              <button
                onClick={() => setMobileMenu(false)}
                className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center"
              >
                <X size={22} />
              </button>
            </div>

            {/* Body */}

            <div className="overflow-y-auto h-[calc(100vh-80px)] px-6 py-6">
              {/* Home */}

              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-4 rounded-2xl p-4 hover:bg-orange-50 transition"
              >
                <Home className="text-orange-500" size={20} />

                <span className="font-semibold text-lg">Home</span>
              </NavLink>

              {/* Categories */}

              {/* Categories */}

              {Object.entries(productCategories).map(([category, sections]) => (
                <div key={category} className="border-b border-gray-100 py-2">
                  {/* ================= Category ================= */}

                  <div className="flex items-center justify-between p-4">

  {/* Category Name */}
  
  <NavLink
    to={`/product?category=${encodeURIComponent(category)}`}
    onClick={() => {
      setMobileMenu(false);
      setOpenCategory(null);
      setOpenSubCategory(null);
    }}
    className="font-bold text-lg hover:text-orange-500 transition"
  >
    {category}
  </NavLink>

  {/* Expand Arrow */}
  <button
    onClick={() => {
      toggleCategory(category);
      setOpenSubCategory(null);
    }}
    className="p-2 rounded-lg hover:bg-gray-100 transition"
  >
    <ChevronDown
      size={20}
      className={`transition duration-300 ${
        openCategory === category ? "rotate-180" : ""
      }`}
    />
  </button>

</div>

                  <AnimatePresence>
                    {openCategory === category && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.1,
                        }}
                        className="overflow-hidden"
                      >
                        {Object.entries(sections).map(([heading, products]) => {
                          const hasMultipleSubCategories =
                            Object.keys(sections).length > 1;

                          return (
                            <div key={heading} className="mb-4">
                              {/* ==========================================
                      If category has MORE THAN ONE subcategory
                  ========================================== */}

                              {hasMultipleSubCategories ? (
                                <>
                                 <div className="flex items-center justify-between p-4">

  <NavLink
    to={`/product?category=${encodeURIComponent(
      category
    )}&subCategory=${encodeURIComponent(heading)}`}
    onClick={() => {
      setMobileMenu(false);
      setOpenCategory(null);
      setOpenSubCategory(null);
    }}
    className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-orange-500 transition"
  >
    {heading}
  </NavLink>

  <button
    onClick={() => toggleSubCategory(heading)}
    className="p-2 rounded-lg hover:bg-gray-100 transition"
  >
    <ChevronDown
      size={16}
      className={`transition duration-300 ${
        openSubCategory === heading ? "rotate-180" : ""
      }`}
    />
  </button>

</div>

                                  <AnimatePresence>
                                    {openSubCategory === heading && (
                                      <motion.div
                                        initial={{
                                          opacity: 0,
                                          height: 0,
                                        }}
                                        animate={{
                                          opacity: 1,
                                          height: "auto",
                                        }}
                                        exit={{
                                          opacity: 0,
                                          height: 0,
                                        }}
                                        transition={{
                                          duration: 0.1,
                                        }}
                                        className="overflow-hidden"
                                      >
                                        <div className="space-y-1 pl-4">
                                          {products.map((item) => (
                                            <NavLink
                                              key={item}
                                              to={`/product?category=${encodeURIComponent(
                                                category,
                                              )}&subCategory=${encodeURIComponent(
                                                heading,
                                              )}&productType=${encodeURIComponent(item)}`}
                                              onClick={() => {
                                                setMobileMenu(false);
                                                setOpenCategory(null);
                                                setOpenSubCategory(null);
                                              }}
                                              className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-orange-50 transition"
                                            >
                                              <ChevronRight
                                                size={16}
                                                className="text-orange-500"
                                              />

                                              <span className="text-gray-700">
                                                {item}
                                              </span>
                                            </NavLink>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </>
                              ) : (
                                /* ==========================================
                       ONLY ONE SUBCATEGORY
                       Show products directly
                    ========================================== */

                                <div className="space-y-1">
                                  {products.map((item) => (
                                    <NavLink
                                      key={item}
                                      to={`/product?category=${encodeURIComponent(
                                        category,
                                      )}&subCategory=${encodeURIComponent(
                                        heading,
                                      )}&productType=${encodeURIComponent(
                                        item,
                                      )}`}
                                      onClick={() => {
                                        setMobileMenu(false);
                                        setOpenCategory(null);
                                        setOpenSubCategory(null);
                                      }}
                                      className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-orange-50 transition"
                                    >
                                      <ChevronRight
                                        size={16}
                                        className="text-orange-500"
                                      />

                                      <span className="text-gray-700">
                                        {item}
                                      </span>
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

              {/* About */}

              <NavLink
                to="/about"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-4 rounded-2xl p-4 hover:bg-orange-50 transition mt-3"
              >
                <Info className="text-orange-500" size={20} />

                <span className="font-semibold text-lg">About</span>
              </NavLink>
 <NavLink
                to="/service"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-4 rounded-2xl p-4 hover:bg-orange-50 transition"
              >
                <BriefcaseBusiness  className="text-orange-500" size={20} />

                <span className="font-semibold text-lg">Service</span>
              </NavLink>
              {/* Contact */}

              <NavLink
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-4 rounded-2xl p-4 hover:bg-orange-50 transition"
              >
                <Phone className="text-orange-500" size={20} />

                <span className="font-semibold text-lg">Contact</span>
              </NavLink>

              {/* WhatsApp */}

            <a
  href={catalogue}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-red-600 py-4 text-white font-bold text-lg hover:bg-red-700 transition"
>
  <FaFilePdf size={22} />
  View Catalogue
</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
