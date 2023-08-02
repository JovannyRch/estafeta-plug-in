import axios from "axios";
import shopify from "../shopify.js";

const logUrl = (serviceUrl) => {
  console.log(
    "--------------------------------------------------------------------------------"
  );
  console.log("                ");
  console.log("                ");
  const date = new Date();
  console.log(date);
  console.log(serviceUrl);
  console.log("                ");
  console.log("                ");
  console.log(
    "--------------------------------------------------------------------------------"
  );
};

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
    logUrl(serviceUrl);
    const response = await client.get(serviceUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error calling ${keyService} service`, error);
    return null;
  }
}

async function getOrders({
  accessToken,
  creationStartDate,
  creationEndDate,
  page = 0,
  filter = "",
  shop,
}) {
  const filterValue = filter.length > 0 ? filter : "3234928966";
  const serviceUrl = `/shopify/order?eSellerCode=${shop}&optionCode=1&page=${page}&creationStartDate=${creationStartDate}&creationEndDate=${creationEndDate}&orderCode=${filterValue}`;
  return makeRequest(accessToken, serviceUrl, "orders");
}

async function getPickups({
  accessToken,
  creationStartDate,
  creationEndDate,
  page = 0,
  filter = "",
  shop,
}) {
  const filterValue = filter.length > 0 ? filter : "3235021296537601397543";
  const serviceUrl = `/shopify/pickup?eSellerCode=${shop}&optionCode=1&page=${page}&pickupStartDate=${creationStartDate}&pickupEndDate=${creationEndDate}&orderCode=${filterValue}&pickupOrderCode=${filterValue}&waybillCode=${filterValue}`;

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
  return makeRequest(accessToken, serviceUrl, "shipments");
}

async function getShopifyOrders(session, ids = []) {
  const orders = await shopify.api.rest.Order.all({
    session: session,
    ids: ids.join(","),
  });
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

async function getWayBills({ accessToken, waybillCodes = "", shop }) {
  const serviceUrl = `/shopify/documentWaybill?eSellerCode=${shop}&waybillCode=${waybillCodes}`;
  return makeRequest(accessToken, serviceUrl, "waybills");
}

const estafetaRequest = {
  getOrders,
  getPickups,
  getShipments,
  getShopifyOrders,
  getShopifyOrdersCount,
  getShopifyOrder,
  getWayBills,
};

export default estafetaRequest;
