function SearchFilter({ placeholder, className }) {
  return (
    <div>
      <form
        className={`${className} flex justify-left items-center gap-2 rounded-lg border border-black/40`}
      >
        <img
          className="pl-4"
          src="/src/assets/icons/search-icon.svg"
          alt="search-icon"
        />
        <input
          className="appearance-none bg-transparent h-12 sm:h-14 text-left border-none focus:outline-none shadow-none placeholder-black/70"
          type="text"
          placeholder={placeholder}
        />
      </form>
    </div>
  );
}

export default SearchFilter;
