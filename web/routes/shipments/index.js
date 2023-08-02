import express from "express";
const router = express.Router();
import { config } from "dotenv";
import oauthMiddleware from "../../middlewares/oauthmiddleware.js";
import estafetaRequest from "../../utils/request.js";

config({ path: "./../../.env" });

router.get("/", oauthMiddleware, async (req, res) => {
  const accessToken = req.token;
  const { creationStartDate, creationEndDate } = req.query;
  const shipments = await estafetaRequest.getShipments({
    accessToken,
    creationStartDate,
    creationEndDate,
  });
  res.json(shipments);
});

export default router;
