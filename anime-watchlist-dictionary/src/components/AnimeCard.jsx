export default function AnimeCard({ anime, onAdd }) {
  return (
    <div className=" bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col border border-gray-100 dark:border-gray-700 hover:dark:ring-1 hover:dark:ring-blue-500/30">
      <img
        src={anime.images?.jpg?.image_url}
        alt={anime.title}
        className="rounded-md mb-3 h-48 sm:h-60 object-cover"
      />

      <h3 className="text-sm sm:text-base font-semibold text-blue-700 dark:text-white mb-2">
        {anime.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
        {anime.synopsis || "No description"}
      </p>

      <button
  onClick={() => onAdd(anime)}
  style={{ backgroundColor: "var(--accent-color)" }}
  className="mt-auto text-white py-2 rounded-md hover:opacity-90 transition"
>
  ➕ Add to Watchlist
</button>

    </div>
  );
}
