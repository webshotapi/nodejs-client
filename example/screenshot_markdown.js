const { Client } = require("@webshotapi/client");

(async () => {
    try {
        const client = new Client({
            api_key: process.env.WEBSHOTAPI_API_KEY
        });
        const result = await client.screenshot({
            markdown: `# Header 1
Test paragraph

# Header 2
Test paragraph 2     
            `,
            viewport_width: 1920,
        });

        //save screenshot to file
        await result.save("./screenshot_test.jpg");
    } catch (err) {
        console.log(`Error: ${err.message}`);
        console.log(err.stack);
    }
})();
