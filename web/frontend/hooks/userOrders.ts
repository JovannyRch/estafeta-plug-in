import { useState } from "react";
import { useAppQuery } from "./useAppQuery";
import { OrdersResponse } from "../types/Responses/OrdersResponse";

const userOrders = () => {
  const [ordersResponse, setOrdersResponse] = useState<OrdersResponse | null>(
    null
  );

  const { isLoading } = useAppQuery({
    url: "/api/orders",
    reactQueryOptions: {
      onSuccess: (data) => {
        setOrdersResponse(data);
      },
    },
  });

  return {
    ordersResponse,
    isLoading,
  };
};

export default userOrders;
