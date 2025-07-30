import { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";

function CharacterFilterModal() {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const genders = ["Female", "Male", "Genderless", "Unknown"];
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological Creature",
  ];
  const status = ["Alive", "Dead", "Unknown"];

  return (
    <div>
      <CustomSelect
        options={species}
        value={selectedSpecies}
        onChange={setSelectedSpecies}
        placeholder={"Species"}
        className={"h-12 sm:h-14 mb-4"}
      />

      <CustomSelect
        options={genders}
        value={selectedGender}
        onChange={setSelectedGender}
        placeholder={"Gender"}
        className={"h-12 sm:h-14 mb-4"}
      />

      <CustomSelect
        options={status}
        value={selectedStatus}
        onChange={setSelectedStatus}
        placeholder={"Status"}
        className={"h-12 sm:h-14"}
      />
    </div>
  );
}

export default CharacterFilterModal;
