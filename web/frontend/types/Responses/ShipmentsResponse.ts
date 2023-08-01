export interface ShipmentsResponse {
  orders: Order[];
  totalPage: number;
}

export interface Order {
  code: string;
  creationDateTime: string;
  client: Client;
  waybills: Waybill[];
}

export interface Client {
  contactName: string;
  address1: string;
  address2: string;
}

export interface Waybill {
  code: string;
  Dimension: string;
  Wight: number;
  StatusName: string;
  Cost: number;
}
