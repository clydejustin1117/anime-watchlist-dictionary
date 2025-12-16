export default function EmptyState({
  title = "Nothing here yet",
  description = "Try searching for an anime to get started.",
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">🍿</div>

      <h3 className="text-xl font-semibold text-blue-800  mb-2">
        {title}
      </h3>

      <p className="text-sm text-blue-500  max-w-sm">
        {description}
      </p>
    </div>
  );
}
