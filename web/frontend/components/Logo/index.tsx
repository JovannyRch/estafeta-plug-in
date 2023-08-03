import React from "react";
import styled from "styled-components";
import EstafetaLogo from "../../icons/EstafetaLogo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
`;

const LogoContainer = styled.div`
  width: 100%;
  padding-left: 21px;
  padding-right: 7px;
`;

const Logo = () => {
  return (
    <Container>
      <LogoContainer>
        <EstafetaLogo />
      </LogoContainer>
    </Container>
  );
};

export default Logo;
