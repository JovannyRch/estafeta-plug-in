import React from "react";
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
import EstafetaLogo from "../../icons/EstafetaLogo";
import ZeroState from "../ZeroState/ZeroState";
import { ShipmentOrder } from "../../types/Responses/ShipmentsResponse";

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
  const handleDownload = () => {
    window.open(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    );
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
      {data.map((shipment) => (
        <TableComponents.Row key={shipment.code}>
          <TableComponents.Cell>
            <Typography.Link size={15}>{shipment.code}</Typography.Link>
            <Spacer height={2} />
            <Typography.Label size={12}>
              {shipment.creationDateTime}
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
                    <Typography.Link size={15}>{waybill.code}</Typography.Link>
                    <Typography.Label size={12}>
                      {waybill.Dimension}
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
                <Typography.Text size={15} weight={700}>
                  ${waybill.Cost}
                </Typography.Text>
              </>
            ))}
          </TableComponents.Cell>
          <TableComponents.Cell>
            <ActionsContainers>
              {/* {shipment.shipments.map((item) => (
                <>
                  <ShipmentActionItem>
                    <IconButton onClick={handleDownload}>
                      <DownloadIcon />
                    </IconButton>
                  </ShipmentActionItem>
                </>
              ))} */}
            </ActionsContainers>
          </TableComponents.Cell>
        </TableComponents.Row>
      ))}
    </BaseTable>
  );
};

export default ShippingTable;
