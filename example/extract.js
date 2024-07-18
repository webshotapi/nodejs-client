const { Client } = require("@webshotapi/client");

(async () => {
  try {
    const client = new Client({
      api_key: process.env.WEBSHOTAPI_API_KEY
    });
    const result = await client.extract("https://www.example.com", {
      remove_modals: 1,
      ads: 1,
      width: 1680,
      height: 960,
      extract_selectors: 1,
      extract_words: 1,
      extract_style: 1,
      extract_text: 1,
      extract_html: 1,
    });

    //get json data
    let data = result.json();

    //show result data
    console.log(data);

    //save data to file
    result.save("/tmp/test.json");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err?.response);
  }
})();
