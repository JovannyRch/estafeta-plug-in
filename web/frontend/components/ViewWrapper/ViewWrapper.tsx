import React from "react";
import { Container } from "./styled-components";
import Sidebar from "../Sidebar/Sidebar";

interface Props {
  children?: React.ReactNode;
}

const ViewWrapper = ({ children }: Props) => {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
};

export default ViewWrapper;
