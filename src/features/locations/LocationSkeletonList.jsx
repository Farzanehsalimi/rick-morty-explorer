import LocationSkeletonCard from "./LocationSkeletonCard";

function LocationSkeletonList({ count = 20 }) {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 transition-all">
      {Array.from({ length: count }).map((_, idx) => {
        return <LocationSkeletonCard key={idx} />;
      })}
    </div>
  );
}

export default LocationSkeletonList;
