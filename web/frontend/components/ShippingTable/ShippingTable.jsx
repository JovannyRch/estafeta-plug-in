import React from 'react'
import BaseTable from '../BaseTable/Index';
import { TableComponents } from '../BaseTable/styled-components';
import { data, headers } from './const';
import Typography from '../Typography/Index';
import Spacer from '../Spacer/Index';
import ShipmentStatus from './Status';
import styled from 'styled-components';

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

const ShippingTable = () => {


    return (
        <BaseTable headers={headers}>
            {
                data.map((shipment) => (
                    <TableComponents.Row>
                        <TableComponents.Cell>
                            <Typography.Link size={15} >
                                {shipment.orderNumber}
                            </Typography.Link>
                            <Spacer height={2} />
                            <Typography.Label size={12} >
                                {shipment.date}
                            </Typography.Label>
                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <Typography.Bold size={15} >
                                {shipment.customer.name}
                            </Typography.Bold>
                            <Typography.Label size={12} >
                                {shipment.customer.address}
                            </Typography.Label>
                            <Typography.Label size={12} >
                                {shipment.customer.neighborhood}
                            </Typography.Label>
                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <ShipmentsContainer>
                                {
                                    shipment.shipments.map((item) => <>
                                        <ShipmentsItem>
                                            <Typography.Link size={15} >
                                                {item.number}
                                            </Typography.Link>
                                            <Typography.Label size={12} >
                                                {item.measure}
                                            </Typography.Label>
                                        </ShipmentsItem>
                                    </>)
                                }
                            </ShipmentsContainer>
                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <ShipmentsContainer>
                                {
                                    shipment.shipments.map((item) => <>
                                        <ShipmentsItem>
                                            <ShipmentStatus code={item.status} />
                                        </ShipmentsItem>
                                    </>)
                                }
                            </ShipmentsContainer>
                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <Typography.Text size={15} weight={700}  >
                                {shipment.cost}
                            </Typography.Text>
                        </TableComponents.Cell>
                        <TableComponents.Cell>

                        </TableComponents.Cell>
                    </TableComponents.Row>
                ))
            }
        </BaseTable>
    )
}

export default ShippingTable;