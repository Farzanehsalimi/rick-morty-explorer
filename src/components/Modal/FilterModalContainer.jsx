function FilterModalContainer({ isClosing, onClose, children, className }) {
  return (
    <div
      className={`
        fixed  z-50 
         -translate-x-1/2 -translate-y-1/2
        w-72 sm:w-80 max-h-[80vh] overflow-y-auto p-4 rounded bg-white shadow-md grid gap-4
        ${isClosing ? "animate-modalOut" : "animate-modalIn"}
        ${className}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold">Filters</h4>
        <img
          className="cursor-pointer bg-red-200 rounded-md px-1.5"
          onClick={onClose}
          src="/src/assets/icons/close-icon.svg"
          alt="close-icon"
        />
      </div>

      {children}

      <button className="h-9 shadow-modal-btns rounded font-medium text-primary bg-secondary">
        APPLY
      </button>
    </div>
  );
}

export default FilterModalContainer;
