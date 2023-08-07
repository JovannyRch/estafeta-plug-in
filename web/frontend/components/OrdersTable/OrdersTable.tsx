import React from "react";
import BaseTable from "../BaseTable/Index";
import { TableComponents } from "../BaseTable/styled-components";
import { headers } from "./const";
import Typography from "../Typography/Index";
import Spacer from "../Spacer/Index";
import { OrderStatus, PaymentStatus } from "./Status";
import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import Loader from "../Loader/Loader";
import PlusIcon from "../../icons/PlusIcon";
import ZeroState from "../ZeroState/ZeroState";
import { Order } from "../../types/Responses/OrdersResponse";
import { formatCreationDate, formatCurrency } from "../../utils";

const ActionsContainers = styled.div`
  display: flex;
  justify-content: center;
`;

interface OrdersTableProps {
  data?: Order[];
  loading?: boolean;
  onCreateShipment?: () => void;
}

const OrdersTable = ({
  data = [],
  loading,
  onCreateShipment = () => {},
}: OrdersTableProps) => {
  const handleCreateShipment = () => {
    onCreateShipment?.();
  };

  const handleOpenOrder = (link) => {
    window.open(link);
  };

  if (loading) {
    return <Loader height={400} />;
  }

  if (data.length === 0) {
    return <ZeroState />;
  }

  return (
    <BaseTable headers={headers}>
      {data.map((order) => {
        const customer = order.shopify?.customer;
        const fullName = [customer?.first_name, customer?.last_name]
          .filter(Boolean)
          .join(" ");
        const clientName = fullName ? fullName : "--";

        const customerEmail =
          (order.shopify?.contact_email || order.shopify?.customer?.email) ??
          "";

        const products = order.shopify?.line_items.length;

        return (
          <TableComponents.Row key={order.code}>
            <TableComponents.Cell>
              <Typography.Link size={15}>#{order.code}</Typography.Link>
              <Spacer height={2} />
              <Typography.Label size={12}>
                {formatCreationDate(
                  order.creationDateTime,
                  "yyyy-MM-dd 'a las' HH:mm"
                )}
              </Typography.Label>
              <Spacer height={6} />
              <PaymentStatus status={"Pagado"} />
            </TableComponents.Cell>
            <TableComponents.Cell>
              <Typography.Bold size={15}>{clientName}</Typography.Bold>
              <Typography.Label size={12}>{customerEmail}</Typography.Label>
            </TableComponents.Cell>
            <TableComponents.Cell>
              <Typography.Bold size={15}>
                {order.addressee.contactName}
              </Typography.Bold>
              <Typography.Label size={12}>
                {order.addressee.address1}
              </Typography.Label>
              <Typography.Label size={12}>
                {order.addressee.address2}
              </Typography.Label>
            </TableComponents.Cell>
            <TableComponents.Cell>
              <OrderStatus status={order.shipment.statusName} />
              {order.shipment.statusName === "Creado" && (
                <>
                  <Spacer height={5} />
                  <Typography.Bold size={12}>
                    {`${order.shipment.warrantyName} (${formatCurrency(
                      order.shipment.cost.toString()
                    )})`}
                  </Typography.Bold>
                </>
              )}
            </TableComponents.Cell>
            <TableComponents.Cell>
              <Typography.Text size={12} weight={700}>
                {`${products} producto${products !== 1 ? "s" : ""}`}
              </Typography.Text>
              <Typography.Text size={12} weight={500}>
                {formatCurrency(`${order.shopify.total_price}`)}
              </Typography.Text>
              <Typography.Link
                size={12}
                onClick={() => handleOpenOrder(order.shopify.order_status_url)}
              >
                Ver orden
              </Typography.Link>
            </TableComponents.Cell>
            <TableComponents.Cell>
              <ActionsContainers>
                <IconButton onClick={handleCreateShipment}>
                  <PlusIcon />
                </IconButton>
              </ActionsContainers>
            </TableComponents.Cell>
          </TableComponents.Row>
        );
      })}
    </BaseTable>
  );
};

export default OrdersTable;
