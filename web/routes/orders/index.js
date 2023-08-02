import express from "express";
const router = express.Router();
import { config } from "dotenv";
import oauthMiddleware from "../../middlewares/oauthmiddleware.js";
import estafetaRequest from "../../utils/request.js";

config({ path: "./../../.env" });

router.get("/", oauthMiddleware, async (req, res) => {
  const token = req.token;
  const orders = await estafetaRequest.getOrders(token);

  const session = res.locals.shopify.session;
  console.log("session", session);
  const shopifyOrders = await estafetaRequest.getShopifyOrders(session);

  const ordersWithShopify = orders.orders.map((order) => {
    const randomIndex = Math.floor(Math.random() * shopifyOrders.data.length);
    const shopifyOrder = shopifyOrders.data[randomIndex];
    return { ...order, shopify: shopifyOrder };
  });

  res.json({
    ...orders,
    orders: ordersWithShopify,
  });
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
