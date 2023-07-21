export const getStatusData = (code: number) => {
  switch (code) {
    case 1:
      return {
        label: "Recibido",
        color: "red",
      };
    case 2:
      return {
        label: "En transito",
        color: "#274C89",
      };
    case 3:
      return {
        label: "En proceso de entrega",
        color: "#274C89",
      };
    case 4:
      return {
        label: "En proceso de entrega",
        color: "#274C89",
      };
    case 5: {
      return {
        label: "Disponible en oficina",
        color: "#46BB98",
      };
    }
    case 6: {
      return {
        label: "Entregado",
        color: "#46BB98",
      };
    }
    case 7: {
      return {
        label: "Entregado",
        color: "#46BB98",
      };
    }
    case 8: {
      return {
        label: "En devolución",
        color: "red",
      };
    }
    case 9: {
      return {
        label: "Devolucion confirmada por remitente",
        color: "red",
      };
    }
    default:
      return {
        label: "Desconocido",
        color: "#CECECE",
      };
  }
};
