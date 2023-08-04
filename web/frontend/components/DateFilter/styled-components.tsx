import styled from "styled-components";
import DatePicker from "react-date-picker";
import Calendar from "react-calendar";

export const StyledCalendar = styled(Calendar)`
  .react-calendar__tile--now {
    background-color: #849bcc;
    color: var(--backgorunds, #fff);
    text-align: center;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    border-radius: 50%;
    &::focus {
      background-color: #849bcc;
      color: var(--backgorunds, #fff);
    }
  }

  .react-calendar__tile--now:enabled:focus {
    background-color: #849bcc;
    color: var(--backgorunds, #fff);
  }
  .react-calendar__month-view__weekdays__weekday {
    width: 24px;
    height: 24px;
    max-width: 24px;
    min-width: 24px;
  }
  .react-calendar__tile {
    width: 24px;
    height: 24px;
    max-width: 24px;
    min-width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-calendar__month-view__days {
    width: calc(24px * 7);
  }
  .react-calendar__navigation__label button {
    pointer-events: none;
  }
  .react-calendar__navigation {
    width: calc(24px * 7);
  }
  .react-calendar {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

export const DateFilter = styled.div`
  display: flex;
  gap: 15px;
`;

export const InputContainer = styled.div`
  border-radius: 7px;
  border: 1px solid var(--tipografa, #12263c);
  background: #fff;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 16px;
`;

export const Input = styled.input.attrs({ type: "date" })`
  text-transform: uppercase;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: -10px;
  top: 0px;
  pointer-events: none;
  svg {
    pointer-events: none;
  }
`;

export const CustomDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;

  color: var(--tipografa, #12263c);
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  input {
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
    color: var(--bloq, #12263c);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &::placeholder {
      color: var(--bloq, #c7c7c7);
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const CustomDateContainer2 = styled.div`
  position: relative;

  color: var(--tipografa, #12263c);
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ApplyButton = styled.div`
  color: var(--btns, #849bcc);
  text-align: right;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
  margin-left: 20px;
  user-select: none;
`;
