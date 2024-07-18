const { Client } = require("@webshotapi/client");

(async () => {
  try {
    const client = new Client({
      api_key: process.env.WEBSHOTAPI_API_KEY
    });
    const result = await client.pdf("https://www.example.com", {
      remove_modals: 1,
      width: 1920,
      no_cache: true,
    });

    //save screenshot to file
    await result.save("/tmp/screenshot_test.pdf");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err?.response?.data);
  }
})();
