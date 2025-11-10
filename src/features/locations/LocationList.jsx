import LocationCard from "./LocationCard";

function LocationList({ Locations = [] }) {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 transition-all">
      {Locations.map((location) => {
        return <LocationCard key={location.id} location={location} />;
      })}
    </div>
  );
}

export default LocationList;
