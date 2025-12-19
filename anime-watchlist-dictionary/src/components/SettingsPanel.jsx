export default function SettingsPanel({
  open,
  onClose,
  theme,
  toggleTheme,
  accent,
  setAccent,
  clearWatchlist,
  watchSite,
  setWatchSite,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
      <div className="w-80 bg-white dark:bg-gray-800 h-full p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-6 dark:text-white">
          Settings
        </h2>

      
        <div className="mb-6">
          <p className="font-medium mb-2 dark:text-gray-200">
            Theme
          </p>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Switch to {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>

  
        <div className="mb-6">
          <p className="font-medium mb-2 dark:text-gray-200">
            Accent Color
          </p>

          
          <div className="flex gap-3">
            {["blue", "purple", "green"].map((c) => (
              <button
                key={c}
                onClick={() => setAccent(c)}
                className={`w-8 h-8 rounded-full ${
                  c === "blue"
                    ? "bg-blue-600"
                    : c === "purple"
                    ? "bg-purple-600"
                    : "bg-green-600"
                } ${accent === c ? "ring-4 ring-offset-2" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
  <p className="font-medium mb-2 dark:text-gray-200">
    Watch Site
  </p>

  <select
  value={watchSite}
  onChange={(e) => setWatchSite(e.target.value)}
  className="w-full p-2 rounded-md
    bg-gray-100 dark:bg-gray-700
    text-gray-900 dark:text-white
    border border-gray-300 dark:border-gray-600
    focus:outline-none
    focus:ring-2 focus:ring-[var(--accent-color)]
  "
>
  <option value="hianime">HiAnime</option>
  <option value="crunchyroll">Crunchyroll</option>
  <option value="google">Google</option>
</select>

</div>

       
        <div className="mt-10">
          <button
            onClick={clearWatchlist}
            className="w-full py-2 rounded bg-red-500 text-white hover:bg-red-600"
          >
            Clear Watchlist
          </button>
        </div>

    
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
