const {webshotapi} = require('webshotapi');

//Image download
const TOKEN = "PUT_YOUR_TOKEN_HERE";

(async()=>{
    try{
        const client = new webshotapi(TOKEN, max_concurrency=4);

        //create pipeline
        const pipeline = client.multi();
       
        //add request to pipeline like normal function
        pipeline.pdf('https://www.wp.pl',{
            no_cache:1,
            remove_modals:1,
        });

        //add one more
        pipeline.screenshot_jpg('https://www.example.com',{
            no_cache:1,
            remove_modals:1,
        });

        //add one more
        pipeline.screenshot_jpg('https://www.google.com',{
            no_cache:1,
            remove_modals:1,
        });


        //add one more
        pipeline.extract('https://www.google.com',{
            extract_selectors: 1,
        });

        //on Request completed listener
        client.on('onRequestCompleted', async(return_data, request_data, request_index) => {
           
            console.log("Request OK: "+request_data.link);

            //set path to save. Client has auto detect file extension method.
            await return_data.save('/tmp/file_'+request_index);
            console.log("File saved");
            console.log("Request remaning in your subscription: "+ client.get_request_remaining());
        });
        
        //on Request error listener
        client.on('onRequestError', (error_data, request_data, request_index) => {
            console.log('RequestError: '+ request_data.link);
            console.log(error_data);
        });

        //execute multi requests
        client.exec();

        //show multi monitor (optional)
        client.multi_monitor(console_clear=false);

    }catch(e){
        console.log("Error", e);
    }
})();
