import { useState } from "react";
import { ShopResponse } from "../types/Responses/ShopResponse";
import { useAppQuery } from "./useAppQuery";

const useShop = () => {
  const [shop, setShop] = useState<ShopResponse | null>(null);

  const { isLoading, refetch, isRefetching } = useAppQuery({
    url: "/api/shop",
    reactQueryOptions: {
      onSuccess: (data) => {
        console.log("shop", data);
        setShop(data);
      },
      onerror: (error) => {
        console.log("show error: ", error);
      },
    },
  });

  return {
    shop,
    isLoading: isLoading || isRefetching,
    refetch,
  };
};

export default useShop;
