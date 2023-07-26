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

const PaymentStatusContainer = styled.div`
  color: var(--tipografa, #12263c);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1px 9px;
  background-color: #46bb98;
  border-radius: 3px;
  width: fit-content;
`;

const OrderStatusContainer = styled.div`
  color: var(--backgorunds, #fff);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 3px;
  padding: 1px 9px;
  width: fit-content;
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

export const PaymentStatus = ({ status }: { status: string }) => {
  return <PaymentStatusContainer>{status}</PaymentStatusContainer>;
};

export const OrderStatus = ({ status }: { status: string }) => {
  const backgroundColor = useMemo(() => {
    if (status === "No creado") {
      return "#475968";
    }
    return "#274C89";
  }, [status]);

  return (
    <OrderStatusContainer style={{ backgroundColor }}>
      {status}
    </OrderStatusContainer>
  );
};

export default ShipmentStatus;
