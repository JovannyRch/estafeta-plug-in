import styled, { css, keyframes } from "styled-components";
import Sidebar from "../Sidebar/Sidebar";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ViewContainer = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
`;



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

export const AnimatedSidebar = styled(Sidebar)`
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
