import { useState } from 'react'
import { ShopResponse } from '../types/Responses/ShopResponse'
import { useAppQuery } from './useAppQuery'

const useShop = () => {
	const [shop, setShop] = useState<ShopResponse | null>(null)

	const { isLoading, refetch, isRefetching } = useAppQuery({
		url: '/api/shop',
		reactQueryOptions: {
			onSuccess: (data) => {
				setShop(data)
			},
			onerror: (error) => {}
		}
	})

	return {
		shop,
		isLoading: isLoading || isRefetching,
		refetch
	}
}

export default useShop
