import { useState } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";
import { productCategories } from "../../assets/assets";
const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Sports Apparel",
    subCategory: "Sports Wear Uniforms",
    productType: "American Football Uniform",
  });
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([undefined, undefined, undefined, undefined]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSize = (size) => {
    if (formData.sizes.includes(size)) {
      setFormData((prev) => ({
        ...prev,
        sizes: prev.sizes.filter((item) => item !== size),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        sizes: [...prev.sizes, size],
      }));
    }
  };

  const handleImage = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("subCategory", formData.subCategory);
    data.append("productType", formData.productType);
    // Images
    if (images[0]) data.append("image1", images[0]);
    if (images[1]) data.append("image2", images[1]);
    if (images[2]) data.append("image3", images[2]);
    if (images[3]) data.append("image4", images[3]);

    const response = await api.post("/product/add", data);

    if (response.data.success) {
      toast.success(response.data.message);

      // Reset form
      setFormData({
        name: "",
        description: "",
      category: "Sports Apparel",
  subCategory: "Sports Wear Uniforms",
        productType:"American Football Uniform"
      });

      setImages([undefined, undefined, undefined, undefined]);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Failed to add product"
    );
  }finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}

      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-5 sm:p-8 shadow-lg sm:shadow-xl">

        <h1 className="text-xl sm:text-4xl font-bold text-white">
          Add New Product
        </h1>

        <p className="text-blue-100 mt-2">
          Fill all product information below.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl mt-8 p-6 md:p-10 space-y-8"
      >

        {/* Images */}

        <div> 

          <h2 className="text-xl font-semibold text-gray-700 mb-5">
            Product Images
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {images.map((image, index) => (

              <label
                key={index}
                className="h-40 rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 hover:bg-blue-100 cursor-pointer flex items-center justify-center transition"
              >

                <input
                  hidden
                  type="file"
                  onChange={(e) =>
                    handleImage(index, e.target.files[0])
                  }
                />

                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="text-center">

                    <div className="text-5xl text-blue-600">
                      +
                    </div>

                    <p className="text-gray-500 text-sm">
                      Upload
                    </p>

                  </div>
                )}

              </label>

            ))}

          </div>

        </div>

        {/* Product Name */}

        <div>

          <label className="font-semibold text-gray-700">
            Product Name
          </label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nike Basketball Jersey"
            className="mt-2 w-full rounded-xl border p-4 focus:ring-4 focus:ring-blue-200 outline-none"
          />

        </div>

        {/* Description */}

        <div>

          <label className="font-semibold text-gray-700">
            Description
          </label>

          <textarea
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write product description..."
            className="mt-2 w-full rounded-xl border p-4 resize-none focus:ring-4 focus:ring-blue-200 outline-none"
          />

        </div>

        {/* Grid */}
{/* 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div>

            <label className="font-semibold text-gray-700">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-2 w-full border rounded-xl p-4"
            >
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>

          </div>

          <div>

            <label className="font-semibold text-gray-700">
              Sub Category
            </label>

            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="mt-2 w-full border rounded-xl p-4"
            >
              <option>Topwear</option>
              <option>Bottomwear</option>
              <option>Winterwear</option>
            </select>

          </div>

        </div> */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

  {/* Category */}

  <div>

    <label className="font-semibold text-gray-700">

      Category

    </label>

    <select
      name="category"
      value={formData.category}
      onChange={(e) => {

        const category = e.target.value;

        const subCategories = Object.keys(
          productCategories[category]
        );

        const firstSubCategory = subCategories[0];

        const firstProduct =
          productCategories[category][
            firstSubCategory
          ][0];

        setFormData((prev) => ({
          ...prev,
          category,
          subCategory: firstSubCategory,
          productType: firstProduct,
        }));
      }}
      className="mt-2 w-full border rounded-xl p-4"
    >

      {Object.keys(productCategories).map(
        (category) => (

          <option
            key={category}
            value={category}
          >

            {category}

          </option>

        )
      )}

    </select>

  </div>

  {/* Sub Category */}

  <div>

    <label className="font-semibold text-gray-700">

      Sub Category

    </label>

    <select
      name="subCategory"
      value={formData.subCategory}
      onChange={(e) => {

        const subCategory =
          e.target.value;

        const firstProduct =
          productCategories[
            formData.category
          ][subCategory][0];

        setFormData((prev) => ({
          ...prev,
          subCategory,
          productType: firstProduct,
        }));
      }}
      className="mt-2 w-full border rounded-xl p-4"
    >

      {Object.keys(
        productCategories[
          formData.category
        ]
      ).map((sub) => (

        <option
          key={sub}
          value={sub}
        >

          {sub}

        </option>

      ))}

    </select>

  </div>

  {/* Product Type */}

  <div>

    <label className="font-semibold text-gray-700">

      Product Type

    </label>

    <select
      name="productType"
      value={formData.productType}
      onChange={handleChange}
      className="mt-2 w-full border rounded-xl p-4"
    >

      {productCategories[
        formData.category
      ][formData.subCategory].map(
        (product) => (

          <option
            key={product}
            value={product}
          >

            {product}

          </option>

        )
      )}

    </select>

  </div>

</div>
        {/* Sizes */}

        <div>
        </div>


        {/* Button */}

        <div>

          <button
  type="submit"
  disabled={loading}
  className={`w-full md:w-auto px-10 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl flex items-center justify-center gap-3 shadow-xl transition ${
    loading
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:scale-105"
  }`}
>
  {loading ? (
    <>
      <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
      Adding Product...
    </>
  ) : (
    "Add Product"
  )}
</button>

        </div>

      </form>

    </div>
  );
};

export default Add;