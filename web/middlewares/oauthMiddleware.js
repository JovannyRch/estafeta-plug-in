import fs from "fs";
import path from "path";
import oAuth from "../utils/oauth.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const tokenPath = path.join(__dirname, "token.json");

async function oauthMiddleware(req, res, next) {
  const currentTime = new Date().getTime();

  let { accessToken, tokenExpiration } = fs.existsSync(tokenPath)
    ? JSON.parse(fs.readFileSync(tokenPath, "utf8"))
    : {};

  if (!accessToken || currentTime > tokenExpiration) {
    const response = await oAuth.getToken();
    accessToken = response.data.access_token;
    tokenExpiration = currentTime + response.data.expires_in * 1000;

    fs.writeFileSync(
      tokenPath,
      JSON.stringify({ accessToken, tokenExpiration })
    );
  }

  req.token = accessToken;
  next();
}

export default oauthMiddleware;
