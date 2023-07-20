import React from "react";
import { BaseTableContainer } from "./styled-components";

interface Header {
  title: string;
  key: string;
}

interface Props {
  headers: Header[];
  children?: React.ReactNode;
}

const BaseTable = ({ headers, children }: Props) => {
  return (
    <BaseTableContainer>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </BaseTableContainer>
  );
};

export default BaseTable;
