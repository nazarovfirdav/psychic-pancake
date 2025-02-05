import React from "react";

const SortingDropdown = ({ setSortBy }) => {
  return (
    <select
      className="border p-3 rounded-xl shadow-sm mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="date">Sort by Date</option>
      <option value="title">Sort by Title</option>
    </select>
  );
};

export default SortingDropdown;