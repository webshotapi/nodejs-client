const {webshotapi} = require('webshotapi');

//Image download
const TOKEN = "PUT_YOUR_TOKEN_HERE";
(async()=>{
    try{
        const client = new webshotapi(TOKEN);
        const result = await client.screenshot_png('https://www.example.com', {
            remove_modals:1,
            'width': 1920,
            'no_cache': 1
        });
        
        await result.save('/tmp/screenshot_test.png');
    }catch(e){
        console.log("Error", e);
    }
})();
