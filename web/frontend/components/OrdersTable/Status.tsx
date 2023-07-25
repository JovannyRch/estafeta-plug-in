import React, { useMemo } from "react";
import { getStatusData } from "./utils";
import styled from "styled-components";
import Typography from "../Typography/Index";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-right: 5px;
`;

interface Status {
  label: string;
  color: string;
}

const ShipmentStatus = ({ code }: { code: number }) => {
  const status: Status = useMemo(() => getStatusData(code), [code]);

  return (
    <Container>
      <Dot style={{ backgroundColor: status.color }} />
      <Typography.Text size={12} weight={700}>
        {status.label}
      </Typography.Text>
    </Container>
  );
};

export default ShipmentStatus;
