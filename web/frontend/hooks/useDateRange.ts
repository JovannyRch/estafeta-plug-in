import { useState } from "react";
import { DateRange } from "../types";
import { format } from "date-fns";
import { dateFormat } from "../components/ShipmentDropdownFilter/utils";

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

  return { dateRange, setDateRange };
};

export default useDateFilter;
