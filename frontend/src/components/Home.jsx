import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Writer from './Writer';

const Home = () => {
  const navigate = useNavigate();

  // Array of slide images
  const slideImages = [
    require('../assets/slides/slide1.jpg'),
    require('../assets/slides/slide2.jpg'),
    require('../assets/slides/slide3.jpg'),
    require('../assets/slides/slide4.jpg'),
    require('../assets/slides/slide5.jpg'),
  ];

  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleShopNow = () => {
    navigate('/productpage');
  };

  return (
    <div>
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-2xl font-bold text-blue-600">ShopEase</h1>
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <button onClick={() => navigate('/productpage')} className="hover:text-blue-600">Home</button>
            <button onClick={() => navigate('/productpage')} className="hover:text-blue-600">Products</button>
            <button onClick={() => navigate('/productpage')} className="hover:text-blue-600">Categories</button>
            <button onClick={() => navigate('/productpage')} className="hover:text-blue-600">Deals</button>
            <button onClick={() => navigate('/productpage')} className="hover:text-blue-600">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section
        className="pt-24 bg-cover bg-center text-center px-4 py-48 transition-all duration-500"
        style={{
          backgroundImage: `url(${slideImages[currentSlide]})`,
          backgroundPosition: 'top center',
          height: '80vh',
          transition: 'background-image 1.5s ease-in-out',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
            <Writer text="Summer Sale – Up to 50% Off!" speed={100} />
          </h2>
          <p className="text-lg mb-6 drop-shadow-lg">Shop the hottest trends of the season</p>
          <button
            onClick={handleShopNow}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Featured Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: 'Electronics', desc: 'Latest gadgets and accessories' },
            { title: 'Fashion', desc: 'Style meets comfort' },
            { title: 'Home & Living', desc: 'Decor and essentials for your space' },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition duration-300"
            >
              <h4 className="text-xl font-semibold mb-2">{cat.title}</h4>
              <p className="text-gray-600 mb-4">{cat.desc}</p>
              <button className="text-blue-600 hover:underline font-medium">Browse</button>
            </div>
          ))}
        </div>
      </section>

      {/* Image Section with Slogan */}
      <section className="relative w-full">
        <img src={require('../assets/home.jpg')} alt="Home" className="w-full h-[500px] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Shop Easy – 25% Off on Electronics!</h3>
          <p className="text-lg mb-6">Grab the latest gadgets at unbeatable prices.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-4">
        <h3 className="text-2xl font-bold mb-10 text-center">What Our Customers Say</h3>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {[
            { name: 'Emily R.', review: 'Fast shipping and great quality!' },
            { name: 'Jake M.', review: 'Amazing deals and top-notch service!' },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow"
            >
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-2 italic">"{t.review}"</p>
              <p className="text-sm text-gray-500 font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Subscribe for exclusive deals</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 border border-gray-300 rounded w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
