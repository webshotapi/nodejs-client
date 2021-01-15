const {webshotapi} = require('webshotapi');

//Image download
const TOKEN = "PUT_YOUR_TOKEN_HERE";
(async()=>{
    try{
        const client = new webshotapi(TOKEN);
        const body = await client.info();
        const result = body.json();
        console.log(result);
        
    }catch(e){
        console.log("Error", e);
    }
})();
