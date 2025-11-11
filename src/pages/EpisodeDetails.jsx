import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import CharacterList from "../features/characters/CharacterList";
import Loading from "../ui/Loading";
import { IoArrowBack } from "react-icons/io5";
import useMoveBack from "../hooks/useMoveBack";
import { getEpisodeById } from "../services/episodeService";
import { getCharactersByIds } from "../services/characterService";

function EpisodeDetails() {
  const { id } = useParams();
  const moveBack = useMoveBack();
  const { data: episode, isLoading: isLoadingEpisode } = useQuery({
    queryKey: ["episode", id],
    queryFn: () => getEpisodeById(id),
  });

  const characterIds =
    episode?.characters.map((url) => url.split("/").pop()) || [];

  const { data: characters, isLoading: isLoadingCharacters } = useQuery({
    queryKey: ["episodeCharacters", characterIds],
    queryFn: () => getCharactersByIds(characterIds),
    enabled: characterIds.length > 0,
  });

  if (isLoadingEpisode) return <Loading />;

  return (
    <div className=" mt-4 sm:mt-10 xl:px-28">
      <div className="grid gap-y-1 sm:grid-cols-4 items-baseline">
        <button
          onClick={moveBack}
          className="flex items-center gap-x-2 sm:mt-3 col-span-1 text-secondary-100"
        >
          <IoArrowBack className="w-4 h-4 sm:w-6 sm:h-6 mt-0.5" />
          <span className="text-sm sm:text-xl font-bold">Go Back</span>
        </button>

        <h1 className="col-span-3 text-3xl sm:text-4xl md:text-5xl mt-4 sm:mt-0 font-bold text-center sm:text-start text-secondary-100">
          {episode.name}
        </h1>
      </div>

      <div className="flex justify-center gap-x-20 sm:gap-x-32 mt-10">
        <div>
          <p className="font-semibold text-secondary-100">Episode:</p>
          <p className="text-secondary-400 text-sm">
            {episode.episode || "Unknown"}
          </p>
        </div>
        <div>
          <p className="font-semibold text-secondary-100">Date:</p>
          <p className="text-secondary-400 text-sm">
            {episode.air_date || "Unknown"}
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-secondary-500 font-bold text-base sm:text-xl mb-5 sm:mb-6 xl:ml-5">
          Cast
        </h3>
        <div className="flex flex-col justify-center items-center mb-8">
          {isLoadingCharacters ? (
            <p>Loading characters...</p>
          ) : characters?.length ? (
            <CharacterList characters={characters} />
          ) : (
            <p className="text-error mt-6 text-lg">No characters found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EpisodeDetails;
