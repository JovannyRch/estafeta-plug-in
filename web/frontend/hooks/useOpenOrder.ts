import { useState } from "react";
import { useAuthenticatedFetch } from "./useAuthenticatedFetch";

const useOpenOrder = (shop: any) => {
  const authenticatedFetch = useAuthenticatedFetch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openOrder = async (orderCode: string) => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      document.body.style.cursor = "wait";
      const response = await authenticatedFetch(
        `/api/shopify/orders?orderCode=${orderCode}`
      );
      const data = await response.json();

      window.open(
        `https://admin.shopify.com/store/${shop?.name}/orders/${data?.id}`
      );
    } catch (error) {
      window.open(`https://admin.shopify.com/store/${shop?.name}/orders`);
    } finally {
      document.body.style.cursor = "default";
      setIsLoading(false);
    }
  };

  return {
    openOrder,
  };
};

export default useOpenOrder;
