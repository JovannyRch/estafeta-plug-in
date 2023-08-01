import { useState } from "react";
import { useAppQuery } from "./useAppQuery";
import { ShipmentsResponse } from "../types/Responses/ShipmentsResponse";

const useShipments = () => {
  const [shipmentsResponse, setData] = useState<ShipmentsResponse | null>(null);

  const { isLoading } = useAppQuery({
    url: "/api/shipments",
    reactQueryOptions: {
      onSuccess: (data) => {
        console.log("data", data);
        setData(data);
      },
      onerror: (error) => {
        console.log("error: ", error);
      },
    },
  });

  return {
    shipmentsResponse,
    isLoading,
  };
};

export default useShipments;
