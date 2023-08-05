import express from "express";
const router = express.Router();
import { config } from "dotenv";
import oauthMiddleware from "../../middlewares/oauthmiddleware.js";
import estafetaRequest from "../../utils/request.js";

config({ path: "./../../.env" });

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

  res.json({
    orders: [
      {
        code: "0189630797",
        creationDateTime: "2023-07-31T19:40:56Z",
        client: {
          contactName: "Juan Esparta Gaona Cabán",
          address1: "Calle 16 de Septiembre 63",
          address2: "Santiago de Queretaro, 76000",
        },
        waybills: [
          {
            code: "1015021296537300107225",
            Dimension: "50 70 30",
            Wight: 3,
            StatusName: "En tránsito",
            Cost: 1500,
          },
          {
            code: "5235021296537601397542",
            Dimension: "60 80 50",
            Wight: 5,
            StatusName: "Esperando Recolección",
            Cost: 2000050,
          },
        ],
      },
    ],
    totalPage: 1,
  });
});

export default router;
