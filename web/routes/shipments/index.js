import express from "express";
const router = express.Router();
import { config } from "dotenv";
import oauthMiddleware from "../../middlewares/oauthmiddleware.js";
import estafetaRequest from "../../utils/request.js";

config({ path: "./../../.env" });

router.get("/", oauthMiddleware, async (req, res) => {
  const accessToken = req.token;
  const session = res.locals.shopify.session;

  const { creationStartDate, creationEndDate, filter = "" } = req.query;
  const shipments = await estafetaRequest.getShipments({
    accessToken,
    creationStartDate,
    creationEndDate,
    filter,
    shop: session.shop,
  });
  res.json(shipments);
});

export default router;
