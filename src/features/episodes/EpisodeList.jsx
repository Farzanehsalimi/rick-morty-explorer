import EpisodeCard from "./EpisodeCard";

function EpisodeList({ episodes = [] }) {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 transition-all">
      {episodes.map((episode) => {
        return <EpisodeCard key={episode.id} episode={episode} />;
      })}
    </div>
  );
}

export default EpisodeList;
