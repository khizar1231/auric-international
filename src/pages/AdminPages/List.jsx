import { useEffect, useMemo, useState } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";

import { FaEdit, FaTrash } from "react-icons/fa";

import EditProductModal from "../../components/AdminSide/EditProductModal";

import { Autocomplete, Pagination, Skeleton, TextField } from "@mui/material";

const limitOptions = [10, 20, 50, 100];

const List = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [editOpen, setEditOpen] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [productType, setProductType] = useState("");

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(20);

  const [totalPages, setTotalPages] = useState(1);

  const [totalProducts, setTotalProducts] = useState(0);
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/product/list", {
        params: {
          category: category || "",
          subCategory: subCategory || "",
          productType: productType || "",
          page,
          limit,
        },
      });
      if (data.success) {
        setProducts(data.products);

        setTotalPages(data.totalPages);

        setTotalProducts(data.totalProducts);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [category, subCategory, productType, page, limit, search]);
  const removeProduct = async (id) => {
    const confirmDelete = window.confirm("Delete this product?");

    if (!confirmDelete) return;

    try {
      const { data } = await api.post("/product/remove", { id });

      if (data.success) {
        toast.success(data.message);

        fetchProducts();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };
  const updateProduct = async (formData) => {
          setUpdateLoading(true);
    try {
      const { data } = await api.put("/product/update", formData);
      if (data.success) {
        toast.success(data.message);

        setEditOpen(false);

        fetchProducts();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update Failed");
    }finally{
      setUpdateLoading(false);
    }
  };
  const categories = [
    ...new Set(products.map((item) => item.category).filter(Boolean)),
  ];

  const subCategories = [
    ...new Set(products.map((item) => item.subCategory).filter(Boolean)),
  ];

  const productTypes = [
    ...new Set(products.map((item) => item.productType).filter(Boolean)),
  ];
  const showingProducts = useMemo(() => {
    return products.length;
  }, [products]);
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">Product Management</h1>

        <p className="text-blue-100 mt-2">
          Manage, filter and edit all products.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500 text-sm">Total Products</p>

          <h2 className="text-3xl font-bold">{totalProducts}</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500 text-sm">Current Page</p>

          <h2 className="text-3xl font-bold">{page}</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500 text-sm">Showing</p>

          <h2 className="text-3xl font-bold">{showingProducts}</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500 text-sm">Category</p>

          <h2 className="text-xl font-bold">{category || "All"}</h2>
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <Autocomplete
            options={categories}
            value={category}
            onChange={(e, newValue) => {
              setCategory(newValue);
              setPage(1);
            }}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />

          <Autocomplete
            options={subCategories}
            value={subCategory}
            onChange={(e, newValue) => {
              setSubCategory(newValue);
              setPage(1);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Sub Category" />
            )}
          />
          <Autocomplete
            options={productTypes}
            value={productType}
            onChange={(e, newValue) => {
              setProductType(newValue);
              setPage(1);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Product Type" />
            )}
          />

          <Autocomplete
            options={limitOptions}
            value={limit}
            getOptionLabel={(option) => option.toString()}
            onChange={(e, newValue) => {
              if (newValue !== null) {
                setLimit(newValue);
                setPage(1);
              }
            }}
            renderInput={(params) => (
              <TextField {...params} label="Products Per Page" />
            )}
          />
        </div>

        <div className="flex justify-end mt-5">
          <button
            onClick={() => {
              setCategory("");
              setSubCategory("");
              setProductType("");
              setSearch("");
              setLimit(20);
              setPage(1);
            }}
            className="px-6 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
          >
            Reset Filters
          </button>
        </div>
      </div>
      {/* ==================== Desktop Table ==================== */}

      <div className="hidden lg:block bg-white rounded-3xl shadow-xl overflow-hidden">
        {loading ? (
          <div className="p-6 space-y-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} variant="rounded" height={70} />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="py-24 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              className="w-28 mx-auto mb-5 opacity-60"
            />

            <h2 className="text-2xl font-bold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2">Try changing your filters.</p>
          </div>
        ) : (
          <table className="w-full text-center">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-5 text-left">Image</th>

                <th>Product Name</th>

                <th>Category</th>

                <th>Sub Category</th>
                <th>Product Type</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="p-4">
                    <img
                      src={item.image[0]}
                      className="w-20 h-20 rounded-2xl object-cover border"
                    />
                  </td>

                  <td>
                    <div>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {item.name}
                      </p>
                    </div>
                  </td>

                  <td>
                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
                      {item.category}
                    </span>
                  </td>

                  <td>
                    <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm">
                      {item.subCategory}
                    </span>
                  </td>

                  <td className="font-bold text-blue-600">
                    {item.productType}
                  </td>

                  <td>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => {
                          setSelectedProduct(item);

                          setEditOpen(true);
                        }}
                        className="w-11 h-11 rounded-xl bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => removeProduct(item._id)}
                        className="w-11 h-11 rounded-xl bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="grid lg:hidden gap-5">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} variant="rounded" height={170} />
          ))
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              className="w-24 mx-auto mb-4 opacity-60"
            />

            <h2 className="font-bold text-xl">No Products Found</h2>
          </div>
        ) : (
          products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img src={item.image[0]} className="w-full h-56 object-cover" />

              <div className="p-5">
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
                    {item.category}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm">
                    {item.subCategory}
                  </span>
                </div>

                <div className="mt-5 flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm">
                    {item.productType}
                  </span>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedProduct(item);

                        setEditOpen(true);
                      }}
                      className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => removeProduct(item._id)}
                      className="w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* ==================== Footer ==================== */}

      {!loading && products.length > 0 && (
        <div className="bg-white rounded-3xl shadow-xl p-6 mt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gray-500 text-sm">
                Showing{" "}
                <span className="font-semibold text-black">
                  {(page - 1) * limit + 1}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-black">
                  {Math.min(page * limit, totalProducts)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-blue-600">
                  {totalProducts}
                </span>{" "}
                Products
              </p>
            </div>

            <Pagination
              page={page}
              count={totalPages}
              color="primary"
              shape="rounded"
              size="large"
              showFirstButton
              showLastButton
              onChange={(event, value) => {
                setPage(value);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </div>
      )}

      {/* ==================== Edit Modal ==================== */}

      <EditProductModal
        open={editOpen}
        product={selectedProduct}
        onClose={() => setEditOpen(false)}
        onSave={updateProduct}
        loading={updateLoading}
      />
    </div>
  );
};

export default List;
