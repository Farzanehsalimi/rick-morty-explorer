import { Link } from "react-router-dom";
import truncateText from "../../utils/truncateText";

function CharacterCard({ character }) {
  const { id, name, image, species } = character;
  return (
    <Link to={`/character/${character.id}`}>
      <div
        key={id}
        className="rounded-xl bg-secondary-900 shadow-character-card cursor-pointer overflow-auto w-[280px] sm:w-auto lg:w-[300px]"
      >
        <img
          className="w-[300px] h-48 md:h-40 lg:h-56 object-cover"
          src={image}
          alt={name}
        />
        <div className="py-3 px-4">
          <p className="text-lg md:text-xl font-medium text-secondary-200">
            {truncateText(name, 15)}
          </p>
          <span className="text-sm font-normal text-secondary-400">
            {species}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
