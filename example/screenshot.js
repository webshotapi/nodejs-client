const { Client } = require("@webshotapi/client");

(async () => {
  try {
    const client = new Client({
      api_key: process.env.WEBSHOTAPI_API_KEY
    });
    const result = await client.screenshot("https://www.example.com", {
      remove_modals: true,// Remove cookies modals
      width: 1920,
    });

    //save screenshot to file
    await result.save("./screenshot_test.jpg");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err.stack);
  }
})();
