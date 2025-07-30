import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

function CustomSelect({ options, value, onChange, placeholder, className }) {
  return (
    <div className={className}>
      <Listbox className="h-full" value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="w-full h-full text-black/70 border border-black/40 rounded-lg pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
            {value || placeholder}
            <img
              className="absolute inset-y-0 right-0 mr-3 my-auto text-gray-400 pointer-events-none"
              aria-hidden="true"
              src="/src/assets/icons/chevron-down-filled.svg"
              alt="chevron-down-filled"
            />
          </ListboxButton>

          <ListboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
            {options.map((option) => {
              return (
                <ListboxOption
                  key={option}
                  value={option}
                  className={({ isActive }) =>
                    `cursor-pointer px-4 py-2 ${
                      isActive ? "bg-primary text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={
                        selected ? "font-bold text-primary" : "font-normal"
                      }
                    >
                      {option}
                    </span>
                  )}
                </ListboxOption>
              );
            })}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomSelect;
