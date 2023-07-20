import React from 'react'
import BaseTable from '../BaseTable/Index';


const headers = [
    {
        title: 'Datos de envío',
        key: 'shippingData',
    },
    {
        title: 'Datos de destino',
        key: 'destinationData',

    },
    {
        title: 'Número de guía',
        key: 'guideNumber',
    },
    {
        title: 'Estatus de envío',
        key: 'shippingStatus',
    },
    {
        title: 'Costo',
        key: 'cost',
    },
    {
        title: 'Crear envío',
        key: 'createShipping',
    }
]

const data = [
    {
        orderNumber: '123456789',
        date: '2023-05-05 a las 00:22',
        customer: {
            name: 'Manuel Rodríguez',
            address: 'Tabasco 262',
            neighborhood: 'Col. Roma Norte',
        },
        shipment: {
            number: '123456789',
            measure: '100 cm x 56 cm x 70 cm / 23 kg',
        },
        statusArray: [1, 2, 3],
        cost: '$ 150.00',
    },
    {
        orderNumber: '12345678910',
        date: '2023-05-05 a las 00:22',
        customer: {
            name: 'Manuel Rodríguez',
            address: 'Tabasco 262',
            neighborhood: 'Col. Roma Norte',
        },
        shipment: {
            number: '123456789',
            measure: '100 cm x 56 cm x 70 cm / 23 kg',
        },
        statusArray: [1, 2, 3],
        cost: '$ 150.00',
    },
]

const ShippingTable = () => {


    return (
        <BaseTable headers={headers}>
            {
                data.map((shipment) => {

                })
            }
        </BaseTable>
    )
}

export default ShippingTable;