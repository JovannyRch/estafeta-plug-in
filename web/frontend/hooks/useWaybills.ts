import { useState } from "react";
import { useAppQuery } from "./useAppQuery";
import { WaybillsResponse } from "../types/Responses/WaybillsResponse";
import useDidUpdateEffect from "./useDidUpdateEffect";

interface Props {
  waybillCodes: string[];
}
const useWaybills = ({ waybillCodes }: Props) => {
  const [data, setData] = useState<WaybillsResponse | null>(null);
  const { isLoading, refetch, isRefetching } = useAppQuery({
    url: `/api/orders/waybills/?waybillCodes=${waybillCodes.join(",")}`,
    reactQueryOptions: {
      onSuccess: (data) => {
        if (waybillCodes.length === 0) {
          return;
        }
        setData(data);
      },
      onerror: (error) => {
        console.log("error: ", error);
      },
    },
    enabled: waybillCodes.length > 0,
  });

  useDidUpdateEffect(() => {
    refetch();
  }, [waybillCodes]);

  return {
    waybillsResponse: data,
    isLoading: isLoading || isRefetching,
    refetch,
  };
};

export default useWaybills;
