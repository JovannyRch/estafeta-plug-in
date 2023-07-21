import styled from "styled-components";

export const Container = styled.div`
  width: 289px;
  background-color: #475968;
  padding-top: 96px;
  padding-left: 25px;
  box-shadow: 4px 0px 6px 0px rgba(132, 155, 204, 0.5);
`;

export const Title = styled.div`
  color: var(--backgorunds, #fff);
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 47px;
`;

export const SidebarLinkContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LinkTitle = styled.div`
  color: var(--backgorunds, #fff);
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
