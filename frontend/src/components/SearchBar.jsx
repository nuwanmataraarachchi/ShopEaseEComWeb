// src/components/SearchBar.jsx
import React from "react";

export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full max-w-md p-2 border rounded mb-4"
    />
  );
}
