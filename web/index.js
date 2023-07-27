// @ts-nocheck
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";
import axios from "axios";
import url from "url";
import { Redirect } from "@shopify/app-bridge/actions/index.js";
import createApp from "@shopify/app-bridge/index.js";

const PORT = parseInt(
  process.env.BACKEND_PORT || process.env.PORT || "3000",
  10
);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
/* app.get(shopify.config.auth.path, async (req, res) => {
  console.log("init oauth");
  await shopify.auth.begin({
    shop: shopify.utils.sanitizeShop(req.query.shop, true),
    callbackPath: shopify.config.auth.callbackPath,
    isOnline: false,
    rawRequest: req,
    rawResponse: res,
  });
}); */
/* app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
); */

app.get(
  shopify.config.auth.callbackPath,
  async (req, res, next) => {
    console.log("callback oauth");
    let securityPass = false;
    let appId = process.env.appId;
    let appSecret = process.env.appSecret;
    let shop = req.query.shop;
    let code = req.query.code;

    const regex = /^[a-z\d_.-]+[.]myshopify[.]com$/;

    if (shop.match(regex)) {
      console.log("regex is ok");
      securityPass = true;
    } else {
      //exit
      securityPass = false;
    }

    // 1. Parse the string URL to object
    let urlObj = url.parse(req.url);
    // 2. Get the 'query string' portion
    let query = urlObj.search.slice(1);
    /* if (true) {
      //get token
      console.log("get token");
      securityPass = true;
    } else {
      //exit
      securityPass = false;
    } */

    if (securityPass && regex) {
      //Exchange temporary code for a permanent access token
      let accessTokenRequestUrl =
        "https://" + shop + "/admin/oauth/access_token";
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
            name: shop,
            token: accessToken,
          };
          axios
            .post(
              "https://a5fe-149-19-169-26.ngrok-free.app/api/add/client",
              shopData
            )
            .then(() => {
              /*  const config = {
                apiKey: "228f9b3648e05552580fc62e32cd8b1f",
                host: new URLSearchParams(location.search).get("host"),
                forceRedirect: true,
              };
              const app = createApp(config);
              const redirect = Redirect.create(app);
              redirect.dispatch(Redirect.Action.APP, "/shipments"); */
              next();
            })
            .catch((error) => {
              next();
            });

          next();
        })
        .catch((error) => {
          console.log("error", error);
          res.redirect("/notfound");
        });
    } else {
      res.redirect("/notfound");
    }
  },
  shopify.redirectToShopifyOrAppRoot()
);

app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

/* app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
); */

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use("/api/*", shopify.validateAuthenticatedSession());

app.use(express.json());

app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });

  res.status(200).send(countData);
});

app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

app.get("/api/token", async (_req, res) => {
  /* const data = {
    client_id: "228f9b3648e05552580fc62e32cd8b1f",
    client_secret: "a54b2f31c9720a6571d112603f0ac9cb",
    code: "CODE_FROM_REDIRECT_URL",
  };
  const response = await axios.post(
    "https://{shop}.myshopify.com/admin/oauth/access_token",
    data
  );
  console.log("response.data", response.data); */
  res.status(200).send({});
});

app.use(shopify.cspHeaders());
app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});

app.listen(PORT);
