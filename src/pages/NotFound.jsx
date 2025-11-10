import useMoveBack from "../hooks/useMoveBack";
import { IoArrowBack } from "react-icons/io5";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen bg-secondary-900">
      <div className="container xl:max-w-screen-xl">
        <div className="flex pt-10">
          <button
            onClick={moveBack}
            className="flex items-center gap-x-2 col-span-1 text-secondary-100"
          >
            <IoArrowBack className="w-4 h-4 sm:w-6 sm:h-6 mt-0.5" />
            <span className="text-sm sm:text-xl font-bold">Go Back</span>
          </button>
        </div>
        <h1 className="text-4xl text-center font-bold text-error mt-32">
          Page not found.
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
