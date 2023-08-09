import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: var(--btns-2, #475968);
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ZeroStateProps {
  text?: string;
}

const ZeroState = ({
  text = "Por el momento no hay información para éste módulo.",
}: ZeroStateProps) => {
  return <Container>{text}</Container>;
};

export default ZeroState;
