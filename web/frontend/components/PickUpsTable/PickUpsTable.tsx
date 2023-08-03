import React from "react";
import BaseTable from "../BaseTable/Index";
import { TableComponents } from "../BaseTable/styled-components";
import { headers } from "./const";
import Typography from "../Typography/Index";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import EstafetaLogo from "../../icons/EstafetaLogo";
import PickUpStatus from "./Status";
import ZeroState from "../ZeroState/ZeroState";
import { Pickup } from "../../types/Responses/PickUpsResponse";
import { format, parseISO } from "date-fns";
import { formatDimensions } from "../../utils";

const ShipmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ShipmentsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 38px;
`;

interface PickUpsTableProps {
  data: Pickup[];
  loading: boolean;
}

const PickUpsTable = ({ data = [], loading }: PickUpsTableProps) => {
  const handleGoToEstafeta = () => {
    window.open("https://www.estafeta.com/herramientas/rastreo");
  };

  if (loading) {
    return (
      <Loader height={400}>
        <EstafetaLogo />
      </Loader>
    );
  }

  if (data.length === 0) {
    return <ZeroState />;
  }

  return (
    <BaseTable headers={headers}>
      {data.map((pickup, index) => (
        <TableComponents.Row key={pickup.code}>
          <TableComponents.Cell>
            <Typography.Bold size={15}>#{pickup.code}</Typography.Bold>
          </TableComponents.Cell>
          <TableComponents.Cell>
            <Typography.Label size={15}>
              {format(parseISO(pickup.planningDateTime), "yyyy-MM-dd")}
            </Typography.Label>
          </TableComponents.Cell>
          <TableComponents.Cell>
            <ShipmentsContainer>
              {pickup.orders.map((order) => (
                <>
                  <ShipmentsItem>
                    <Typography.Link size={15} onClick={handleGoToEstafeta}>
                      #{order.code}
                    </Typography.Link>
                    <Typography.Label size={12}>
                      {format(parseISO(order.creationDateTime), "yyyy-MM-dd")}
                    </Typography.Label>
                  </ShipmentsItem>
                </>
              ))}
            </ShipmentsContainer>
          </TableComponents.Cell>
          <TableComponents.Cell>
            <ShipmentsContainer>
              {pickup.orders.map((item) =>
                item.waybills.map((waybill) => (
                  <ShipmentsItem>
                    <Typography.Link size={15} onClick={handleGoToEstafeta}>
                      {waybill.code}
                    </Typography.Link>
                    <Typography.Label size={12}>
                      {formatDimensions(waybill.dimension)} /{" "}
                      {`${waybill.weight} kg`}
                    </Typography.Label>
                  </ShipmentsItem>
                ))
              )}
            </ShipmentsContainer>
          </TableComponents.Cell>
          <TableComponents.Cell>
            <PickUpStatus status={pickup.statusName} />
          </TableComponents.Cell>
        </TableComponents.Row>
      ))}
    </BaseTable>
  );
};

export default PickUpsTable;
