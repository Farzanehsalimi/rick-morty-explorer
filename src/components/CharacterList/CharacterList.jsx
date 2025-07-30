import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-5">
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </div>
  );
}

export default CharacterList;
