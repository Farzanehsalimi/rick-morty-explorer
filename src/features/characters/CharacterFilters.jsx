import { useState } from "react";
import CustomSelect from "../../ui/CustomSelect";
import { useSearchParams } from "react-router-dom";

function CharacterFilters({ className = "", onApply }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [localFilters, setLocalFilters] = useState({
    species: searchParams.get("species") || "",
    gender: searchParams.get("gender") || "",
    status: searchParams.get("status") || "",
  });

  const handleChange = (field, value) => {
    setLocalFilters((prev) => ({ ...prev, [field]: value }));

    if (window.innerWidth >= 1024) {
      const params = new URLSearchParams(searchParams);
      if (value) params.set(field, value);
      else params.delete(field);
      params.set("page", 1);
      setSearchParams(params);
    }
  };

  const handleApply = () => {
    if (onApply) onApply(localFilters);
  };

  const gendersOpt = [
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
    { label: "Genderless", value: "genderless" },
    { label: "Unknown", value: "unknown" },
  ];

  const speciesOpt = [
    { label: "Human", value: "human" },
    { label: "Alien", value: "alien" },
    { label: "Humanoid", value: "humanoid" },
    { label: "Poopybutthole", value: "poopybutthole" },
    { label: "Mythological Creature", value: "mythological creature" },
  ];

  const statusOpt = [
    { label: "Alive", value: "alive" },
    { label: "Dead", value: "dead" },
    { label: "Unknown", value: "unknown" },
  ];

  return (
    <div className={`flex flex-col lg:flex-row gap-4 lg:gap-6 ${className}`}>
      <CustomSelect
        options={speciesOpt}
        filterField="species"
        placeholder="Species"
        value={localFilters.species}
        onChange={(val) => handleChange("species", val)}
        className="w-full lg:w-56"
      />
      <CustomSelect
        options={gendersOpt}
        filterField="gender"
        placeholder="Gender"
        value={localFilters.gender}
        onChange={(val) => handleChange("gender", val)}
        className="w-full lg:w-56"
      />
      <CustomSelect
        options={statusOpt}
        filterField="status"
        placeholder="Status"
        value={localFilters.status}
        onChange={(val) => handleChange("status", val)}
        className="w-full lg:w-56"
      />

      <button
        onClick={handleApply}
        className="lg:hidden mt-4 h-9 mb-2 shadow-modal-btns rounded-xl font-bold text-primary-600 bg-primary-100"
      >
        APPLY
      </button>
    </div>
  );
}

export default CharacterFilters;
