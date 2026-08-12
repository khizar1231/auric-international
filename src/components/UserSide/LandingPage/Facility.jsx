/** @format */

import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";

const facility = [
  {
    title: "Precision Stitching",
    image: assets.facility1,
  },
  {
    title: "Fabric Cutting",
    image: assets.facility2,
  },
  {
    title: "Production Floor",
    image: assets.facility3,
  },
  {
    title: "Quality Inspection",
    image: assets.facility4,
  },
];

// Enhanced Staggered Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Increased stagger for a clearer "one by one" effect
      delayChildren: 0.1,
    },
  },
};

// Deeper float-in for the entrance
const cardEntranceVariants = {
  hidden: { opacity: 0, y: 120, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      duration: 1,
    },
  },
};

const ProductionFacility = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 lg:py-32">
      {/* Premium Glass Background Glows */}
      <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-400/20 to-red-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-orange-300/30 to-amber-200/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-rose-400/20 to-orange-500/10 blur-[100px] pointer-events-none" />

      {/* Floating Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-orange-400/30 blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Glass Badge */}
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold text-xs sm:text-sm tracking-widest uppercase">
              Premium Manufacturing
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
            Inside Our{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                Production Facility
              </span>
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg sm:text-xl leading-relaxed">
            From precision cutting to premium finishing, every product is crafted
            with advanced machinery, skilled craftsmanship, and strict quality
            control to deliver world-class sportswear.
          </p>
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {facility.map((item, index) => (
            <motion.div
              key={index}
              variants={cardEntranceVariants}
              className="h-full"
            >
              {/* Continuous floating animation wrapper added here */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2, // Offsets the floating so they don't move exactly together
                }}
                whileHover={{ 
                  y: -15, 
                  transition: { duration: 0.3 } 
                }}
                className="group relative h-[420px] rounded-[2rem] overflow-hidden bg-white/20 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md border border-white/50 cursor-pointer"
              >
                {/* Inner Card Wrapper for padding effect */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                  
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />

                  {/* Dark Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/80 transition-opacity duration-500 group-hover:to-black/90" />

                  {/* Light Sweep Animation on Hover */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

                  {/* Glass Tag */}
                  <div className="absolute top-4 left-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase shadow-lg">
                    Facility
                  </div>

                  {/* Content Box */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    
                    {/* Animated Underline */}
                    <div className="h-1 w-0 rounded-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500 ease-out group-hover:w-16" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionFacility;