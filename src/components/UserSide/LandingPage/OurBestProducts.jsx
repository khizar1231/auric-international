/** @format */

import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaTshirt,
  FaPaintBrush,
  FaShippingFast,
  FaBolt,
  FaHeadset,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// const products = [
//   {
//     title: "Basketball Uniforms",
//     image:
//       "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
//     category: "Elite Sportswear",
//   },

//   {
//     title: "Football Kits",
//     image:
//       "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
//     category: "Professional Teamwear",
//   },

//   {
//     title: "Gym Wear",
//     image:
//       "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
//     category: "Premium Fitness",
//   },

//   {
//     title: "Custom Sportswear",
//     image:
//       "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
//     category: "Custom Branding",
//   },
// ];

const products = [
  {
    title: "Sports Apparel",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop",
    category: "Premium Teamwear",
    link: `/product?category=${encodeURIComponent("Sports Apparel")}`
  },

  {
    title: "Gym Accessories",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    category: "Professional Equipment",
    link: `/product?category=${encodeURIComponent("Gym Accessories")}`
  },

  {
    title: "Casual Wear",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1400&auto=format&fit=crop",
    category: "Lifestyle Collection",
    link: `/product?category=${encodeURIComponent("Casual Wear")}`
  },

  {
    title: "Jackets",
    image:
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=1400&auto=format&fit=crop",
    category: "Outerwear Collection",
    link: `/product?category=${encodeURIComponent("Jackets")}`
  },
];
const OurBestProducts = () => {
  return (
    <div>
      {/* Product Section */}
      <section
        id="products"
        className="relative py-7 overflow-hidden bg-gradient-to-br from-[#fff7f2] via-[#feb28e] to-[#ffd8c2] text-white"
      >
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            
        <span className="inline-block px-5 py-2 my-5 rounded-full bg-white/70 backdrop-blur-lg text-orange-600 font-semibold text-sm shadow-lg">
          Premium Sportswear Collection
        </span>

            <h2 className="text-2xl sm:text-4xl font-black leading-tight text-gray-700">
              Our Luxury
              <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Sports Collection
              </span>
            </h2>

            <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-base leading-relaxed">
              Experience premium quality sportswear crafted with
              professional-grade fabrics, luxury design aesthetics, and
              high-performance comfort for modern athletes and brands.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
                className="group relative rounded-[32px] overflow-hidden bg-white/10 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-[420px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-5 left-5 bg-red-500/90 backdrop-blur-lg text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider shadow-xl">
                    PREMIUM
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-red-500/20 to-blue-500/20 transition duration-700"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-7 w-full">
                    <p className="text-red-400 text-sm uppercase tracking-[3px] font-semibold mb-3">
                      {product.category}
                    </p>

                    <h3 className="text-2xl font-black leading-tight">
                      {product.title}
                    </h3>

                    <p className="mt-4 text-gray-300 text-xs leading-relaxed">
                      Designed with precision, premium materials, and luxury
                      aesthetics to elevate your sports brand.
                    </p>
                    <Link
                      to={product.link}
                      className="group"
                    >
                      <button className="cursor-pointer mt-6 flex items-center justify-center gap-3 w-full bg-white text-[#071a44] hover:bg-red-500 hover:text-white transition-all duration-500 py-4 rounded-2xl font-bold shadow-2xl group/button">
                        View Collection
                        <FaArrowRight className="group-hover/button:translate-x-2 transition duration-300" />
                      </button>
                    </Link>
                    {/* Button */}
                  </div>
                </div>

                {/* Bottom Animated Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-500 to-orange-400 group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <Link to="/product">
              <button className="bg-gradient-to-r from-red-500 to-orange-400 hover:scale-105 transition-all duration-500 px-10 py-5 rounded-2xl text-lg font-bold shadow-[0_15px_50px_rgba(239,68,68,0.5)] cursor-pointer">
                Explore All Collections
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBestProducts;
