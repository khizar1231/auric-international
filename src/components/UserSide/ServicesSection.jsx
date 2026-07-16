/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaInstagram, FaWhatsapp, FaTag } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Deals = () => {
  // Deal Data based on your uploaded images
  const dealsData = [
    {
      id: 1,
      title: "Premium T-Shirt Bundle",
      price: "$1,000",
      image: assets.deal1,
      description:
        "Scale your brand instantly with our 100-piece premium t-shirt package. Includes everything you need for retail-ready apparel.",
      features: [
        "100 Premium Blank T-Shirts",
        "Custom Hang Cards Included (with branding)",
        "Custom Premium Polythene Bags (with branding)",
        "Premium Quality Assured",
      ],
      note: "*Shipping not included",
      badge: "Best Seller",
      whatsappLink: "https://wa.me/923709085311?text=Hi%20Auric%20International,%20I%20am%20interested%20in%20the%20$1000%20Premium%20T-Shirt%20Deal!",
      instaLink: "https://ig.me/m/auric.international"
    },
    {
      id: 2,
      title: "The Ultimate Startup Wardrobe",
      price: "$1,500",
      image: assets.deal2,
      description:
        "Launch a complete streetwear collection in one go. A massive variety pack offering up to 40% OFF standard manufacturing costs.",
      features: [
        "20 Sweatsuits / Windbreakers",
        "20 Hoodies / Crewnecks",
        "20 Premium T-Shirts",
        "20 Beanies / Hats",
        "05 Letterman Jackets",
      ],
      note: "Limited Time Offer",
      badge: "Up to 40% OFF",
      whatsappLink: "https://wa.me/923709085311?text=Hi%20Auric%20International,%20I%20am%20interested%20in%20the%20$1500%20Startup%20Wardrobe%20Deal!",
      instaLink: "https://ig.me/m/auric.international"
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-slate-900 py-20 overflow-hidden font-sans">
      {/* Background Glowing Blobs for Premium Glass Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-400 font-semibold tracking-widest text-sm mb-4 uppercase backdrop-blur-md">
            Exclusive Offers
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-wide mb-4">
            Unlock Premium <span className="text-orange-500">Deals</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            High-quality manufacturing packages designed specifically to help clothing brands scale with maximum margins.
          </p>
        </motion.div>

        {/* Deals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {dealsData.map((deal) => (
            <motion.div
              key={deal.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group flex flex-col bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2rem] overflow-hidden transition-all duration-500"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                <FaTag size={12} />
                {deal.badge}
              </div>

              {/* Image Section - UPDATED */}
              {/* Removed fixed height (h-[350px]) and changed object-cover to object-contain */}
              <div className="relative w-full bg-black/30 overflow-hidden flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-70 pointer-events-none" />
                <img
                  src={deal.image}
                  alt={deal.title}
                  loading="lazy"
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Section - UPDATED */}
              {/* Removed mt-[-40px] so it doesn't overlap the text at the bottom of the flyers */}
              <div className="flex flex-col flex-grow p-8 pt-6 relative z-20">
                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-2xl font-bold text-white leading-tight w-2/3">
                    {deal.title}
                  </h2>
                  <span className="text-3xl font-black text-orange-400">
                    {deal.price}
                  </span>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-3">
                  {deal.description}
                </p>

                {/* Features List */}
                <div className="flex-grow space-y-3 mb-8">
                  {deal.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1 shrink-0" size={16} />
                      <span className="text-gray-300 font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer / CTAs */}
                <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider text-center sm:text-left">
                    {deal.note}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row w-full gap-3">
                    {/* WhatsApp Button */}
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={deal.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 text-sm"
                    >
                      <FaWhatsapp size={18} />
                      <span>WhatsApp</span>
                    </motion.a>

                    {/* Instagram Button */}
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={deal.instaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-xl font-bold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300 text-sm"
                    >
                      <FaInstagram size={18} />
                      <span>Instagram</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Deals;