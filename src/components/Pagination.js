import { SkipNextRounded, SkipPreviousRounded } from "@material-ui/icons";
import React from "react";

import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handleButton = (page) => {
    setCurrentPage(page);
    scroll(0, 0);
  };

  const pageRange = 2; // Número de páginas a mostrar antes y después de la página actual
  const startPage = Math.max(1, currentPage - pageRange);
  const endPage = Math.min(currentPage + pageRange, pages.length);

  let pagesToShow = pages.slice(startPage - 1, endPage);

  // Si la página actual es menor que el número de páginas a mostrar, agrega páginas al final
  if (currentPage <= pageRange) {
    pagesToShow = [...pagesToShow, ...pages.slice(endPage, pageRange * 2 + 1)];
  }

  // Si la página actual es mayor que el número de páginas a mostrar, agrega páginas al inicio
  if (currentPage >= pages.length - pageRange) {
    pagesToShow = [
      ...pages.slice(Math.max(pages.length - pageRange * 2, 0), startPage - 1),
      ...pagesToShow,
    ];
  }

  console.log(currentPage);

  return (
    <div className="pagination my-5 ">
      <button
        onClick={() => handleButton(currentPage - 1)}
        disabled={currentPage === 1}
        className="d-flex justify-content-center align-items-center"
      >
        <SkipPreviousRounded className="" />
      </button>

      {pagesToShow.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => page !== currentPage && handleButton(page)}
            className={
              page === currentPage ? "active text-center " : "text-center"
            }
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => handleButton(currentPage + 1)}
        disabled={currentPage === pages.length}
        className="d-flex justify-content-center align-items-center"
      >
        <SkipNextRounded className="" />
      </button>
    </div>
  );
};

export default Pagination;
