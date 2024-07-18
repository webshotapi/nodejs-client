const { Client } = require("@webshotapi/client");
const Config = require("./config");

(async () => {
  try {
    const client = new Client({
      api_key: Config.API_KEY
    });
    const result = await client.screenshot("https://www.example.com", {
      remove_modals: true,// Remove cookies modals
      width: 1920,
      no_cache: true,
      no_cache: true,
    });

    //save screenshot to file
    await result.save("/tmp/screenshot_test.jpg");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err.stack);
  }
})();
