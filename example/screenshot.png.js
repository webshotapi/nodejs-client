const { Client } = require("@webshotapi/client");
const Config = require("./config");

(async () => {
  try {
    const client = new Client({
      api_key: Config.API_KEY
    });
    const response = await client.screenshot("https://www.example.com", "png", {
      ads: true,
      remove_modals: true,
      width: 1920,
    });

    await response.save("/tmp/screenshot_test.png");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err.stack);
  }
})();
