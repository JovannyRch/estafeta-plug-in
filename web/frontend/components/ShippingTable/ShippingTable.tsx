import React, { useContext, useState } from "react";
import BaseTable from "../BaseTable/Index";
import { TableComponents } from "../BaseTable/styled-components";
import { headers } from "./const";
import Typography from "../Typography/Index";
import Spacer from "../Spacer/Index";
import ShipmentStatus from "./Status";
import styled from "styled-components";
import DownloadIcon from "../../icons/DownloadIcon";
import IconButton from "../IconButton/IconButton";
import Loader from "../Loader/Loader";
import ZeroState from "../ZeroState/ZeroState";
import {
  ShipmentOrder,
  Waybill,
} from "../../types/Responses/ShipmentsResponse";
import useWaybills from "../../hooks/useWaybills";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect";
import {
  base64ToBlob,
  formatCreationDate,
  formatCurrency,
  formatDimensions,
} from "../../utils";
import { ESTAFETA_LINKS } from "../../const";
import { AppContext } from "../../context";
import useOpenOrder from "../../hooks/useOpenOrder";
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

const ShipmentActionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  min-height: 38px;
`;

const ActionsContainers = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

interface ShippingTableProps {
  data?: ShipmentOrder[];
  loading?: boolean;
}

const ShippingTable = ({ data = [], loading }: ShippingTableProps) => {
  const { downloadWaybill } = useWaybills();

  const app = useContext(AppContext);
  const { openOrder } = useOpenOrder(app?.shop);

  const handleDownload = (waybill: Waybill) => {
    downloadWaybill(waybill.code);
  };

  const handleClickWaybill = (waybill: string) => {
    window.open(ESTAFETA_LINKS.numeroDeGuia(waybill));
  };

  if (loading) {
    return <Loader height={400} />;
  }

  if (data.length === 0) {
    return <ZeroState />;
  }

  return (
    <BaseTable headers={headers}>
      {data.map((shipment, index) => (
        <TableComponents.Row key={shipment.code}>
          <TableComponents.Cell>
            <Typography.Link onClick={() => openOrder(shipment.code)} size={15}>
              #{shipment.code}
            </Typography.Link>
            <Spacer height={2} />
            <Typography.Label size={12}>
              {formatCreationDate(
                shipment.creationDateTime,
                "yyyy-MM-dd 'a las' HH:mm"
              )}
            </Typography.Label>
          </TableComponents.Cell>
          <TableComponents.Cell>
            <Typography.Bold size={15}>
              {shipment.client.contactName}
            </Typography.Bold>
            <Typography.Label size={12}>
              {shipment.client.address1}
            </Typography.Label>
            <Typography.Label size={12}>
              {shipment.client.address2}
            </Typography.Label>
          </TableComponents.Cell>
          <TableComponents.Cell>
            <ShipmentsContainer>
              {shipment.waybills.map((waybill) => (
                <>
                  <ShipmentsItem>
                    <Typography.Link
                      size={15}
                      onClick={() => handleClickWaybill(waybill.code)}
                    >
                      {waybill.code}
                    </Typography.Link>
                    <Typography.Label size={12}>
                      {`${formatDimensions(waybill.Dimension)} / ${
                        waybill.Wight
                      } kg`}
                    </Typography.Label>
                  </ShipmentsItem>
                </>
              ))}
            </ShipmentsContainer>
          </TableComponents.Cell>
          <TableComponents.Cell>
            <ShipmentsContainer>
              {shipment.waybills.map((waybill) => (
                <>
                  <ShipmentsItem>
                    <ShipmentStatus status={waybill.StatusName} />
                  </ShipmentsItem>
                </>
              ))}
            </ShipmentsContainer>
          </TableComponents.Cell>
          <TableComponents.Cell>
            {shipment.waybills.map((waybill) => (
              <>
                <ShipmentsItem>
                  <Typography.Text size={15} weight={700}>
                    {formatCurrency(waybill.Cost.toString())}
                  </Typography.Text>
                </ShipmentsItem>
              </>
            ))}
          </TableComponents.Cell>
          <TableComponents.Cell>
            <ActionsContainers>
              {shipment.waybills.map((waybill) => (
                <>
                  <ShipmentActionItem>
                    <IconButton onClick={() => handleDownload(waybill)}>
                      <DownloadIcon />
                    </IconButton>
                  </ShipmentActionItem>
                </>
              ))}
            </ActionsContainers>
          </TableComponents.Cell>
        </TableComponents.Row>
      ))}
    </BaseTable>
  );
};

export default ShippingTable;
