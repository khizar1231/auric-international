
import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({ id, image, name }) => {
  const { currency } = useContext(ShopContext);
const optimizedImage = image?.[0]?.replace(
  "/upload/",
  "/upload/f_auto,q_auto,w_400,h_400,c_fill/"
);
  return (
    <Link
      to={`/product/${id}`}
      className="block text-gray-500 group"
    >
  <div className="w-full overflow-hidden rounded-lg bg-gray-100">
  <img
  src={optimizedImage}
  alt={name}
  loading="lazy"
  decoding="async"
  width={500}
  height={500}
  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
/>

      </div>
<div className="flex flex-col items-center gap-1 pt-3 pb-1">
  <p className="flex-1 text-sm font-semibold text-gray-800 line-clamp-2 min-h-[20px]">
    {name}
  </p>

  <button className=" shrink-0 px-5 py-1.5 text-xs font-semibold rounded-lg border border-orange-500 bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600">
    Detail Page
  </button>
</div>
    </Link>
  );
};

export default ProductItems;