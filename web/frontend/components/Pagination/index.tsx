import React from "react";
import { Container, IconButton, NumberButton } from "./styled-components";

interface Props {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({ totalPages = 0, currentPage, setCurrentPage }: Props) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handleGoToFirstPage = () => {
    setCurrentPage(1);
  };

  const handleGoToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleGoToNextPage = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleGoToPreviousPage = () => {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (totalPages === 0) {
    return null;
  }

  return (
    <Container>
      <IconButton onClick={handleGoToFirstPage} active={!isFirstPage}>
        {"<<"}
      </IconButton>
      <IconButton onClick={handleGoToPreviousPage} active={!isFirstPage}>
        {"<"}
      </IconButton>

      {Array.from(Array(totalPages).keys()).map((page) => (
        <NumberButton
          active={currentPage === page + 1}
          onClick={() => setCurrentPage(page + 1)}
        >
          {page + 1}
        </NumberButton>
      ))}

      <IconButton onClick={handleGoToNextPage} active={!isLastPage}>
        {">"}
      </IconButton>
      <IconButton onClick={handleGoToLastPage} active={!isLastPage}>
        {">>"}
      </IconButton>
    </Container>
  );
};

export default Pagination;
