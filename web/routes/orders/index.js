import express from "express";
const router = express.Router();
import oauthMiddleware from "../../middlewares/oauthMiddleware.js";
import estafetaRequest from "../../utils/request.js";

router.get("/", oauthMiddleware, async (req, res) => {
  const accessToken = req.token;
  const {
    creationStartDate,
    creationEndDate,
    filter = "",
    page,
    optionCode,
    totalRecords,
    statusCode,
  } = req.query;
  const session = res.locals.shopify.session;

  let estafetaOrders = await estafetaRequest.getOrders({
    accessToken,
    creationStartDate,
    creationEndDate,
    filter,
    shop: session.shop,
    page,
    optionCode,
    totalRecords,
    statusCode,
  });

  const totalOrders = estafetaOrders?.orders.length;
  console.log("totalOrders", totalOrders);

  const shopifyOrders = await estafetaRequest.getShopifyOrders(session);

  const ordersWithShopify = estafetaOrders?.orders?.map((order) => {
    const shopifyOrder = shopifyOrders?.data?.find(
      (shopifyOrder) => `${shopifyOrder?.order_number}` === `${order?.code}`
    );
    return { ...order, shopify: shopifyOrder };
  });

  res.json({
    ...estafetaOrders,
    orders: ordersWithShopify,
  });
});

router.get("/waybills", oauthMiddleware, async (req, res) => {
  const accessToken = req.token;
  const { waybillCodes = "" } = req.query;
  const session = res.locals.shopify.session;
  if (!waybillCodes) return res.json({});
  const waybills = await estafetaRequest.getWayBills({
    accessToken,
    waybillCodes,
    shop: session.shop,
  });
  res.json(waybills);
});

router.get("/shopify", async (_, res) => {
  const session = res.locals.shopify.session;
  /* const orders = await estafetaRequest.getOrders(token); */
  const shopifyOrders = await estafetaRequest.getShopifyOrders(session);
  res.json(shopifyOrders);
});

//count
router.get("/count", async (_, res) => {
  const session = res.locals.shopify.session;
  const count = await estafetaRequest.getShopifyOrdersCount(session);
  res.json(count);
});

export default router;
