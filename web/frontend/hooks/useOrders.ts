import { useEffect, useState } from "react";
import { useAppQuery } from "./useAppQuery";
import { OrdersResponse } from "../types/Responses/OrdersResponse";
import { DateRange } from "../types";
import { useAuthenticatedFetch } from "./useAuthenticatedFetch";

interface Props {
  dateRange: DateRange;
}

const URL = "/api/orders";

const useOrders = ({ dateRange }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const fetch = useAuthenticatedFetch();
  const [ordersResponse, setOrdersResponse] = useState<OrdersResponse | null>(
    null
  );

  const fetchData = async () => {
    setIsLoading(true);
    const params = {
      creationStartDate: dateRange?.creationStartDate,
      creationEndDate: dateRange?.creationEndDate,
    };

    const urlParams = new URLSearchParams(params).toString();

    const response = await fetch(`${URL}?${urlParams}`);
    console.log("GET", `${URL}?${urlParams}`);
    console.log("response", response);
  };

  useEffect(() => {
    fetchData();
  }, [dateRange]);

  return {
    ordersResponse,
    isLoading,
  };
};

export default useOrders;
