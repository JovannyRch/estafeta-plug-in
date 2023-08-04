export const dateValues = {
  today: "Hoy",
  yesterday: "Ayer",
  lastWeek: "Última semana",
  lastMonth: "Último mes",
  custom: "Personalizar...",
};

const menu = [
  {
    label: dateValues.today,
    className: "",
  },
  {
    label: dateValues.yesterday,
    className: "",
  },
  {
    label: dateValues.lastWeek,
    className: "",
  },
  {
    label: dateValues.lastMonth,
    className: "",
  },
  {
    label: dateValues.custom,
    className: "separator",
  },
];

export default menu;
