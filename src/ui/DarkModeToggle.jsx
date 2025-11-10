import { useDarkMode } from "../context/DarkModeContext";
import { CiSun } from "react-icons/ci";
import { GoMoon } from "react-icons/go";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <div className="bg-secondary-100 rounded-2xl">
          <GoMoon className="size-9 lg:size-10 text-primary-600 p-0.5" />
        </div>
      ) : (
        <div className="bg-secondary-0 rounded-2xl">
          <CiSun className="size-9 lg:size-10 text-yellow-400 p-0.5" />
        </div>
      )}
    </button>
  );
}

export default DarkModeToggle;
