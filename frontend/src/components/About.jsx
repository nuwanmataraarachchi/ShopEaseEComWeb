// src/components/About.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [isAccordionOpen, setAccordionOpen] = useState({
    transparency: false,
    community: false,
    innovation: false,
  });

  const handleAccordionToggle = (value) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-400 py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://via.placeholder.com/1200x800')" }}></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl font-semibold">Our Story</h1>
          <h2 className="text-xl mt-4">Delivering quality and style since 2015</h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            At ShopEase, we combine timeless design with sustainable materials. Join us in revolutionizing the shopping experience.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 text-center bg-gray-50">
        <h3 className="text-4xl font-bold">Why We Exist</h3>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We believe in sustainable, affordable fashion that doesn’t compromise on ethics. We strive to make a positive impact on the world through our actions and products.
        </p>
        <div className="w-24 mx-auto mt-6">
          <svg className="w-full h-2 text-teal-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 3" fill="currentColor">
            <path d="M0 0 L50 3 L100 0" />
          </svg>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-12">
        <h3 className="text-4xl font-bold text-center">Meet the Founders</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-4">
          {["Alex Chen, CEO", "Jamie Rivera, Head of Design", "Taylor Smith, Sustainability Lead"].map((role, idx) => (
            <div key={idx} className="text-center">
              <img
                src={`https://unavatar.io/${role.split(",")[0].toLowerCase().replace(" ", "")}`}
                alt={role.split(",")[0]}
                className="w-32 h-32 rounded-full mx-auto transition-transform transform hover:scale-105 hover:shadow-lg"
              />
              <p className="mt-4 font-semibold">{role.split(",")[0]}</p>
              <p className="text-sm">{role.split(",")[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <h3 className="text-4xl font-bold text-center">Our Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 px-4 text-center">
          {[
            { icon: "🚚", stat: "10,000+ Happy Customers" },
            { icon: "🍃", stat: "100% Eco-Friendly Packaging" },
            { icon: "⭐", stat: "5-Star Average Reviews" },
            { icon: "🌍", stat: "Global Shipping" },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="text-4xl">{item.icon}</div>
              <p className="mt-4 font-semibold">{item.stat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-teal-50">
        <h3 className="text-4xl font-bold text-center">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-4">
          {[
            { title: "Transparency", detail: "We share our supply chain openly." },
            { title: "Community", detail: "We donate 5% of profits to local initiatives." },
            { title: "Innovation", detail: "Our R&D team tests every material for durability." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-sm mt-2">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-12 text-center">
        <h3 className="text-4xl font-semibold">Want to join our mission?</h3>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Discover our collection of ethical brands and join us in making the world a better place. Together, we can create a more sustainable future.
        </p>
        <div className="mt-8">
          <Link to="/productpage">
            <button className="bg-teal-800 text-white py-3 px-6 rounded-full text-lg hover:bg-teal-700 transform transition-all duration-300">
              Shop Now →
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
