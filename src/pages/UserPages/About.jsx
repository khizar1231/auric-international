/** @format */

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Assuming react-router is used for navigation
import Title from "../../components/UserSide/Title";
import NewsLeteerBox from "../../components/UserSide/NewsLetter";
import DeliveryPartners from "../../components/UserSide/LandingPage/DeliveryPartners";
import { assets } from "../../assets/assets";

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] overflow-hidden">
      
      {/* --- ABOUT US SECTION --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-3xl text-center pt-8 mb-12"
      >
        <Title text1={"About"} text2={"Auric International"} />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col lg:flex-row gap-12 items-center mb-24"
      >
        <motion.img
          variants={fadeInUp}
          className="w-full lg:w-5/12 rounded-2xl shadow-2xl object-cover"
          src={assets.about_img}
          loading="lazy"
          alt="About Auric International"
        />
        
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col justify-center gap-6 lg:w-7/12 text-gray-700 bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-12 rounded-3xl shadow-xl"
        >
         <p className="leading-relaxed text-lg">
            At <b>Auric International</b>, we specialize in the end-to-end manufacturing of premium custom clothing for fashion brands, retailers, and organizations. Whether you need high-quality streetwear, versatile activewear, or premium jackets, our state-of-the-art facility is equipped to handle it all. "Dream it. We make it."
          </p>
          
          <div>
           <b className="text-gray-900 text-xl block mb-2">Our Mission</b>
          <p className="leading-relaxed text-lg">
            To provide brands of all sizes with high-quality, custom-manufactured apparel that meets the highest standards of design and performance. We strive to be a trusted global partner by offering endless customization, competitive pricing, and a seamless journey from concept to delivery.
          </p>
          </div>
        </motion.div>
      </motion.div>

      {/* --- HOW TO ORDER PROCESS SECTION --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-3xl text-center py-8"
      >
        <Title text1={"How To"} text2={"Order"} />
        <p className="text-gray-500 mt-3 text-lg">Your custom apparel journey in 4 simple steps.</p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {/* Step 1 */}
        <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-3xl shadow-lg border border-white/50 bg-white/30 backdrop-blur-sm transition-transform hover:-translate-y-2">
          <img src={assets.process1} alt="Choose Your Product" className="w-full h-auto object-cover" />
        </motion.div>
        
        {/* Step 2 */}
        <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-3xl shadow-lg border border-white/50 bg-white/30 backdrop-blur-sm transition-transform hover:-translate-y-2">
          <img src={assets.process2} alt="Pick a Design Element" className="w-full h-auto object-cover" />
        </motion.div>

        {/* Step 3 */}
        <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-3xl shadow-lg border border-white/50 bg-white/30 backdrop-blur-sm transition-transform hover:-translate-y-2">
          <img src={assets.process3} alt="Exclusive Brand Signatures" className="w-full h-auto object-cover" />
        </motion.div>

        {/* Step 4 */}
        <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-3xl shadow-lg border border-white/50 bg-white/30 backdrop-blur-sm transition-transform hover:-translate-y-2">
          <img src={assets.process4} alt="Why Choose Us & Delivery" className="w-full h-auto object-cover" />
        </motion.div>
      </motion.div>

      {/* CTA Section Navigating to Contact */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex justify-center mb-24"
      >
        <button 
          onClick={() => navigate('/contact')}
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium text-white bg-gray-900 rounded-full shadow-2xl group hover:bg-gray-800 transition-all duration-300 ease-out"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="relative text-lg tracking-wider font-semibold">Start Your Order Now</span>
        </button>
      </motion.div>

      {/* --- WHY CHOOSE US (GLASSMORPHISM CARDS) --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-2xl text-center py-4 mb-8"
      >
        <Title text1={"Why"} text2={"Choose Us"} />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-24"
      >
        {[
          {
            title: "Quality Assurance",
            desc: "Every product is manufactured using carefully selected fabrics, advanced printing techniques, and strict quality control standards to ensure superior durability, comfort, and long-lasting performance."
          },
          {
            title: "Seamless Convenience",
            desc: "We provide complete customization services, allowing you to choose your preferred colors, designs, logos, names, and sizes. Our streamlined ordering process makes it easy for teams to get exactly what they need."
          },
          {
            title: "Exceptional Service",
            desc: "From your initial inquiry to final delivery, our dedicated team is committed to providing responsive communication, professional guidance, timely production, and dependable after-sales support."
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className="flex flex-col gap-4 p-8 sm:p-10 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xl hover:bg-white/60 transition-colors duration-300"
          >
            <b className="text-xl text-gray-900">{item.title}</b>
            <p className="text-gray-700 leading-relaxed text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* --- FOOTER COMPONENTS --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <DeliveryPartners />
        <NewsLeteerBox />
      </motion.div>
      
    </div>
  );
};

export default About;