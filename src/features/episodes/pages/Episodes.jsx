import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";
import SearchFilter from "../../../shared/components/SearchFilter";
// import useMoveBack from "../../../hooks/useMoveBack";

function Episodes() {
  return (
    // <div className="flex justify-center items-center">
    //   <img src="/src/assets/images/loading.svg" alt="" />
    // </div>
    <div className="flex flex-col gap-8 justify-center items-center mt-2">
      <div>
        <img
          className="mx-auto w-80 md:w-72"
          src="/src/assets/images/rick-and-morty-logo-episodes.svg"
          alt="rick-and-morty-logo-charaters"
        />
      </div>
      <SearchFilter
        placeholder={"Filter by name or episode (ex. S01 or S01E02)"}
        className=""
      />
      <div>
        <LoadMoreButton />
      </div>
    </div>
  );
}

export default Episodes;
