import { Link } from "react-router-dom";

function EpisodeCard({ episode }) {
  const { id, name, air_date, episode: code } = episode;
  return (
    <Link to={`/episode/${id}`}>
      <div
        key={id}
        className="w-[280px] md:w-[210px] lg:w-[300px] rounded-xl shadow-character-card cursor-pointer overflow-auto 
      py-2 bg-secondary-900 px-2"
      >
        <div className="min-h-32 flex flex-col gap-y-1 items-center justify-center text-center">
          <span className="text-xl font-bold text-secondary-200 truncate w-full">
            {name}
          </span>
          <span className="text-sm font-normal text-secondary-300">
            {air_date}
          </span>
          <span className="text-base font-bold text-secondary-300">{code}</span>
        </div>
      </div>
    </Link>
  );
}

export default EpisodeCard;
