import React from "react";
import { Container, ViewContainer, Body } from "./styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import useShop from "../../hooks/useShop";

interface Props {
  children?: React.ReactNode;
}

const ViewWrapper = ({ children }: Props) => {
  const { shop } = useShop();

  const email = shop?.data[0]?.email ?? "";

  return (
    <Container>
      <Header email={email} />
      <Body>
        <Sidebar />
        <ViewContainer>{children}</ViewContainer>
      </Body>
    </Container>
  );
};

export default ViewWrapper;
