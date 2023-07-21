const headers = [
  {
    title: "Datos de envío",
    key: "shippingData",
  },
  {
    title: "Datos de destino",
    key: "destinationData",
  },
  {
    title: "Número de guía",
    key: "guideNumber",
  },
  {
    title: "Estatus de envío",
    key: "shippingStatus",
  },
  {
    title: "Costo",
    key: "cost",
  },
  {
    title: "Acciones",
    key: "actions",
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
    },
    shipments: [
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        status: 2,
      },
    ],
    cost: "$ 150.00",
  },
  {
    id: 2,
    orderNumber: "#100000002",
    date: "2023-05-05 a las 00:22",
    customer: {
      name: "José Pérez",
      address: "Tabasco 262",
      neighborhood: "Col. Roma Norte",
    },
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
  },
  {
    id: 3,
    orderNumber: "#100000003",
    date: "2023-05-05 a las 00:22",
    customer: {
      name: "María Sánchez",
      address: "Tabasco 262",
      neighborhood: "Col. Roma Norte",
    },
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
  },
  {
    id: 4,
    orderNumber: "#100000005",
    date: "2023-05-05 a las 00:22",
    customer: {
      name: "Diego López",
      address: "Tabasco 262",
      neighborhood: "Col. Roma Norte",
    },
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
  },
];

export { headers, data };
