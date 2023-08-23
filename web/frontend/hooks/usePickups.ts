import { useState } from 'react'
import { PickupResponse } from '../types/Responses/PickUpsResponse'
import { useAppQuery } from './useAppQuery'

const usePickups = () => {
	const [pickupsResponse, setData] = useState<PickupResponse | null>(null)

	const { isLoading } = useAppQuery({
		url: '/api/pickups',
		reactQueryOptions: {
			onSuccess: (data) => {
				setData(data)
			},
			onerror: (error) => {}
		}
	})

	return {
		pickupsResponse,
		isLoading
	}
}

export default usePickups
