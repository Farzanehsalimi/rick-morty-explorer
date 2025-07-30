function CharacterSkeletonCard() {
  return (
    <div className="rounded shadow-character-card cursor-pointer overflow-hidden">
      <div className="w-72 h-48 lg:h-56 bg-gray-300"></div>
      <div className="py-3 px-4 space-y-2">
        <div className="w-full bg-white">
          <p className="h-6 bg-gray-300 rounded w-3/4"></p>
        </div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default CharacterSkeletonCard;
