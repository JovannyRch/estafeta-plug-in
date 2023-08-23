export interface ShopResponse {
	data: Shop[]
}

export interface Shop {
	id: number
	name: string
	email: string
	myshopify_domain: string
}
