export interface OrdersResponse {
  orders: Order[];
  totalPage: number;
}

export interface Order {
  code: string;
  creationDateTime: string;
  addressee: Addressee;
  shipment: Shipment;
}

export interface Addressee {
  contactName: string;
  email: string;
  address1: string;
  address2: string;
}

export interface Shipment {
  statusName: string;
  warrantyName: string;
  cost: number;
}
