const {webshotapi} = require('webshotapi');

//Image download
const TOKEN = "PUT_YOUR_TOKEN_HERE";
(async()=>{
    const client = new webshotapi(TOKEN);

    try{
        const body = await client.project_delete(141);
        const result = body.json();
        console.log(result);
        
    }catch(e){
        console.log("Error", e);
    }

})();
