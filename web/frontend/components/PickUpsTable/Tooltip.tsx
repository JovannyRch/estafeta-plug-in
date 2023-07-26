import React, { useState } from "react";
import InfoIcon from "../../icons/InfoIcon";
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const IconContainer = styled.div`
  /* Aquí van los estilos de tu icono */
`;

const TooltipText = styled.div`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  width: 150px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 6px 4px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 1;
  transition: opacity 0.3s;

  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

interface Props {
  message?: string;
}

const Tooltip = ({ message }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <TooltipContainer>
      <IconContainer
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
      >
        <InfoIcon />
      </IconContainer>

      <TooltipText visible={visible}>{message}</TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
