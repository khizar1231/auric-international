/** @format */

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
import HeroSlider from "../../components/UserSide/LandingPage/HeroSlider";
import SportswearSection from "../../components/UserSide/LandingPage/SportswearSection";
import BestManufacturer from "../../components/UserSide/LandingPage/BestManufacturer";
import WhyChooseUs from "../../components/UserSide/LandingPage/WhyChooseUs";
import ServicesSection from "../../components/UserSide/ServicesSection";
import OurBestProducts from "../../components/UserSide/LandingPage/OurBestProducts";
import NewsLeteerBox from "../../components/UserSide/NewsLetter";
import OurPolicy from "../../components/UserSide/LandingPage/OurPolicy";
import Footer from "../../components/UserSide/Footer";
import DeliveryPartners from "../../components/UserSide/LandingPage/DeliveryPartners";
import ProductionFacility from "../../components/UserSide/LandingPage/Facility";
export default function SportswearWebsite() {
  const products = [
    {
      title: "Basketball Uniforms",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
      category: "Elite Sportswear",
    },

    {
      title: "Football Kits",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
      category: "Professional Teamwear",
    },

    {
      title: "Gym Wear",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
      category: "Premium Fitness",
    },

    {
      title: "Custom Sportswear",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      category: "Custom Branding",
    },
  ];

  const features = [
    {
      title: "100% Mobile Responsive",
      icon: <FaMobileAlt />,
      desc: "Perfectly optimized for every device and screen size.",
    },

    {
      title: "Premium Quality Fabric",
      icon: <FaTshirt />,
      desc: "High-end materials designed for comfort and durability.",
    },

    {
      title: "Custom Team Branding",
      icon: <FaPaintBrush />,
      desc: "Professional custom logos, names, and sports branding.",
    },

    {
      title: "Worldwide Shipping",
      icon: <FaShippingFast />,
      desc: "Fast and secure international product delivery service.",
    },

    {
      title: "Fast Production Time",
      icon: <FaBolt />,
      desc: "Efficient manufacturing process with quick turnaround.",
    },

    {
      title: "24/7 Customer Support",
      icon: <FaHeadset />,
      desc: "Dedicated support team available anytime for assistance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="-mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw] mb-2">
        <HeroSlider />
      </div>
      <SportswearSection />
      <BestManufacturer />
      <ProductionFacility/>
      <WhyChooseUs />
      <OurBestProducts />
      <OurPolicy />
    </div>
  );
}
