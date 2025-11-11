import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";

function CustomSelect({ options, value, onChange, placeholder, className }) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={`relative ${className}`}>
      <Listbox value={value} onChange={onChange}>
        <div className="relative h-11 sm:h-[52px]">
          <Listbox.Button className="w-full h-full text-secondary-200 border border-secondary-600 rounded-xl pl-3 pr-10 text-left shadow-modal-btns focus:outline-none focus:ring-1 focus:ring-primary-200 focus:border-primary-200">
            <FaChevronDown
              className="absolute inset-y-0 right-0 mr-3 my-auto text-secondary-400 pointer-events-none w-3 h-3"
              aria-hidden="true"
            />
            {selectedOption ? (
              <span>{selectedOption.label}</span>
            ) : (
              <span className="text-sm lg:text-base text-secondary-300">
                {placeholder}
              </span>
            )}
          </Listbox.Button>

          {/* اضافه کردن Transition کنترل‌شده */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options
              className="absolute top-full left-0 z-10 mt-1 w-full bg-secondary-800 border border-primary-300 shadow-lg rounded-lg py-1 text-base overflow-auto focus:outline-none"
              style={{ willChange: "transform" }}
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  className={({ active }) =>
                    `cursor-pointer px-4 py-2 text-xs lg:text-base font-black text-secondary-100 bg-secondary-800 hover:bg-primary-50 hover:text-black ${
                      active ? "bg-primary-100" : ""
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={
                        selected ? "font-bold text-primary-500" : "font-normal"
                      }
                    >
                      {option.label}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomSelect;
