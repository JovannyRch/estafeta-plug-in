import React from "react";
import {
  CustomDateContainer,
  IconContainer,
  InputContainer,
} from "./styled-components";
import DropdownIcon from "../../icons/DropdownIcon";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

const DateInput = ({ value, onChange, children }: Props) => {
  return (
    <CustomDateContainer>
      <label>{children}</label>
      <InputContainer>
        <input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          type="date"
          placeholder="DD/MM/YYYY"
        />
      </InputContainer>
      <IconContainer>
        <DropdownIcon />
      </IconContainer>
    </CustomDateContainer>
  );
};

export default DateInput;
