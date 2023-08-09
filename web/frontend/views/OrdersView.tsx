import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Spacer from "../components/Spacer/Index";
import Pagination from "../components/Pagination";
import Typography from "../components/Typography/Index";
import SearchInput from "../components/SearchInput/SearchInput";
import ViewWrapper from "../components/ViewWrapper/ViewWrapper";
import Button from "../components/Button/Button";
import DateFilter from "../components/DateFilter/DateFilter";
import Tabs from "../components/Tabs/Tabs";
import { Container, SyncButton } from "./styled-components";
import OrdersTable from "../components/OrdersTable/OrdersTable";
import ShipmentsConfirmationModal from "../components/ShipmentsConfirmationModal/ShipmentsConfirmationModal";
import useData from "../hooks/useData";
import { OrdersResponse } from "../types/Responses/OrdersResponse";
import useRenderFlag from "../hooks/useRenderFlag";
import { DateRange } from "../types";
import { ESTAFETA_LINKS } from "../const";

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
`;

const TopButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 28px;
  justify-content: space-between;
`;

type OptionCode = 1 | 2;

const OrdersView = ({ title = "Órdenes" }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [activeOrderCode, setActiveOrderCode] = useState<string>("");
  const [showItemConfirmationModal, setShowItemConfirmationModal] =
    useState(false);

  const { renderFlag, forceReRender } = useRenderFlag();
  const [activeTab, setActiveTab] = useState("all");

  const {
    data: ordersResponse,
    isLoading,
    refetch,
    filters,
    resetFilters,
    updateFilters,
    totalPages,
    setTotalPages,
  } = useData<OrdersResponse>({
    url: "/api/orders",
  });
  const orders = useMemo(() => {
    const data = ordersResponse?.orders ?? [];

    if (activeTab === "created") {
      return data.filter((order) => order.shipment.statusName === "Creado");
    }

    if (activeTab === "not-created") {
      return data.filter((order) => order.shipment.statusName !== "Creado");
    }
    return data;
  }, [activeTab, ordersResponse]);

  const handleCreateShipment = () => {
    window.open(ESTAFETA_LINKS.nuevoEnvio());
  };

  const handleCreateItemShipment = () => {
    if (activeOrderCode === "") return;
    window.open(ESTAFETA_LINKS.crearEnvio(activeOrderCode));
  };

  const handleInputChange = (value: string) => {
    updateFilters({ searchValue: value, optionCode: value.length > 0 ? 2 : 1 });
  };

  const handleTabChange = (value: string) => {
    if (value === "all") {
      updateFilters({ statusCode: 1 });
    } else if (value === "created") {
      updateFilters({ statusCode: 2 });
    } else if (value === "not-created") {
      updateFilters({ statusCode: 3 });
    }

    setActiveTab(value);
  };

  const handleRangeChange = (range: DateRange) => {
    updateFilters({ dateRange: range, optionCode: 1 });
  };

  const handleRefresh = () => {
    resetFilters();
    setActiveTab("all");
    forceReRender();
    refetch();
  };

  useEffect(() => {
    if (
      ordersResponse?.totalPage &&
      typeof ordersResponse?.totalPage === "number"
    ) {
      setTotalPages(ordersResponse.totalPage);
    }
    return () => {};
  }, [ordersResponse]);

  return (
    <ViewWrapper>
      <Container>
        <Typography.Title>{title}</Typography.Title>
        <Spacer height={33} />
        <TopButtonsContainer>
          <Tabs
            tabs={[
              {
                label: "Todos",
                value: "all",
              },
              {
                label: "Creado",
                value: "created",
              },
              {
                label: "No creado",
                value: "not-created",
              },
            ]}
            activeTab={activeTab}
            onChange={handleTabChange}
          />
          <Button onClick={() => setShowConfirmationModal(true)}>
            Nuevo envío
          </Button>
        </TopButtonsContainer>
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
        <OrdersTable
          loading={isLoading}
          data={orders ?? []}
          onCreateShipment={(orderCode: string) => {
            setShowItemConfirmationModal(true);
            setActiveOrderCode(orderCode);
          }}
        />
        <Spacer height={22} />
        {(orders?.length ?? []) > 0 && !isLoading && (
          <Pagination
            totalPages={totalPages}
            currentPage={filters.currentPage}
            setCurrentPage={(currentPage) => updateFilters({ currentPage })}
            totalItems={filters.totalRecords}
            setTotalItems={(totalRecords) =>
              updateFilters({ totalRecords: totalRecords })
            }
          />
        )}
      </Container>
      <ShipmentsConfirmationModal
        onClose={() => setShowConfirmationModal(false)}
        onOk={handleCreateShipment}
        isOpen={showConfirmationModal}
        localKey="shipments-confirmation-modal-1"
      />
      <ShipmentsConfirmationModal
        onClose={() => setShowItemConfirmationModal(false)}
        onOk={handleCreateItemShipment}
        isOpen={showItemConfirmationModal}
        localKey="shipments-confirmation-modal-2"
      />
    </ViewWrapper>
  );
};

export default OrdersView;
