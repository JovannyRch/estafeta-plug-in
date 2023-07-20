import React from "react";
import { BaseTableContainer, Th } from "./styled-components";

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
            <Th key={header.key} align="left">
              {header.title}
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </BaseTableContainer>
  );
};

export default BaseTable;
