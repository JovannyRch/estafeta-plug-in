import React from "react";
import {
  CustomDateContainer,
  IconContainer,
  InputContainer,
  Input,
  CustomDateContainer2,
  StyledCalendar,
} from "./styled-components";
import DropdownIcon from "../../icons/DropdownIcon";
import Calendar from "react-calendar";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { formatDate } from "react-calendar/dist/cjs/shared/dateFormatter";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { capitalizeFirstLetter } from "../../utils";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

const DateInput = ({ value, onChange, children }: Props) => {
  /* return (
    <StyledCalendar
      formatShortWeekday={(_, date) => format(date, "EEEEE", { locale: es })}
      formatMonthYear={(_, date) =>
        capitalizeFirstLetter(format(date, "LLLL", { locale: es }))
      }
      goToRangeStartOnSelect={false}
    />
  ); */

  return (
    <CustomDateContainer>
      <label>{children}</label>
      <InputContainer>
        <Input
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
