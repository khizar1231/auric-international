/** @format */

import { assets } from "../../../assets/assets";
const SportswearSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Heading */}
      
       <div className="text-center mb-8">
       <h2 className="mt-6 text-2xl md:text-4xl font-black leading-tight text-gray-900">
         APPAREL MANUFACTURER{" "}
         <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
          IN PAKISTAN
         </span>
       </h2>

     </div>
        

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight mb-4">
             Auric International Standing As Best Apparel Manufacturer Trusted
              By 100 Plus Brands
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Are You A Clothing Brand, E-Commerce Store, Retailer, Or
              Wholesaler From Pakistan, The UK, The USA, UAE, Or Any Country In
              Europe? If You're Searching For The Best Quality Sportswear
              Manufacturer In Pakistan For Your Brand, You're In The Right
              Place!
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We Are One Of The Best Clothing Manufacturers In Pakistan,
              Boasting Over A Decade Of Experience And Serving More Than 100
              Clients Worldwide.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Pakistani Manufacturers Are Renowned For Their High-Quality
              Fabrics, And Meet The Needs Of Brands, Retailers, And Wholesalers
              Around The Globe.
            </p>

            <h4 className="text-lg font-semibold mb-2">
              We Offer A Wide Range Of Clothing, Including:
            </h4>

            <ul className="space-y-4 mb-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                <span className="text-base font-semibold text-gray-700">
                  Fashion Wear
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                <span className="text-base font-semibold text-gray-700">
                  Sports Wear
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                <span className="text-base font-semibold text-gray-700">
                  Activewear
                </span>
              </li>
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              Our Services Cover All Sorts Of Garments For Men, Women, And
              Children. Let Us Help You With Your Clothing Supply Needs!
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white shadow-lg p-4 rounded-lg overflow-hidden group">
              <img
                src={assets.SportsWearSection}
                alt="Sportswear"
                loading="lazy"
                className="w-full sm:h-110 h-60 max-w-md object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportswearSection;
