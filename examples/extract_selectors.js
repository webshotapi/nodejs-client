const {webshotapi} = require('webshotapi');

//Image download
const TOKEN = "PUT_YOUR_TOKEN_HERE";
(async()=>{
    try{
        const client = new webshotapi(TOKEN);
        const result = await client.extract('https://www.allegro.pl', {
            extract_selectors: 1,
            extract_words: 1,
            extract_style: 1,
        });
        
        let data = result.json();
        
        console.log(data.words.length);

        result.save('/tmp/test.json');
    }catch(e){
        console.log("Error", e);
    }
    //client.json();
})();
