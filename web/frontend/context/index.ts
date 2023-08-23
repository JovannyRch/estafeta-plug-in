import { createContext } from 'react'

export const AppContext = createContext({
	shop: {
		name: '',
		email: '',
		myshopify_domain: ''
	}
})
