import { GridLoader } from "react-spinners";

function Loading({ size = 20, color = "rgb(var(--color-primary-300))" }) {
  return (
    <div className="flex justify-center items-center mt-56 sm:mt-80">
      <GridLoader color={color} size={size} />
    </div>
  );
}

export default Loading;
