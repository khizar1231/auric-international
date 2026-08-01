/** @format */

import { assets } from "../../../assets/assets";
import {
  FaMobileAlt,
  FaTshirt,
  FaPaintBrush,
  FaShippingFast,
  FaBolt,
  FaHeadset,
  FaStar,
  FaArrowRight,
  FaSmile,
  FaBoxes,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "100% Customer Satisfaction",
    icon: <FaSmile />,
    desc: "Committed to delivering premium products with complete customer satisfaction.",
  },

  {
    title: "Premium Sports Fabric",
    icon: <FaTshirt />,
    desc: "Breathable, durable, and performance-driven fabrics for every sport.",
  },

  {
    title: "Custom Team Uniforms",
    icon: <FaPaintBrush />,
    desc: "Personalized jerseys, logos, player names, numbers, and team branding.",
  },

  {
    title: "Worldwide Shipping",
    icon: <FaShippingFast />,
    desc: "Reliable international shipping with secure packaging and on-time delivery.",
  },

  {
    title: "Fast Production",
    icon: <FaBolt />,
    desc: "Quick manufacturing process to meet bulk and urgent order requirements.",
  },

  {
    title: "Bulk Order Manufacturing",
    icon: <FaBoxes />,
    desc: "Specialized in large-scale production for clubs, schools, and businesses.",
  },
];
const WhyChooseUs = () => {
  const benefits = [
    "First Of All, Our Proven Track Record Of Serving 100+ Clients Across The Globe With Excellent Feedback.",

    "Secondly, Our Team Of Experts Includes Designers, Pattern Masters, Cutting Masters, And Craftsmen With Over A Decade Of Experience.",

    "State Of The Art Full-Service Manufacturing Facility For Clothing Manufacturing.",

    "Wide Range Of Customization Options For Clients, Including Integrating Their Brand Logo, Colors, And Embroidery According To Their Vision.",

    "Top-Notch Designer Support Guides You To Choose The Best Design According To Your Target Audience And Region.",

    "Multiple Door-Step Delivery Options For Brands, Retailers, And Wholesalers Across The Globe Including The United States, Europe, And The Middle East.",
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-center text-base md:text-xl font-extrabold text-[#1f3147] leading-tight mb-12">
          What Makes Us The Top Choice Of Brands For Clothing Manufacturing In
          Pakistan
        </h2>
        {/* Premium Video Section */}
<div className="mb-16">
  <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
    <video
      className="w-full h-[250px] md:h-[450px] lg:h-[600px] object-cover"
      src={assets.WhyChooseVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</div>
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left Side */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-black leading-relaxed mb-6">
              What Makes AURIC INTERNATIONAL The Top Choice Of Brands, Retailers,
              And Wholesalers For Clothing Manufacturing In Pakistan?
            </h3>

            <ul className="space-y-7">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-3 h-2 w-2 rounded-full bg-black flex-shrink-0"></span>

                  <p className="text-sm md:text-base italic text-gray-800 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-4 shadow-xl rounded-lg overflow-hidden group">
              <img
                src={assets.ChooseUs}
                alt="Clothing Manufacturing"
                loading="lazy"
                className="w-full max-w-lg h-100 sm:h-130  object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
