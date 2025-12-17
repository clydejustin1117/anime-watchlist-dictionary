import React, { useState, useEffect } from "react";
import Header from "../src/components/Header.jsx";
import SearchBar from "../src/components/SearchBar.jsx";
import AnimeList from "../src/components/AnimeList.jsx";
import Watchlist from "../src/components/WatchList.jsx"; 
import SettingsPanel from "../src/components/SettingsPanel.jsx";

const STORAGE_KEY = "animeWatchlist_v1";

export default function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showWatchlist, setShowWatchlist] = useState(false);


const [accent, setAccent] = useState(() => {
  return localStorage.getItem("accent") || "blue";
});


const accentMap = {
  blue: "#2563eb",
  purple: "#7c3aed",
  green: "#16a34a",
 
};


useEffect(() => {
  localStorage.setItem("accent", accent);
  document.documentElement.style.setProperty(
    "--accent-color",
    accentMap[accent]
  );
}, [accent]);

const clearWatchlist = () => {
  setWatchlist([]);
  localStorage.removeItem(STORAGE_KEY);
};




  const [watchlist, setWatchlist] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed;
    } catch (err) {
      console.error("Failed to load watchlist from localStorage:", err);
      return [];
    }
  });

  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
});

useEffect(() => {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
}, [theme]);

const toggleTheme = () => {
  setTheme((prev) => (prev === "light" ? "dark" : "light"));
};


  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));

      console.log("Saved watchlist to localStorage (count):", watchlist.length);
    } catch (err) {
      console.error("Failed to save watchlist to localStorage:", err);
    }
  }, [watchlist]);

  const handleSearch = async (query) => {
  if (!query) return;

  setHasSearched(true);
  setLoading(true);
  setResults([]);

  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    setResults(data.data || []);
  } catch (err) {
    console.error("Search failed:", err);
  } finally {
    setLoading(false);
  }
};

  const addToWatchlist = (anime) => {
    setWatchlist((prev) => {
      if (prev.find((item) => item.mal_id === anime.mal_id)) return prev;
      return [...prev, anime];
    });
  };

  const removeFromWatchlist = (mal_id) => {
    setWatchlist((prev) => prev.filter((a) => a.mal_id !== mal_id));
  };

  const openAnimeDetails = (anime) => {
    if (anime?.url) window.open(anime.url, "_blank");
  };

  return (
    

   <div
  className={`min-h-screen transition-colors 
  ${theme === "dark" ? "bg-gray-900" : "bg-white"} 
  accent-${accent}`}
>


   <Header
  onToggleTheme={toggleTheme}
  theme={theme}
  onOpenSettings={() => setSettingsOpen(true)}
/>

    <SearchBar onSearch={handleSearch} />

    <section className="px-4 sm:px-6 md:px-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
       <AnimeList
  results={results}
  onAdd={addToWatchlist}
  loading={loading}
  hasSearched={hasSearched}
/>

      </div>
      
      <div className="hidden md:block">
        <Watchlist
          items={watchlist}
          onRemove={removeFromWatchlist}
          onOpenDetails={openAnimeDetails}
        />
      </div>
    </section>
    <button
  onClick={() => setShowWatchlist(true)}
  className="md:hidden fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
>
  📌 Watchlist ({watchlist.length})
</button>

{showWatchlist && (
  <div className="fixed inset-0 z-50 bg-black/40">
    <div className="absolute bottom-0 w-full bg-white dark:bg-gray-900 rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto">
      
      
      <button
        onClick={() => setShowWatchlist(false)}
        className="mb-3 text-sm text-gray-500 dark:text-gray-400"
      >
        Close
      </button>

      <Watchlist
        items={watchlist}
        onRemove={removeFromWatchlist}
        onOpenDetails={openAnimeDetails}
      />
    </div>
  </div>
)}

<SettingsPanel
  open={settingsOpen}
  onClose={() => setSettingsOpen(false)}
  theme={theme}
  toggleTheme={toggleTheme}
  accent={accent}
  setAccent={setAccent}
  clearWatchlist={clearWatchlist}
/>

  </div>
);

  
}