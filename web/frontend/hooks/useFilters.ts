import { format } from 'date-fns'
import { useState } from 'react'
import { dateFormat } from '../components/DateFilter/utils'
import { DateRange } from '../types'

const today = format(new Date(), dateFormat)
const twoMonthsAgo = format(new Date().setMonth(new Date().getMonth() - 2), dateFormat)

export interface FilterParams {
	dateRange: DateRange
	optionCode: number
	totalRecords: number
	searchValue: string
	statusCode?: number
	currentPage: number
}

const DEFAULT_FILTER_PARAMS: FilterParams = {
	dateRange: {
		creationStartDate: twoMonthsAgo,
		creationEndDate: today
	},
	searchValue: '',
	currentPage: 1,
	optionCode: 1,
	totalRecords: 5,
	statusCode: 1
}

const useFilters = () => {
	const [filters, setFilters] = useState<FilterParams>(DEFAULT_FILTER_PARAMS)

	const resetFilters = () => {
		setFilters(DEFAULT_FILTER_PARAMS)
	}

	const updateFilters = (params: Partial<FilterParams>) => {
		setFilters((prev) => ({ ...prev, currentPage: 1, ...params }))
	}

	return {
		filters,
		updateFilters,
		resetFilters
	}
}

export default useFilters
