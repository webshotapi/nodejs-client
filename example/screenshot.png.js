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
        image_type: "png", // Accept jpg, png, webp, pdf
        remove_modals: true, // Remove cookies modals
        width: 1920,
      }
    );

    await response.save("./screenshot_test.png");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err.stack);
  }
})();
