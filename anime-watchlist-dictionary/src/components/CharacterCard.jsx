export default function CharacterCard({ character, onOpen }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-lg transition">
      
      <img
        src={character.images?.jpg?.image_url}
        alt={character.name}
        className="rounded-md mb-3 h-48 sm:h-60 object-cover"
      />

      <h3 className="text-sm sm:text-base font-semibold dark:text-white mb-1">
        {character.name}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
        {character.about || "No description available."}
      </p>

      <button
        onClick={onOpen}
        style={{ backgroundColor: "var(--accent-color)" }}
        className="mt-auto text-white py-2 rounded-md hover:opacity-90 transition"
      >
        👁 View Details
      </button>
    </div>
  );
}
