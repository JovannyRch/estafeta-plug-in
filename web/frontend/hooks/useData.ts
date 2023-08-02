import { useState } from "react";

import { DateRange } from "../types";
import { useAppQuery } from "./useAppQuery";
import useDidUpdateEffect from "./useDidUpdateEffect";

interface Props<T> {
  dateRange: DateRange;
  searchValue: string;
  url: string;
}

const useData = <T>({ url: baseUrl, dateRange, searchValue }: Props<T>) => {
  const [data, setData] = useState<T | null>(null);

  const [url, setUrl] = useState(() => {
    const params = {
      creationStartDate: dateRange?.creationStartDate,
      creationEndDate: dateRange?.creationEndDate,
    };

    const urlParams = new URLSearchParams(params).toString();
    return `${baseUrl}?${urlParams}`;
  });
  const { isLoading, refetch, isRefetching } = useAppQuery({
    url,
    reactQueryOptions: {
      onSuccess: (data: T) => {
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
    setUrl(`${baseUrl}?${urlParams}`);
  }, [dateRange, searchValue]);

  useDidUpdateEffect(() => {
    console.log("url", url);
    refetch();
  }, [url]);

  return {
    data,
    isLoading: isLoading || isRefetching,
    refetch,
  };
};

export default useData;
