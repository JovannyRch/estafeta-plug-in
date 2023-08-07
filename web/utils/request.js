import axios from "axios";
import shopify from "../shopify.js";

const IS_PRODUCTION = false;
const TESTING_SHOP_ID = "1354745";

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
    console.log("response.data", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(`Error calling ${keyService} service`, error?.response.data);
    return null;
  }
}

function getParamsFromMapKeys(params) {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
}

async function getOrders({
  accessToken,
  creationStartDate,
  creationEndDate,
  page = 0,
  filter = "",
  shop,
  optionCode,
  totalRecords = 5,
  statusCode = "1",
}) {
  const filterValue = filter.length > 0 ? filter : "3234928966";

  const params = {
    eSellerCode: IS_PRODUCTION ? shop : TESTING_SHOP_ID,
    optionCode,
    page,
    creationStartDate,
    creationEndDate,
    orderCode: filterValue,
    totalRecords,
    statusCode,
  };

  const serviceUrl = `/shopify/order?${Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&")}`;

  return makeRequest(accessToken, serviceUrl, "orders");
}

async function getPickups({
  accessToken,
  creationStartDate,
  creationEndDate,
  page = 0,
  filter = "",
  shop,
  optionCode,
  totalRecords = 5,
}) {
  let waybillCode = "";
  let pickupOrderCode = "";
  let orderCode = "";

  const codeStr = `${optionCode}`;
  if (codeStr === "2") {
    orderCode = filter;
  } else if (codeStr === "3") {
    pickupOrderCode = filter;
  } else if (codeStr === "4") {
    waybillCode = filter;
  }

  const params = {
    eSellerCode: IS_PRODUCTION ? shop : TESTING_SHOP_ID,
    optionCode,
    page,
    pickupStartDate: creationStartDate,
    pickupEndDate: creationEndDate,
    orderCode,
    pickupOrderCode,
    waybillCode,
    totalRecords,
  };

  const serviceUrl = `/shopify/pickup?${getParamsFromMapKeys(params)}`;

  return makeRequest(accessToken, serviceUrl, "pickups");
}

async function getShipments({
  accessToken,
  creationStartDate,
  creationEndDate,
  page = 0,
  filter = "",
  shop,
  optionCode,
  totalRecords = 5,
}) {
  const params = {
    eSellerCode: IS_PRODUCTION ? shop : TESTING_SHOP_ID,
    optionCode,
    page,
    creationStartDate,
    creationEndDate,
    orderCode: filter,
    totalRecords,
    waybillCode: "",
  };

  const serviceUrl = `/shopify/shipment?${getParamsFromMapKeys(params)}`;
  return makeRequest(accessToken, serviceUrl, "shipments");
}

async function getShopifyOrders(session, ids = []) {
  const orders = await shopify.api.rest.Order.all({
    session: session /* 
    ids: "5475450814751", */,
  });
  /* console.log("--------------------------------------------");
    console.log("orders", JSON.stringify(orders));
    console.log("--------------------------------------------"); */
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
  const params = {
    eSellerCode: IS_PRODUCTION ? shop : TESTING_SHOP_ID,
    waybillCode: waybillCodes,
  };

  const serviceUrl = `/shopify/documentWaybill?${getParamsFromMapKeys(params)}`;
  return makeRequest(accessToken, serviceUrl, "waybills");
}

/* async function getShopifyOrder(session, id) {
  const shops = shopify.api.rest.Shop.all({
    session: session,
    fields: ["id", "name", "email"],
  });

  return shops;
} */

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
