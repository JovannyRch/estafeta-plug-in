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
import EstafetaLogo from "../../icons/EstafetaLogo";
import PlusIcon from "../../icons/PlusIcon";
import ZeroState from "../ZeroState/ZeroState";
import { Order } from "../../types/Responses/OrdersResponse";

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
    //window.open('https://www.estafeta.com/herramientas/rastreo');
  };

  const handleOpenOrder = (link) => {
    window.open("https://www.estafeta.com/herramientas/rastreo");
  };

  if (loading) {
    return <Loader height={400} />;
  }

  if (data.length === 0) {
    return <ZeroState />;
  }

  return (
    <BaseTable headers={headers}>
      {data.map((order) => (
        <TableComponents.Row key={order.code}>
          <TableComponents.Cell>
            <Typography.Link size={15}>{order.code}</Typography.Link>
            <Spacer height={2} />
            <Typography.Label size={12}>
              {order.creationDateTime}
            </Typography.Label>
            <Spacer height={6} />
            {/* <PaymentStatus status={order.shipment.statusName} /> */}
          </TableComponents.Cell>
          <TableComponents.Cell>
            <Typography.Bold size={15}>--</Typography.Bold>

            {/* <Typography.Bold size={15}>
              {order.addressee.contactName}
            </Typography.Bold>
            <Typography.Label size={12}>
              {order.addressee.email}
            </Typography.Label> */}
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
                  {`${order.shipment.warrantyName} ($${order.shipment.cost})`}
                </Typography.Bold>
              </>
            )}
          </TableComponents.Cell>
          <TableComponents.Cell>
            <Typography.Text size={12} weight={700}>
              {/* {`${shipment.details.products} producto${
                shipment.details.products !== 1 ? "s" : ""
              }`} */}
            </Typography.Text>
            <Typography.Text size={12} weight={500}>
              {/* {`${shipment.details.price}`} */}
            </Typography.Text>
            {/* <Typography.Link
              size={12}
              onClick={() => handleOpenOrder(shipment.details.link)}
            >
              Ver orden
            </Typography.Link> */}
          </TableComponents.Cell>
          <TableComponents.Cell>
            <ActionsContainers>
              <IconButton onClick={handleCreateShipment}>
                <PlusIcon />
              </IconButton>
            </ActionsContainers>
          </TableComponents.Cell>
        </TableComponents.Row>
      ))}
    </BaseTable>
  );
};

export default OrdersTable;
