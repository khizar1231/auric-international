/** @format */

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MegaMenu({ title, categories, transparent }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}

      <div
        className={`flex items-center gap-1 uppercase font-semibold text-[14px] tracking-wide transition duration-300 ${
          transparent ? "text-white" : "text-gray-700"
        }`}
      >
        <Link
          to={`/product?category=${encodeURIComponent(title)}`}
          onClick={() => setOpen(false)}
          className="hover:text-orange-500 transition"
        >
          {title}
        </Link>

        <ChevronDown
          size={16}
          className={`transition duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`
absolute
left-1/2
-translate-x-[35%]
top-[25px]
rounded-3xl
bg-white
shadow-[0_20px_60px_rgba(0,0,0,.12)]
border
border-gray-100
p-10
z-[999]
${
  Object.keys(categories).length === 1
    ? "w-[340px]"
    : Object.keys(categories).length === 2
      ? "w-[650px]"
      : Object.keys(categories).length === 3
        ? "w-[900px]"
        : "w-[1200px]"
}
`}
          >
            <div
              className={`grid gap-10 ${
                Object.keys(categories).length === 1
                  ? "grid-cols-1"
                  : Object.keys(categories).length === 2
                    ? "grid-cols-2"
                    : Object.keys(categories).length === 3
                      ? "grid-cols-3"
                      : "grid-cols-4"
              }`}
            >
              {Object.entries(categories).map(([heading, products]) => (
                <div key={heading}>
                  <Link
                    to={`/product?category=${encodeURIComponent(
                      title,
                    )}&subCategory=${encodeURIComponent(heading)}`}
                    onClick={() => setOpen(false)}
                    className="block text-black font-bold uppercase mb-5 tracking-wide text-lg hover:text-orange-500 transition"
                  >
                    {heading}
                  </Link>

                  <div className="space-y-3">
                    {products.map((product) => (
                      <Link
                        key={product}
                        to={`/product?category=${encodeURIComponent(
                          title,
                        )}&productType=${encodeURIComponent(product)}`}
                        onClick={() => setOpen(false)}
                        className="block text-gray-600 hover:text-orange-500 transition"
                      >
                        {product}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
