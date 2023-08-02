import { useEffect, useState } from "react";
import { ShipmentsResponse } from "../types/Responses/ShipmentsResponse";
import { DateRange } from "../types";
import { useAppQuery } from "./useAppQuery";
import useDidUpdateEffect from "./useDidUpdateEffect";

interface Props {
  dateRange: DateRange;
  searchValue: string;
}

const URL = "/api/shipments";

const useShipments = ({ dateRange, searchValue }: Props) => {
  const [shipmentsResponse, setData] = useState<ShipmentsResponse | null>(null);

  const [url, setUrl] = useState(() => {
    const params = {
      creationStartDate: dateRange?.creationStartDate,
      creationEndDate: dateRange?.creationEndDate,
    };

    const urlParams = new URLSearchParams(params).toString();
    return `${URL}?${urlParams}`;
  });
  const { isLoading, refetch, isRefetching } = useAppQuery({
    url,
    reactQueryOptions: {
      onSuccess: (data) => {
        setData(data);
      },
      onerror: (error) => {
        console.log("error: ", error);
      },
    },
  });

  useDidUpdateEffect(() => {
    const params = {
      creationStartDate: dateRange?.creationStartDate,
      creationEndDate: dateRange?.creationEndDate,
      filter: searchValue,
    };

    const urlParams = new URLSearchParams(params).toString();
    setUrl(`${URL}?${urlParams}`);
  }, [dateRange, searchValue]);

  useDidUpdateEffect(() => {
    console.log("url", url);
    refetch();
  }, [url]);

  return {
    shipmentsResponse,
    isLoading: isLoading || isRefetching,
    refetch,
  };
};

export default useShipments;
