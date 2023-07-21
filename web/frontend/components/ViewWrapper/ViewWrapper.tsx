import React from "react";
import { Container, ViewContainer } from "./styled-components";
import Sidebar from "../Sidebar/Sidebar";

interface Props {
  children?: React.ReactNode;
}

const ViewWrapper = ({ children }: Props) => {
  return (
    <Container>
      <Sidebar />
      <ViewContainer>{children}</ViewContainer>
    </Container>
  );
};

export default ViewWrapper;
