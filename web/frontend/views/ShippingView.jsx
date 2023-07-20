import { AlphaCard, Autocomplete, Heading, Icon, List, Select } from '@shopify/polaris';
import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components';
import { HomeMinor, SendMajor, OrdersMinor, SearchMinor } from '@shopify/polaris-icons';
import ShippingTable from '../components/ShippingTable/ShippingTable';
import Spacer from '../components/Spacer/Index';
import Pagination from '../components/Pagination';
import EstafetaLogo from '../icons/EstafetaLogo';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 24px 24px;
    border-radius: 8px;
`;


const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;


const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
    border-radius: 8px;
`;


const SideBarPanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 160px;
    border-radius: 8px;
`;
const SideButtonContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 8px 16px;
    border-radius: 8px;
    height: 80px;
    background-color: #fff;
    cursor: pointer;
`;


const InputContainer = styled.div`
    display: flex;
    gap: 21px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 57px;
`;


const Input = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 8px;
    padding: 0 19px;
    border: 1px solid #12263C;
`;


const SelectContainer = styled.div`
    width: 168px;
`;

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
`;




const ShippingView = () => {

    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback(
        (value) => setSelected(value),
        [],
    );

    const options = [
        { label: 'Filtrar por', value: 'today' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last 7 days', value: 'lastWeek' },
    ];



    return (
        <Container>
            <LogoContainer>
                <EstafetaLogo />
            </LogoContainer>
            <InputContainer >
                <Input placeholder='Buscar por número de order o destinatario' />
                <SelectContainer>
                    <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                    />
                </SelectContainer>
            </InputContainer>
            <ShippingTable />
            <Spacer height={22} />
            <Pagination />
        </Container>
    )
}

export default ShippingView;