// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import ViewUpdateProductPage from './components/ViewUpdateProductPage';
import About from './components/About';
import Contact from './components/Contact'; // ✅ Import Contact component

function App() {
  return (
    <Router>
      {/* Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <div className="min-h-screen pt-20 pb-10">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page Route */}
          <Route path="/productpage" element={<ProductPage />} /> {/* Product Listing Page */}
          <Route path="/add-product" element={<AddProduct />} /> {/* Add Product Page */}
          <Route path="/view-product/:id" element={<ViewUpdateProductPage mode="view" />} /> {/* View Product */}
          <Route path="/edit-product/:id" element={<ViewUpdateProductPage mode="edit" />} /> {/* Edit Product */}
          <Route path="/about" element={<About />} /> {/* About Page Route */}
          <Route path="/contact" element={<Contact />} /> {/* ✅ Contact Page Route */}
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
