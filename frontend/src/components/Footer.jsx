import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 ShopMaster. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="/privacy" className="text-white hover:text-blue-300 mx-2">Privacy Policy</a>
          <a href="/terms" className="text-white hover:text-blue-300 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
