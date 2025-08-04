import { useState } from "react";
import CustomSelect from "../../../shared/components/CustomSelect";
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";
import SearchFilter from "../../../shared/components/SearchFilter";
import FilterModalContainer from "../../../shared/components/FilterModalContainer";
import Backdrop from "../../../shared/components/Backdrop";
import LocationFilterModal from "../components/LocationFilterModal";
import { useModal } from "../../../shared/hooks/useModal";

function Locations() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDimention, setSelectedDimension] = useState("");
  const { isOpen, open, close } = useModal();

  const locationTypes = [
    "Planet",
    "Cluster",
    "Space station",
    "Microverse",
    "TV",
    "Resort",
    "Fantasy town",
  ];
  const dimensions = [
    "Dimension C-137",
    "Dimension C-500A",
    "Replacement Dimension",
    "Cronenberg Dimension",
    "Fantasy Dimension",
    "Dimension 35-C",
  ];

  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-2">
      <div>
        <img
          className="mx-auto w-80 md:w-80"
          src="/src/assets/images/rick-and-morty-logo-locations.svg"
          alt="rick-and-morty-logo-charaters"
        />
      </div>

      {isOpen && (
        <>
          <Backdrop onClose={close} />
          <FilterModalContainer onClose={close} className={"sm:hidden"}>
            <LocationFilterModal />
          </FilterModalContainer>
        </>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <SearchFilter placeholder={"Filter by name..."} className="w-60" />

        <button
          className="flex items-center justify-around p-3 bg-secondary sm:hidden"
          onClick={open}
        >
          <img
            src="/src/assets/icons/advanced-filter-icon.svg"
            alt="advanced-filter-icon"
          />
          <span className="text-primary">ADVANCED FILTERS</span>
        </button>

        <CustomSelect
          options={locationTypes}
          value={selectedType}
          onChange={setSelectedType}
          placeholder={"Type"}
          className={"hidden lg:block w-60"}
        />

        <CustomSelect
          options={dimensions}
          value={selectedDimention}
          onChange={setSelectedDimension}
          placeholder={"Dimension"}
          className={"hidden lg:block w-60"}
        />
      </div>

      <div>
        <LoadMoreButton />
      </div>
    </div>
  );
}

export default Locations;
