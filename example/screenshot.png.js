const { Client, ScreenshotType } = require("@webshotapi/client");

(async () => {
  try {
    const client = new Client({
      api_key: process.env.WEBSHOTAPI_API_KEY
    });
    const response = await client.screenshot(
      "https://www.example.com",
      {
        ads: true,
        remove_modals: true, // Remove cookies modals
        width: 1920,
      },
      ScreenshotType.PNG
    );

    await response.save("/tmp/screenshot_test.png");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err.stack);
  }
})();
