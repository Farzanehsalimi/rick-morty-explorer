import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import classNames from "classnames";
import { generatePagination } from "../utils/generatePagination";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  // جلوگیری از انتخاب صفحات نامعتبر
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    onPageChange(pageNumber);
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        onClick={() => handlePageChange(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={`${page}-${index}`}
              page={page}
              position={position}
              isActive={currentPage === page}
              onClick={() => page !== "..." && handlePageChange(page)}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({ page, isActive, position, onClick }) {
  const className = classNames(
    "flex h-8 w-8 lg:h-11 lg:w-11 items-center justify-center text-sm border border-secondary-700 text-secondary-100 cursor-pointer select-none",
    {
      "": position === "first" || position === "single",
      "": position === "last" || position === "single",
      "z-0 bg-primary-500 !border-primary-500 text-white": isActive,
      "hover:bg-secondary-700": !isActive && position !== "middle",
      "text-secondary-500 cursor-default": position === "middle",
    }
  );

  return (
    <div className={className} onClick={position !== "middle" ? onClick : null}>
      {page}
    </div>
  );
}

function PaginationArrow({ direction, isDisabled, onClick }) {
  const className = classNames(
    "flex h-8 w-8 lg:h-11 lg:w-11 items-center justify-center border border-secondary-700 text-secondary-400 cursor-pointer",
    {
      "pointer-events-none text-secondary-200 !border-secondary-700":
        isDisabled,
      "hover:bg-secondary-700": !isDisabled,
      " rounded-l-xl": direction === "left",
      "rounded-r-xl rounded-l-none": direction === "right",
    }
  );

  const icon =
    direction === "left" ? (
      <FaArrowLeft className="w-4 text-secondary-400" />
    ) : (
      <FaArrowRight className="w-4 text-secondary-400" />
    );

  return (
    <div
      className={className}
      onClick={!isDisabled ? onClick : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !isDisabled) onClick();
      }}
    >
      {icon}
    </div>
  );
}
