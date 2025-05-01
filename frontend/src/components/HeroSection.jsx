import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero bg-cover bg-center text-white py-20" style={{ backgroundImage: "url('https://via.placeholder.com/1500x600')" }}>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Shop</h2>
        <p className="text-xl mb-6">Explore our exclusive collection of products</p>
        <a href="#products" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
