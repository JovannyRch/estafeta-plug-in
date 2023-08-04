import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spacer from "../components/Spacer/Index";
import Pagination from "../components/Pagination";
import Typography from "../components/Typography/Index";
import SearchInput from "../components/SearchInput/SearchInput";
import ViewWrapper from "../components/ViewWrapper/ViewWrapper";
import Button from "../components/Button/Button";
import ShipmentDropdownFilter from "../components/ShipmentDropdownFilter/ShipmentDropdownFilter";

import PickUpsTable from "../components/PickUpsTable/PickUpsTable";
import useLocalStorage from "../hooks/useLocalStorage";

import { Container } from "./styled-components";
import { PickupResponse } from "../types/Responses/PickUpsResponse";
import useData from "../hooks/useData";
import useDebounce from "../hooks/useDebounce";
import useDateFilter from "../hooks/useDateRange";
import PickupsConfirmationModal from "../components/PickupsConfirmationModal/PickupsConfirmationModal";
import { DateRange } from "../types";

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

const ModalMessage = styled.p`
  color: var(--tipografa, #12263c);
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 447px;
`;

type OptionCode = 1 | 2;

const PickUpsView = ({ title = "Recolecciones" }) => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const searchValueDebounced = useDebounce(searchValue, 500);
  const { dateRange, setDateRange } = useDateFilter();
  const [totalPage, setTotalPage] = useState(0);
  const [optionCode, setOptionCode] = useState<OptionCode>(1);

  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);
  const { data: pickupsResponse, isLoading } = useData<PickupResponse>({
    url: "/api/pickups",
    dateRange,
    searchValue: searchValueDebounced,
    page: currentPage,
    optionCode,
  });

  const [showModalModalSelection, setShowModalModalSelection] =
    useLocalStorage<boolean>("show-pickup-modal-3", true);

  const handleGoToEstafeta = () => {
    setShowConfirmationModal(false);
    const checkbox: any = document.getElementById("pickups-confirmation-modal");
    if (checkbox && checkbox.checked) {
      setShowModalModalSelection(false);
    }

    window.open("https://www.estafeta.com/");
  };

  const handleInputChange = (value: string) => {
    setOptionCode(2);
    setSearchValue(value);
  };

  const handleRangeChange = (range: DateRange) => {
    setOptionCode(1);
    setDateRange(range);
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
      setTotalPage(pickupsResponse.totalPage);
    }
    return () => {};
  }, [pickupsResponse]);

  const hasData = (pickupsResponse?.pickups ?? []).length > 0;

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
            <SearchInput
              width={400}
              placeholder="Buscar por número de recolección, orden o guía"
              value={searchValue}
              onChange={({ target }) => handleInputChange(target.value)}
            />
            <ShipmentDropdownFilter onChangeFilter={handleRangeChange} />
          </FilterContainer>
        </TopActionsContainer>

        <PickUpsTable
          loading={isLoading}
          data={pickupsResponse?.pickups ?? []}
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
      <PickupsConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onOk={handleGoToEstafeta}
        localKey="show-confirmation-pickup-modal"
      />
    </ViewWrapper>
  );
};

export default PickUpsView;
