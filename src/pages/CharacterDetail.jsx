import { useParams } from "react-router-dom";
import { getCharacter } from "../services/characterService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../ui/Loading";
import useMoveBack from "../hooks/useMoveBack";
import { IoArrowBack } from "react-icons/io5";
import { getEpisodesByIds } from "../services/episodeService";
import truncateText from "../utils/truncateText";
import ErrorHandler from "../ui/ErrorHandler";

function CharacterDetail() {
  const { id } = useParams();
  const moveBack = useMoveBack();

  const {
    data: character,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacter(id),
    staleTime: 1000 * 60 * 5,
  });

  const episodeIds = character?.episode
    .map((url) => url.split("/").pop())
    .slice(0, 6);
  const { data: episodes, isLoading: isLoadingEpisodes } = useQuery({
    queryKey: ["episodes", episodeIds],
    queryFn: () => getEpisodesByIds(episodeIds),
    enabled: !!episodeIds?.length,
  });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorHandler error={error} />;

  return (
    <div className="mt-4 sm:mt-6 xl:px-28">
      <div className="grid gap-y-1 sm:grid-cols-3 items-start sm:items-start">
        <button
          onClick={moveBack}
          className="flex items-center gap-x-2 sm:mt-3 col-span-1 text-secondary-100"
        >
          <IoArrowBack className="w-4 h-4 sm:w-6 sm:h-6 mt-0.5" />
          <span className="text-sm sm:text-xl font-bold">Go Back</span>
        </button>
        <img
          src={character.image}
          className="col-span-3 w-40 h-40 sm:w-52 sm:h-52 rounded-full mx-auto border-4 border-secondary-700/50"
          alt=""
        />
      </div>
      <h1 className="text-center text-2xl sm:text-4xl font-bold mt-4 text-secondary-100">
        {character.name}
      </h1>
      <div className="flex flex-col w-full sm:flex-row sm:justify-evenly sm:gap-x-4 md:gap-x-0 mt-12">
        <div className="sm:w-1/2 lg:w-1/3 mb-8">
          <h3 className="text-secondary-500 font-bold text-base sm:text-lg mb-5 sm:mb-6">
            Informations
          </h3>
          <div className="space-y-2">
            <div className="pl-3 py-3 border rounded-lg shadow-sm hover:bg-secondary-700 cursor-pointer transition">
              <p className="text-secondary-50 text-sm sm:text-base">Gender</p>
              <p className="text-secondary-400 text-xs sm:text-sm">
                {character.gender}
              </p>
            </div>
            <div className="pl-3 py-3 border rounded-lg shadow-sm hover:bg-secondary-700 cursor-pointer transition">
              <p className="text-secondary-50 text-sm sm:text-base">Status</p>
              <p className="text-secondary-400 text-xs sm:text-sm">
                {character.status}
              </p>
            </div>
            <div className="pl-3 py-3 border rounded-lg shadow-sm hover:bg-secondary-700 cursor-pointer transition">
              <p className="text-secondary-50 text-sm sm:text-base">Specie</p>
              <p className="text-secondary-400 text-xs sm:text-sm">
                {character.species}
              </p>
            </div>
            <div className="pl-3 py-3 border rounded-lg shadow-sm hover:bg-secondary-700 cursor-pointer transition">
              <p className="text-secondary-50 text-sm sm:text-base">Origin</p>
              <p className="text-secondary-400 text-xs sm:text-sm">
                {character.origin.name}
              </p>
            </div>
            <div className="pl-3 py-3 border rounded-lg shadow-sm hover:bg-secondary-700 cursor-pointer transition">
              <p className="text-secondary-50 text-sm sm:text-base">Type</p>
              <p className="text-secondary-400 text-xs sm:text-sm">
                {character.type || "Unknown"}
              </p>
            </div>
            <div className="pl-3 py-3 border rounded-lg shadow-sm hover:bg-secondary-700 cursor-pointer transition">
              <p className="text-secondary-50 text-sm sm:text-base">Location</p>
              <p className="text-secondary-400 text-xs sm:text-sm">
                {character.location.name}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-80">
          <h3 className="text-secondary-500 font-bold text-base sm:text-lg mb-5 sm:mb-6">
            Episodes
          </h3>
          {isLoadingEpisodes ? (
            <p>Loading Episodes...</p>
          ) : (
            <ul className="space-y-2 mb-6 sm:mb-0">
              {(Array.isArray(episodes) ? episodes : [episodes]).map((ep) => (
                <li
                  key={ep.id}
                  className="pr-10 pl-3 py-3 border rounded-lg shadow-sm hover:bg-secondary-700 cursor-pointer transition"
                >
                  <p className="text-secondary-50 text-sm sm:text-base">
                    {ep.episode} — {truncateText(ep.name, 18)}
                  </p>
                  <p className="text-xs sm:text-sm text-secondary-400">
                    {ep.air_date}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
