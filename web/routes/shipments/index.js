import express from "express";
const router = express.Router();
import oauthMiddleware from "../../middlewares/oauthMiddleware.js";
import estafetaRequest from "../../utils/request.js";


router.get("/", oauthMiddleware, async (req, res) => {
  const accessToken = req.token;
  const session = res.locals.shopify.session;

  const {
    creationStartDate,
    creationEndDate,
    filter = "",
    page = "0",
    optionCode,
    totalRecords,
  } = req.query;
  const shipments = await estafetaRequest.getShipments({
    accessToken,
    creationStartDate,
    creationEndDate,
    filter,
    shop: session.shop,
    page,
    optionCode,
    totalRecords,
  });

  res.json(shipments);
});

export default router;
