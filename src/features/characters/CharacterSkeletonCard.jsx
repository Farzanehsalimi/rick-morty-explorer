function CharacterSkeletonCard() {
  return (
    <div className="rounded-xl w-[280px] md:w-56 lg:w-[300px] shadow-character-card cursor-pointer overflow-hidden animate-pulse">
      <div className="h-48 lg:h-56 bg-secondary-600"></div>
      <div className="py-3 px-4 space-y-2">
        <div className="w-full bg-secondary-800">
          <p className="h-6 bg-secondary-600 rounded w-3/4"></p>
        </div>
        <div className="h-4 bg-secondary-600 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default CharacterSkeletonCard;
