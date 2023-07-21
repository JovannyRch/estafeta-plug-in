import React, { useState, useCallback, } from 'react'
import styled from 'styled-components';
import ShippingTable from '../components/ShippingTable/ShippingTable';
import Spacer from '../components/Spacer/Index';
import Pagination from '../components/Pagination';
import Typography from '../components/Typography/Index';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput/SearchInput';
import ViewWrapper from '../components/ViewWrapper/ViewWrapper';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 24px 24px;
    border-radius: 8px;
`;


const InputContainer = styled.div`
    display: flex;
    gap: 21px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 57px;
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




    return (
        <ViewWrapper>
            <Container>
                <LogoContainer>
                    <Logo />
                </LogoContainer>

                <Typography.Title>
                    Envíos
                </Typography.Title>
                <Spacer height={22} />
                <InputContainer >
                    <SearchInput width={400} placeholder='Buscar por número de orden o destinatario' />
                </InputContainer>
                <ShippingTable />
                <Spacer height={22} />
                <Pagination />
            </Container>
        </ViewWrapper>
    )
}

export default ShippingView;