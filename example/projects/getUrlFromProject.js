const { Client } = require("@webshotapi/client");
const Config = require("../config");

(async () => {
  try {
    const client = new Client(Config.API_KEY);
    const response = await client.projectUrl().list("61fee3be99fc54b1eb52904b", 1);
    console.log("Status Code:", response.status());
    console.log("Response Body:", response.json());
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err?.response?.data);
  }
})();
