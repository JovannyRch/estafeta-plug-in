import React from "react";
import { Container } from "./styled-components";

type ButtonType = "primary" | "secondary" | "danger";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
}

const stylesMap = {
  primary: {
    backgroundColor: "#849BCC",
    color: "#FFF",
  },
  secondary: {
    backgroundColor: "##FFFFFF",
    color: "#12263C",
  },
  danger: {
    backgroundColor: "#D90202",
    color: "#FFF",
  },
};
const Button = ({ children, onClick, type = "primary" }: Props) => {
  const styles = stylesMap[type];

  return (
    <Container style={styles} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
