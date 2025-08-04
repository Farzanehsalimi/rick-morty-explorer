function LoadMoreButton({ className }) {
  return (
    <div>
      <button
        className={`text-primary text-sm md:text-base font-medium bg-[#F2F9FE] rounded mt-8 sm:mt-12 p-2 shadow-loadMore-btn ${className}`}
      >
        LOAD MORE!
      </button>
    </div>
  );
}

export default LoadMoreButton;
