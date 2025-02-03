import React, { useState } from "react";
import axios from "axios";

const SellersPanel = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [sku, setSku] = useState("");
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState("");

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setProductData(null); // Reset product data when switching tabs
    setError("");
  };

  // Handle fetch data
  const handleFetchData = async () => {
    if (!sku) {
      setError("Please enter a SKU.");
      return;
    }

    try {
      const response = await axios.get(`/api/products/${sku}`);
      setProductData(response.data);
      setError("");
    } catch (err) {
      setError("Product not found.");
      setProductData(null);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === "add") {
        await axios.post("/api/products", productData);
        alert("Product added successfully!");
      } else if (activeTab === "update") {
        await axios.put(`/api/products/${sku}`, productData);
        alert("Product updated successfully!");
      } else if (activeTab === "delete") {
        await axios.delete(`/api/products/${sku}`);
        alert("Product deleted successfully!");
      }
      setProductData(null); // Reset form after submission
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Navbar */}
      <nav className="bg-[#232f3f] text-white p-4 rounded-lg shadow-md">
        <div className="flex space-x-6">
          <button
            onClick={() => handleTabChange("add")}
            className={`px-4 py-2 rounded ${
              activeTab === "add" ? "bg-orange-500" : "hover:bg-gray-700"
            }`}
          >
            Add Products
          </button>
          <button
            onClick={() => handleTabChange("update")}
            className={`px-4 py-2 rounded ${
              activeTab === "update" ? "bg-orange-500" : "hover:bg-gray-700"
            }`}
          >
            Update Products
          </button>
          <button
            onClick={() => handleTabChange("delete")}
            className={`px-4 py-2 rounded ${
              activeTab === "delete" ? "bg-orange-500" : "hover:bg-gray-700"
            }`}
          >
            Delete Products
          </button>
          <button
            onClick={() => handleTabChange("view")}
            className={`px-4 py-2 rounded ${
              activeTab === "view" ? "bg-orange-500" : "hover:bg-gray-700"
            }`}
          >
            View Products
          </button>
        </div>
      </nav>

      {/* Fetch Data Section */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter Product SKU"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none"
          />
          <button
            onClick={handleFetchData}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Fetch Data
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* Form Section */}
      {productData && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Base Product Fields */}
            <div>
              <label className="block text-sm font-semibold">SKU</label>
              <input
                type="text"
                name="sku"
                value={productData.sku}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Category</label>
              <input
                type="text"
                name="category"
                value={productData.category}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Price</label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Stock</label>
              <input
                type="number"
                name="stocks"
                value={productData.stocks}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none"
                required
              />
            </div>

            {/* Additional Fields Based on Product Type */}
            {productData.productType === "HomeDecor" && (
              <>
                <div>
                  <label className="block text-sm font-semibold">
                    Material
                  </label>
                  <input
                    type="text"
                    name="material"
                    value={productData.material}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">Style</label>
                  <input
                    type="text"
                    name="style"
                    value={productData.style}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:outline-none"
                  />
                </div>
              </>
            )}

            {productData.productType === "Furniture" && (
              <>
                <div>
                  <label className="block text-sm font-semibold">
                    Frame Material
                  </label>
                  <input
                    type="text"
                    name="frameMaterial"
                    value={productData.frameMaterial}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Room Type
                  </label>
                  <input
                    type="text"
                    name="roomType"
                    value={productData.roomType}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:outline-none"
                  />
                </div>
              </>
            )}

            {/* Add more product type-specific fields as needed */}

            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              {activeTab === "add"
                ? "Add Product"
                : activeTab === "update"
                ? "Update Product"
                : "Delete Product"}
            </button>
          </form>
        </div>
      )}

      {/* View Products Section */}
      {activeTab === "view" && productData && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <div className="space-y-2">
            <p>
              <strong>SKU:</strong> {productData.sku}
            </p>
            <p>
              <strong>Name:</strong> {productData.name}
            </p>
            <p>
              <strong>Category:</strong> {productData.category}
            </p>
            <p>
              <strong>Price:</strong> ${productData.price}
            </p>
            <p>
              <strong>Stock:</strong> {productData.stocks}
            </p>
            {productData.productType === "HomeDecor" && (
              <>
                <p>
                  <strong>Material:</strong> {productData.material}
                </p>
                <p>
                  <strong>Style:</strong> {productData.style}
                </p>
              </>
            )}
            {productData.productType === "Furniture" && (
              <>
                <p>
                  <strong>Frame Material:</strong> {productData.frameMaterial}
                </p>
                <p>
                  <strong>Room Type:</strong> {productData.roomType}
                </p>
              </>
            )}
            {/* Add more product type-specific fields as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SellersPanel;
