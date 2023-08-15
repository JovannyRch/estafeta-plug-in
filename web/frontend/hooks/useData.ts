import { useState } from 'react'

import { useAppQuery } from './useAppQuery'
import useDebounce from './useDebounce'
import useDidUpdateEffect from './useDidUpdateEffect'
import useFilters from './useFilters'

interface Props<T> {
	url: string
}

const useData = <T>({ url: baseUrl }: Props<T>) => {
	const [data, setData] = useState<T | null>(null)

	const [totalPages, setTotalPages] = useState<number>(0)
	const { filters, resetFilters, updateFilters } = useFilters()
	const { dateRange, searchValue, currentPage, optionCode, totalRecords, statusCode } = filters

	const debouncedSearchValue = useDebounce(searchValue, 500)
	const [url, setUrl] = useState(() => {
		const params = {
			creationStartDate: filters.dateRange.creationStartDate,
			creationEndDate: filters.dateRange.creationEndDate,
			optionCode: '1'
		}

		const urlParams = new URLSearchParams(params).toString()
		return `${baseUrl}?${urlParams}`
	})
	const { isLoading, refetch, isRefetching } = useAppQuery({
		url,
		reactQueryOptions: {
			onSuccess: (data: T) => {
				setData(data)
			},
			onerror: (_) => {}
		}
	})

	useDidUpdateEffect(() => {
		const params = {
			creationStartDate: dateRange.creationStartDate ?? '',
			creationEndDate: dateRange.creationEndDate ?? '',
			filter: debouncedSearchValue,
			page: (currentPage - 1).toString(),
			optionCode: optionCode.toString(),
			totalRecords: totalRecords.toString(),
			statusCode: statusCode?.toString() ?? ''
		}
		const urlParams = new URLSearchParams(params).toString()
		setUrl(`${baseUrl}?${urlParams}`)
	}, [debouncedSearchValue, dateRange, optionCode, totalRecords, statusCode, currentPage])

	useDidUpdateEffect(() => {
		refetch()
	}, [url])

	return {
		data,
		isLoading: isLoading || isRefetching,
		refetch,
		filters,
		updateFilters,
		resetFilters,
		totalPages,
		setTotalPages
	}
}

export default useData
