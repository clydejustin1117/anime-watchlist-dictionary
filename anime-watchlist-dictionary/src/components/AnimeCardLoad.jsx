export default function AnimeCardLoad() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 animate-pulse flex flex-col">

      <div className="h-60 bg-gray-300 dark:bg-gray-700 rounded-md mb-3"></div>

      <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>

      
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
      </div>

      <div className="h-9 bg-gray-300 dark:bg-gray-700 rounded mt-auto"></div>
    </div>
  );
}
