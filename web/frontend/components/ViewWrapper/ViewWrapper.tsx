import React, { useState } from "react";
import {
  Container,
  ViewContainer,
  Body,
  AnimatedSidebar,
} from "./styled-components";
import Header from "../Header/Header";
import useShop from "../../hooks/useShop";
import { CSSTransition } from "react-transition-group";
import { AppContext } from "../../context";

interface Props {
  children?: React.ReactNode;
}

const ViewWrapper = ({ children }: Props) => {
  const { shop } = useShop();
  const { email, name, myshopify_domain } = shop?.data[0] ?? {};

  const [isCollapse, setIsCollapse] = useState<boolean>(  
    false
  );

  const toggleCollapse = () => setIsCollapse(!isCollapse);

  return (
    <AppContext.Provider
      value={{ shop: { email: email ?? "", name: name ?? "", myshopify_domain: myshopify_domain ?? '' } }}
    >
      <Container>
        <Header email={email} toggleSidebar={toggleCollapse} />
        <Body>
          <CSSTransition
            in={!isCollapse}
            timeout={300}
            classNames="my-node"
            onEnter={() => setIsCollapse(false)}
            onExited={() => setIsCollapse(true)}
          >
            <AnimatedSidebar
              collapsed={isCollapse}
              enter={!isCollapse}
              exit={isCollapse}
            />
          </CSSTransition>
          <ViewContainer>{children}</ViewContainer>
        </Body>
      </Container>
    </AppContext.Provider>
  );
};

export default ViewWrapper;
