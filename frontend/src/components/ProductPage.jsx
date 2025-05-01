import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import productsHero from "../assets/products.jpg"; // Adjust the path based on your structure

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products");
        setProducts(response.data);
        setTotalPages(Math.ceil(response.data.length / productsPerPage));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`, { state: { mode: "edit" } });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-blue-100 pt-20 pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={productsHero}
          alt="Products Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            <Typewriter
              words={['Explore Our Premium Product Collection!', 'Discover. Choose. Repeat.']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-4xl font-bold text-center">Explore Our Premium Range of Products</h1>

        {/* Search Bar */}
        <div className="flex justify-end mt-4">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-1/3 border rounded-lg"
          />
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleAddProduct}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:opacity-90"
          >
            Add Product
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {currentProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-xl font-semibold text-center">{product.name}</h2>
                <p className="text-gray-600 text-center">{product.description}</p>
                <p className="text-lg font-bold mt-2 text-center">${product.price}</p>

                <div className="mt-4 flex gap-4 justify-center w-full">
                  <button
                    onClick={() => navigate(`/view-product/${product._id}`)}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-green-600 group-hover:from-green-500 group-hover:to-green-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                  >
                    <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      View
                    </span>
                  </button>

                  <button
                    onClick={() => handleEdit(product._id)}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-blue-600 group-hover:from-blue-500 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      Update
                    </span>
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-300 group-hover:via-red-400 group-hover:to-red-500 hover:text-white dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                  >
                    <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      Delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-2 ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'} rounded-lg`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
