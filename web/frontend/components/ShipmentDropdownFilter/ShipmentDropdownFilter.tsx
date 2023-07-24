import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

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

const ShipmentDropdownFilter = () => {
  const [filterByValue, setFilterByValue] = useState("");
  return (
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
  );
};

export default ShipmentDropdownFilter;
