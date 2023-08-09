import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 270px;
`;

export const Container = styled.div`
  background-color: #475968;
  box-shadow: 4px 0px 6px 0px rgba(132, 155, 204, 0.5);
  min-height: calc(100vh - 68px);
  flex: 0 0 ${(props) => (props.collapsed ? "0px" : "225px")};
  width: ${(props) => (props.collapsed ? "0px" : "225px")};
  transition: all 0.15s ease-in;
`;

export const Title = styled.div`
  color: var(--backgorunds, #fff);
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 47px;
  padding-top: 96px;
  padding-left: 20px;
  opacity: ${(props) => (props.collapsed ? "0" : "1")};
  transition: opacity
    ${(props) => (props.collapsed ? "0.1s ease-in-out" : "0.5s ease-in")};

  user-select: none;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  column-gap: 10px;
  cursor: pointer;
  align-items: center;
  color: var(--backgorunds, #fff);
  text-decoration: none;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 38px;

  opacity: ${(props) => (props.collapsed ? "0" : "1")};
  transition: opacity
    ${(props) => (props.collapsed ? "0.1s ease-in-out" : "0.5s ease-in")};

  .active-line {
    width: 3px;
    height: 100%;
    background-color: transparent;
    margin-left: 0.5px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.10000000149011612);
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--backgorunds, #fff);
    &:hover {
      text-decoration: underline;
      color: var(--backgorunds, #fff);
    }
  }
  &.active {
    background: rgba(255, 255, 255, 0.10000000149011612);
    .active-line {
      display: block;
      width: 3px;
      height: 100%;
      background-color: #fff;
    }
  }
`;

export const LinkTitle = styled.div`
  color: var(--backgorunds, #fff);
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SidebarButton = styled.div`
  display: flex;
  column-gap: 10px;
  cursor: pointer;
  align-items: center;
  color: var(--backgorunds, #fff);
  text-decoration: none;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  min-height: 38px;
  padding: 4px 0;
  padding-left: 13px;

  .icon {
    margin-right: 4px;
  }

  opacity: ${(props) => (props.collapsed ? "0" : "1")};
  transition: opacity
    ${(props) => (props.collapsed ? "0.1s ease-in-out" : "0.5s ease-in")};

  &:hover {
    background: rgba(255, 255, 255, 0.10000000149011612);
    cursor: pointer;
  }
`;
