const { Client } = require("@webshotapi/client");

(async () => {
  try {
    const client = new Client({
      api_key: process.env.WEBSHOTAPI_API_KEY
    });
    const result = await client.pdf( {
      url: "https://www.example.com",
      remove_modals: true, // Remove cookies and popups
      viewport_width: 1920,
      no_cache: true,
    });

    //save screenshot to file
    await result.save("./screenshot_test.pdf");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err?.response?.data);
  }
})();
