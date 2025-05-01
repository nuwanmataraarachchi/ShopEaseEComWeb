import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ShopEase</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/productpage" className="hover:text-blue-300">Products</a></li>
            <li><a href="/about" className="hover:text-blue-300">About</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
