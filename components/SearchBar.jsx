import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Searching..."
      className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;