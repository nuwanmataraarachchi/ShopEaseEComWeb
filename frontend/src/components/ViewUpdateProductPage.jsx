import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewUpdateProductPage = ({ mode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/api/products/${id}`, product);
      setUpdateSuccess(true);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const isViewMode = mode === "view";

  return (
    <div className="min-h-screen bg-blue-100 pt-20 pb-20 flex justify-center items-start">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isViewMode ? "View Product" : "Update Product"}
        </h1>

        {updateSuccess ? (
          <div className="mb-6 text-center">
            <p className="text-green-600 text-lg font-semibold mb-3">
              Product updated successfully!
            </p>
            <button
              type="button"
              onClick={() => navigate("/productpage")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Go to Product Page
            </button>
          </div>
        ) : (
          <>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              disabled={isViewMode}
              className="w-full p-2 mb-4 border rounded"
            />

            <label className="block mb-2 text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              disabled={isViewMode}
              className="w-full p-2 mb-4 border rounded"
            ></textarea>

            <label className="block mb-2 text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              disabled={isViewMode}
              className="w-full p-2 mb-4 border rounded"
            />

            <label className="block mb-2 text-sm font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              disabled={isViewMode}
              className="w-full p-2 mb-4 border rounded"
            />

            {product.image && (
              <img
                src={product.image}
                alt="Preview"
                className="w-full h-48 object-cover mb-4 rounded"
              />
            )}

            {!isViewMode && (
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                Update Product
              </button>
            )}
          </>
        )}

        {/* "Back to Products Page" button only for View mode */}
        {isViewMode && (
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => navigate("/productpage")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              Back to Products Page
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ViewUpdateProductPage;
