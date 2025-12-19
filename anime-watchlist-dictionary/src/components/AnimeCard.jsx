export default function AnimeCard({ anime, onAdd, onOpen }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col border dark:border-gray-700">
      
      <img
        src={anime.images?.jpg?.image_url}
        alt={anime.title}
        className="rounded-md mb-3 h-48 sm:h-60 object-cover"
      />

      <h3 className="text-sm sm:text-base font-semibold dark:text-white mb-2">
        {anime.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
        {anime.synopsis || "No description"}
      </p>

      <button
        onClick={onOpen}
        className="mb-2 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        👁 View Details
      </button>

      <button
        onClick={() => onAdd(anime)}
        style={{ backgroundColor: "var(--accent-color)" }}
        className="text-white py-2 rounded-md hover:opacity-90 transition"
      >
        ➕ Add to Watchlist
      </button>
    </div>
  );
}
