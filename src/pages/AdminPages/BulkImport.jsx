import { useState } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";
import { FaImages } from "react-icons/fa";

const BulkImport = () => {
  const [excel, setExcel] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!excel) {
      return toast.error("Please select Excel file.");
    }

    if (images.length === 0) {
      return toast.error("Please select product images.");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("excel", excel);

      images.forEach((image) => {
        formData.append("images", image);
      });

      const { data } = await api.post(
        "/product/import",
        formData
      );

      if (data.success) {
        toast.success(data.message);
        setExcel(null);
        setImages([]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Import Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-8 text-white shadow-xl">

        <h1 className="text-4xl font-bold">
          Bulk Product Import
        </h1>

        <p className="mt-2 text-blue-100">
          Import hundreds of products at once.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white mt-8 rounded-3xl shadow-xl p-8 space-y-8"
      >

        {/* Excel */}

        {/* <div>

          <h2 className="text-xl font-semibold mb-4">
            Excel File
          </h2>

          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={(e) =>
              setExcel(e.target.files[0])
            }
            className="w-full border p-4 rounded-xl"
          /> */}
          

        {/* </div> */}
<div>
  <h2 className="text-xl font-semibold text-gray-800 mb-4">
    Excel File
  </h2>

  <label className="group flex items-center justify-between w-full p-5 border-2 border-dashed border-blue-300 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 cursor-pointer">

    <div className="flex items-center gap-4">

      <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl">
        📄
      </div>

      <div>
        <p className="font-semibold text-gray-800">
          {excel ? excel.name : "Choose Excel File"}
        </p>

        <p className="text-sm text-gray-500">
          Supports .xlsx and .xls
        </p>
      </div>

    </div>

    <div className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium group-hover:bg-blue-700 transition">
      Browse
    </div>

    <input
      hidden
      type="file"
      accept=".xlsx,.xls"
      onChange={(e) => setExcel(e.target.files[0])}
    />

  </label>
</div>
        {/* Images */}
{/* 
        <div>

          <h2 className="text-xl font-semibold mb-4">
            Product Images
          </h2>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) =>
              setImages(Array.from(e.target.files))
            }
            className="w-full border p-4 rounded-xl"
          />

          <p className="mt-3 text-gray-500">

            Selected Images :
            <span className="font-bold text-blue-600">
              {" "}
              {images.length}
            </span>

          </p>

        </div> */}
        <div>
  <h2 className="text-xl font-semibold text-gray-800 mb-4">
    Product Images
  </h2>

  <label
    className={`group flex items-center justify-between w-full p-5 border-2 border-dashed rounded-2xl transition-all duration-300 cursor-pointer ${
      images.length > 0
        ? "border-green-500 bg-green-50"
        : "border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50 hover:border-purple-500 hover:bg-purple-100"
    }`}
  >
    <div className="flex items-center gap-4">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl text-white ${
          images.length > 0 ? "bg-green-600" : "bg-purple-600"
        }`}
      >
        <FaImages />
      </div>

      <div>
        <p className="font-semibold text-gray-800">
          {images.length > 0
            ? `${images.length} Images Selected`
            : "Choose Product Images"}
        </p>

        <p className="text-sm text-gray-500">
          JPG, PNG, WEBP supported
        </p>
      </div>
    </div>

    <div
      className={`px-5 py-2 rounded-xl text-white font-medium transition ${
        images.length > 0
          ? "bg-green-600"
          : "bg-purple-600 group-hover:bg-purple-700"
      }`}
    >
      Browse
    </div>

    <input
      hidden
      type="file"
      multiple
      accept="image/*"
      onChange={(e) => setImages(Array.from(e.target.files))}
    />
  </label>

  {images.length > 0 && (
    <div className="mt-5 bg-gray-50 border rounded-2xl p-4 max-h-60 overflow-y-auto">
      <p className="font-semibold text-gray-700 mb-3">
        Selected Files
      </p>

      <div className="space-y-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border"
          >
            <span className="text-gray-700 text-sm truncate">
              {image.name}
            </span>

            <span className="text-xs font-semibold text-purple-600">
              {(image.size / 1024).toFixed(1)} KB
            </span>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

        <button
          disabled={loading}
          className={`w-full py-4 rounded-xl text-white font-bold ${
            loading
              ? "bg-gray-500"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading
            ? "Importing..."
            : "Start Import"}
        </button>

      </form>

    </div>
  );
};

export default BulkImport;