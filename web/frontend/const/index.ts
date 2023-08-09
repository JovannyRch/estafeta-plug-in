import { Pickup } from "../types/Responses/PickUpsResponse";

const ESTAFETA_BACKOFFICE =
  process.env.ESTAFETA_BACKOFFICE_URL ||
  "https://estafetap10-dev.estafeta.com/EstafetaPlugIn_UI/PruebaConexion";
const ESTAFETA_TRACKING =
  process.env.ESTAFETA_RASTREO_URL ||
  "https://backoffice.estafeta.com/rastreo/";
const ESTAFETA_REPROGRAMAR =
  process.env.ESTAFETA_REPROGRAMAR_URL ||
  "https://backoffice.estafeta.com/reprogramar/";
const ESTAFETA_ORDERS =
  process.env.ESTAFETA_ORDERS_URL || "https://backoffice.estafeta.com/ordenes/";
const ESTAFETA_PICKUPS =
  process.env.ESTAFETA_PICKUPS_URL ||
  "https://backoffice.estafeta.com/pickups/";

export const ESTAFETA_LINKS = {
  rastreo: (pickUp: Pickup) => `${ESTAFETA_TRACKING}${pickUp.code}`,
  reprogramar: (pickUp: Pickup) => `${ESTAFETA_REPROGRAMAR}${pickUp.code}`,
  orders: () => `${ESTAFETA_ORDERS}`,
  backoffice: () => `${ESTAFETA_BACKOFFICE}`,
  pickups: () => `${ESTAFETA_PICKUPS}`,
};
