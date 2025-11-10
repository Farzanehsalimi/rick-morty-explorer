function LocationSkeletonCard() {
  return (
    <div className="w-[280px] md:w-[210px] lg:w-[300px] rounded-xl shadow-character-card cursor-pointer bg-secondary-800 overflow-hidden py-10 px-12 animate-pulse">
      <div className="flex flex-col items-center text-center gap-2">
        <span className="h-7 w-48 bg-secondary-600 rounded"></span>
        <span className="h-5 w-24 bg-secondary-600 rounded"></span>
      </div>
    </div>
  );
}

export default LocationSkeletonCard;
