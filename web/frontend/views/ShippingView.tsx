import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spacer from "../components/Spacer/Index";
import Pagination from "../components/Pagination";
import Typography from "../components/Typography/Index";
import SearchInput from "../components/SearchInput/SearchInput";
import ViewWrapper from "../components/ViewWrapper/ViewWrapper";
import ShipmentDropdownFilter from "../components/ShipmentDropdownFilter/ShipmentDropdownFilter";
import ShippingTable from "../components/ShippingTable/ShippingTable";
import { Container, SyncButton } from "./styled-components";
import useDateFilter from "../hooks/useDateRange";
import useDebounce from "../hooks/useDebounce";
import useData from "../hooks/useData";
import { ShipmentsResponse } from "../types/Responses/ShipmentsResponse";
import useRenderFlag from "../hooks/useRenderFlag";

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
  const [totalPage, setTotalPage] = useState(0);
  const { renderFlag, forceReRender } = useRenderFlag();
  const [currentPage, setCurrentPage] = useState(1);
  const { dateRange, setDateRange } = useDateFilter();
  const {
    data: shipmentsResponse,
    isLoading,
    refetch,
  } = useData<ShipmentsResponse>({
    url: "/api/shipments",
    dateRange,
    searchValue: searchValueDebounced,
    page: currentPage,
  });

  const hasData = (shipmentsResponse?.orders ?? []).length > 0;

  const handleRefresh = () => {
    forceReRender();
    setSearchValue("");
    setCurrentPage(1);
    refetch();
  };

  useEffect(() => {
    if (
      shipmentsResponse?.totalPage &&
      typeof shipmentsResponse?.totalPage === "number"
    ) {
      setTotalPage(shipmentsResponse.totalPage);
    }
    return () => {};
  }, [shipmentsResponse]);

  return (
    <ViewWrapper>
      <Container>
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

            {renderFlag && (
              <ShipmentDropdownFilter onChangeFilter={setDateRange} />
            )}
          </FilterContainer>
        </TopActionsContainer>
        <SyncButton onClick={handleRefresh}>
          Sincronizar órdenes manualmente
        </SyncButton>

        <ShippingTable data={shipmentsResponse?.orders} loading={isLoading} />

        <Spacer height={22} />
        {hasData && totalPage > 1 && (
          <Pagination
            totalPages={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Container>
    </ViewWrapper>
  );
};

export default ShippingView;
