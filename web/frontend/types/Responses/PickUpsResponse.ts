export interface PickupResponse {
  pickups: Pickup[];
  totalPage: number;
}

export interface Pickup {
  code: string;
  planningDateTime: string;
  statusName: string;
  orders: Order[];
}

export interface Order {
  code: string;
  creationDateTime: string;
  waybills: Waybill[];
}

export interface Waybill {
  code: string;
  dimension: string;
  weight: number;
}
