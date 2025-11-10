import { IoCloseOutline } from "react-icons/io5";

function FilterModalContainer({ isClosing, onClose, children, className }) {
  return (
    <div
      className={`
        fixed z-50 -translate-x-1/2 -translate-y-1/2
        w-72 sm:w-80 max-h-[80vh] overflow-y-auto p-4 rounded bg-secondary-900 shadow-md grid gap-4
        ${isClosing ? "animate-modalOut" : "animate-modalIn"}
        ${className}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between mb-4">
        <h4 className="text-xl font-semibold text-secondary-50">Filters</h4>
        <IoCloseOutline
          onClick={onClose}
          className="w-7 h-7 cursor-pointer bg-red-200 rounded-md text-black/80 mt-0.5"
        />
      </div>

      {children}
    </div>
  );
}
export default FilterModalContainer;
