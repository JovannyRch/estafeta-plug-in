import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 0 1.5em;
  height: 68px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.span`
  color: var(--tipografa, #12263c);
  text-align: right;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 6px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 10px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;
