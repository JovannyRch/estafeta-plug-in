import { Header } from "../BaseTable/Index";

const headers: Header[] = [
  {
    title: "Número de orden",
    key: "shippingData",
  },
  {
    title: "Cliente",
    key: "destinationData",
  },
  {
    title: "Destino",
    key: "guideNumber",
  },
  {
    title: "Envío",
    key: "shippingStatus",
  },
  {
    title: "Pedido",
    key: "cost",
  },
  {
    title: "Crear envío",
    key: "actions",
    align: "center",
  },
];

const data = [
  {
    id: 1,
    orderNumber: "#100000001",
    date: "2023-05-05 a las 00:22",
    customer: {
      name: "Manuel Rodríguez",
      address: "Tabasco 262",
      neighborhood: "Col. Roma Norte",
      email: "manuelrdz@gmail.com",
    },
    paymentStatus: "Pagado",
    shipments: [
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 2,
      },
    ],
    destination: {
      customer: "Manuel Rodríguez",
      address: "Tabasco 262",
      neighborhood: "Ciudad de México 06700",
    },
    cost: "$ 150.00",
    shipment: {
      status: "Creado",
      type: "Terrestre",
      cost: "$180",
    },
    details: {
      products: 3,
      price: "$470",
      link: "https://www.google.com",
    },
  },
  {
    id: 2,
    orderNumber: "#100000002",
    date: "2023-05-05 a las 00:22",
    customer: {
      name: "José Pérez",
      address: "Tabasco 262",
      neighborhood: "Col. Roma Norte",
      email: "manuelrdz@gmail.com",
    },
    paymentStatus: "Pagado",
    shipments: [
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 2,
      },
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 2,
      },
    ],
    cost: "$ 150.00",
    destination: {
      customer: "Manuel Rodríguez",
      address: "Tabasco 262",
      neighborhood: "Ciudad de México 06700",
    },
    shipment: {
      status: "Creado",
      type: "Día siguiente",
      cost: "$150",
    },
    details: {
      products: 3,
      price: "$470",
      link: "https://www.google.com",
    },
  },
  {
    id: 3,
    orderNumber: "#100000003",
    date: "2023-05-05 a las 00:22",
    customer: {
      name: "María Sánchez",
      address: "Tabasco 262",
      neighborhood: "Col. Roma Norte",
      email: "manuelrdz@gmail.com",
    },
    paymentStatus: "Pagado",
    shipments: [
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 6,
      },
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 6,
      },
    ],
    cost: "$ 150.00",
    destination: {
      customer: "Manuel Rodríguez",
      address: "Tabasco 262",
      neighborhood: "Ciudad de México 06700",
    },
    shipment: {
      status: "No creado",
    },
    details: {
      products: 3,
      price: "$470",
      link: "https://www.google.com",
    },
  },
  {
    id: 4,
    orderNumber: "#100000004",
    date: "2023-05-05 a las 00:22",
    customer: {
      name: "Diego López",
      address: "Tabasco 262",
      neighborhood: "Col. Roma Norte",
      email: "manuelrdz@gmail.com",
    },
    paymentStatus: "Pagado",
    shipments: [
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 6,
      },
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 6,
      },
    ],
    cost: "$ 150.00",
    destination: {
      customer: "Manuel Rodríguez",
      address: "Tabasco 262",
      neighborhood: "Ciudad de México 06700",
    },
    shipment: {
      status: "No creado",
    },
    details: {
      products: 3,
      price: "$470",
      link: "https://www.google.com",
    },
  },
  {
    id: 5,
    orderNumber: "#100000005",
    date: "2023-05-05 a las 00:22",
    customer: {
      name: "Diego López",
      address: "Tabasco 262",
      neighborhood: "Col. Roma Norte",
      email: "manuelrdz@gmail.com",
    },
    paymentStatus: "Pagado",
    shipments: [
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 6,
      },
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 6,
      },
    ],
    cost: "$ 150.00",
    destination: {
      customer: "Manuel Rodríguez",
      address: "Tabasco 262",
      neighborhood: "Ciudad de México 06700",
    },
    shipment: {
      status: "No creado",
    },
    details: {
      products: 3,
      price: "$470",
      link: "https://www.google.com",
    },
  },
];

export { headers, data };
