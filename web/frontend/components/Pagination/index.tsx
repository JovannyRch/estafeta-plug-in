import React from "react";
import { Container, IconButton, NumberButton } from "./styled-components";

const Pagination = () => {
  return (
    <Container>
      <IconButton>{"<<"}</IconButton>
      <IconButton>{"<"}</IconButton>
      <NumberButton active>1</NumberButton>
      <NumberButton>2</NumberButton>
      <NumberButton>3</NumberButton>
      <IconButton active>{">"}</IconButton>
      <IconButton active>{">>"}</IconButton>
    </Container>
  );
};

export default Pagination;
