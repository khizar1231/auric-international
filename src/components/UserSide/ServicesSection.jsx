/** @format */

import { assets } from "../../assets/assets";
const services = [
  {
    title: "Clothing Design",
    image: assets.Clothing,
    description:
      "Being The Leading Pakistani Clothing Manufacturing Company We Facilitate Our Clients With Custom Designing Services Tailored To Their Brand Requirements.",
  },
  {
    title: "Cut & Sew",
    image: assets.Sue,
    description:
      "Being The Best Clothing Manufacturing Company In Pakistan We Have Our Own Manufacturing Facility Equipped With Modern Cut And Sew Operations.",
  },
  {
    title: "Sublimation",
    image: assets.Sublimation,
    description:
      "We Offer Clients Custom Sublimation Printing On Their Clothing Products Using High Quality Technology For Long Lasting Results.",
  },
  {
    title: "Screen Printing",
    image: assets.ScreenPrinting,
    description:
      "Our Team Of Experienced Printers Provides Premium Quality Screen Printing Solutions For Clothing Brands Worldwide.",
  },
  {
    title: "Labeling",
    image: assets.Labeling,
    description:
      "We Offer Private Labeling Options According To Your Brand Requirements Including Neck Labels, Hang Tags And Packaging.",
  },
  {
    title: "Embroidery",
    image: assets.Embroidery,
    description:
      "Our State Of The Art Embroidery Machines Produce High Quality Embroidered Logos And Designs With Precision.",
  },
  {
    title: "Delivery",
    image: assets.Delivery,
    description:
      "We Facilitate Worldwide Door-To-Door Delivery Services Across The USA, Europe, Middle East And Other Regions.",
  },
  {
    title: "Sportswear Development",
    image: assets.SportsWearService,
    description:
      "From concept to final production, we help transform your ideas into premium-quality sportswear collections that reflect your brand vision and meet global standards.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-14 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1f3147] mb-16">
          Our Services We Provide To Our Clients
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-2xl
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-500
                overflow-hidden
                flex
                flex-col
              "
            >
              {/* Title */}
              <div className="p-6">
                <h3 className="text-center text-xl md:text-2xl font-bold italic text-[#1f3147]">
                  {service.title}
                </h3>
              </div>

              {/* Image */}
              <div className="overflow-hidden px-4">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="
                    w-full
                    h-[380px]
                    object-cover
                    rounded-lg
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow">
                <p className="text-sm italic text-gray-700 leading-9">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
