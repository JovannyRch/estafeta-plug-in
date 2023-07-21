import React from 'react'
import BaseTable from '../BaseTable/Index';
import { TableComponents } from '../BaseTable/styled-components';
import { headers } from './const';
import Typography from '../Typography/Index';
import Spacer from '../Spacer/Index';
import ShipmentStatus from './Status';
import styled from 'styled-components';
import DownloadIcon from '../../icons/DownloadIcon';
import IconButton from '../IconButton/IconButton';

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

const ActionsContainers = styled.div`
    display: flex;
    justify-content: center;
`;

const ShippingTable = ({ data = [] }) => {

    const handleDownload = () => {
        window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
    };


    return (
        <BaseTable headers={headers}>
            {
                data.map((shipment) => (
                    <TableComponents.Row key={shipment.id}>
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
                            <ActionsContainers>
                                <IconButton onClick={handleDownload}>
                                    <DownloadIcon />
                                </IconButton>
                            </ActionsContainers>
                        </TableComponents.Cell>
                    </TableComponents.Row>
                ))
            }
        </BaseTable>
    )
}

export default ShippingTable;