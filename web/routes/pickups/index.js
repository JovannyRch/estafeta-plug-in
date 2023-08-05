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

  pickups = {
    pickups: [
      {
        code: "940383853",
        planningDateTime: "2023-08-07 21:49:32",
        statusName: "Enviada",
        orders: [
          {
            code: "3234928966",
            creationDateTime: "2023-08-02 21:49:32",
            waybills: [
              {
                code: "7235021296537601401170",
                dimension: "50 70 80",
                weight: 5.5,
              },
            ],
          },
        ],
      },
    ],
    totalPage: 1,
  };

  pickups.totalPage = 5;
  res.json(pickups);
});

export default router;
