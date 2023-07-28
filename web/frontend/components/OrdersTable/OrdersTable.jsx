import React from 'react'
import BaseTable from '../BaseTable/Index';
import { TableComponents } from '../BaseTable/styled-components';
import { headers } from './const';
import Typography from '../Typography/Index';
import Spacer from '../Spacer/Index';
import { OrderStatus, PaymentStatus } from './Status';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import Loader from '../Loader/Loader';
import EstafetaLogo from '../../icons/EstafetaLogo';
import PlusIcon from '../../icons/PlusIcon';
import ZeroState from '../ZeroState/ZeroState';


const ActionsContainers = styled.div`
    display: flex;
    justify-content: center;
`;

const OrdersTable = ({ data = [], loading, onCreateShipment = () => { } }) => {

    const handleCreateShipment = () => {
        onCreateShipment?.();
        //window.open('https://www.estafeta.com/herramientas/rastreo');
    };

    const handleOpenOrder = (link) => {
        window.open(link);
    };


    if (loading) {
        return <Loader height={400}>
            <EstafetaLogo />
        </Loader>
    }

    if (data.length === 0) {
        return <ZeroState />
    }

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
                            <Spacer height={6} />
                            <PaymentStatus status={shipment.paymentStatus} />
                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <Typography.Bold size={15} >
                                {shipment.customer.name}
                            </Typography.Bold>
                            <Typography.Label size={12} >
                                {shipment.customer.email}
                            </Typography.Label>
                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <Typography.Bold size={15} >
                                {shipment.destination.customer}
                            </Typography.Bold>
                            <Typography.Label size={12} >
                                {shipment.destination.address}
                            </Typography.Label>
                            <Typography.Label size={12} >
                                {shipment.destination.neighborhood}
                            </Typography.Label>
                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <OrderStatus status={shipment.shipment.status} />
                            {
                                shipment.shipment.status === 'Creado' && <>
                                    <Spacer height={5} />
                                    <Typography.Bold size={12}>
                                        {`${shipment.shipment.type} (${shipment.shipment.cost})`}
                                    </Typography.Bold>
                                </>
                            }

                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <Typography.Text size={12} weight={700}  >
                                {`${shipment.details.products} producto${shipment.details.products !== 1 ? 's' : ''}`}
                            </Typography.Text>
                            <Typography.Text size={12} weight={500}  >
                                {`${shipment.details.price}`}
                            </Typography.Text>
                            <Typography.Link size={12} onClick={() => handleOpenOrder(shipment.details.link)} >
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
                ))
            }
        </BaseTable>
    )
}

export default OrdersTable;