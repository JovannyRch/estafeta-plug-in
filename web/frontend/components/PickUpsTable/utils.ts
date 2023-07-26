export const getStatusData = (code: number) => {
  switch (code) {
    case 1:
      return {
        label: "Recolectada",
        color: "#274C89",
      };
    case 2:
      return {
        label: "Pendiente por recolectar",
        color: "#274C89",
      };
    case 3:
      return {
        label: "Recolectada",
        color: "#46BB98",
      };
    case 4:
      return {
        label: "Cancelada",
        color: "#D90202",
      };
    case 5: {
      return {
        label: "Excepcionada",
        color: "#274C89",
      };
    }
    default:
      return {
        label: "Desconocido",
        color: "#CECECE",
      };
  }
};
