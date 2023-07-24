import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import {
  Container,
  CustomDateContainer,
  IconContainer,
  InputContainer,
} from "./styled-components";
import DropdownIcon from "../../icons/DropdownIcon";

const menu = [
  {
    label: "Hoy",
    className: "",
  },
  {
    label: "Ayer",
    className: "",
  },
  {
    label: "Última semana",
    className: "",
  },
  {
    label: "Último mes",
    className: "",
  },
  {
    label: "Personalizar...",
    className: "separator",
  },
];

const DateInput = ({ children }) => {
  return (
    <CustomDateContainer>
      <label>{children}</label>
      <InputContainer>
        <input type="date" placeholder="DD/MM/YYYY" />
      </InputContainer>
      <IconContainer>
        <DropdownIcon />
      </IconContainer>
    </CustomDateContainer>
  );
};

const ShipmentDropdownFilter = ({ onChangeFilter }) => {
  const [filterByValue, setFilterByValue] = useState("");

  useEffect(() => {
    if (filterByValue !== "Personalizar...") {
      onChangeFilter?.(filterByValue);
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
          <DateInput>Desde</DateInput>
          <DateInput>Hasta</DateInput>
        </>
      )}
    </Container>
  );
};

export default ShipmentDropdownFilter;
