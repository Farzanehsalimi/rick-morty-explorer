import CharacterSkeletonCard from "./CharacterSkeletonCard";

function CharacterSkeletonList({ count = 20 }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-5">
      {Array.from({ length: count }).map((_, idx) => {
        return <CharacterSkeletonCard key={idx} />;
      })}
    </div>
  );
}

export default CharacterSkeletonList;
