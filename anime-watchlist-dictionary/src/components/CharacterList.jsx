import CharacterCard from "./CharacterCard.jsx";
import AnimeCardLoad from "./AnimeCardLoad.jsx";
import EmptyState from "./EmptyState.jsx";

export default function CharacterList({ results, loading, hasSearched,  onSelectCharacter }) {
  if (!hasSearched && !loading) {
    return (
      <EmptyState
        title="Nothing here yet"
        description="Search for an anime character to get started."
      />
    );
  }

  if (hasSearched && !loading && results.length === 0) {
    return (
      <EmptyState
        title="No characters found"
        description="Try another name or spelling."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <AnimeCardLoad key={i} />
          ))
        : results.map((char) => (
            <CharacterCard key={char.mal_id} character={char} onOpen={() => onSelectCharacter(char)} />
          ))}
    </div>
  );
}
