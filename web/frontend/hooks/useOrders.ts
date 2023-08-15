import { useEffect, useState } from 'react'
import { useAuthenticatedFetch } from './useAuthenticatedFetch'

export interface Order {
	id: number
	name: string
	order_number: number
	created_at: string
}

const useOrders = (shop: any) => {
	const authenticatedFetch = useAuthenticatedFetch()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [orders, setOrders] = useState<Order[]>([])

	const fetchOrders = async () => {
		try {
			setIsLoading(true)
			const response = await authenticatedFetch(`/api/shopify/orders`)
			const data = await response.json()

			setOrders(data)
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}

	const openOrder = async (orderCode: string) => {
		if (isLoading) return
		const order = orders?.find((order) => {
			return `${order?.order_number}` === `${orderCode}`
		})

		if (!order) {
			window.open(`https://admin.shopify.com/store/${shop?.name}/orders`)
			return
		}
		window.open(`https://admin.shopify.com/store/${shop?.name}/orders/${order?.id}`)
	}

	useEffect(() => {
		fetchOrders()
	}, [])

	return {
		orders,
		openOrder
	}
}

export default useOrders
