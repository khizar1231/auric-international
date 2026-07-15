/** @format */

import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import RelatedProducts from "../../components/UserSide/RelatedProducts";
import { assets } from "../../assets/assets";
import api from "../../api/axios";
import allProducts from "../../components/UserSide/Forever_Ecommerce.products.json";
const Product = () => {
  const { productId } = useParams();
  const { currency, addToCart } = useContext(ShopContext);
  const [products,setProducts] = useState("")
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const optimizedImage = image.replace(
   "/upload/",
   "/upload/f_auto,q_auto,w_800,h_800,c_limit/"
);

const fetchProductData = () => {
  try {
    setLoading(true);

    const product = allProducts.find(
      (item) => item._id === productId
    );

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    } else {
      setProductData(false);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};  
useEffect(() => {
    fetchProductData();
  }, [productId]);
useEffect(() => {
  if (!productData) return;

  productData.image.forEach((img) => {
    const preload = new Image();
    preload.src = img.replace(
      "/upload/",
      "/upload/f_auto,q_auto,w_800,h_800,c_limit/"
    );
  });
}, [productData]);
if (loading) {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-10 animate-pulse">
        {/* Left */}
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex flex-row sm:flex-col gap-3 w-full sm:w-24">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-gray-200"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="rounded-2xl bg-gray-200 h-[400px] w-full" />
          </div>
        </div>

        {/* Right */}
        <div className="max-w-lg">
          <div className="h-9 w-3/4 bg-gray-200 rounded mb-6" />
          <div className="h-5 w-32 bg-gray-200 rounded mb-6" />

          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 rounded" />
          </div>

          <hr className="my-8" />

          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
  return productData ? (
<div className="pt-10 transition-opacity duration-500 ease-in opacity-100">
  <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-10">

    {/* Left Side */}
    <div className="flex flex-col-reverse sm:flex-row gap-4">

      {/* Thumbnails */}
   <div
  className="
    flex flex-row sm:flex-col
    gap-3 sm:gap-2
    overflow-x-auto sm:overflow-y-auto
    w-full sm:w-24
    sm:h-[420px]
  "
>
  {productData.image.map((item, index) => (
    <img
      key={index}
      onClick={() => setImage(item)}
      src={item.replace(
        "/upload/",
        "/upload/f_auto,q_auto,c_fill,g_auto,w_120,h_120/"
      )}
      alt=""
       width={120}
       height={120}
      className={`w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border cursor-pointer flex-shrink-0 transition ${
        image === item
          ? "border-orange-500"
          : "border-gray-200 hover:border-orange-400"
      }`}
    />
  ))}
</div>

      {/* Main Image */}
  <div className="flex-1">
<div className="rounded-2xl overflow-hidden bg-white h-[400px] w-full flex items-center justify-center">
  <AnimatePresence mode="wait">
    <motion.img
      key={image}
      src={optimizedImage}
      alt={productData.name}
      width={800}
  height={800}
      initial={{
        x: -250,
        scale: 1.15,
        opacity: 0,
        filter: "blur(12px)",
      }}
      animate={{
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      exit={{
        x: 250,
        scale: 0.85,
        opacity: 0,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 0.25,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="max-w-full max-h-full object-contain"
    />
  </AnimatePresence>

</div>
      </div>

    </div>

    {/* Right Side */}
    <div className="max-w-lg">
      <h1 className="text-3xl font-bold text-gray-900">
        {productData.name}
      </h1>

      <div className="flex items-center gap-1 mt-3">
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_dull_icon} alt="" />
        <span className="ml-2 text-gray-600">(122)</span>
      </div>

      <p className="mt-6 text-gray-600 leading-7">
        {productData.description}
      </p>

      <hr className="my-8" />

      <div className="space-y-2 text-gray-600">
        <p>✓ 100% Original Product</p>
        <p>✓ Cash on Delivery Available</p>
        <p>✓ Easy Return & Exchange within 7 Days</p>
      </div>
    </div>

  </div>

  {/* Description */}
  <div className="mt-6">
    <div className="flex">
      <b className="border px-5 py-3 text-sm">Description</b>
    </div>

    <div className="border px-6 py-6 text-sm text-gray-500 space-y-4">
      <p>
        An E-Commerce Platform is a web or mobile application that enables
        businesses to sell products or services online while allowing customers
        to browse, search, purchase, and track orders from anywhere.
      </p>

      <p>
        For administrators and store owners, the platform offers tools to
        manage products, categories, stock levels, orders, customers,
        discounts, and sales reports.
      </p>
    </div>
  </div>

  <RelatedProducts
    productId={productData._id}
    category={productData.category}
    subcategory={productData.subCategory}
  />
</div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
