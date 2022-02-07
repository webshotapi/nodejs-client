const { Client } = require("@webshotapi/client");
const Config = require("../config");

(async () => {
  try {
    const client = new Client(Config.API_KEY);
    const response = await client
      .projectUrl()
      .remove("61fee3be99fc54b1eb52904b", "61fee3da99fc54b1eb529051");

    // Example:
    //const response = await client.projectUrl().remove("61b39728e1f8cb0db8ca81f1","61b39746e1f8cb0db8ca8200");

    console.log("Status Code:", response.status());
    console.log("Response Body:", response.json());
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err?.response?.data);
  }
})();
