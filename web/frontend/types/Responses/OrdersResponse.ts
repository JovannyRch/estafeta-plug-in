export interface OrdersResponse {
  orders: Order[];
  totalPage: number;
}

export interface Order {
  code: string;
  creationDateTime: string;
  addressee: Addressee;
  shipment: Shipment;
  shopify: Shopify;
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

export interface Shopify {
  id: number;
  admin_graphql_api_id: string;
  app_id: number;
  browser_ip: string;
  buyer_accepts_marketing: boolean;
  cancel_reason: any;
  cancelled_at: any;
  cart_token: any;
  checkout_id: number;
  checkout_token: string;
  client_details: ClientDetails;
  closed_at: any;
  company: Company;
  confirmed: boolean;
  created_at: string;
  contact_email?: string;
  currency: string;
  current_subtotal_price: string;
  current_subtotal_price_set: CurrentSubtotalPriceSet;
  current_total_additional_fees_set: any;
  current_total_discounts: string;
  current_total_discounts_set: CurrentTotalDiscountsSet;
  current_total_duties_set: any;
  current_total_price: string;
  current_total_price_set: CurrentTotalPriceSet;
  current_total_tax: string;
  current_total_tax_set: CurrentTotalTaxSet;
  customer_locale: string;
  device_id: any;
  discount_codes: any[];
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: any;
  landing_site: any;
  landing_site_ref: any;
  location_id: any;
  merchant_of_record_app_id: any;
  name: string;
  note: any;
  note_attributes: any[];
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_additional_fees_set: any;
  original_total_duties_set: any;
  payment_gateway_names: string[];
  presentment_currency: string;
  processed_at: string;
  reference: string;
  referring_site: any;
  source_identifier: string;
  source_name: string;
  source_url: any;
  subtotal_price: string;
  subtotal_price_set: SubtotalPriceSet;
  tags: string;
  tax_lines: any[];
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_discounts: string;
  total_discounts_set: TotalDiscountsSet;
  total_line_items_price: string;
  total_line_items_price_set: TotalLineItemsPriceSet;
  total_outstanding: string;
  total_price: string;
  total_price_set: TotalPriceSet;
  total_shipping_price_set: TotalShippingPriceSet;
  total_tax: string;
  total_tax_set: TotalTaxSet;
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: any;
  billing_address: any;
  customer?: Customer;
  discount_applications: any[];
  fulfillments: any[];
  line_items: LineItem[];
  payment_terms: any;
  refunds: any[];
  shipping_address: ShippingAddress;
  shipping_lines: ShippingLine[];
}

export interface ClientDetails {
  accept_language: any;
  browser_height: any;
  browser_ip: string;
  browser_width: any;
  session_hash: any;
  user_agent: string;
}

export interface Company {
  id: number;
  location_id: number;
}

export interface CurrentSubtotalPriceSet {
  shop_money: ShopMoney;
  presentment_money: PresentmentMoney;
}

export interface ShopMoney {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney {
  amount: string;
  currency_code: string;
}

export interface CurrentTotalDiscountsSet {
  shop_money: ShopMoney2;
  presentment_money: PresentmentMoney2;
}

export interface ShopMoney2 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney2 {
  amount: string;
  currency_code: string;
}

export interface CurrentTotalPriceSet {
  shop_money: ShopMoney3;
  presentment_money: PresentmentMoney3;
}

export interface ShopMoney3 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney3 {
  amount: string;
  currency_code: string;
}

export interface CurrentTotalTaxSet {
  shop_money: ShopMoney4;
  presentment_money: PresentmentMoney4;
}

export interface ShopMoney4 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney4 {
  amount: string;
  currency_code: string;
}

export interface SubtotalPriceSet {
  shop_money: ShopMoney5;
  presentment_money: PresentmentMoney5;
}

export interface ShopMoney5 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney5 {
  amount: string;
  currency_code: string;
}

export interface TotalDiscountsSet {
  shop_money: ShopMoney6;
  presentment_money: PresentmentMoney6;
}

export interface ShopMoney6 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney6 {
  amount: string;
  currency_code: string;
}

export interface TotalLineItemsPriceSet {
  shop_money: ShopMoney7;
  presentment_money: PresentmentMoney7;
}

export interface ShopMoney7 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney7 {
  amount: string;
  currency_code: string;
}

export interface TotalPriceSet {
  shop_money: ShopMoney8;
  presentment_money: PresentmentMoney8;
}

export interface ShopMoney8 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney8 {
  amount: string;
  currency_code: string;
}

export interface TotalShippingPriceSet {
  shop_money: ShopMoney9;
  presentment_money: PresentmentMoney9;
}

export interface ShopMoney9 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney9 {
  amount: string;
  currency_code: string;
}

export interface TotalTaxSet {
  shop_money: ShopMoney10;
  presentment_money: PresentmentMoney10;
}

export interface ShopMoney10 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney10 {
  amount: string;
  currency_code: string;
}

export interface Customer {
  id: number;
  accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  state: string;
  note: any;
  verified_email: boolean;
  multipass_identifier: any;
  tax_exempt: boolean;
  email_marketing_consent: EmailMarketingConsent;
  sms_marketing_consent: SmsMarketingConsent;
  tags: string;
  currency: string;
  accepts_marketing_updated_at: string;
  marketing_opt_in_level: any;
  tax_exemptions: any[];
  admin_graphql_api_id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
}

export interface EmailMarketingConsent {
  state: string;
  opt_in_level: string;
  consent_updated_at: any;
}

export interface SmsMarketingConsent {
  state: string;
  opt_in_level: string;
  consent_updated_at: any;
  consent_collected_from: string;
}

export interface LineItem {
  id: number;
  admin_graphql_api_id: string;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: any;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: PriceSet;
  product_exists: boolean;
  product_id: number;
  properties: any[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: TotalDiscountSet;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: any;
  vendor: string;
  tax_lines: any[];
  duties: any[];
  discount_allocations: any[];
}

export interface PriceSet {
  shop_money: ShopMoney11;
  presentment_money: PresentmentMoney11;
}

export interface ShopMoney11 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney11 {
  amount: string;
  currency_code: string;
}

export interface TotalDiscountSet {
  shop_money: ShopMoney12;
  presentment_money: PresentmentMoney12;
}

export interface ShopMoney12 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney12 {
  amount: string;
  currency_code: string;
}

export interface ShippingAddress {
  province: any;
  country: string;
  company: string;
  country_code: string;
  province_code: any;
}

export interface ShippingLine {
  id: number;
  carrier_identifier: string;
  code: string;
  delivery_category: any;
  discounted_price: string;
  discounted_price_set: DiscountedPriceSet;
  phone: any;
  price: string;
  price_set: PriceSet2;
  requested_fulfillment_service_id: any;
  source: string;
  title: string;
  tax_lines: any[];
  discount_allocations: any[];
}

export interface DiscountedPriceSet {
  shop_money: ShopMoney13;
  presentment_money: PresentmentMoney13;
}

export interface ShopMoney13 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney13 {
  amount: string;
  currency_code: string;
}

export interface PriceSet2 {
  shop_money: ShopMoney14;
  presentment_money: PresentmentMoney14;
}

export interface ShopMoney14 {
  amount: string;
  currency_code: string;
}

export interface PresentmentMoney14 {
  amount: string;
  currency_code: string;
}
