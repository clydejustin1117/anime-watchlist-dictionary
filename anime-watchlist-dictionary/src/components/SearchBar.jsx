import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-center mt-8">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          className="px-4 py-2 border rounded-md"
          placeholder="Search for an anime"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
