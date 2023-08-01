import React, { useMemo } from "react";
import { getStatusData } from "./utils";
import styled from "styled-components";
import Typography from "../Typography/Index";
import Tooltip from "./Tooltip";

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
`;

interface Status {
  label: string;
  color: string;
}

const getTooltipText = (status: string) => {
  switch (status) {
    case "pending":
      return "Orden de recolección excepecionada. Se sugiere reprogramar.";
  }
  return "";
};

const PickUpStatus = ({ status }: { status: string }) => {
  const handleReprogram = () => {
    window.open("https://www.estafeta.com/herramientas/rastreo");
  };

  return (
    <Wrapper>
      <Container>
        <Dot style={{ backgroundColor: "red" }} />
        <Typography.Text size={12} weight={700}>
          {status}
        </Typography.Text>
        <Tooltip message={"Envíos ya recolectados por Estafeta."} />
      </Container>

      {/*  {[4, 5].includes(code) && (
        <Typography.Link size={15} weight={800} onClick={handleReprogram}>
          Reprogramar
        </Typography.Link>
      )} */}
    </Wrapper>
  );
};

export default PickUpStatus;
