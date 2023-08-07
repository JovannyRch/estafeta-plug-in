import React, { useEffect } from "react";
import styled from "styled-components";
import Spacer from "../components/Spacer/Index";
import Pagination from "../components/Pagination";
import Typography from "../components/Typography/Index";
import SearchInput from "../components/SearchInput/SearchInput";
import ViewWrapper from "../components/ViewWrapper/ViewWrapper";
import DateFilter from "../components/DateFilter/DateFilter";
import ShippingTable from "../components/ShippingTable/ShippingTable";
import { Container, SyncButton } from "./styled-components";
import useData from "../hooks/useData";
import { ShipmentsResponse } from "../types/Responses/ShipmentsResponse";
import useRenderFlag from "../hooks/useRenderFlag";
import { DateRange } from "../types";

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

type OptionCode = 1 | 2;

const ShippingView = ({ title = "Envíos" }) => {
  const { renderFlag, forceReRender } = useRenderFlag();

  const {
    data: shipmentsResponse,
    isLoading,
    refetch,
    filters,
    resetFilters,
    updateFilters,
    totalPages,
    setTotalPages,
  } = useData<ShipmentsResponse>({
    url: "/api/shipments",
  });

  const handleRefresh = () => {
    forceReRender();
    resetFilters();
    refetch();
  };

  const handleInputChange = (value: string) => {
    updateFilters({ searchValue: value, optionCode: value.length > 0 ? 2 : 1 });
  };

  const handleRangeChange = (range: DateRange) => {
    updateFilters({ dateRange: range, optionCode: 1 });
  };

  useEffect(() => {
    if (
      shipmentsResponse?.totalPage &&
      typeof shipmentsResponse?.totalPage === "number"
    ) {
      setTotalPages(shipmentsResponse.totalPage);
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
              value={filters.searchValue}
              onChange={({ target }) => handleInputChange(target.value)}
            />

            {renderFlag && <DateFilter onChangeFilter={handleRangeChange} />}
          </FilterContainer>
        </TopActionsContainer>
        <SyncButton onClick={handleRefresh}>
          Sincronizar órdenes manualmente
        </SyncButton>

        <ShippingTable
          data={shipmentsResponse?.orders ?? []}
          loading={isLoading}
        />

        <Spacer height={22} />
        {(shipmentsResponse?.orders ?? []).length > 0 && !isLoading && (
          <Pagination
            totalPages={totalPages}
            currentPage={filters.currentPage}
            setCurrentPage={(page) => updateFilters({ currentPage: page })}
            totalItems={filters.totalRecords}
            setTotalItems={(value) => updateFilters({ totalRecords: value })}
          />
        )}
      </Container>
    </ViewWrapper>
  );
};

export default ShippingView;
