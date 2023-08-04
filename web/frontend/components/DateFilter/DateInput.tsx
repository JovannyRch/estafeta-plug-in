import React, { useEffect, useRef, useState } from "react";
import {
  CalendarContainer,
  CustomDateContainer,
  IconContainer,
  InputContainer,
  Placeholder,
  StyledCalendar,
  InputWithCalendarContainer,
  DateValue,
} from "./styled-components";
import DropdownIcon from "../../icons/DropdownIcon";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { capitalizeFirstLetter } from "../../utils";
import { addOneDay } from "./utils";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  placeholder?: string;
}

const DateInput = ({
  value,
  onChange,
  children,
  placeholder = "DD/MM/AAAA",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("value", value);
  const node = useRef();

  const handleClickOutside = (e) => {
    if (node?.current?.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  const handleOnChange = (date) => {
    const isoDate = date?.toISOString().split("T")[0];
    onChange?.(isoDate);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <CustomDateContainer>
        <label>{children}</label>
        <InputWithCalendarContainer ref={node}>
          <InputContainer onClick={() => setIsOpen((value) => !value)}>
            {value ? (
              <DateValue>
                {format(addOneDay(new Date(value)), "dd/MM/yyyy", {
                  locale: es,
                })}
              </DateValue>
            ) : (
              <Placeholder>{placeholder}</Placeholder>
            )}
            <IconContainer>
              <DropdownIcon />
            </IconContainer>
          </InputContainer>
          <CalendarContainer>
            {isOpen && (
              <StyledCalendar
                value={value ? addOneDay(new Date(value)) : undefined}
                formatShortWeekday={(_, date) =>
                  format(date, "EEEEE", { locale: es })
                }
                formatMonthYear={(_, date) =>
                  capitalizeFirstLetter(format(date, "LLLL", { locale: es }))
                }
                goToRangeStartOnSelect={false}
                onChange={handleOnChange}
              />
            )}
          </CalendarContainer>
        </InputWithCalendarContainer>
      </CustomDateContainer>
    </>
  );
};

export default DateInput;
