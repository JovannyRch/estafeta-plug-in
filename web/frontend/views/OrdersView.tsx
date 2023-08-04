import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Spacer from "../components/Spacer/Index";
import Pagination from "../components/Pagination";
import Typography from "../components/Typography/Index";
import Logo from "../components/Logo";
import SearchInput from "../components/SearchInput/SearchInput";
import ViewWrapper from "../components/ViewWrapper/ViewWrapper";
import Button from "../components/Button/Button";
import DateFilter from "../components/DateFilter/DateFilter";
import Tabs from "../components/Tabs/Tabs";
import { Container, SyncButton } from "./styled-components";
import OrdersTable from "../components/OrdersTable/OrdersTable";
import ShipmentsConfirmationModal from "../components/ShipmentsConfirmationModal/ShipmentsConfirmationModal";
import useDateFilter from "../hooks/useDateRange";
import useDebounce from "../hooks/useDebounce";
import useData from "../hooks/useData";
import { OrdersResponse } from "../types/Responses/OrdersResponse";
import useRenderFlag from "../hooks/useRenderFlag";
import { DateRange } from "../types";

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
  const [searchValue, setSearchValue] = useState("");
  const searchValueDebounced = useDebounce(searchValue, 500);
  const [currentPage, setCurrentPage] = useState(1);
  const [optionCode, setOptionCode] = useState<OptionCode>(1);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { dateRange, setDateRange, resetDateRange } = useDateFilter();
  const [totalPage, setTotalPage] = useState(0);
  const { renderFlag, forceReRender } = useRenderFlag();
  const [activeTab, setActiveTab] = useState("all");

  const {
    data: ordersResponse,
    isLoading,
    refetch,
  } = useData<OrdersResponse>({
    url: "/api/orders",
    dateRange,
    searchValue: searchValueDebounced,
    page: currentPage,
    optionCode,
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

  const handleGoToEstafeta = () => {
    window.open("https://www.estafeta.com/herramientas/rastreo");
  };

  const handleInputChange = (value: string) => {
    setOptionCode(2);
    setSearchValue(value);
  };

  const handleRangeChange = (range: DateRange) => {
    setOptionCode(1);
    setDateRange(range);
  };

  const handleRefresh = () => {
    resetDateRange();
    setSearchValue("");
    setActiveTab("all");
    forceReRender();
    setCurrentPage(1);
    setOptionCode(1);
    refetch();
  };

  useEffect(() => {
    if (
      ordersResponse?.totalPage &&
      typeof ordersResponse?.totalPage === "number"
    ) {
      setTotalPage(ordersResponse.totalPage);
    }
    return () => {};
  }, [ordersResponse]);

  const hasData = orders.length > 0;

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
            onChange={(value) => setActiveTab(value)}
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
              value={searchValue}
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
          onCreateShipment={() => setShowConfirmationModal(true)}
        />
        <Spacer height={22} />
        {hasData && totalPage > 1 && (
          <Pagination
            totalPages={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Container>
      <ShipmentsConfirmationModal
        onClose={() => setShowConfirmationModal(false)}
        onOk={handleGoToEstafeta}
        isOpen={showConfirmationModal}
        localKey="shipments-confirmation-modal-2"
      />
    </ViewWrapper>
  );
};

export default OrdersView;
