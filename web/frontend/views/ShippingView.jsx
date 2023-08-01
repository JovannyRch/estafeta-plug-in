import React, { useState, useCallback, useEffect, } from 'react'
import styled from 'styled-components';
import Spacer from '../components/Spacer/Index';
import Pagination from '../components/Pagination';
import Typography from '../components/Typography/Index';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput/SearchInput';
import ViewWrapper from '../components/ViewWrapper/ViewWrapper';
import { data } from '../components/ShippingTable/const';
import Button from '../components/Button/Button';
import ShipmentDropdownFilter from '../components/ShipmentDropdownFilter/ShipmentDropdownFilter';
import OrdersTable from '../components/OrdersTable/OrdersTable';
import ShippingTable from '../components/ShippingTable/ShippingTable';
import { SyncButton } from './styled-components';
import useShipments from '../hooks/useShipments';


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
    margin-bottom: 2px;
`;

const TopActionsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`




const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
`;




const ShippingView = ({ title = "Envíos" }) => {

    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const { shipmentsResponse, isLoading } = useShipments();

    const hasData = shipmentsResponse?.orders?.length > 0;

    return (
        <ViewWrapper>
            <Container>
                <LogoContainer>
                    <Logo />
                </LogoContainer>

                <Typography.Title>
                    {title}
                </Typography.Title>
                <Spacer height={22} />
                <TopActionsContainer>
                    <FilterContainer >
                        <SearchInput
                            width={400}
                            placeholder='Buscar por número de orden'
                            value={searchValue}
                            onChange={({ target }) => setSearchValue(target.value)}
                        />
                        <ShipmentDropdownFilter onChangeFilter={() => { }} />
                    </FilterContainer>

                </TopActionsContainer>
                <SyncButton onClick={() => { }}>
                    Actualizar órdenes manualmente
                </SyncButton>

                <ShippingTable data={shipmentsResponse?.orders} loading={isLoading} />


                <Spacer height={22} />
                {
                    hasData && <Pagination totalPages={4} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                }
            </Container>
        </ViewWrapper>
    )
}

export default ShippingView;