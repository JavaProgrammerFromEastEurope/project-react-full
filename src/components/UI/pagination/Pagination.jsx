import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((indexPage) => (
        <span
          onClick={() => changePage(indexPage)}
          key={indexPage}
          className={page === indexPage ? "page page__current" : "page"}
        >
          {indexPage}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
