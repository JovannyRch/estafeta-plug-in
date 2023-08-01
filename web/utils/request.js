import axios from "axios";

const client = axios.create({
  baseURL: "https://csrestqa.estafeta.com/Dev",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    apikey: "l7da86aba924ac49d0a013fb7d85983408",
  },
});

async function getOrders(accessToken) {
  const serviceUrl =
    "/shopify/order?eSellerCode=1234567890&optionCode=1&page=0&creationStartDate=2023/07/20&creationEndDate=2023/07/23&orderCode=3234928966";

  try {
    const response = await client.get(serviceUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error calling order service", error);
    return null;
  }
}

const estafetaRequest = {
  getOrders,
};

export default estafetaRequest;
