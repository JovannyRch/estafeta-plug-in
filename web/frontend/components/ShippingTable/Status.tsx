import React, { useMemo } from "react";
import { getStatusData } from "./utils";
import styled from "styled-components";
import Typography from "../Typography/Index";
import { colorMap } from "./const";

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

const ShipmentStatus = ({ status }: { status: string }) => {
  const color = colorMap[status] ?? "#274C89";

  return (
    <Container>
      <Dot style={{ backgroundColor: color }} />
      <Typography.Text size={12} weight={700}>
        {status}
      </Typography.Text>
    </Container>
  );
};

export default ShipmentStatus;
