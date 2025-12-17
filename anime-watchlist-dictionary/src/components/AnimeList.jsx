import AnimeCard from "./AnimeCard.jsx";
import AnimeCardLoad from "./AnimeCardLoad.jsx";
import EmptyState from "./EmptyState.jsx";

export default function AnimeList({ results, onAdd, loading, hasSearched }) {
  if (!hasSearched && !loading) {
    return (
      <EmptyState
        title="Nothing here yet"
        description="Search for an anime to start building your watchlist."
      />
    );
  }

  if (hasSearched && !loading && results.length === 0) {
    return (
      <EmptyState
        title="No anime found"
        description="Try another keyword or check your spelling."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <AnimeCardLoad key={i} />
          ))
        : results.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} onAdd={onAdd} />
          ))}
    </div>
  );
}
