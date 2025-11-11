import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CharacterList from "../features/characters/CharacterList";
import Loading from "../ui/Loading";
import { IoArrowBack } from "react-icons/io5";
import useMoveBack from "../hooks/useMoveBack";
import { getCharactersByIds } from "../services/characterService";
import { getLocationById } from "../services/locationService";

function LocationDetails() {
  const { id } = useParams();
  const moveBack = useMoveBack();

  const { data: location, isLoading: isLoadingLocation } = useQuery({
    queryKey: ["location", id],
    queryFn: () => getLocationById(id),
  });

  const residentIds =
    location?.residents.map((url) => url.split("/").pop()) || [];

  const { data: residents, isLoading: isLoadingResidents } = useQuery({
    queryKey: ["residents", residentIds],
    queryFn: () => getCharactersByIds(residentIds),
    enabled: residentIds.length > 0,
  });

  if (isLoadingLocation) return <Loading />;

  return (
    <div className=" mt-4 sm:mt-10 xl:px-28">
      <div className="grid gap-y-4 sm:grid-cols-4 items-baseline">
        <button
          onClick={moveBack}
          className="flex items-center gap-x-2 sm:mt-3 col-span-1 text-secondary-100"
        >
          <IoArrowBack className="w-6 h-6 mt-0.5" />
          <span className="text-xl font-bold">Go Back</span>
        </button>

        <h1 className="col-span-3 text-3xl sm:text-4xl md:text-5xl mt-4 sm:mt-0 font-bold text-center sm:text-start text-secondary-100">
          {location.name}
        </h1>
      </div>

      <div className="flex justify-center gap-x-20 sm:gap-x-32 mt-10">
        <div>
          <p className="font-semibold text-secondary-100">Type:</p>
          <p className="text-secondary-400 text-sm">
            {location.type || "Unknown"}
          </p>
        </div>
        <div>
          <p className="font-semibold text-secondary-100">Dimension:</p>
          <p className="text-secondary-400 text-sm">
            {location.dimension || "Unknown"}
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-secondary-500 font-bold text-base sm:text-xl mb-5 sm:mb-6 xl:ml-5">
          Residents
        </h3>
        <div className="flex flex-col justify-center items-center mb-8">
          {isLoadingResidents ? (
            <p>Loading residents...</p>
          ) : residents?.length ? (
            <CharacterList characters={residents} />
          ) : (
            <p className="text-error mt-6 text-lg">No known residents.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
