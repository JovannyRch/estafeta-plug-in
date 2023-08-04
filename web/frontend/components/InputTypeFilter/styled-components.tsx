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

export const Input = styled.input.attrs({ type: "date" })`
  text-transform: uppercase;
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
