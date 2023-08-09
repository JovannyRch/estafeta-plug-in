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
    optionCode,
    totalRecords,
    page,
  } = req.query;

  let pickups = await estafetaRequest.getPickups({
    accessToken,
    creationStartDate,
    creationEndDate,
    filter,
    shop: session.shop,
    optionCode,
    totalRecords,
    page,
  });

  res.json(pickups);
});

export default router;
