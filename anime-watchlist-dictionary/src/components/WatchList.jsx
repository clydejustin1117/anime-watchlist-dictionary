import EmptyState from "./EmptyState.jsx";

export default function Watchlist({ items, onRemove, onOpenDetails }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg sticky top-5 border border-gray-100 dark:border-gray-700">
     <h2
  className="text-2xl font-bold mb-4"
  style={{ color: "var(--accent-color)" }}
>
  Your Watchlist
</h2>


      {items.length === 0 ? (
        <EmptyState
          title="Your watchlist is empty"
          description="Add anime to your watchlist so you can track what to watch next."
        />
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
          {items.map((anime) => (
            <div
              key={anime.mal_id}
              className="min-w-[160px] bg-gray-50 dark:bg-gray-700 rounded-xl border p-3 flex flex-col shadow hover:shadow-md transition"
            >
              <div
                onClick={() => onOpenDetails && onOpenDetails(anime)}
                className="cursor-pointer"
              >
                <img
                  src={anime.images?.jpg?.image_url}
                  alt={anime.title}
                  className="w-full h-40 rounded-lg object-cover mb-2 shadow-sm"
                />
                <span className="font-semibold text-gray-800 dark:text-white text-sm">
                  {anime.title}
                </span>
              </div>

              <div className="flex justify-between mt-3">
                {anime.url && (
                  <a
                    href={anime.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-green-500 text-white text-xs rounded-lg hover:bg-green-600 transition"
                  >
                    Watch
                  </a>
                )}

                <button
                  onClick={() => onRemove(anime.mal_id)}
                  className="px-2 py-1 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
