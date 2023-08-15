import { add, compareAsc, format } from 'date-fns'
import { DateRange } from '../../types'
import { dateValues } from './const'

export const dateFormat = 'yyyy/MM/dd'

const addOneDay = (date) => {
	return add(new Date(date), { days: 1 })
}

const createCustomRange = (startDate, endDate): DateRange | null => {
	if (!startDate || !endDate) return null

	const startDateValue = new Date(startDate)
	const endDateValue = new Date(endDate)

	if (compareAsc(startDateValue, endDateValue) === 1) {
		return null
	}

	return {
		creationStartDate: format(addOneDay(startDateValue), dateFormat),
		creationEndDate: format(addOneDay(endDateValue), dateFormat)
	}
}

const createRange = (filterValue): DateRange | null => {
	const today = format(new Date(), dateFormat)

	if (filterValue === dateValues.today) {
		return {
			creationStartDate: today,
			creationEndDate: today
		}
	}

	if (filterValue === dateValues.yesterday) {
		const yesterday = format(new Date(Date.now() - 86400000), dateFormat)
		return {
			creationStartDate: yesterday,
			creationEndDate: yesterday
		}
	}

	if (filterValue === dateValues.lastWeek) {
		const lastWeek = format(new Date(Date.now() - 604800000), dateFormat)
		return {
			creationStartDate: lastWeek,
			creationEndDate: today
		}
	}

	if (filterValue === dateValues.lastMonth) {
		const lastMonth = format(new Date(Date.now() - 2592000000), dateFormat)
		return {
			creationStartDate: lastMonth,
			creationEndDate: today
		}
	}

	return null
}

export { createCustomRange, createRange }
