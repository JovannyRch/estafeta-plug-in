import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 1;
`;

export const Menu = styled.ul`
  position: absolute; 
  border-radius: 8px;
  list-style-type: none;
  margin: 5px 0;
  padding: 0;
  top: 15px;
  padding-top: 23px;
  background-color: #fff;

  outline: 1px solid #12263C;
  width: calc( 100% - 2px);
  left: 1px;
  margin: auto;
  z-index: -1;

  li {
    margin: 0;
    background-color: white;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    user-select: none;
    

    &:hover {
      background-color: lightgray;
    }
    button {
      user-select: none;
      width: 100%;
      height: 100%;
      text-align: left;
      background: none;
      color: inherit;
      border: none;
      padding: 8px 0;
      padding-left: 14px;
      margin: 0;
      font: inherit;
      cursor: pointer;
      &.separator{
        border-top: 1px solid #12263C;
      }
    }
  }
`;



export const Trigger = styled.div`
  cursor: pointer;
  height: 40px;
  min-width: 168px;
  display: flex;
  align-items: center;
  background-color: var(--backgorunds, #fff);
  padding: 0 14px;
  border: 1px solid #12263c;
  border-radius: 8px;
`;

export const Label = styled.div`
  color: var(--tipografa, #12263c);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  flex: 1;
  user-select: none;
`;