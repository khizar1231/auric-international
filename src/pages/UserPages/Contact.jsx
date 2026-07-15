/** @format */

import React from "react";
import { motion } from "framer-motion";
import Title from "../../components/UserSide/Title";
import NewsLeteerBox from "../../components/UserSide/NewsLetter";
import { assets } from "../../assets/assets";
import catalogue from "../../assets/catalogue.pdf";
import {
  FaFilePdf,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  // Framer Motion Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Background Decorative Glowing Blobs for Glassmorphism contrast */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold mb-16"
        >
          <Title text1={"Contact"} text2={"Us"} />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-24"
        >
          {/* Left Side: Image with Hover Effect */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-pink-500/20 rounded-2xl transform translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <img
              className="w-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              src={assets.contact_img}
              loading="lazy"
              alt="Contact Auric International"
            />
          </motion.div>

          {/* Right Side: Glassmorphism Contact Card */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 backdrop-blur-xl bg-white/60 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 lg:p-12"
          >
            <div className="space-y-8">
              {/* Address Section */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-1">Our Factory</h3>
                  <p className="text-gray-600 leading-relaxed">Sialkot, Pakistan</p>
                </div>
              </div>

              {/* Contact Details Section */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                  <FaPhoneAlt size={18} />
                </div>
                <div className="space-y-2 text-gray-600">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">Get in Touch</h3>
                  <p className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    Tel: +92 3709085311
                  </p>
                  <p className="flex items-center gap-2 hover:text-blue-600 transition-colors break-all">
                    <FaEnvelope className="text-gray-400" />
                    auricinternational1111@gmail.com
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6"></div>

              {/* Social Media Section */}
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Connect With Us</h3>
                <p className="text-gray-500 mb-6 text-sm">
                  Explore our premium products, view our catalogue, and stay updated.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {/* Catalogue Button */}
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={catalogue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-red-500 hover:border-red-200 transition-colors"
                  >
                    <FaFilePdf size={18} className="text-red-500" />
                    <span className="font-medium">Catalogue</span>
                  </motion.a>

                  {/* Instagram Button */}
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/auric.international/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-pink-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <FaInstagram size={22} />
                  </motion.a>

                  {/* WhatsApp Button */}
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://wa.me/923709085311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <FaWhatsapp size={22} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section with Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <NewsLeteerBox />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;