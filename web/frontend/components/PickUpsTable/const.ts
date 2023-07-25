const headers = [
  {
    title: "Número de recoleción",
    key: "shippingData",
  },
  {
    title: "Fecha de recolección",
    key: "destinationData",
  },
  {
    title: "Orden",
    key: "guideNumber",
  },
  {
    title: "Número de guía",
    key: "shippingStatus",
  },
  {
    title: "Estatus",
    key: "status",
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
        guideNumber: "6789067543216785698763",
        status: 1,
        date: "2023-05-05",
      },
    ],
    status: 1,
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
        guideNumber: "6789067543216785698763",
        status: 2,
        date: "2023-05-05",
      },
    ],
    status: 2,
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
        guideNumber: "6789067543216785698763",
        status: 3,
        date: "2023-05-05",
      },
    ],
    status: 3,
  },
  {
    id: 4,
    orderNumber: "#100000004",
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
        guideNumber: "6789067543216785698763",
        date: "2023-05-05",
      },
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        guideNumber: "6789067543216785698763",
        date: "2023-05-05",
      },
    ],
    status: 4,
  },
  {
    id: 5,
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
        guideNumber: "6789067543216785698763",
        date: "2023-05-05",
      },
      {
        number: "123456789",
        measure: "100 cm x 56 cm x 70 cm / 23 kg",
        guideNumber: "6789067543216785698763",
        date: "2023-05-05",
      },
    ],
    status: 5,
  },
];

export { headers, data };
