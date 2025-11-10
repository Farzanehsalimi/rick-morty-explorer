function EpisodeSkeletonCard() {
  return (
    <div className="w-[280px] md:w-[210px] lg:w-[300px] bg-secondary-800 rounded-xl shadow-character-card cursor-pointer overflow-hidden py-10 px-12 animate-pulse">
      <div className="flex flex-col items-center text-center gap-1">
        <span className="h-6 w-40 bg-secondary-600 rounded"></span>
        <span className="h-5 w-32 bg-secondary-600 rounded"></span>
        <span className="h-4 w-24 bg-secondary-600 rounded"></span>
      </div>
    </div>
  );
}

export default EpisodeSkeletonCard;
