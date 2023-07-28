import {
  BillingInterval,
  LATEST_API_VERSION,
  Session,
} from "@shopify/shopify-api";
import { shopifyApp } from "@shopify/shopify-app-express";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";
import { restResources } from "@shopify/shopify-api/rest/admin/2023-04";
import axios from "axios";

const DB_PATH = `${process.cwd()}/database.sqlite`;

// The transactions with Shopify will always be marked as test transactions, unless NODE_ENV is production.
// See the ensureBilling helper to learn more about billing in this template.
const billingConfig = {
  "My Shopify One-Time Charge": {
    // This is an example configuration that would do a one-time charge for $5 (only USD is currently supported)
    amount: 5.0,
    currencyCode: "USD",
    interval: BillingInterval.OneTime,
  },
};

const shopify = shopifyApp({
  api: {
    apiVersion: LATEST_API_VERSION,
    restResources,
    billing: undefined, // or replace with billingConfig above to enable example billing
  },
  auth: {
    path: "/api/auth",
    callbackPath: "/api/auth/callback",
  },
  webhooks: {
    path: "/api/webhooks",
  },
  // This should be replaced with your preferred storage strategy
  sessionStorage: new SQLiteSessionStorage(DB_PATH),
});

export const tokenMiddleware = (req, res, next) => {
  console.log("tokenMiddleware");

  /* let appId = process.env.appId;
  let appSecret = process.env.appSecret; */
  let shop = req.query.shop;
  let code = req.query.code;

  const regex = /^[a-z\d_.-]+[.]myshopify[.]com$/;

  //shopify.auth.callback(),

  if (regex) {
    let accessTokenRequestUrl = "https://" + shop + "/admin/oauth/access_token";
    let accessTokenPayload = {
      client_id: "228f9b3648e05552580fc62e32cd8b1f",
      client_secret: "a54b2f31c9720a6571d112603f0ac9cb",
      code,
    };
    axios
      .post(accessTokenRequestUrl, accessTokenPayload)
      .then((response) => {
        let accessToken = response.data.access_token;

        const shopData = {
          shop,
          accessToken,
        };
        console.log("shopData", shopData);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        console.log("finally");
        next();
      });
  }
};

export const routingMiddleware = async (req, res) => {
  console.log("routingMiddleware");
  /* 
  const session = shopify.config.sessionStorage.loadSession(req);
  console.log("session", session); */

  shopify.config.sessionStorage.storeSession({});
  const host = shopify.api.utils.sanitizeHost(req.query.host);
  const redirectUrl = shopify.api.config.isEmbeddedApp
    ? await shopify.api.auth.getEmbeddedAppUrl({
        rawRequest: req,
        rawResponse: res,
      })
    : `/?shop=${res.locals.shopify.session.shop}&host=${encodeURIComponent(
        host
      )}`;
  console.log(`Redirecting to host at ${redirectUrl}`);
  res.redirect(`${redirectUrl}/orders`);
};

export default shopify;
