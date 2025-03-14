const { Client } = require("@webshotapi/client");

(async () => {
  try {
    const client = new Client({
      api_key: process.env.WEBSHOTAPI_API_KEY
    });
    const result = await client.extract("https://www.example.com", {
      remove_modals: true,
      ads: true,
      width: 1680,
      height: 960,
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
