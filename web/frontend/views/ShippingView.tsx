import React, { useState } from "react";
import styled from "styled-components";
import Spacer from "../components/Spacer/Index";
import Pagination from "../components/Pagination";
import Typography from "../components/Typography/Index";
import Logo from "../components/Logo";
import SearchInput from "../components/SearchInput/SearchInput";
import ViewWrapper from "../components/ViewWrapper/ViewWrapper";
import ShipmentDropdownFilter from "../components/ShipmentDropdownFilter/ShipmentDropdownFilter";
import ShippingTable from "../components/ShippingTable/ShippingTable";
import { Container, LogoContainer, SyncButton } from "./styled-components";
import useShipments from "../hooks/useShipments";
import useDateFilter from "../hooks/useDateRange";
import useDebounce from "../hooks/useDebounce";

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
`;

const ShippingView = ({ title = "Envíos" }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchValueDebounced = useDebounce(searchValue, 500);

  const [currentPage, setCurrentPage] = useState(1);
  const { dateRange, setDateRange } = useDateFilter();
  const { shipmentsResponse, isLoading, refetch } = useShipments({
    dateRange,
    searchValue: searchValueDebounced,
  });

  const hasData = (shipmentsResponse?.orders ?? []).length > 0;

  return (
    <ViewWrapper>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Typography.Title>{title}</Typography.Title>
        <Spacer height={22} />
        <TopActionsContainer>
          <FilterContainer>
            <SearchInput
              width={400}
              placeholder="Buscar por número de orden"
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value)}
            />
            <ShipmentDropdownFilter onChangeFilter={setDateRange} />
          </FilterContainer>
        </TopActionsContainer>
        <SyncButton onClick={() => refetch()}>
          Actualizar órdenes manualmente
        </SyncButton>

        <ShippingTable data={shipmentsResponse?.orders} loading={isLoading} />

        <Spacer height={22} />
        {hasData && (
          <Pagination
            totalPages={4}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Container>
    </ViewWrapper>
  );
};

export default ShippingView;
