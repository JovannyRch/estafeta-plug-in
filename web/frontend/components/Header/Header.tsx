import React from "react";
import {
  Email,
  HeaderContainer,
  InfoContainer,
  LogoContainer,
  Wrapper,
} from "./styled-components";
import IconButton from "../IconButton/IconButton";
import MenuIcon from "../../icons/MenuIcon";
import EstafetaPlugInIcon from "../../icons/EstafetaPlugInIcon";
import PerfilIcon from "../../icons/PerfilIcon";

interface Props {
  email?: string;
  toggleSidebar?: () => void;
}

const Header = ({ email, toggleSidebar }: Props) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <IconButton onClick={() => toggleSidebar?.()}>
          <MenuIcon />
        </IconButton>
        <InfoContainer>
          {email && (
            <>
              <PerfilIcon />
              <Email>{email}</Email>
            </>
          )}
        </InfoContainer>
      </HeaderContainer>
      <LogoContainer>
        <EstafetaPlugInIcon />
      </LogoContainer>
    </Wrapper>
  );
};

export default Header;
