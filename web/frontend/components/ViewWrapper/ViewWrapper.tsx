import React, { useEffect, useState } from "react";
import { Container, ViewContainer, Body } from "./styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import useShop from "../../hooks/useShop";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CSSTransition } from "react-transition-group";
import styled, { css, keyframes } from "styled-components";

const enterAnimation = keyframes`
  0% {
    opacity: 0;
    width: 50px;
  }
  100% {
    opacity: 1;
    width: 200px;
  }
`;

const exitAnimation = keyframes`
  0% {
    opacity: 1;
    width: 200px;
  }
  100% {
    opacity: 0;
    width: 50px;
  }
`;

const AnimatedSidebar = styled(Sidebar)`
  ${(props) =>
    props.enter &&
    css`
      animation: ${enterAnimation} 0.3s forwards;
    `}
  ${(props) =>
    props.exit &&
    css`
      animation: ${exitAnimation} 0.3s forwards;
    `}
`;

interface Props {
  children?: React.ReactNode;
}

const ViewWrapper = ({ children }: Props) => {
  const { shop } = useShop();
  const email = shop?.data[0]?.email ?? "";
  const [storedEmail, setStoredEmail] = useLocalStorage("email", email);

  const [storedCollapse, setStoredCollapse] = useLocalStorage<boolean>(
    "collapse",
    false
  );

  console.log("storedEmail", storedEmail);
  const toggleCollapse = () => setStoredCollapse(!storedCollapse);

  useEffect(() => {
    if (email) setStoredEmail(email);
  }, [email, storedEmail]);

  return (
    <Container>
      <Header email={storedEmail} toggleSidebar={toggleCollapse} />
      <Body>
        <CSSTransition
          in={!storedCollapse}
          timeout={300}
          classNames="my-node"
          onEnter={() => setStoredCollapse(false)}
          onExited={() => setStoredCollapse(true)}
        >
          <AnimatedSidebar
            collapsed={storedCollapse}
            enter={!storedCollapse}
            exit={storedCollapse}
          />
        </CSSTransition>
        <ViewContainer>{children}</ViewContainer>
      </Body>
    </Container>
  );
};

export default ViewWrapper;
