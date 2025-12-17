export default function CharacterModal({ character, onClose }) {
  if (!character) return null;

  const {
    name,
    name_kanji,
    nicknames,
    favorites,
    about,
    images,
  } = character;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-3">
      <div
        className="
          bg-white dark:bg-gray-900
          w-full max-w-2xl
          max-h-[90vh]
          rounded-2xl
          shadow-xl
          flex flex-col
        "
      >
       
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
              alt={name}
              className="
                w-full sm:w-48
                max-h-64
                object-contain
                rounded-xl
                bg-gray-100 dark:bg-gray-800
              "
            />

            
            <div className="flex-1 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold dark:text-white">
                {name}
              </h2>

              {name_kanji && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Kanji: <span className="font-medium">{name_kanji}</span>
                </p>
              )}

              {typeof favorites === "number" && (
                <p className="text-sm text-pink-600 dark:text-pink-400">
                  ❤️ Favorited by {favorites.toLocaleString()} users
                </p>
              )}

              {nicknames?.length > 0 && (
                <div>
                  <p className="text-sm font-medium dark:text-gray-200 mb-2">
                    Nicknames
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {nicknames.map((nick, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {nick}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold dark:text-white mb-2">
              About
            </h3>

            <p className="
              text-sm
              leading-relaxed
              text-gray-700 dark:text-gray-300
              whitespace-pre-line
            ">
              {about || "No detailed description available."}
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
