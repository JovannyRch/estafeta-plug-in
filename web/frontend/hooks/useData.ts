import { useState } from "react";

import { DateRange } from "../types";
import { useAppQuery } from "./useAppQuery";
import useDidUpdateEffect from "./useDidUpdateEffect";

interface Props<T> {
  dateRange: DateRange;
  searchValue: string;
  url: string;
  page?: number;
  optionCode?: number;
}

const useData = <T>({
  url: baseUrl,
  dateRange,
  searchValue,
  page = 0,
  optionCode = 1,
}: Props<T>) => {
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
        console.log("data", data);
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
      page: page.toString(),
      optionCode: optionCode.toString(),
    };

    const urlParams = new URLSearchParams(params).toString();
    setUrl(`${baseUrl}?${urlParams}`);
  }, [dateRange, searchValue, page, optionCode]);

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
