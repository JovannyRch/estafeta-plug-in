import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

export const DateFilter = styled.div`
  display: flex;
  gap: 15px;
`;

export const InputContainer = styled.div`
  border-radius: 7px;
  border: 1px solid var(--tipografa, #12263c);
  background: #fff;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 16px;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: -10px;
  top: 0px;
  pointer-events: none;
  svg {
    pointer-events: none;
  }
`;

export const CustomDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;

  color: var(--tipografa, #12263c);
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

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

export const ApplyButton = styled.div`
  color: var(--btns, #849bcc);
  text-align: right;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
  margin-left: 20px;
  user-select: none;
`;
