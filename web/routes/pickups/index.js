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

  const pickups = await estafetaRequest.getPickups({
    accessToken,
    creationStartDate,
    creationEndDate,
    filter,
    shop: session.shop,
  });
  res.json(pickups);
});

export default router;
