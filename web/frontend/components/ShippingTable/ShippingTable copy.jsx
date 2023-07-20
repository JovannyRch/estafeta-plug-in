import React from 'react'
import { Th, Tr, Table as StyledTable, Td, NumeroEnvio, Fecha, NombreCliente, Label, Costo } from './styled-components';
import styled from 'styled-components';

const DatosEnvioContainer = styled.div`
    min-height: 75px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: center;
    padding: 0 20px;
`;

const DestinoContainer = styled.div`
    min-height: 75px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: center;
    padding: 0 20px;
`;

const StatusContainer = styled.div` 
    min-height: 75px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: flex-start;
    padding: 15px 0px;
`;

const StatusItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;

    color: var(--tipografa, #12263C);
    /* font-family: Montserrat; */
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Dot = styled.div` 
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #849BCC;
    margin-right: 5px;
`;



const Status = ({ label }) => {

    const dotColor = () => {
        switch (label) {
            case "En tránsito":
                return "#849BCC"
            case "Entregado":
                return "#00B2A9"
            case "Incidente":
                return "#FF5A52"
            default:
                return "#849BCC"
        }
    }
    const color = dotColor();

    return <StatusItem>
        <Dot style={{ background: color }} />
        {label}
    </StatusItem>
}

const ShippingTable = () => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <Th align='left'>Datos de envío</Th>
                    <Th align='left'>Datos de destino</Th>
                    <Th align='left'>Número de guía</Th>
                    <Th align='left'>Estatus de envío</Th>
                    <Th align='left'>Costo</Th>
                    <Th align='left'>Crear envío</Th>
                </tr>
            </thead>
            <tbody>
                <Tr>
                    <Td>
                        <DatosEnvioContainer>
                            <NumeroEnvio>
                                #56786654
                            </NumeroEnvio>
                            <Fecha>
                                2023-05-05 a las 00:22
                            </Fecha>
                        </DatosEnvioContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <NombreCliente>
                                Manuel Rodríguez
                            </NombreCliente>
                            <Label>
                                Tabasco 262
                            </Label>
                            <Label>
                                Col. Roma Norte
                            </Label>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <NumeroEnvio>
                                6789067543216785698763
                            </NumeroEnvio>
                            <Label>
                                100 cm x 56 cm x 70 cm / 23 kg
                            </Label>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <StatusContainer>
                            <Status label="En tránsito" />
                            <Status label="Entregado" />
                            <Status label="Incidente" />
                        </StatusContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <Costo>
                                $ 150.00
                            </Costo>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>

                        </DestinoContainer>
                    </Td>
                </Tr>

                <Tr>
                    <Td>
                        <DatosEnvioContainer>
                            <NumeroEnvio>
                                #56786654
                            </NumeroEnvio>
                            <Fecha>
                                2023-05-05 a las 00:22
                            </Fecha>
                        </DatosEnvioContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <NombreCliente>
                                Manuel Rodríguez
                            </NombreCliente>
                            <Label>
                                Tabasco 262
                            </Label>
                            <Label>
                                Col. Roma Norte
                            </Label>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <NumeroEnvio>
                                6789067543216785698763
                            </NumeroEnvio>
                            <Label>
                                100 cm x 56 cm x 70 cm / 23 kg
                            </Label>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <StatusContainer>
                            <Status label="Entregado" />
                        </StatusContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <Costo>
                                $ 150.00
                            </Costo>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>

                        </DestinoContainer>
                    </Td>
                </Tr>

                <Tr>
                    <Td>
                        <DatosEnvioContainer>
                            <NumeroEnvio>
                                #56786654
                            </NumeroEnvio>
                            <Fecha>
                                2023-05-05 a las 00:22
                            </Fecha>
                        </DatosEnvioContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <NombreCliente>
                                Manuel Rodríguez
                            </NombreCliente>
                            <Label>
                                Tabasco 262
                            </Label>
                            <Label>
                                Col. Roma Norte
                            </Label>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <NumeroEnvio>
                                6789067543216785698763
                            </NumeroEnvio>
                            <Label>
                                100 cm x 56 cm x 70 cm / 23 kg
                            </Label>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <StatusContainer>
                            <Status label="Incidente" />
                        </StatusContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <Costo>
                                $ 150.00
                            </Costo>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>

                        </DestinoContainer>
                    </Td>
                </Tr>

                <Tr>
                    <Td>
                        <DatosEnvioContainer>
                            <NumeroEnvio>
                                #56786654
                            </NumeroEnvio>
                            <Fecha>
                                2023-05-05 a las 00:22
                            </Fecha>
                        </DatosEnvioContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <NombreCliente>
                                Manuel Rodríguez
                            </NombreCliente>
                            <Label>
                                Tabasco 262
                            </Label>
                            <Label>
                                Col. Roma Norte
                            </Label>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <NumeroEnvio>
                                6789067543216785698763
                            </NumeroEnvio>
                            <Label>
                                100 cm x 56 cm x 70 cm / 23 kg
                            </Label>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <StatusContainer>
                            <Status label="En tránsito" />
                            <Status label="Entregado" />
                        </StatusContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>
                            <Costo>
                                $ 150.00
                            </Costo>
                        </DestinoContainer>
                    </Td>
                    <Td>
                        <DestinoContainer>

                        </DestinoContainer>
                    </Td>
                </Tr>

            </tbody>
        </StyledTable>
    )
}

export default ShippingTable