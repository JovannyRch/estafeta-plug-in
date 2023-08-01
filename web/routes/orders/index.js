import express from "express";
const router = express.Router();
import { config } from "dotenv";
import oauthMiddleware from "../../middlewares/oauthmiddleware.js";
import estafetaRequest from "../../utils/request.js";

config({ path: "./../../.env" });

router.get("/", oauthMiddleware, async (req, res) => {
  const token = req.token;
  const orders = await estafetaRequest.getOrders(token);
  res.json(orders);
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
