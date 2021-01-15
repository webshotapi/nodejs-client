const {webshotapi} = require('webshotapi');

//Image download
const TOKEN = "PUT_YOUR_TOKEN_HERE";
(async()=>{
    const client = new webshotapi(TOKEN);

    try{
        const body = await client.project_create(
            {
            "name": "Test project added from api",
            "output_format": "json",
            "active": "yes"
            }
        );

        const result = body.json();
        
        //if ok add urls
        if(result.status=="OK"){
            const new_project_id = result.id;

            //add urls with parameters
            await client.project_create_url(
                new_project_id,
                [
                    'https://www.example.com',
                    'https://www.example2.com',
                    'https://www.example3.com'
                ],
                {
                    "method_name": "screenshot",
                    "response_type": "image",
                    "image_type": "png",
                    "remove_modals": 1,
                    "ads": 1,
                    "width": 1440,
                    "height": 960,
                    "no_cache": 0,
                    "scroll_to_bottom": 1,
                    "retina": 0,
                    "delay": "",
                    "wait_for_selector": "",
                    "wait_for_xpath": "",
                    "image_quality": 75,
                    "transparent_background": 1,
                    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
                    "accept_language": "en/GB",
                    "cookies": "user=1&last_visit=2020-12-09",
                    "headers": "X-hello=value;X-var=value",
                    "full_page": 1,
                    "timezone": "Europe/Paris",
                    "fail_statuscode": "403,404, 500-511",
                    "extract_selectors": 1,
                    "extract_words": 0,
                    "extract_style": 0,
                    "extract_text": 1,
                    "extract_html": 0,
                    "capture_element_selector": "",
                    "injection_css": ".price{color:red;}",
                    "injection_css_url": "",
                    "injection_js": "document.querySelector(\"#ads\").style.display=\"none\";",
                    "thumbnail_width": 128
                }
            );

            console.log("Add new project id: "+new_project_id+" with urls");
        }
        
    }catch(e){
        console.log("Error", e);
    }

})();
