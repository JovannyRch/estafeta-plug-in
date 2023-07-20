import React, { useMemo } from "react";
import styled from "styled-components";

const SizeParam = (size?: number) => {
  if (!!size) {
    return {
      fontSize: size,
    };
  }
  return {};
};

const FontWeight = (weight?: number) => {
  if (!!weight) {
    return {
      fontWeight: weight,
    };
  }
  return {};
};

const BaseText = styled.span`
  color: #12263c;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ${(props) => SizeParam(props.size)}
  ${(props) => FontWeight(props.weight)}
`;

export const Link = styled(BaseText)`
  color: #849bcc;
  font-size: 15px;
  font-weight: 800;
  text-decoration-line: underline;
  ${(props) => SizeParam(props.size)}
`;

export const Bold = styled(BaseText)`
  font-weight: 800;
  ${(props) => SizeParam(props.size)}
`;

export const Label = styled(BaseText)`
  font-weight: 500;
`;

interface Props {
  children: React.ReactNode;
  size?: number;
  weight?: number;
}

const Typography = {
  Title: ({ children }: Props) => {
    return <h1>{children}</h1>;
  },
  Link: ({ children, size }: Props) => {
    return <Link size={size}>{children}</Link>;
  },
  Bold: ({ children, size }: Props) => {
    return <Bold size={size}>{children}</Bold>;
  },
  Label: ({ children, size }: Props) => {
    return <Label size={size}>{children}</Label>;
  },
  Text: ({ children, size, weight }: Props) => {
    return (
      <BaseText size={size} weight={weight}>
        {children}
      </BaseText>
    );
  },
};

export default Typography;
