import { IoIosSearch } from "react-icons/io";

function SearchFilter({ placeholder, className, value, onChange }) {
  return (
    <form
      className={`${className} flex justify-left items-center gap-2 text-secondary-200 rounded-xl border border-secondary-600 shadow-modal-btns focus:border-primary-500 hover:border-primary-500`}
    >
      <IoIosSearch className="w-9 h-9 sm:w-10 sm:h-10 pl-3 sm:pl-4 text-secondary-400" />
      <input
        className="text-xs sm:text-base appearance-none w-full bg-transparent h-11 sm:h-[50px] text-left border-none focus:outline-none shadow-none placeholder-secondary-400"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

export default SearchFilter;
