import React, { useMemo } from "react";
import styled from "styled-components";

export const BaseTableContainer = styled.table`
  border-collapse: separate;
  border-spacing: 0 10px;
`;

export const Th = styled.th`
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Tr = styled.tr`
  padding: 20px;
  margin-bottom: 20px;
  min-height: 400px;
  background-color: transparent;
`;

export const Td = styled.td`
  &:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    padding-left: 19px;
  }

  &:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    padding-right: 19px;
  }
  background-color: #fff;
`;

const CellContainer = styled.div`
  min-height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;
`;

interface CellProps {
  children: React.ReactNode;
}

const Cell = ({ children }: CellProps) => {
  return (
    <Td>
      <CellContainer>{children}</CellContainer>
    </Td>
  );
};

export const TableComponents = {
  Row: Tr,
  Cell,
};
