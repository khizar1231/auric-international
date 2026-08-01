/** @format */

import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";
const facility = [
  {
    title: "Precision Stitching",
    image:assets.facility1
  },
  {
    title: "Fabric Cutting",
    image:assets.facility2
  },
  {
    title: "Production Floor",
    image:assets.facility3
  },
  {
    title: "Quality Inspection",
    image:assets.facility4
  },
];

const ProductionFacility = () => {
 return (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7f2] via-[#feb28e] to-[#ffd8c2] py-14">
    {/* Premium Background Glows */}
    <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/70 blur-[180px]" />
    <div className="absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-200/60 blur-[170px]" />
    <div className="absolute -right-24 top-0 h-[450px] w-[450px] rounded-full bg-orange-100/70 blur-[180px]" />

    {/* Floating Particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 35 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="inline-block px-5 py-2 rounded-full bg-white/70 backdrop-blur-lg text-orange-600 font-semibold text-sm shadow-lg">
          PREMIUM MANUFACTURING
        </span>

        <h2 className="mt-6 text-2xl md:text-5xl font-black text-gray-900 leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Production Facility
          </span>
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-gray-700 text-lg leading-8">
          From precision cutting to premium finishing, every product is crafted
          with advanced machinery, skilled craftsmanship, and strict quality
          control to deliver world-class sportswear.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {facility.map((item, index) => (
          <div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="group relative overflow-hidden rounded-[30px] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
          >
            <div className="relative h-[390px] overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Orange Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent" />

              {/* Shine */}
              <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-[150%]" />

              {/* Small Badge */}
              <div className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-orange-600 shadow-lg">
                PREMIUM
              </div>

              {/* Title */}
              <div className="absolute bottom-6 left-6 right-6">

                <h3 className="text-2xl font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500 group-hover:w-24" />

              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-[30px] border border-white/20 group-hover:border-orange-300 transition-all duration-500" />

            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);}

export default ProductionFacility;