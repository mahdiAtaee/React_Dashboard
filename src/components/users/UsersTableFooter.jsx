import { useState } from "react";

const UsersTableFooter = ({
  handleNextPage,
  handlePrevPage,
  currentPage,
  pagelimit,
  maxPage,
  handlePageClick
}) => {
  const [maxPages, setmaxPages] = useState();
  maxPage.then((num) => setmaxPages(num));
  const max = Math.ceil(maxPages / pagelimit);
  const elem = [];
  for (let i = 1; i < max + 1; i++) {
    elem.push(
      <span key={i} className={currentPage === i ? "page active" : "page"} onClick={(e) => handlePageClick(e,i)}>
        {i}
      </span>
    );
  }

  return (
    <div className="table_footer_wrapper">
      <div className="pagination_button">
        <span className="before c-pointer" onClick={handlePrevPage}>
          &larr;
        </span>
        {elem}
        <span className="next c-pointer" onClick={handleNextPage}>
          &rarr;
        </span>
      </div>
      <div className="pagination_count">
        <span>
          {currentPage} از {max} صفحه
        </span>
      </div>
    </div>
  );
};

export default UsersTableFooter;
