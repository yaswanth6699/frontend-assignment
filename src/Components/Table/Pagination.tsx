import Arrow from "../../assets/Arrow";
import { PaginationProps } from "../../types";
import "./styles.css";
import { getCustomPaginationArr } from "./utils";

const Pagination = ({ pages, setPage, currentPage }: PaginationProps) => {
  const handleNext = (page: number) => {
    if (page === pages) return;
    setPage(page + 1);
  };
  const handlePrev = (page: number) => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleSelect = (page: number | string) => {
    if (typeof page !== "number") return;
    setPage(page);
  };

  return (
    <div className="pagination">
      <div
        className={`arrow-wrapper ${currentPage === 1 ? "disabled-arrow" : ""}`}
        onClick={() => handlePrev(currentPage)}
      >
        <Arrow className="left-arrow" disabled={currentPage === 1} />
      </div>
      <div className="pages">
        {getCustomPaginationArr(pages, currentPage).map((page, index) => {
          const paginatinClassName = `${
            typeof page === "number" ? "pagination-item" : ""
          } ${currentPage === page ? "selected-item" : ""}`;
          return (
            <div
              key={index}
              onClick={() => handleSelect(page)}
              className={paginatinClassName}
            >
              {page}
            </div>
          );
        })}
      </div>
      <div
        className={`arrow-wrapper ${
          currentPage === pages ? "disabled-arrow" : ""
        }`}
        onClick={() => handleNext(currentPage)}
      >
        <Arrow className="right-arrow" disabled={currentPage === pages} />
      </div>
    </div>
  );
};

export default Pagination;
