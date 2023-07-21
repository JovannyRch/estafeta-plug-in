import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #12263c;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  column-gap: 4px;

  input {
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
    color: var(--bloq, #12263c);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &::placeholder {
      color: var(--bloq, #c7c7c7);
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
