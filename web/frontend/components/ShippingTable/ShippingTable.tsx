import React, { useEffect, useState } from "react";
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
import {
  ShipmentOrder,
  Waybill,
} from "../../types/Responses/ShipmentsResponse";
import useWaybills from "../../hooks/useWaybills";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect";
import { base64ToBlob } from "../../utils";

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
  const [waybillCodes, setWaybillCodes] = useState<string[]>([]);
  const { waybillsResponse, refetch } = useWaybills({
    waybillCodes,
  });

  const handleDownload = (waybill: Waybill) => {
    setWaybillCodes([waybill.code]);
  };

  useDidUpdateEffect(() => {
    if (waybillCodes.length > 0) {
      refetch();
    }
  }, [waybillCodes]);

  useDidUpdateEffect(() => {
    if (
      waybillsResponse !== null &&
      waybillsResponse?.documentWaybill?.length > 0 &&
      waybillCodes.length > 0
    ) {
      const waybill = waybillsResponse.documentWaybill[0];
      const pdfBlob = base64ToBlob(waybill.pdfFile);
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "file.pdf";
      link.click();
      setWaybillCodes([]);
    }
  }, [waybillsResponse, waybillCodes]);

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
            <Typography.Link size={15}>#{shipment.code}</Typography.Link>
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
                      {`${waybill.Dimension} / ${waybill.Wight}`}
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
                    ${waybill.Cost}
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
