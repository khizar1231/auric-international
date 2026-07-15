import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { productCategories } from "../../assets/assets";
const EditProductModal = ({
  open,
  onClose,
  product,
  onSave,
  loading = false,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Sports Apparel",
    subCategory: "Sports Wear Uniforms",
    productType: "American Football Uniform",
  });

  const [images, setImages] = useState([null, null, null, null]);

useEffect(() => {
  if (product) {
    setFormData({
      name: product.name || "",
      description: product.description || "",
      category: product.category || "Sports Apparel",
      subCategory: product.subCategory || "Sports Wear Uniforms",
      productType: product.productType || "American Football Uniform",
    });

    setImages(product.image || []);
  }
}, [product]);

  if (!open) return null;

const handleSubmit = () => {
  const data = new FormData();

  data.append("id", product._id);
  data.append("name", formData.name);
  data.append("description", formData.description);
  data.append("category", formData.category);
  data.append("subCategory", formData.subCategory);
  data.append("productType", formData.productType);

  images.forEach((img, index) => {
    if (img instanceof File) {
      data.append(`image${index + 1}`, img);
    }
  });

  onSave(data);
};

  return (
  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md overflow-y-auto">

<div className="min-h-screen flex items-start justify-center py-6 px-3">

<div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden animate-[fadeIn_.25s_ease]">

        <div className="flex items-center justify-between px-8 py-3 border-b">

          <div>
            <h2 className="text-xl font-bold">
              Edit Product
            </h2>

            <p className="text-gray-500 mt-1">
              Update product information
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-lg"
          >
            <FaTimes />
          </button>

        </div>
        
       
        <div className="p-4">
          <div className="mt-6 mb-2 max-w-100">

            <label className="font-semibold">
              Name
            </label>

            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full mt-2 border rounded-xl p-4 resize-none"
            />

          </div>

          {/* Images */}

          <h3 className="font-semibold text-base mb-4">
            Product Images
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

           {images.map((img, index) => (
  <label
    key={index}
    className="relative rounded-2xl overflow-hidden border cursor-pointer"
  >
    <input
      hidden
      type="file"
      accept="image/*"
      onChange={(e) => {
        const copy = [...images];
        copy[index] = e.target.files[0];
        setImages(copy);
      }}
    />

    <img
      src={
        img instanceof File
          ? URL.createObjectURL(img)
          : img
      }
      className="w-full h-40 object-cover"
    />

    <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white rounded-xl py-2 text-center">
      Replace
    </div>
  </label>
))}

          </div>

          {/* Grid */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* Category */}

  <div>

    <label className="font-semibold">
      Category
    </label>

    <select
      value={formData.category}
      onChange={(e) => {

        const category = e.target.value;

        const subCategories = Object.keys(
          productCategories[category]
        );

        const firstSubCategory = subCategories[0];

        const firstProduct =
          productCategories[category][firstSubCategory][0];

        setFormData((prev) => ({
          ...prev,
          category,
          subCategory: firstSubCategory,
          productType: firstProduct,
        }));

      }}
      className="w-full mt-2 border rounded-xl p-4"
    >

      {Object.keys(productCategories).map((category) => (

        <option
          key={category}
          value={category}
        >
          {category}
        </option>

      ))}

    </select>

  </div>

  {/* Sub Category */}

  <div>

    <label className="font-semibold">
      Sub Category
    </label>

    <select
      value={formData.subCategory}
      onChange={(e) => {

        const subCategory = e.target.value;

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
      className="w-full mt-2 border rounded-xl p-4"
    >

      {Object.keys(
        productCategories[formData.category] || {}
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

    <label className="font-semibold">
      Product Type
    </label>

    <select
      value={formData.productType}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          productType: e.target.value,
        }))
      }
      className="w-full mt-2 border rounded-xl p-4"
    >

      {(productCategories[
        formData.category
      ]?.[
        formData.subCategory
      ] || []).map((product) => (

        <option
          key={product}
          value={product}
        >
          {product}
        </option>

      ))}

    </select>

  </div>

</div>

          {/* Description */}

          <div className="mt-6">

            <label className="font-semibold">
              Description
            </label>

            <textarea
              rows={5}
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
              className="w-full mt-2 border rounded-xl p-4 resize-none"
            />

          </div>


          {/* Footer */}

          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-10">

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl border"
            >
              Cancel
            </button>

         <button
  disabled={loading}
  onClick={handleSubmit}
  className="px-10 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold"
>
  {loading ? "Updating..." : "Update Product"}
</button>

          </div>

        </div>

      </div>
    </div>
    </div>
  );
};

export default EditProductModal;