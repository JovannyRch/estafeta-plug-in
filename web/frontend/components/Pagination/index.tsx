import React, { useState } from "react";
import {
  Container,
  IconButton,
  NumberButton,
  DropdownContainer,
} from "./styled-components";
import Dropdown from "../Dropdown/Dropdown";

interface Props {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const menu = [
  {
    label: "5",
  },
  {
    label: "20",
  },
  {
    label: "50",
  },
  {
    label: "100",
  },
  {
    label: "150",
  },
];

const Pagination = ({ totalPages = 0, currentPage, setCurrentPage }: Props) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const [itemsPerPage, setItemsPerPage] = useState("5");

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

      <DropdownContainer>
        <Dropdown
          label={"5"}
          menu={menu.map((item) => (
            <button onClick={() => setItemsPerPage(item.label.toString())}>
              {item.label}
            </button>
          ))}
          width={77}
          menuPosition={"top"}
          value={itemsPerPage}
        />
      </DropdownContainer>
    </Container>
  );
};

export default Pagination;
