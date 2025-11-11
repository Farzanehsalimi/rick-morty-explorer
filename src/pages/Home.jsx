import SearchFilter from "../ui/SearchFilter";
import FilterModalContainer from "../ui/FilterModalContainer";
import Backdrop from "../ui/Backdrop";
import RickAndMortyLogo from "/src/assets/images/rick-and-morty-logo-charaters.png";
import { useModal } from "../hooks/useModal";
import { useCharacters } from "../features/characters/useCharacters";
import CharacterSkeletonList from "../features/characters/CharacterSkeletonList";
import CharacterList from "../features/characters/CharacterList";
import Pagination from "../ui/Pagination";
import { useSearchParams } from "react-router-dom";
import CharacterFilters from "../features/characters/CharacterFilters";
import { IoFilterOutline } from "react-icons/io5";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect, useState } from "react";
import ErrorHandler from "../ui/ErrorHandler";

function Home() {
  const { isOpen, isClosing, open, close } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const [localName, setLocalName] = useState(name);
  const debouncedName = useDebounce(localName);

  const page = Number(searchParams.get("page")) || 1;
  const gender = searchParams.get("gender") || "";
  const species = searchParams.get("species") || "";
  const status = searchParams.get("status") || "";

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (debouncedName) params.set("name", debouncedName);
    else params.delete("name");
    setSearchParams(params);
  }, [debouncedName]);

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    setSearchParams(params);
  };

  const handleApplyFilters = (filters) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });

    setSearchParams(params);
    close();
  };

  const { data, isLoading, isError, error } = useCharacters({
    page,
    gender,
    species,
    status,
    name: debouncedName,
  });

  if (isError) return <ErrorHandler error={error} />;

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="mx-auto w-80 sm:w-[450px] md:w-[600px] my-10"
        src={RickAndMortyLogo}
        alt="rick-and-morty-logo-charaters"
      />
      {(isOpen || isClosing) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center lg:hidden">
          <Backdrop />
          <FilterModalContainer
            isClosing={isClosing}
            onClose={close}
            className={"lg:hidden"}
          >
            <CharacterFilters onApply={handleApplyFilters} />
          </FilterModalContainer>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-4 mb-12 sm:mb-16">
        <SearchFilter
          placeholder={"Filter by name..."}
          className="w-72 lg:w-56"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />

        <button
          className="flex items-center rounded-xl w-72 p-3 bg-secondary lg:hidden shadow-modal-btns"
          onClick={open}
        >
          <IoFilterOutline className="w-6 h-6 ml-2 text-secondary-300" />
          <span className="text-primary-500 mx-auto font-bold">
            ADVANCED FILTERS
          </span>
        </button>

        <CharacterFilters
          className="hidden lg:flex"
          onApply={handleApplyFilters}
        />
      </div>
      <div>
        {isLoading ? (
          <CharacterSkeletonList />
        ) : !data?.results?.length ? (
          <div className="text-center text-secondary-300 text-lg mt-10">
            No characters found matching these filters 😕
          </div>
        ) : (
          <CharacterList characters={data.results} />
        )}
      </div>

      {data?.info?.pages > 0 && (
        <div className="pt-14 pb-8">
          <Pagination
            totalPages={data.info.pages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
