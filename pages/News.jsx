import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import SortingDropdown from "../components/SortingDropdown";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setTimeout(() => {
        const fakeNews = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          title: `News Title ${i + 1}`,
          category: ["Science", "Innovation", "Industry"][i % 3],
          date: new Date(Date.now() - i * 100000000).toISOString(),
          author: "Floyd Miles",
          image: "https://via.placeholder.com/300",
        }));
        setNews(fakeNews);
        setLoading(false);
      }, 1000);
    };
    fetchNews();
  }, []);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <SearchBar setSearchQuery={setSearchQuery} />
      <SortingDropdown setSortBy={setSortBy} />
      {loading ? (
        <p className="text-center text-xl mt-6">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {currentNews.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      )}
      <Pagination
        totalItems={sortedNews.length}
        itemsPerPage={newsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default News;