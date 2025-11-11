import { Link } from "react-router-dom";

function LocationCard({ location }) {
  const { id, name, type } = location;
  return (
    <Link to={`/location/${location.id}`}>
      <div
        key={id}
        className="w-[280px] md:w-[210px] lg:w-[300px] rounded-xl shadow-character-card cursor-pointer overflow-auto 
      py-12 bg-secondary-900"
      >
        <div className="flex flex-col items-center text-center px-4">
          <span className="text-xl text-secondary-200 font-bold text-black/90 truncate w-full">
            {name}
          </span>
          <span className="text-sm text-secondary-300">{type}</span>
        </div>
      </div>
    </Link>
  );
}

export default LocationCard;
