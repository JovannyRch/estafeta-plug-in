import { useState } from "react";
import { useAppQuery } from "./useAppQuery";
import { PickupResponse } from "../types/Responses/PickUpsResponse";

const usePickups = () => {
  const [pickupsResponse, setData] = useState<PickupResponse | null>(null);

  const { isLoading } = useAppQuery({
    url: "/api/pickups",
    reactQueryOptions: {
      onSuccess: (data) => {
        setData(data);
      },
      onerror: (error) => {
        console.log("error: ", error);
      },
    },
  });

  return {
    pickupsResponse,
    isLoading,
  };
};

export default usePickups;
