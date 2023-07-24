import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const IconButton = styled.div`
  cursor: pointer;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${({ active = "false" }) =>
    active.toString() === "true" ? "color: #12263c;" : "color: #C7C7C7;"}
`;

export const NumberButton = styled.div`
  cursor: pointer;
  font-family: Montserrat;
  min-width: 20px;
  height: 20px;
  padding: 1px 7px;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ active = "false" }) =>
    active.toString() === "true"
      ? "background-color: #46BB98;color: #fff;"
      : "background-color: transparent; color: #12263C;"}
`;

export const DropdownContainer = styled.div`
  width: 77px;
  margin-left: 23px;
`;
