import { useState } from "react";
import { useAppQuery } from "./useAppQuery";
import { OrdersResponse } from "../types/Responses/OrdersResponse";

const useOrders = () => {
  const [ordersResponse, setOrdersResponse] = useState<OrdersResponse | null>(
    null
  );

  const { isLoading } = useAppQuery({
    url: "/api/orders",
    reactQueryOptions: {
      onSuccess: (data) => {
        console.log("data: ", data);
        setOrdersResponse(data);
      },
      onerror: (error) => {
        console.log("error: ", error);
      },
    },
  });

  return {
    ordersResponse,
    isLoading,
  };
};

export default useOrders;
