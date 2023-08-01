import React, { useState, useEffect, } from 'react'
import styled from 'styled-components';
import Spacer from '../components/Spacer/Index';
import Pagination from '../components/Pagination';
import Typography from '../components/Typography/Index';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput/SearchInput';
import ViewWrapper from '../components/ViewWrapper/ViewWrapper';
import { data } from '../components/OrdersTable/const';
import Button from '../components/Button/Button';
import ShipmentDropdownFilter from '../components/ShipmentDropdownFilter/ShipmentDropdownFilter';
import Tabs from '../components/Tabs/Tabs';
import { SyncButton } from './styled-components';
import OrdersTable from '../components/OrdersTable/OrdersTable';
/* import useLocalStorage from '../hooks/useLocalStorage'; */
import ShipmentsConfirmationModal from '../components/ShipmentsConfirmationModal/ShipmentsConfirmationModal';
import useOrders from '../hooks/useOrders';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px 24px;
    border-radius: 8px;
`;


const FilterContainer = styled.div`
    display: flex;
    gap: 21px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 3px;
`;

const TopActionsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const TopButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 28px;
    justify-content: space-between;
`;


const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
`;



const OrdersView = ({ title = "Órdenes" }) => {

    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const { ordersResponse, isLoading } = useOrders();
    console.log("ordersResponse", ordersResponse);
    const orders = ordersResponse?.orders ?? [];

    const handleGoToEstafeta = () => {
        window.open('https://www.estafeta.com/herramientas/rastreo');
    }

    useEffect(() => {

        if (searchValue.length === 0) {
            setFilteredData(data);
            return;
        }
        const lowerValue = searchValue.toLowerCase();
        setFilteredData(data.filter((shipment) => {
            return shipment.orderNumber.toLowerCase().includes(lowerValue) || shipment.customer.name.toLowerCase().includes(lowerValue);
        }));

    }, [searchValue])

    useEffect(() => {

        //Data with random ids
        const dataWidthRandomIds = data.map((shipment) => {
            return {
                ...shipment,
                id: Math.random().toString(36).substr(2, 9)
            }
        });
        const orderedData = dataWidthRandomIds.sort((a, b) => {
            return a.id.localeCompare(b.id);
        });
        setFilteredData(orderedData);

    }, [currentPage])

    const loadData = () => {
        /* setLoading(true);
        setTimeout(() => {
            setFirstLoading(true);
            setLoading(false);
        }, Math.floor(Math.random() * 1000) + 500); */
    }


    useEffect(() => {
        loadData()
    }, [currentPage])

    const hasData = orders.length > 0;


    return (
        <ViewWrapper>
            <Container>
                <LogoContainer>
                    <Logo />
                </LogoContainer>

                <Typography.Title>
                    {title}
                </Typography.Title>
                <Spacer height={33} />
                <TopButtonsContainer>
                    <Tabs tabs={[
                        {
                            label: "Todos",
                            value: "all"
                        },
                        {
                            label: "Creado",
                            value: "created"
                        },
                        {
                            label: "No creado",
                            value: "not-created"
                        }
                    ]}
                        onChange={loadData}
                    />
                    <Button onClick={() => setShowConfirmationModal(true)} >
                        Nuevo envío
                    </Button>
                </TopButtonsContainer>
                <TopActionsContainer>
                    <FilterContainer >
                        <SearchInput
                            width={400}
                            placeholder='Buscar por número de orden'
                            value={searchValue}
                            onChange={({ target }) => setSearchValue(target.value)}
                        />
                        <ShipmentDropdownFilter onChangeFilter={loadData} />
                    </FilterContainer>

                </TopActionsContainer>
                <SyncButton onClick={loadData} >Sincronizar órdenes manualmente</SyncButton>
                <OrdersTable loading={isLoading} data={orders ?? []} onCreateShipment={() => setShowConfirmationModal(true)} />
                <Spacer height={22} />
                {
                    hasData && ordersResponse?.totalPages > 1 && <Pagination totalPages={4} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                }
            </Container>
            <ShipmentsConfirmationModal
                onClose={() => setShowConfirmationModal(false)}
                onOk={handleGoToEstafeta}
                isOpen={showConfirmationModal}
                localKey='shipments-confirmation-modal-2'
            />
        </ViewWrapper >
    )
}

export default OrdersView;