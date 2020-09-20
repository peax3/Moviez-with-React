import React, { Fragment } from "react";

const range = (from, to, step = 1) => {
  let i = from;
  const pageNumbers = [];
  while (i <= to) {
    pageNumbers.push(i);
    i += step;
  }

  return pageNumbers;
};

const Paginate = ({ totalPages, paginateFunc, currentPage, pageNeighbors }) => {
  /**
   * LEFT_PAGE, RIGHT_PAGE: to indicate points where we have page controls for moving left and right respectively
   */
  const LEFT_PAGE = "LEFT";
  const RIGHT_PAGE = "RIGHT";

  /**
   * pageNeighbors indicates the number of additional page numbers to be shown on each side of the current page. The minimum value is 2. if not specified, it defaults to 0.
   *
   */
  pageNeighbors =
    typeof pageNeighbors === "number"
      ? Math.max(0, Math.min(pageNeighbors, 2))
      : 0;

  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right (>) indicators controls
     */
    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    /**
     *
     */
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors);
      // const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);

      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);

      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffSet: number of hidden pages to either to the left or to the right
       */

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5,6} [7] {8 9} {10}
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];

          break;
        }
      }

      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers();

  const gotoPage = (page) => {
    const currentPage = Math.max(0, Math.min(page, totalPages));
    paginateFunc(currentPage);
  };

  const handleMoveLeft = (e) => {
    e.preventDefault();
    gotoPage(currentPage - pageNeighbors * 2 - 1);
  };

  const handleMoveRight = (e) => {
    e.preventDefault();
    gotoPage(currentPage + pageNeighbors * 2 + 1);
  };
  const handleClick = (e, page) => {
    gotoPage(page);
    e.preventDefault();
  };

  return (
    <Fragment>
      {totalPages === 1 ? null : (
        <nav className="pagination-nav my-3">
          <ul>
            {pages.map((page, index) => {
              if (page === LEFT_PAGE) {
                return (
                  <li key={index}>
                    <button
                      className={`btn btn-transparent btn-link`}
                      onClick={handleMoveLeft}
                    >
                      <span>&laquo;</span> <span>Prev</span>
                    </button>
                  </li>
                );
              }

              if (page === RIGHT_PAGE) {
                return (
                  <li key={index}>
                    <button
                      className={`btn btn-transparent btn-link`}
                      href=""
                      onClick={handleMoveRight}
                    >
                      <span>Next</span> <span>&raquo;</span>
                    </button>
                  </li>
                );
              }

              return (
                <li
                  key={index}
                  className={`${page === currentPage ? " active" : ""}`}
                >
                  <button
                    className={`btn btn-transparent btn-link`}
                    onClick={(e) => handleClick(e, page)}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

export default Paginate;
