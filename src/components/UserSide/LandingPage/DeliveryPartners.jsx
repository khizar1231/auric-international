import { assets } from "../../../assets/assets";
const partners = [
  {
    name: "DHL",
    logo: assets.Dhl,
    border: "border-red-600",
  },
  {
    name: "UPS",
    logo: assets.ups,
    border: "border-yellow-500",
  },
  {
    name: "FedEx",
    logo: assets.FedEx,
    border: "border-orange-500",
  },
  {
    name: "TNT",
    logo: assets.TNT,
    border: "border-orange-500",
  },
];

export default function DeliveryPartners() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <h2 className="text-center text-xl md:text-3xl font-bold italic text-[#1f3147] mb-10">
          Our Delivery Partners
        </h2>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <div
                className={`
                  w-40
                  h-40
                  md:w-45
                  md:h-45
                  rounded-full
                  border-4
                  ${partner.border}
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  hover:shadow-2xl
                  hover:scale-105
                  transition-all
                  duration-300
                `}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 md:w-25 object-contain"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}