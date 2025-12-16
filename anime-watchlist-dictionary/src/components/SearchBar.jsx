import { useState, useRef, useEffect } from "react";



export default function SearchBar({ onSearch }) {
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

    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${value}`);
    const data = await response.json();
    setSuggestions(data.data.slice(0, 5));
  };

  const handleSelect = (title) => {
    setQuery(title);
    setSuggestions([]);
    onSearch(title);
  };

  return (
    <div
    ref={wrapperRef}
     className="relative max-w-lg mx-auto mt-10">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && onSearch(query)}
        placeholder="Search anime..."
        className=" w-full p-3 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600
  bg-white dark:bg-gray-800
  text-gray-900 dark:text-gray-100
  placeholder-gray-400 dark:placeholder-gray-500
  focus:outline-none
  focus:ring-2 focus:ring-[var(--accent-color)]"
      />

      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 z-10
  bg-white dark:bg-gray-800
  border border-gray-300 dark:border-gray-600
  rounded-lg shadow-lg">
          {suggestions.map((anime) => (
            <li
              key={anime.mal_id}
              onClick={() => handleSelect(anime.title)}
              className=" p-2 cursor-pointer
    text-gray-800 dark:text-gray-100
    hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {anime.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
