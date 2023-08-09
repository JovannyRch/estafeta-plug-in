import React, { useEffect } from "react";
import { Container, ViewContainer, Body, AnimatedSidebar } from "./styled-components";
import Header from "../Header/Header";
import useShop from "../../hooks/useShop";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CSSTransition } from "react-transition-group";
import { AppContext } from "../../context";

interface Props {
  children?: React.ReactNode;
}

const ViewWrapper = ({ children }: Props) => {
  const { shop } = useShop();
  const { email, name } = shop?.data[0] ?? {};

  const [storedEmail, setStoredEmail] = useLocalStorage("email", email);

  const [storedCollapse, setStoredCollapse] = useLocalStorage<boolean>(
    "collapse",
    false
  );

  const toggleCollapse = () => setStoredCollapse(!storedCollapse);

  useEffect(() => {
    if (email) setStoredEmail(email);
  }, [email, storedEmail]);

  return (
    <AppContext.Provider value={{shop: {email: email ?? '', name: name ?? ''}}}>
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
    </AppContext.Provider>
  );
};

export default ViewWrapper;
