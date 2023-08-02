import axios from "axios";
import shopify from "../shopify.js";

const client = axios.create({
  baseURL: "https://csrestqa.estafeta.com/Dev",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    apikey: "l7da86aba924ac49d0a013fb7d85983408",
  },
});

async function makeRequest(accessToken, serviceUrl, keyService) {
  try {
    const response = await client.get(serviceUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("keyService", keyService);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error calling ${keyService} service`, error);
    return null;
  }
}

async function getOrders(accessToken) {
  const serviceUrl =
    "/shopify/order?eSellerCode=1234567890&optionCode=1&page=0&creationStartDate=2023/07/20&creationEndDate=2023/07/23&orderCode=3234928966";

  return makeRequest(accessToken, serviceUrl, "orders");
}

async function getPickups(accessToken) {
  const serviceUrl =
    "/shopify/pickup?eSellerCode=1234567890&optionCode=1&page=0&pickupStartDate=2023/07/21&pickupEndDate=2023/07/23&orderCode=3234928966&pickupOrderCode=0106458136&waybillCode=3235021296537601397543";

  return makeRequest(accessToken, serviceUrl, "pickups");
}

async function getShipments({
  accessToken,
  creationStartDate,
  creationEndDate,
  page = 0,
  filter = "",
  shop,
}) {
  const filterValue = filter.length > 0 ? filter : "3234928966";
  const serviceUrl = `/shopify/shipment?eSellerCode=${shop}&optionCode=1&page=${page}&creationStartDate=${creationStartDate}&creationEndDate=${creationEndDate}&orderCode=${filterValue}&waybillCode=${filterValue}`;
  console.log("serviceUrl", serviceUrl);
  return makeRequest(accessToken, serviceUrl, "shipments");
}

async function getShopifyOrders(session) {
  const orders = await shopify.api.rest.Order.all({ session: session });
  return orders;
}

async function getShopifyOrder(session, id) {
  const order = await shopify.api.rest.Order.find({
    id,
    session,
  });
  return order;
}

async function getShopifyOrdersCount(session) {
  const count = await shopify.api.rest.Order.count({ session: session });
  return count;
}

const estafetaRequest = {
  getOrders,
  getPickups,
  getShipments,
  getShopifyOrders,
  getShopifyOrdersCount,
  getShopifyOrder,
};

export default estafetaRequest;
