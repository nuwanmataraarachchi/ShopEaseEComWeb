import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import productBg from "../assets/productbg.jpg"; // Adjust path based on your folder structure

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [imageError, setImageError] = useState(false);
  const [productAdded, setProductAdded] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
      image: productImage,
    };

    try {
      const response = await axios.post("http://localhost:5001/api/products", newProduct);

      if (response.status === 201) {
        setProductAdded(true);
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductImage("");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (productAdded) {
    return (
      <div
        className="p-6 min-h-screen"
        style={{
          backgroundImage: `url(${productBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold text-center text-white">Product Added Successfully!</h1>
        <p className="text-lg text-center mt-4 text-white">
          Your product has been added. Click below to go to the product page.
        </p>
        <button
          onClick={() => navigate("/productpage")}
          className="bg-blue-500 text-white p-2 rounded-lg mt-4 mx-auto block"
        >
          Go to Product Page
        </button>
      </div>
    );
  }

  return (
    <div
      className="p-6 min-h-screen"
      style={{
        backgroundImage: `url(${productBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-center text-white">Add Product</h1>
      <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-lg font-semibold">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold">Description</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter product description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold">Price</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter product price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold">Product Image URL</label>
          <input
            type="text"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter product image URL"
          />
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">Image URL: {productImage}</p>
        </div>

        {productImage && !imageError ? (
          <div className="mb-4">
            <img
              src={productImage}
              alt="Product Preview"
              className="w-full h-64 object-cover mt-4"
              onError={handleImageError}
            />
          </div>
        ) : (
          imageError && (
            <p className="text-red-500">Failed to load the image. Please check the URL.</p>
          )
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg mt-4 w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
