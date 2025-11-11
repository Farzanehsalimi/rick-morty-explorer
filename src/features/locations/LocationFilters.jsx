import { useState } from "react";
import CustomSelect from "../../ui/CustomSelect";
import { useSearchParams } from "react-router-dom";

function LocationFilters({ className = "", onApply }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [localFilters, setLocalFilters] = useState({
    type: searchParams.get("type") || "",
    dimension: searchParams.get("dimension") || "",
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

  const typesOpt = [
    { label: "Planet", value: "planet" },
    { label: "Cluster", value: "cluster" },
    { label: "Space station", value: "space station" },
    { label: "Microverse", value: "microverse" },
    { label: "TV", value: "tv" },
    { label: "Resort", value: "resort" },
    { label: "Fantasy town", value: "fantasy town" },
  ];

  const dimensionsOpt = [
    { label: "Dimension C-137", value: "Dimension C-137" },
    { label: "Dimension C-500A", value: "Dimension C-500A" },
    { label: "Replacement Dimension", value: "Replacement Dimension" },
    { label: "Cronenberg Dimension", value: "Cronenberg Dimension" },
    { label: "Fantasy Dimension", value: "Fantasy Dimension" },
    { label: "Dimension 35-C", value: "Dimension 35-C" },
  ];

  return (
    <div className={`flex flex-col lg:flex-row gap-4 lg:gap-6 ${className}`}>
      <CustomSelect
        options={typesOpt}
        filterField="type"
        placeholder="Type"
        value={localFilters.type}
        onChange={(val) => handleChange("type", val)}
        className="w-full lg:w-56"
      />
      <CustomSelect
        options={dimensionsOpt}
        filterField="dimension"
        placeholder="Dimension"
        value={localFilters.dimension}
        onChange={(val) => handleChange("dimension", val)}
        className="w-full lg:w-56"
      />

      <button
        onClick={handleApply}
        className="lg:hidden text-lg mt-4 h-9 mb-2 shadow-modal-btns rounded-xl font-bold text-primary-600 bg-primary-100"
      >
        APPLY
      </button>
    </div>
  );
}

export default LocationFilters;
