import React, { useMemo } from "react";
import { getStatusData } from "./utils";
import styled from "styled-components";
import Typography from "../Typography/Index";
import Tooltip from "./Tooltip";
import { colorMap, tooltipMap } from "./const";
import { Pickup } from "../../types/Responses/PickUpsResponse";
import { ESTAFETA_LINKS } from "../../const";

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

interface Props {
  status: string;
  pickup: Pickup;
}

const PickUpStatus = ({ status, pickup }: Props) => {
  const handleReprogram = () => {
    window.open(ESTAFETA_LINKS.reprogramar(pickup.code));
  };

  const color = useMemo(() => colorMap[status] ?? "#274C89", [status]);
  const tooltipMessage = useMemo(() => tooltipMap[status] ?? "", [status]);

  return (
    <Wrapper>
      <Container>
        <Dot style={{ backgroundColor: color }} />
        <Typography.Text size={12} weight={700}>
          {status}
        </Typography.Text>
        <Tooltip message={tooltipMessage} />
      </Container>

      {["Cancelada", "Excepcionada"].includes(status) && (
        <Typography.Link size={15} weight={800} onClick={handleReprogram}>
          Reprogramar
        </Typography.Link>
      )}
    </Wrapper>
  );
};

export default PickUpStatus;
