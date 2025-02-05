import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-xs font-semibold text-blue-500">{news.category}</span>
        <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{news.author} • {new Date(news.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default NewsCard;