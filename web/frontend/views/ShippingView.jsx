import React, { useState, useCallback, useEffect, } from 'react'
import styled from 'styled-components';
import ShippingTable from '../components/ShippingTable/ShippingTable';
import Spacer from '../components/Spacer/Index';
import Pagination from '../components/Pagination';
import Typography from '../components/Typography/Index';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput/SearchInput';
import ViewWrapper from '../components/ViewWrapper/ViewWrapper';
import { data } from '../components/ShippingTable/const';
import Button from '../components/Button/Button';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 24px 24px;
    border-radius: 8px;
`;


const FilterContainer = styled.div`
    display: flex;
    gap: 21px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 57px;
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
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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
                    </FilterContainer>
                    <Button>
                        Actualizar
                    </Button>
                </TopActionsContainer>

                <ShippingTable data={filteredData} />
                <Spacer height={22} />
                <Pagination totalPages={4} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </Container>
        </ViewWrapper>
    )
}

export default ShippingView;