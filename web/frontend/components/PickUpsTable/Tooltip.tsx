import React from "react";
import styled from "styled-components";
import InfoIcon from "../../icons/InfoIcon";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  message?: string;
}

const Tooltip = ({ message }: Props) => {
  return (
    <Container>
      <InfoIcon />
    </Container>
  );
};

export default Tooltip;
