import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
  background-color: #475968;

  box-shadow: 4px 0px 6px 0px rgba(132, 155, 204, 0.5);
  min-height: 100vh;
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
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  column-gap: 10px;
  cursor: pointer;
  align-items: center;
  color: var(--backgorunds, #fff);
  text-decoration: none;
  color: var(--backgorunds, #fff);
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 38px;
  .active-line {
    width: 3px;
    height: 100%;
    background-color: transparent;
    margin-left: 0.5px;
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

const LinkBody = styled.div``;

export const LinkTitle = styled.div`
  color: var(--backgorunds, #fff);
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
