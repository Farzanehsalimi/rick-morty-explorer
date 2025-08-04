import { useState } from "react";
import CustomSelect from "../../../shared/components/CustomSelect";

function LocationFilterModal() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDimention, setSelectedDimension] = useState("");

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
    <div>
      <CustomSelect
        options={locationTypes}
        value={selectedType}
        onChange={setSelectedType}
        placeholder={"Type"}
        className={"block col-span-full max-w-96 mb-4"}
      />
      <CustomSelect
        options={dimensions}
        value={selectedDimention}
        onChange={setSelectedDimension}
        placeholder={"Dimension"}
        className={"block col-span-full max-w-96"}
      />
    </div>
  );
}

export default LocationFilterModal;
