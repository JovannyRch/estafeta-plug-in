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
  shopifyOrder?: {
    id: number;
    name: string;
    order_number: number;
    created_at: string;
  };
}

export interface Waybill {
  code: string;
  dimension: string;
  weight: number;
}
