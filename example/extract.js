const { Client } = require("@webshotapi/client");

(async () => {
  try {
    const client = new Client({
      api_key: process.env.WEBSHOTAPI_KEY
    });
    const result = await client.extract({
      url: "https://www.example.com",
      remove_modals: true,
      ads: true,
      viewport_width: 1680,
      viewport_height: 960,
      extract_elements: true,
      extract_words: true,
      extract_style: 1,
      extract_text: true,
      extract_html: true,
    });

    //show result data
    console.log(result);

  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err?.response);
  }
})();
