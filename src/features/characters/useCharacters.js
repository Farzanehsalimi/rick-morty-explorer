import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../services/characterService";

export function useCharacters({ page, name, status, species, gender }) {
  return useQuery({
    queryKey: ["characters", page, name, status, species, gender],
    queryFn: () => getCharacters({ page, name, status, species, gender }),
    keepPreviousData: true,
    staleTime: 1000 * 60,
  });
}
