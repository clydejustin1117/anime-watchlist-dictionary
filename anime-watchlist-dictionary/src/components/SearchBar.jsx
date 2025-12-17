import { useState, useRef, useEffect } from "react";




export default function SearchBar({ onSearch, searchType, setSearchType }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const wrapperRef = useRef(null);
  

  useEffect(() => {
  function handleClickOutside(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setSuggestions([]);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const endpoint =
  searchType === "anime"
    ? `https://api.jikan.moe/v4/anime?q=${value}`
    : `https://api.jikan.moe/v4/characters?q=${value}`;

const response = await fetch(endpoint);
const data = await response.json();
setSuggestions(data.data.slice(0, 5));

  };

  const handleSelect = (item) => {
  setQuery(searchType === "anime" ? item.title : item.name);
  setSuggestions([]);
  onSearch(searchType === "anime" ? item.title : item.name);
};


  return (
    <div
    ref={wrapperRef}
     className="relative w-full max-w-lg mx-auto mt-6 px-2">
       <div className="flex justify-center mb-3 gap-2">
      {["anime", "character"].map((type) => (
        <button
          key={type}
          onClick={() => setSearchType(type)}
          className={`px-3 py-1 text-sm rounded-full border transition
            ${
              searchType === type
                ? "text-white"
                : "text-gray-600 dark:text-gray-300"
            }`}
          style={{
            backgroundColor:
              searchType === type ? "var(--accent-color)" : "transparent",
          }}
        >
          {type === "anime" ? "Anime" : "Characters"}
        </button>
      ))}
    </div>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && onSearch(query)}
        placeholder={
  searchType === "anime"
    ? "Search anime..."
    : "Search anime characters..."
}

        className=" w-full  p-4 text-base rounded-lg shadow-sm border border-gray-300 dark:border-gray-600
  bg-white dark:bg-gray-800
  text-gray-900 dark:text-gray-100
  placeholder-gray-400 dark:placeholder-gray-500
  focus:outline-none
  focus:ring-2 focus:ring-[var(--accent-color)]"
      />

      {suggestions.length > 0 && (
  <ul
    className="absolute left-0 right-0 mt-1 z-10
    bg-white dark:bg-gray-800
    border border-gray-300 dark:border-gray-600
    rounded-lg shadow-lg"
  >
    {suggestions.map((item) => (
      <li
        key={item.mal_id}
        onClick={() => handleSelect(item)}
        className="p-2 cursor-pointer
          text-gray-800 dark:text-gray-100
          hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {searchType === "anime" ? item.title : item.name}
      </li>
    ))}
  </ul>
)}

    </div>
  );
}
