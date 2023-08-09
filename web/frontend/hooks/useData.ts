import { useState } from "react";

import { DateRange } from "../types";
import { useAppQuery } from "./useAppQuery";
import useDidUpdateEffect from "./useDidUpdateEffect";
import useFilters, { FilterParams } from "./useFilters";
import useDebounce from "./useDebounce";

interface Props<T> {
  url: string;
}

const useData = <T>({ url: baseUrl }: Props<T>) => {
  const [data, setData] = useState<T | null>(null);

  const [totalPages, setTotalPages] = useState<number>(0);
  const { filters, resetFilters, updateFilters } = useFilters();
  const {
    dateRange,
    searchValue,
    currentPage,
    optionCode,
    totalRecords,
    statusCode,
  } = filters;

  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [url, setUrl] = useState(() => {
    const params = {
      creationStartDate: filters.dateRange.creationStartDate,
      creationEndDate: filters.dateRange.creationEndDate,
      optionCode: "1",
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
      creationStartDate: dateRange.creationStartDate ?? "",
      creationEndDate: dateRange.creationEndDate ?? "",
      filter: debouncedSearchValue,
      page: (currentPage - 1).toString(),
      optionCode: optionCode.toString(),
      totalRecords: totalRecords.toString(),
      statusCode: statusCode?.toString() ?? "",
    };
    const urlParams = new URLSearchParams(params).toString();
    setUrl(`${baseUrl}?${urlParams}`);
  }, [
    debouncedSearchValue,
    dateRange,
    optionCode,
    totalRecords,
    statusCode,
    currentPage,
  ]);

  useDidUpdateEffect(() => {
    console.log("url", url);
    refetch();
  }, [url]);

  return {
    data,
    isLoading: isLoading || isRefetching,
    refetch,
    filters,
    updateFilters,
    resetFilters,
    totalPages,
    setTotalPages,
  };
};

export default useData;
