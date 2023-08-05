import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Container } from "./styled-components";

import menu, { inputTypeValues } from "./const";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect";

interface Props {
  onChangeFilter?: (value: number) => void;
}

const InputTypeFilter = ({ onChangeFilter }: Props) => {
  const [filterByValue, setFilterByValue] = useState(inputTypeValues.order);

  useDidUpdateEffect(() => {
    switch (filterByValue) {
      case inputTypeValues.order:
        onChangeFilter?.(2);
        break;
      case inputTypeValues.pickup:
        onChangeFilter?.(3);

        break;
      case inputTypeValues.waybill:
        onChangeFilter?.(4);
        break;
      default:
        break;
    }
  }, [filterByValue]);

  return (
    <Container id="input-type-filter">
      <Dropdown
        label={"Buscar por"}
        value={filterByValue}
        width={215}
        menu={menu
          .filter((item) => item.label !== filterByValue)
          .map((item) => (
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
