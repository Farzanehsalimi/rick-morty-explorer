import SearchFilter from "../ui/SearchFilter";
import FilterModalContainer from "../ui/FilterModalContainer";
import Backdrop from "../ui/Backdrop";
import { useModal } from "../hooks/useModal";
import LocationSkeletonList from "../features/locations/LocationSkeletonList";
import LocationList from "../features/locations/LocationList";
import { useLocations } from "../features/locations/useLocations";
import Pagination from "../ui/Pagination";
import { useSearchParams } from "react-router-dom";
import LocationFilters from "../features/locations/LocationFilters";
import { IoFilterOutline } from "react-icons/io5";
import Loading from "../ui/Loading";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import ErrorHandler from "../ui/ErrorHandler";

function Locations() {
  const { isOpen, open, isClosing, close } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const [localName, setLocalName] = useState(name);
  const debouncedName = useDebounce(localName, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (debouncedName) params.set("name", debouncedName);
    else params.delete("name");
    setSearchParams(params);
  }, [debouncedName, searchParams]);

  useEffect(() => {
    const currentName = searchParams.get("name") || "";
    setLocalName(currentName);
  }, [searchParams]);

  const page = Number(searchParams.get("page")) || 1;
  const type = searchParams.get("type") || "";
  const dimension = searchParams.get("dimension") || "";

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

  const { data, isLoading, isError, error } = useLocations({
    page,
    type,
    dimension,
    name: debouncedName,
  });
  if (isLoading) return <Loading />;
  if (isError) return <ErrorHandler error={error} />;

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img
          className="mx-auto w-80 md:w-80 my-10"
          src="/src/assets/images/rick-and-morty-logo-locations.svg"
          alt="rick-and-morty-logo-charaters"
        />
      </div>

      {(isOpen || isClosing) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center lg:hidden">
          <Backdrop />
          <FilterModalContainer
            isClosing={isClosing}
            onClose={close}
            className={"lg:hidden"}
          >
            <LocationFilters onApply={handleApplyFilters} />
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

        {/* mobile: */}
        <button
          className="flex items-center rounded-xl w-72 p-3 bg-secondary lg:hidden shadow-modal-btns"
          onClick={open}
        >
          <IoFilterOutline className="w-6 h-6 ml-2 text-secondary-300" />
          <span className="text-primary-500 mx-auto font-bold">
            ADVANCED FILTERS
          </span>
        </button>

        <LocationFilters
          className="hidden lg:flex"
          onApply={handleApplyFilters}
        />
      </div>

      <div>
        {isLoading ? (
          <LocationSkeletonList />
        ) : !data?.results ? (
          <div className="text-center text-secondary-300 text-lg mt-10">
            No Locations found matching these filters 😕
          </div>
        ) : data.results.length === 0 ? (
          <div className="text-center text-secondary-300 text-lg mt-10">
            No Locations found matching these filters 😕
          </div>
        ) : (
          <LocationList Locations={data.results} />
        )}
      </div>

      <div className="pt-14 pb-8">
        <Pagination
          totalPages={data.info.pages}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Locations;
