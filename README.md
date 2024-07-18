# WebShotApi.com API client for NodeJS/Typescript

Capture a screenshot and save the image in formats like JPG, PNG, or PDF. Additionally, you have the capability to retrieve selectors for every HTML element, complete with coordinates and CSS styles following browser rendering. Utilize our API to establish a project and submit your URLs to the queue. Our server will handle all the necessary tasks on your behalf.

Full documentation about our api you can find in this website [Website screenshot API DOCS](https://webshotapi.com/docs/)

## Installation

Use the package manager [NPM](https://www.npmjs.com/package/@webshotapi/client) to install our client in nodejs.

```bash
npm install @webshotapi/client
```

or

```sh
yarn add @webshotapi/client
```

# Remove cookies popup before take sceenshot
![Remove cookies before take screenshot](https://raw.githubusercontent.com/webshotapi/webshotapi-website-screenshot-php-client/6681d3d38ea13391a30b2e43b8c37191e2d41bef/images/remove-cookies-before-take-screenshot.png)

Utilize an innovative AI algorithm to seamlessly eliminate the obstructive cookies popup before capturing a screenshot. [Read more](http://webshotapi.com/blog/remove-cookies-before-take-screenshot/)


## API KEY
Api key you can generate after register.
[https://dashboard.webshotapi.com/api_keys](https://dashboard.webshotapi.com/api_keys)

## Usage

### Take screenshot and save jpg to file
```javascript
const { Client } = require('webshotapi');

//Image download
const API_KEY = "YOUR TOKEN HERE";
(async()=>{
    try{
        const client = new Client(API_KEY);
        const result = await client.screenshot('https://www.example.com', 'jpg', {
            remove_modals: true, // Remove cookies popup
            width: 1920,
            no_cache: 1 // Do not return response file from cache
        });
        
        //save screenshot to file
        await result.save('/tmp/screenshot_test.jpg');
    }catch(e){
        console.log("Error", e);
    }
})();
```

### Take screenshot and save PDF to file
You can covert your html page to invoice in PDF.
```javascript
const { Client } = require('webshotapi');

//Image download
const API_KEY = "YOUR TOKEN HERE";
(async()=>{
    try{
        const client = new Client(API_KEY);
        const result = await client.pdf('https://www.example.com', {
            remove_modals: true,
            width: 1920,
            no_cache: true
        });
        
        //save screenshot to file
        await result.save('/tmp/screenshot_test.pdf');
    }catch(e){
        console.log("Error", e);
    }
})();
```

### Extract words map and HTML elements with css styles after rendering
Unique software to extract all selectors for HTML elements from website with css styles after browser rendering. Additionally you can extract all words with position (x,y,width, height, offset from previous word). Thank that you can build words map of website.

#### Sample script:
```javascript
const { Client } = require('webshotapi');

//Image download
const API_KEY = "YOUR TOKEN HERE";
(async()=>{
    try{
        const client = new Client(API_KEY);
        const result = await client.extract('https://www.example.com', {
            "remove_modals": 1,
            "ads": 1,
            "width": 1680,
            "height": 960,
            "extract_selectors": 1,
            "extract_words": 1,
            "extract_style": 1,
            "extract_text": 1,
            "extract_html": 1,
        });
        
        //get json data
        let data = result.json();
        
        //show result data
        console.log(data);

        //save data to file
        result.save('/tmp/test.json');
    }catch(e){
        console.log("Error", e);
    }
```
#### Results

```json
{
  "selectors": [
    {
      "xpath": "/html[1]",
      "css_selector": "html",
      "x": 0,
      "y": 0,
      "w": 1920,
      "h": 413,
      "style": {
        "visibility": "visible",
        "display": "block",
        "fontWeight": "400",
        "backgroundImage": "none",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "cursor": "auto",
        "fontSize": "16px",
        "color": "rgb(0, 0, 0)",
        "position": "static",
        "textDecoration": "none solid rgb(0, 0, 0)",
        "textDecorationLine": "none",
        "textDecorationColor": "rgb(0, 0, 0)",
        "textDecorationStyle": "solid",
        "textDecorationThickness": "auto",
        "bottom": "auto",
        "top": "auto",
        "left": "auto",
        "right": "auto",
        "zIndex": "auto",
        "opacity": "1",
        "backgroundRepeat": "repeat",
        "borderWidth": "0px",
        "textAlign": "start",
        "marginLeft": "0px",
        "marginRight": "0px",
        "marginTop": "0px",
        "marginBottom": "0px",
        "paddingLeft": "0px",
        "paddingRight": "0px",
        "paddingTop": "0px",
        "paddingBottom": "0px",
        "overflow": "visible",
        "textIndent": "0px",
        "textTransform": "none",
        "letterSpacing": "normal",
        "fontFamily": "\"Times New Roman\""
      },
      "attributes": {}
    }
  ],
  "words": [
    {
      "word": "permission.",
      "position": {
        "x": 660,
        "y": 231,
        "w": 92,
        "h": 19
      },
      "word_index": 26,
      "xpath": "/html[1]/body[1]/div[1]/p[1]",
      "offset": 145
    }
  ],
  "page_properties": {
    "viewport": {
      "width": 1920,
      "height": 1080
    },
    "document": {
      "width": 1920,
      "height": 1080
    }
  },
  "html": "<!doctype html><html lang='en' dir='ltr'><head><base hr...",
  "text": "Welcome in our page\nToday is Monday...",
  "screenshot_url": "https://api.webshotapi.com/v1/screenshot/?token=....&width=1920&height=960",
  "status_code": 200
}

```

## API docs
Full documentation about our api you can find in this website [API DOCS](https://webshotapi.com/docs/)
Nodejs client docs: https://webshotapi.com/docs/sdk/nodejs/

## Tests
```sh
export WEBSHOTAPI_ENDPOINT=https://api.webshotapi.com/v1
export WEBSHOTAPI_TEST_API_KEY=0909d85adda21539ecec77d9da67c7d40ac5bb6a652fa240cdc1acc6e411139e # This is example api key ;)
yarn test
```

## License
[MIT](https://choosealicense.com/licenses/mit/)