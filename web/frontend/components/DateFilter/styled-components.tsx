import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendar = styled(Calendar)`
  border: none;
  width: 172px;
  padding: 0;
  padding-bottom: 10px;
  padding-top: 12px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border: 1px solid var(--tipografa, #12263c);
  border-top: none;

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
    height: 24px;
    margin-bottom: 0px;
  }

  .react-calendar__navigation button {
    min-width: none;
  }
  .react-calendar__tile,
  .react-calendar__month-view__days__day--weekend {
    color: var(--tipografa, #12263c);
    text-align: center;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 50%;
  }

  .react-calendar__tile--now {
    background-color: inherit;
    color: var(--tipografa, #12263c);
    text-align: center;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 50%;
    &::focus {
      background-color: #849bcc;
      color: var(--backgorunds, #fff);
    }
  }

  .react-calendar__tile--active {
    background-color: #849bcc;
    color: var(--backgorunds, #fff);
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: #e6e6e6;
    color: var(--tipografa, #12263c);
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #849bcc;
    color: var(--backgorunds, #fff);
    text-align: center;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--bloq, #c7c7c7);
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button,
  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__navigation__label {
    pointer-events: none;
    color: var(--tipografa, #12263c);
    text-align: center;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  .react-calendar__month-view__weekdays__weekday {
    color: var(--tipografa, #12263c);
    text-align: center;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  abbr[title] {
    text-decoration: none;
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

  width: 172px;
  height: 40px;
  position: relative;
  z-index: 1;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: -1px;
  top: -1px;
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

export const Placeholder = styled.div`
  color: var(--bloq, #c7c7c7);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  user-select: none;
`;

export const DateValue = styled(Placeholder)`
  color: var(--bloq, #12263c);
`;

export const CalendarContainer = styled.div`
  position: absolute;
  top: 28px;
  left: 0;
  background-color: #fff;
`;

export const InputWithCalendarContainer = styled.div`
  position: relative;
`;
