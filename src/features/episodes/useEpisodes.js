import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "../../services/EpisodeService";

export function useEpisodes({ page = 1, name = "", episode = "" }) {
  return useQuery({
    queryKey: ["episodes", page, name || episode],
    queryFn: () => getEpisodes({ page, name, episode }),
    keepPreviousData: true,
    staleTime: 1000 * 60,
  });
}
