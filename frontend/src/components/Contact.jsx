import React from 'react';
import contactBg from '../assets/contact.jpg'; // adjust path if needed

const Contact = () => {
  return (
    <div
      className="max-w-4xl mx-auto px-4 py-16 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(255,255,255,0.8)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Contact ShopEase</h1>
      <p className="text-center text-gray-800 mb-12 font-medium">
        We'd love to hear from you! Whether you have a question about products, pricing, or anything else.
      </p>

      <div className="grid sm:grid-cols-2 gap-10 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        {/* Contact Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Address</h2>
            <p className="text-gray-600">123 Fashion Street, London, UK</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
            <p className="text-gray-600">+44 1234 567890</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Email</h2>
            <p className="text-gray-600">support@shopease.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Customer Support Hours</h2>
            <p className="text-gray-600">Mon - Fri: 9am - 6pm</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
                rows="4"
                placeholder="Your message..."
              />
            </div>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
