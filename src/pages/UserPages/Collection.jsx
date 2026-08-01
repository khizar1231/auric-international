import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/UserSide/Title";
import ProductItems from "../../components/UserSide/ProductItems";
import { assets } from "../../assets/assets";
import { productCategories } from "../../assets/assets";
import api from "../../api/axios";
import { Autocomplete, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import allProducts from "../../components/UserSide/Forever_Ecommerce.products.json"

const Collection = () => {
  const { search, showSearch } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [totalProducts, setTotalProducts] = useState("");
  const [startProduct, setstartProduct] = useState("");
  const [endProduct, setendProducts] = useState("");
  const [page, setPage] = useState(1);
  const [tempCategory, setTempCategory] = useState("");
  const [tempSubCategory, setTempSubCategory] = useState("");
  const [tempProductType, setTempProductType] = useState("");
  const [searchParams] = useSearchParams();
  const [initialized, setInitialized] = useState(false);
  const categories = Object.keys(productCategories);
  const subCategories = tempCategory
    ? Object.keys(productCategories[tempCategory] || {})
    : [];

  const productTypes =
    tempCategory && tempSubCategory
      ? productCategories[tempCategory]?.[tempSubCategory] || []
      : [];
  const [totalPages, setTotalPages] = useState(1);
  const selectedFilters =
    Number(Boolean(category)) +
    Number(Boolean(subCategory)) +
    Number(Boolean(productType));

  const getPagination = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (page >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }

    return pages;
  };
  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const params = new URLSearchParams();
  //     params.append("store", "sports-wear");

  //     if (category) {
  //       params.append("category", category);
  //     }

  //     if (subCategory) {
  //       params.append("subCategory", subCategory);
  //     }

  //     if (productType) {
  //       params.append("productType", productType);
  //     }

  //     const { data } = await api.get(
  //       `/product/publicList?page=${page}&limit=20&${params.toString()}`,
  //     );
  //     if (data.success) {
  //       setTotalProducts(data.totalProducts);
  //       setProducts(data.products);
  //       setTotalPages(data.totalPages);
  //       setstartProduct(data.startProduct);
  //       setendProducts(data.endProduct);

  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
 
 const fetchProducts = () => {
  try {
    setLoading(true);

    let filteredProducts = [...allProducts];

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === category
      );
    }

    // Filter by subCategory
    if (subCategory) {
      filteredProducts = filteredProducts.filter(
        (item) => item.subCategory === subCategory
      );
    }

    // Filter by productType
    if (productType) {
      filteredProducts = filteredProducts.filter(
        (item) => item.productType === productType
      );
    }

    // Sort newest first (same as backend)
    filteredProducts.sort((a, b) => b.date - a.date);

    const perPage = 20;
    const currentPage = page;

    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / perPage);

    const startProduct =
      totalProducts === 0 ? 0 : (currentPage - 1) * perPage + 1;

    const endProduct = Math.min(currentPage * perPage, totalProducts);

    const paginatedProducts = filteredProducts.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );

    setProducts(paginatedProducts);
    setTotalProducts(totalProducts);
    setTotalPages(totalPages);
    setstartProduct(startProduct);
    setendProducts(endProduct);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
  if (!initialized) return;

  fetchProducts();
}, [initialized, page, category, subCategory, productType]);
useEffect(() => {
  const urlCategory = searchParams.get("category") || "";
  const urlSubCategory = searchParams.get("subCategory") || "";
  const urlProductType = searchParams.get("productType") || "";
  setCategory(urlCategory);
  setSubCategory(urlSubCategory);
  setProductType(urlProductType);

  // Keep the filter UI in sync
  setTempCategory(urlCategory);
  setTempSubCategory(urlSubCategory);
  setTempProductType(urlProductType);
 setInitialized(true);
  setPage(1);
}, [searchParams]);
  if (loading) {
    return (
      <div className="pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="aspect-square rounded-lg bg-gray-200"></div>

              <div className="mt-3 h-4 rounded bg-gray-200"></div>

              <div className="mt-2 h-8 w-28 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {products.length === 0 ? (
        <div className="flex-1 flex items-center justify-center my-10">
          <div className="w-full max-w-3xl min-h-[500px] bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl border border-gray-200 shadow-2xl flex flex-col items-center justify-center px-8 py-16 text-center">
            {/* Icon */}
            <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center shadow-lg mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 13V7a2 2 0 00-2-2h-3l-2-2H9L7 5H4a2 2 0 00-2 2v6m18 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4m18 0H2"
                />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold text-gray-800">
              No Products Found
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-lg text-gray-500 leading-8">
              We couldn't find any products matching your selected filters.
              <br />
              Try changing your filters or check back later for new arrivals.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => {
                  setCategory("");
                  setSubCategory("");
                  setProductType("");
                  setTempCategory("");
                  setTempSubCategory("");
                  setTempProductType("");
                  setPage(1);
                }}
                className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </button>

              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-1 pt-10 mb-10">
          {/* Left side */}
          {/* Premium Sidebar */}
          {/* ========================= FILTER SIDEBAR ========================= */}

          <div className="w-full lg:w-72 shrink-0">
            {/* Mobile Filter Button */}

            <div
              onClick={() => setShowFilter(!showFilter)}
              className="sm:hidden flex items-center justify-between bg-white border rounded-2xl px-5 py-4 shadow-md cursor-pointer mb-5"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold">Filters</span>

                {selectedFilters > 0 && <span>{selectedFilters}</span>}
              </div>

              <img
                src={assets.dropdown_icon}
                className={`w-3 transition ${showFilter ? "rotate-180" : ""}`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${showFilter ? "max-h-[1000px]" : "max-h-0"} sm:max-h-none`}
            >
              <div className="sticky top-28 bg-white rounded-3xl border shadow-xl p-6 space-y-5">
                <div>
                  <h2 className="text-xl font-bold">Filters</h2>
                </div>

                {/* Category */}

                <Autocomplete
                  fullWidth
                  options={categories}
                  value={tempCategory}
                  onChange={(e, value) => {
                    setTempCategory(value || "");
                    setTempSubCategory("");
                    setTempProductType("");
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Category" />
                  )}
                />

                {/* Sub Category */}

                <Autocomplete
                  fullWidth
                  options={subCategories}
                  value={tempSubCategory}
                  disabled={!tempCategory}
                  onChange={(e, value) => {
                    setTempSubCategory(value || "");
                    setTempProductType("");
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Sub Category" />
                  )}
                />

                {/* Product Type */}

                <Autocomplete
                  fullWidth
                  options={productTypes}
                  value={tempProductType}
                  disabled={!tempSubCategory}
                  onChange={(e, value) => {
                    setTempProductType(value || "");
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Product Type" />
                  )}
                />
                <button
                  onClick={() => {
                    setCategory(tempCategory);
                    setSubCategory(tempSubCategory);
                    setProductType(tempProductType);
                    setShowFilter(false);
                    setPage(1);
                  }}
                  className="cursor-pointer w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
                >
                  Apply Filters
                </button>
                <button
                  onClick={() => {
                    setTempCategory("");
                    setTempSubCategory("");
                    setTempProductType("");

                    setCategory("");
                    setSubCategory("");
                    setProductType("");

                    setPage(1);
                  }}
                  className="cursor-pointer w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {startProduct}-{endProduct}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-900">
                    {totalProducts}
                  </span>{" "}
                  products
                </span>
              </div>
            </div>
            {/* Map Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              {products.map((item, index) => (
                <ProductItems
                  key={index}
                  name={item.name}
                  id={item._id}
                  image={item.image}
                ></ProductItems>
              ))}
            </div>
            {/* Premium Smart Pagination */}

            {totalPages > 1 && (
              <div className="flex justify-center mt-14 mb-6">
                <div className="flex flex-wrap justify-center items-center gap-2 bg-white rounded-2xl shadow-xl border border-gray-200 px-3 py-3">
                  {/* First */}
                  <button
                    onClick={() => setPage(1)}
                    disabled={page === 1}
                    className={`px-3 py-2 rounded-xl transition-all duration-300 ${
                      page === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    &#171;
                  </button>

                  {/* Previous */}
                  <button
                    onClick={() => setPage((prev) => prev - 1)}
                    disabled={page === 1}
                    className={`px-3 py-2 rounded-xl transition-all duration-300 ${
                      page === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    &#8249;
                  </button>

                  {getPagination().map((item, index) =>
                    item === "..." ? (
                      <span
                        key={index}
                        className="px-2 text-gray-500 font-semibold"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={index}
                        onClick={() => setPage(item)}
                        className={`w-11 h-11 rounded-xl font-semibold transition-all duration-300 ${
                          page === item
                            ? "bg-gradient-to-r bg-orange-500 text-white shadow-lg scale-110"
                            : "hover:bg-blue-50 text-gray-700"
                        }`}
                      >
                        {item}
                      </button>
                    ),
                  )}

                  {/* Next */}
                  <button
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={page === totalPages}
                    className={`px-3 py-2 rounded-xl transition-all duration-300 ${
                      page === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    &#8250;
                  </button>

                  {/* Last */}
                  <button
                    onClick={() => setPage(totalPages)}
                    disabled={page === totalPages}
                    className={`px-3 py-2 rounded-xl transition-all duration-300 ${
                      page === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    &#187;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Collection;
