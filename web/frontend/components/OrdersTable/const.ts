import { Header } from '../BaseTable/Index'

const headers: Header[] = [
	{
		title: 'Número de orden',
		key: 'shippingData'
	},
	{
		title: 'Cliente',
		key: 'destinationData'
	},
	{
		title: 'Destino',
		key: 'guideNumber'
	},
	{
		title: 'Envío',
		key: 'shippingStatus'
	},
	{
		title: 'Pedido',
		key: 'cost'
	},
	{
		title: 'Crear envío',
		key: 'actions',
		align: 'center'
	}
]
export { headers }
