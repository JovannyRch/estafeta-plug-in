import React, { useState, useCallback, useEffect, } from 'react'
import styled from 'styled-components';
import Spacer from '../components/Spacer/Index';
import Pagination from '../components/Pagination';
import Typography from '../components/Typography/Index';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput/SearchInput';
import ViewWrapper from '../components/ViewWrapper/ViewWrapper';
import { data } from '../components/PickUpsTable/const';
import Button from '../components/Button/Button';
import ShipmentDropdownFilter from '../components/ShipmentDropdownFilter/ShipmentDropdownFilter';

import PickUpsTable from '../components/PickUpsTable/PickUpsTable';
import ConfirmationModal from '../components/ConfirmationModal/ConfirmationModal';
import useLocalStorage from '../hooks/useLocalStorage';


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

const TopButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 28px;
`;


const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
`;

const ModalMessage = styled.p`
  color: var(--tipografa, #12263C);
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 447px;
`




const PickUpsView = ({ title = "Recolecciones" }) => {

    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [firstLoading, setFirstLoading] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const [showModalModalSelection, setShowModalModalSelection] = useLocalStorage('show-pickup-modal-3', true);

    const handleGoToEstafeta = () => {
        setShowConfirmationModal(false);
        const checkbox = document.getElementById('pickups-confirmation-modal');
        if (checkbox && checkbox.checked) {
            setShowModalModalSelection(false);
        }

        window.open('https://www.estafeta.com/');
    }

    const onCreatePickUp = () => {

        if (!showModalModalSelection) {
            handleGoToEstafeta();
            return;
        }

        setShowConfirmationModal(true);
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
        setLoading(true);
        setTimeout(() => {
            setFirstLoading(true);
            setLoading(false);
        }, Math.floor(Math.random() * 1000) + 500);
    }


    useEffect(() => {
        loadData()
    }, [currentPage])

    const hasData = filteredData.length > 0;


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
                <TopButtonsContainer>
                    <Button onClick={onCreatePickUp}>Nueva recolección</Button>
                </TopButtonsContainer>
                <TopActionsContainer>
                    <FilterContainer >
                        <SearchInput
                            width={400}
                            placeholder='Buscar por número de recolección, orden o guía'
                            value={searchValue}
                            onChange={({ target }) => setSearchValue(target.value)}
                        />
                        <ShipmentDropdownFilter onChangeFilter={loadData} />
                    </FilterContainer>

                </TopActionsContainer>

                <PickUpsTable loading={loading} data={filteredData} />
                <Spacer height={22} />
                {
                    hasData && firstLoading && <Pagination totalPages={4} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                }
            </Container>
            <ConfirmationModal isOpen={showConfirmationModal} handleClose={() => setShowConfirmationModal(false)} confirmText='Continuar' handleConfirm={handleGoToEstafeta} >
                <ModalMessage>
                    Estás en la mini app de Estafeta Plugin.
                    <br />
                    <br />
                    Para poder solicitar recolecciones,
                    debes hacerlo desde tu Estafeta Plugin.

                    <br />
                    <br />
                    ¿Deseas ser direccionado?
                    {
                        showModalModalSelection && <>
                            <br />
                            <br />
                            <div>
                                <input type='checkbox' id='pickups-confirmation-modal' />
                                <label> No volver a mostrar este mensaje</label>
                            </div>
                        </>
                    }

                </ModalMessage>
            </ConfirmationModal>
        </ViewWrapper>
    )
}

export default PickUpsView;