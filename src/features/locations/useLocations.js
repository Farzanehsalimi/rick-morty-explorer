import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../../services/locationService";

export function useLocations({ page, name, type, dimension }) {
  return useQuery({
    queryKey: ["locations", page, name, type, dimension],
    queryFn: () => getLocations({ page, name, type, dimension }),
    keepPreviousData: true,
    staleTime: 1000 * 60,
    retry: false,
  });
}
