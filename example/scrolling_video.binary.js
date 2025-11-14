const { Client } = require("@webshotapi/client");


(async () => {
    try {
        const client = new Client({
            api_key: process.env.WEBSHOTAPI_KEY
        });
        const result = await client.video( {
            url: "https://www.stripe.com",
            scrolling_enable: true,
            scrolling_algorithm: "ease_in_quad",
            scrolling_scroll_delay: 500,
            scrolling_scroll_distance: 1000,
            scrolling_scroll_duration: 1500,
            remove_modals: true,// Remove cookies modals
            viewport_width: 1920,
            // video_duration: 10,
            //video_fps: 15,
            //gpu_enable: true // Enable gpu rendering
        });

        await result.save('/tmp/screenshot_test.mp4');
    } catch (err) {
        console.log(`Error: ${err.message}`);
        console.log(err.stack);
    }
})();
