const {webshotapi} = require('webshotapi');

//Image download
const TOKEN = "PUT_YOUR_TOKEN_HERE";
(async()=>{
    const client = new webshotapi(TOKEN);

    try{
        const projects_body = await client.projects();
        const projects = projects_body.json();
        //console.log(projects);

        if(projects && projects.length > 0){
            let project_id = projects[0].id;
            const body = await client.project_urls(project_id);
            const result = body.json();
            console.log(result);

        }
        
        
        
    }catch(e){
        console.log("Error", e);
    }

})();
