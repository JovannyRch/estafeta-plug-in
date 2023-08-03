import React, { useEffect } from "react";
import { Container, ViewContainer, Body } from "./styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import useShop from "../../hooks/useShop";
import useLocalStorage from "../../hooks/useLocalStorage";

interface Props {
  children?: React.ReactNode;
}

const ViewWrapper = ({ children }: Props) => {
  const { shop } = useShop();
  const email = shop?.data[0]?.email ?? "";
  const [storedEmail, setStoredEmail] = useLocalStorage("email", email);

  useEffect(() => {
    if (email) setStoredEmail(email);
  }, [email, storedEmail]);

  return (
    <Container>
      <Header email={storedEmail} />
      <Body>
        <Sidebar />
        <ViewContainer>{children}</ViewContainer>
      </Body>
    </Container>
  );
};

export default ViewWrapper;
