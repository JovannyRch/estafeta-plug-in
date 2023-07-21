import React from "react";
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
  return (
    <Dropdown
      label={"Filtrar por"}
      menu={menu.map((item) => (
        <button className={item.className}>{item.label}</button>
      ))}
    />
  );
};

export default ShipmentDropdownFilter;
