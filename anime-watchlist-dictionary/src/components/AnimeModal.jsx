export default function AnimeModal({ anime, onClose }) {
  if (!anime) return null;

  const {
    title,
    title_japanese,
    synopsis,
    episodes,
    score,
    status,
    aired,
    images,
    genres,
  } = anime;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-3">
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col">
        
       
        <div className="flex justify-end p-4 border-b dark:border-gray-700">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-lg"
          >
            ✕
          </button>
        </div>

       
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5">
            <img
              src={images?.jpg?.image_url}
              alt={title}
              className="w-full sm:w-48 max-h-64 object-contain sm:object-cover rounded-xl bg-gray-100 dark:bg-gray-800"
            />

            <div className="flex-1 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold dark:text-white">
                {title}
              </h2>

              {title_japanese && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Japanese: <span className="font-medium">{title_japanese}</span>
                </p>
              )}

              {typeof score === "number" && (
                <p className="text-sm text-yellow-500">
                  ⭐ Score: {score}
                </p>
              )}

              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <p>Episodes: {episodes ?? "N/A"}</p>
                <p>Status: {status ?? "Unknown"}</p>
                <p>
                  Aired:{" "}
                  {aired?.string ?? "Unknown"}
                </p>
              </div>

              {genres?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {genres.map((g) => (
                    <span
                      key={g.mal_id}
                      className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {g.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold dark:text-white mb-2">
              Synopsis
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {synopsis || "No synopsis available."}
            </p>
          </div>
        </div>

        
        <div className="p-4 border-t dark:border-gray-700 flex justify-end">
          <button
            onClick={onClose}
            style={{ backgroundColor: "var(--accent-color)" }}
            className="px-5 py-2 text-white rounded-lg hover:opacity-90 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
