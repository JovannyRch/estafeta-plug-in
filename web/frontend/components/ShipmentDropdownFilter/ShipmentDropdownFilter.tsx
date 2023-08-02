import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Container, ApplyButton } from "./styled-components";
import DateInput from "./DateInput";
import menu from "./const";
import { createCustomRange, createRange } from "./utils";

const ShipmentDropdownFilter = ({ onChangeFilter }) => {
  const [filterByValue, setFilterByValue] = useState("");
  const [fromFilter, setFromFilter] = useState("");
  const [toFilter, setToFilter] = useState("");

  const handleApplyFilter = () => {
    const range = createCustomRange(fromFilter, toFilter);
    if (range) onChangeFilter?.(range);
  };

  useEffect(() => {
    if (filterByValue && filterByValue !== "Personalizar...") {
      onChangeFilter(createRange(filterByValue));
    }
  }, [filterByValue]);

  return (
    <Container>
      <Dropdown
        label={"Filtrar por"}
        value={filterByValue}
        menu={menu.map((item) => (
          <button
            className={item.className}
            onClick={() => setFilterByValue(item.label)}
          >
            {item.label}
          </button>
        ))}
      />

      {filterByValue === "Personalizar..." && (
        <>
          <DateInput value={fromFilter} onChange={setFromFilter}>
            Desde
          </DateInput>
          <DateInput value={toFilter} onChange={setToFilter}>
            Hasta
          </DateInput>

          <ApplyButton onClick={handleApplyFilter}>Aplicar filtro</ApplyButton>
        </>
      )}
    </Container>
  );
};

export default ShipmentDropdownFilter;
