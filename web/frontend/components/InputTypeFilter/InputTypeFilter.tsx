import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Container } from "./styled-components";

import menu, { inputTypeValues } from "./const";

interface Props {
  onChangeFilter?: (value: string) => void;
}

const InputTypeFilter = ({ onChangeFilter }: Props) => {
  const [filterByValue, setFilterByValue] = useState(inputTypeValues.order);

  return (
    <Container>
      <Dropdown
        label={"Buscar por"}
        value={filterByValue}
        width={230}
        menu={menu.map((item) => (
          <button
            className={item.className}
            onClick={() => setFilterByValue(item.label)}
          >
            {item.label}
          </button>
        ))}
      />
    </Container>
  );
};

export default InputTypeFilter;
