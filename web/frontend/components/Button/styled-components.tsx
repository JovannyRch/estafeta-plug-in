import styled from "styled-components";
import { BaseText } from "../Typography/Index";

export const Container = styled(BaseText)`
  cursor: pointer;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  border-radius: 8px;
  user-select: none;
`;

export const BodyContainer = styled.div`
  width: max-content;
`;
