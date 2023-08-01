import { useState } from "react";
import { useAppQuery } from "./useAppQuery";
import { ShopifyOrdersResponse } from "../types/Responses/ShopifyOrdersResponse";

const useShopifyOrders = () => {
  const [ordersResponse, setOrdersResponse] =
    useState<ShopifyOrdersResponse | null>(null);

  const { isLoading } = useAppQuery({
    url: "/api/orders/shopify",
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

export default useShopifyOrders;
