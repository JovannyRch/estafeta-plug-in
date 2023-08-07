import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spacer from "../components/Spacer/Index";
import Pagination from "../components/Pagination";
import Typography from "../components/Typography/Index";
import SearchInput from "../components/SearchInput/SearchInput";
import ViewWrapper from "../components/ViewWrapper/ViewWrapper";
import Button from "../components/Button/Button";
import DateFilter from "../components/DateFilter/DateFilter";

import PickUpsTable from "../components/PickUpsTable/PickUpsTable";
import useLocalStorage from "../hooks/useLocalStorage";

import { Container, DropdownWithInputContainer } from "./styled-components";
import { PickupResponse } from "../types/Responses/PickUpsResponse";
import useData from "../hooks/useData";
import PickupsConfirmationModal from "../components/PickupsConfirmationModal/PickupsConfirmationModal";
import { DateRange } from "../types";
import InputTypeFilter from "../components/InputTypeFilter/InputTypeFilter";
import { inputTypeValues } from "../components/InputTypeFilter/const";

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
`;

const TopButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 28px;
`;

const LOCAL_STORAGE_KEY = "show-pickup-modal-3";

const PickUpsView = ({ title = "Recolecciones" }) => {
  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);
  const {
    data: pickupsResponse,
    isLoading,
    filters,
    updateFilters,
    totalPages,
    setTotalPages,
  } = useData<PickupResponse>({
    url: "/api/pickups",
  });

  const [showModalModalSelection, setShowModalModalSelection] =
    useLocalStorage<boolean>(LOCAL_STORAGE_KEY, true);

  const handleGoToEstafeta = () => {
    setShowConfirmationModal(false);
    const checkbox: any = document.getElementById("pickups-confirmation-modal");
    if (checkbox && checkbox.checked) {
      setShowModalModalSelection(false);
    }

    window.open("https://www.estafeta.com/");
  };

  const handleInputChange = (value: string) => {
    const { optionCode } = filters;
    let updatedOptionCode = optionCode;
    if (optionCode === 1) {
      const dropdownValue = document.querySelector("#input-type-filter");

      if (dropdownValue) {
        const text = dropdownValue.textContent;
        if (text === inputTypeValues.order) {
          updatedOptionCode = 2;
        } else if (text === inputTypeValues.pickup) {
          updatedOptionCode = 3;
        } else if (text === inputTypeValues.waybill) {
          updatedOptionCode = 4;
        }
      }
    }
    console.log("optionCode", optionCode);
    updateFilters({
      searchValue: value,
      optionCode: updatedOptionCode,
    });
  };

  const handleRangeChange = (range: DateRange) => {
    updateFilters({ dateRange: range, optionCode: 1 });
  };

  const onCreatePickUp = () => {
    if (!showModalModalSelection) {
      handleGoToEstafeta();
      return;
    }

    setShowConfirmationModal(true);
  };

  useEffect(() => {
    if (
      pickupsResponse?.totalPage &&
      typeof pickupsResponse?.totalPage === "number"
    ) {
      setTotalPages(pickupsResponse.totalPage);
    }
    return () => {};
  }, [pickupsResponse]);

  return (
    <ViewWrapper>
      <Container>
        <Typography.Title>{title}</Typography.Title>
        <Spacer height={22} />
        <TopButtonsContainer>
          <Button onClick={onCreatePickUp}>Nueva recolección</Button>
        </TopButtonsContainer>
        <TopActionsContainer>
          <FilterContainer>
            <DropdownWithInputContainer>
              <InputTypeFilter
                onChangeFilter={(value) => updateFilters({ optionCode: value })}
              />
              <SearchInput
                width={220}
                placeholder="Buscar"
                value={filters.searchValue}
                onChange={({ target }) => handleInputChange(target.value)}
                styles={{
                  border: "none",
                }}
              />
            </DropdownWithInputContainer>

            <DateFilter onChangeFilter={handleRangeChange} />
          </FilterContainer>
        </TopActionsContainer>

        <PickUpsTable
          loading={isLoading}
          data={pickupsResponse?.pickups ?? []}
        />
        <Spacer height={22} />
        {(pickupsResponse?.pickups ?? []).length > 0 && !isLoading && (
          <Pagination
            totalPages={totalPages}
            currentPage={filters.currentPage}
            setCurrentPage={(page) => updateFilters({ currentPage: page })}
            totalItems={filters.totalRecords}
            setTotalItems={(value) => updateFilters({ totalRecords: value })}
          />
        )}
      </Container>
      <PickupsConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onOk={handleGoToEstafeta}
        localKey={LOCAL_STORAGE_KEY}
      />
    </ViewWrapper>
  );
};

export default PickUpsView;
