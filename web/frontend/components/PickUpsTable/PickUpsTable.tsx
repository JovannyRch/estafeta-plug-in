import React, { useContext, useEffect, useState } from "react";
import BaseTable from "../BaseTable/Index";
import { TableComponents } from "../BaseTable/styled-components";
import { headers } from "./const";
import Typography from "../Typography/Index";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import PickUpStatus from "./Status";
import ZeroState from "../ZeroState/ZeroState";
import { Pickup } from "../../types/Responses/PickUpsResponse";
import { formatCreationDate, formatDimensions } from "../../utils";
import { ESTAFETA_LINKS } from "../../const";
import { AppContext } from "../../context";
import useOrders, { Order } from "../../hooks/useOrders";

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
  const app = useContext(AppContext);
  const { openOrder, orders: shopifyOrders } = useOrders(app?.shop);
  const [dataWithOrders, setDataWithOrders] = useState<Pickup[]>([]);

  const handleClickWaybill = (waybill: string) => {
    window.open(ESTAFETA_LINKS.numeroDeGuia(waybill));
  };

  useEffect(() => {
    const dataWithOrders = data.map((pickup) => {
      const orders = pickup?.orders?.map((order) => {
        const shopifyOrder = shopifyOrders.find(
          (shopifyOrder) => `${shopifyOrder.order_number}` === order.code
        );
        return {
          ...order,
          shopifyOrder,
        };
      });
      return {
        ...pickup,
        orders,
      };
    });
    setDataWithOrders(dataWithOrders);
  }, [shopifyOrders, data]);

  if (loading) {
    return <Loader height={400} />;
  }

  if (data.length === 0) {
    return <ZeroState />;
  }

  return (
    <BaseTable headers={headers}>
      {dataWithOrders.map((pickup) => (
        <TableComponents.Row key={pickup.code}>
          <TableComponents.Cell>
            <Typography.Bold size={15}>#{pickup.code}</Typography.Bold>
          </TableComponents.Cell>
          <TableComponents.Cell>
            <Typography.Label size={15}>
              {formatCreationDate(pickup.planningDateTime)}
            </Typography.Label>
          </TableComponents.Cell>
          <TableComponents.Cell>
            <ShipmentsContainer>
              {pickup.orders.map((order) => (
                <>
                  <ShipmentsItem>
                    <Typography.Link
                      size={15}
                      onClick={() => openOrder(order.code)}
                    >
                      #{order.code}
                    </Typography.Link>
                    <Typography.Label size={12}>
                      {formatCreationDate(
                        order.shopifyOrder?.created_at ||
                          order.creationDateTime,
                        "yyyy-MM-dd",
                        order.shopifyOrder?.created_at ? 4 : 0
                      )}
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
                    <Typography.Link
                      size={15}
                      onClick={() => handleClickWaybill(waybill.code)}
                    >
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
            <PickUpStatus pickup={pickup} status={pickup.statusName} />
          </TableComponents.Cell>
        </TableComponents.Row>
      ))}
    </BaseTable>
  );
};

export default PickUpsTable;
