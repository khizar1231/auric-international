/** @format */

import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
const BestManufacturer = () => {
  return (
    <section className="py-10 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Button */}
        <div className="flex justify-center mb-4">
        <Link to="/contact">
          <button className="cursor-pointer bg-gradient-to-b from-orange-400 to-orange-700 text-white font-semibold tracking-[3px] px-8 py-4 rounded-md hover:scale-105 duration-300">
            Inquiry Now
          </button>
        </Link>
        </div>

        {/* Small Heading */}
        <h3 className="text-center text-base sm:text-2xl font-bold text-slate-900 mb-12">
          Best Clothing Manufacturer In Pakistan
        </h3>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={assets.Best}
              alt="Uniform Versions"
              loading="lazy"
              className="w-full max-w-lg object-cover rounded-lg shadow-lg hover:scale-105 duration-500"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-base md:text-xl font-bold text-slate-900 leading-tight mb-4">
              What Sets the Best Clothing Manufacturers Apart?
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              The Best Clothing Manufacturers Excel Due To Their Commitment To
              Quality And Innovative Practices In Producing A Wide Range Of
              Garments, Including Fashion Wear And Sportswear.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              As A Leading Clothing Manufacturer In Pakistan, We Utilize
              Top-Of-The-Line Machinery To Ensure The Highest Quality Fabric
              Production. Our Facilities Are Equipped With The Latest Computer
              Sewing Machines, Advanced Fabric Cutters—Such As Laser Cutting
              Machines—And State-Of-The-Art Printing And Embroidery Equipment.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              These Best Practices Enable Us To Deliver Exceptional Products
              That Meet The Diverse Needs Of Our Clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestManufacturer;
