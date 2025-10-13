const { Client } = require("@webshotapi/client");

(async () => {
    try {
        const client = new Client({
            api_key: process.env.WEBSHOTAPI_API_KEY
        });
        const result = await client.videoJson( {
            url: "https://www.example.com",
            scrolling_enable: true,
            scrolling_algorithm: "ease_out_cubic",
            remove_modals: true,// Remove cookies modals
            viewport_width: 1920,
        });

        console.log(result)
    } catch (err) {
        console.log(`Error: ${err.message}`);
        console.log(err.stack);
    }
})();
