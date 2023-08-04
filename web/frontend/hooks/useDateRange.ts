import { useState } from "react";
import { DateRange } from "../types";
import { format } from "date-fns";
import { dateFormat } from "../components/DateFilter/utils";

const today = format(new Date(), dateFormat);
const twoMonthsAgo = format(
  new Date().setMonth(new Date().getMonth() - 2),
  dateFormat
);

const useDateFilter = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    creationStartDate: twoMonthsAgo,
    creationEndDate: today,
  });

  const resetDateRange = () => {
    setDateRange({
      creationStartDate: twoMonthsAgo,
      creationEndDate: today,
    });
  };

  return { dateRange, setDateRange, resetDateRange };
};

export default useDateFilter;
