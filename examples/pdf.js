const {webshotapi} = require('webshotapi');

//Image download
const TOKEN = "PUT_YOUR_TOKEN_HERE";
(async()=>{
    try{
        const client = new webshotapi(TOKEN);
        const result = await client.pdf('https://www.onet.pl', {
            remove_modals:1,
            'width': 1920,
            'no_cache': 1
        });
        
        await result.save('/tmp/psd_file_test.pdf');
    }catch(e){
        console.log("Error", e);
    }
})();
