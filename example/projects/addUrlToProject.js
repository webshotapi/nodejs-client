const { Client } = require("@webshotapi/client");
const Config = require("../config");

(async () => {
  try {
    // First run create project create script (create.js)
    // After create you will received new project paste it below
    const client = new Client(Config.API_KEY);
    const response = await client
      .projectUrl()
      .create("61fee3be99fc54b1eb52904b", {
        urls: [
          "https://example.com",
          "https://example.com/blog/43",
          "https://example.com/page/sdff",
        ],
        command: "screenshot",
        params: {
          ads: false,
          extract_html: true,
          remove_modals: true,
        },
      });
    console.log("Status Code:", response.status());
    console.log("Response Body:", response.json());
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err?.response?.data);
  }
})();
