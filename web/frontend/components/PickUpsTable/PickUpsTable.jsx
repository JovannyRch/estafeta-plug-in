import React from 'react'
import BaseTable from '../BaseTable/Index';
import { TableComponents } from '../BaseTable/styled-components';
import { headers } from './const';
import Typography from '../Typography/Index';
import styled from 'styled-components';
import Loader from '../Loader/Loader';
import EstafetaLogo from '../../icons/EstafetaLogo';
import PickUpStatus from './Status';

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

const PickUpsTable = ({ data = [], loading }) => {

    const handleDownload = () => {
        window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
    };

    const handleGoToEstafeta = () => {
        window.open("https://www.estafeta.com/herramientas/rastreo");
    };


    if (loading) {
        return <Loader height={400}>
            <EstafetaLogo />
        </Loader>
    }

    return (
        <BaseTable headers={headers}>
            {
                data.map((shipment, index) => (
                    <TableComponents.Row key={shipment.id}>
                        <TableComponents.Cell>
                            <Typography.Bold size={15} >
                                {shipment.orderNumber}
                            </Typography.Bold>
                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <Typography.Label size={15} >
                                {shipment.date}
                            </Typography.Label>
                        </TableComponents.Cell>
                        <TableComponents.Cell>
                            <ShipmentsContainer>
                                {
                                    shipment.shipments.map((item) => <>
                                        <ShipmentsItem>
                                            <Typography.Link size={15} onClick={handleGoToEstafeta} >
                                                #{item.number}
                                            </Typography.Link>
                                            <Typography.Label size={12} >
                                                {item.date}
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
                                            <Typography.Link size={15} onClick={handleGoToEstafeta} >
                                                {item.guideNumber}
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
                            <PickUpStatus code={shipment.status} />
                        </TableComponents.Cell>
                    </TableComponents.Row>
                ))
            }
        </BaseTable>
    )
}

export default PickUpsTable;