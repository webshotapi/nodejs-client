const { Client } = require("@webshotapi/client");
const Config = require("../config");

(async () => {
  try {
    const client = new Client(Config.API_KEY);
    const response = await client.project().update("61fee3be99fc54b1eb52904b", {
      name: "test",
      status: "disabled",
    });
    console.log("Status Code:", response.status());
    console.log("Response Body:", response.json());
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err?.response?.data);
  }
})();
