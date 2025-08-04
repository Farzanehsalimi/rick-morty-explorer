function CharacterCard({ character }) {
  const { id, name, image, species } = character;
  return (
    <div
      key={id}
      className="rounded shadow-character-card cursor-pointer overflow-auto"
    >
      <img className="w-72 h-48 lg:h-56 object-cover" src={image} alt={name} />
      <div className="py-3 px-4">
        <p className="text-xl font-medium text-black/90">{name}</p>
        <span className="text-sm font-normal text-black/60">{species}</span>
      </div>
    </div>
  );
}

export default CharacterCard;
