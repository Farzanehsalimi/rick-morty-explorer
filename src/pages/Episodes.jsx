import { useSearchParams } from "react-router-dom";
import EpisodeList from "../features/episodes/EpisodeList";
import EpisodeSkeletonList from "../features/episodes/EpisodeSkeletonList";
import { useEpisodes } from "../features/episodes/useEpisodes";
import Pagination from "../ui/Pagination";
import SearchFilter from "../ui/SearchFilter";
import Loading from "../ui/Loading";
import ErrorHandler from "../ui/ErrorHandler";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import RickAndMortyEpisodes from "/src/assets/images/rick-and-morty-logo-episodes.png";

function Episodes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const queryFromParams = searchParams.get("query") || "";

  const [localQuery, setLocalQuery] = useState(queryFromParams);
  const debouncedQuery = useDebounce(localQuery, 1000);

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    setSearchParams(params);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);

    if (debouncedQuery) {
      if (/^S\d+/i.test(debouncedQuery)) {
        params.set("episode", debouncedQuery);
        params.delete("name");
      } else {
        params.set("name", debouncedQuery);
        params.delete("episode");
      }
      params.set("query", debouncedQuery);
    } else {
      params.delete("name");
      params.delete("episode");
      params.delete("query");
    }

    setSearchParams(params);
  }, [debouncedQuery]);

  const name = searchParams.get("name") || "";
  const episode = searchParams.get("episode") || "";

  const { data, isLoading, isError, error } = useEpisodes({
    page,
    name,
    episode,
  });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorHandler error={error} />;

  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <div>
        <img
          className="mx-auto w-80 md:w-72 my-10"
          src={RickAndMortyEpisodes}
          alt="rick-and-morty-logo-charaters"
        />
      </div>

      <SearchFilter
        placeholder={"Filter by name or episode (ex. S01 or E02)"}
        className="w-[305px] sm:w-[420px] mb-12 sm:mb-14"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />

      <div>
        {isLoading ? (
          <EpisodeSkeletonList />
        ) : isError ? (
          <div className="text-center text-secondary-300 text-lg mt-10">
            No Episodes found matching these filters 😕
          </div>
        ) : !data?.results?.length ? (
          <div className="text-center text-secondary-300 text-lg mt-10">
            No Episodes found matching these filters 😕
          </div>
        ) : (
          <EpisodeList episodes={data.results} />
        )}
      </div>

      {data?.info?.pages && data.results.length > 0 && (
        <Pagination
          totalPages={data.info.pages}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default Episodes;
