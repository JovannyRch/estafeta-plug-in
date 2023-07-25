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

const PickUpStatus = ({ code }: { code: number }) => {
  const status: Status = useMemo(() => getStatusData(code), [code]);

  const handleReprogram = () => {
    window.open("https://www.estafeta.com/herramientas/rastreo");
  };

  return (
    <Wrapper>
      <Container>
        <Dot style={{ backgroundColor: status.color }} />
        <Typography.Text size={12} weight={700}>
          {status.label}
        </Typography.Text>
        <Tooltip />
      </Container>

      {[4, 5].includes(code) && (
        <Typography.Link size={15} weight={800} onClick={handleReprogram}>
          Reprogramar
        </Typography.Link>
      )}
    </Wrapper>
  );
};

export default PickUpStatus;
