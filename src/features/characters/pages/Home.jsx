import { useEffect, useState } from "react";
import CustomSelect from "../../../shared/components/CustomSelect";
import SearchFilter from "../../../shared/components/SearchFilter";
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";
import CharacterFilterModal from "../components/CharacterFilterModal";
import FilterModalContainer from "../../../shared/components/FilterModalContainer";
import Backdrop from "../../../shared/components/Backdrop";
import { useModal } from "../../../shared/hooks/useModal";
import CharacterList from "../components/CharacterList";
import useCharcters from "../hooks/useCharacters";
import RickAndMortyLogo from "/src/assets/images/rick-and-morty-logo-charaters.svg";
import toast from "react-hot-toast";
import CharacterSkeletonList from "../components/CharacterSkeletonList";
import WithOfflineGuard from "../../../shared/components/WithOfflineGuard";

function Home() {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const { isOpen, isClosing, open, close } = useModal();
  // const [delayedError, setDelayedError] = useState(false);

  const { characters, initialLoading, loadMoreLoading, error } = useCharcters();

  const genders = ["Female", "Male", "Genderless", "Unknown"];
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological Creature",
  ];
  const status = ["Alive", "Dead", "Unknown"];

  useEffect(() => {
    if (error) {
      toast.error("خطا در دریافت داده‌ها 😢");
    }
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="mx-auto w-80 sm:w-[450px] md:w-[600px] mt-8 mb-8 sm:mb-4"
        src={RickAndMortyLogo}
        alt="rick-and-morty-logo-charaters"
      />

      {/* mobile */}
      {(isOpen || isClosing) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center lg:hidden">
          <Backdrop />
          <FilterModalContainer
            isClosing={isClosing}
            onClose={close}
            className={"lg:hidden"}
          >
            <CharacterFilterModal />
          </FilterModalContainer>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-4 mb-12 sm:mb-16">
        <SearchFilter
          placeholder={"Filter by name..."}
          className="w-72 lg:w-60"
        />

        {/* mobile: */}
        <button
          className="flex items-center w-72 p-3 bg-secondary lg:hidden shadow-modal-btns"
          onClick={open}
        >
          <img
            src="/src/assets/icons/advanced-filter-icon.svg"
            alt="advanced-filter-icon"
          />
          <span className="text-primary mx-auto">ADVANCED FILTERS</span>
        </button>

        <CustomSelect
          options={species}
          value={selectedSpecies}
          onChange={setSelectedSpecies}
          placeholder={"Species"}
          className={"hidden lg:block w-60"}
        />

        <CustomSelect
          options={genders}
          value={selectedGender}
          onChange={setSelectedGender}
          placeholder={"Gender"}
          className={"hidden lg:block w-60"}
        />

        <CustomSelect
          options={status}
          value={selectedStatus}
          onChange={setSelectedStatus}
          placeholder={"Status"}
          className={"hidden lg:block w-60"}
        />
      </div>
      <div>
        <WithOfflineGuard>
          {initialLoading ? (
            <CharacterSkeletonList />
          ) : (
            // : error ? (
            // <ErrorMessage />)
            <CharacterList characters={characters} />
          )}
        </WithOfflineGuard>
      </div>
      <div>
        <LoadMoreButton className={"mb-4 md:mb-11"} />
      </div>
    </div>
  );
}

export default Home;
