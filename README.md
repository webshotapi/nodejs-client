# WebShotApi.com API client for NodeJS/Typescript

Capture a screenshot and save the image in formats like JPG, PNG, WEBP, or PDF. Additionally, you have the capability to retrieve selectors for every HTML element, complete with coordinates and CSS styles following browser rendering. 

Full documentation about our api you can find in this website [Website screenshot API DOCS](https://webshotapi.com/docs/)

## Installation

Use the package manager [NPM](https://www.npmjs.com/package/@webshotapi/client) to install our client in nodejs.

```bash
npm install @webshotapi/client
```

```sh
yarn add @webshotapi/client
```

```sh
pnpm add @webshotapi/client
```

# Remove cookies popup before take sceenshot
![Remove cookies before take screenshot](https://raw.githubusercontent.com/webshotapi/webshotapi-website-screenshot-php-client/6681d3d38ea13391a30b2e43b8c37191e2d41bef/images/remove-cookies-before-take-screenshot.png)

Utilize an innovative AI algorithm to seamlessly eliminate the obstructive cookies popup before capturing a screenshot. [Read more](http://webshotapi.com/blog/remove-cookies-before-take-screenshot/)


## API KEY
Api key you can generate after register.
[https://dashboard.webshotapi.com/WEBSHOTAPI_KEYs](https://dashboard.webshotapi.com/WEBSHOTAPI_KEYs)

## Usage

### Take scrolling video screenshot
Example gif:
[![](https://raw.githubusercontent.com/webshotapi/php-client/63375165338d074d9b54a076977b489a6d913d2b/images/stripe-video.gif)](https://raw.githubusercontent.com/webshotapi/php-client/63375165338d074d9b54a076977b489a6d913d2b/images/stripe-video.gif)

Link to example mp4: https://github.com/webshotapi/php-client/raw/c77cb5a3d84b58a2dfd92ba30ed6850f83d7a52e/images/stripe-video.mp4


```javascript
const { Client } = require('@webshotapi/client');

//Image download
const WEBSHOTAPI_KEY = process.env.WEBSHOTAPI_KEY || "YOUR TOKEN HERE";
(async()=>{
    try{
        const client = new Client(WEBSHOTAPI_KEY);
        const result = await client.video({
            url: 'https://www.example.com',
            remove_modals: true, // Remove cookies popup
            viewport_width: 1920,
        });
        
        //save screenshot to file
        await result.save('/tmp/screenshot_test.mp4');
    }catch(e){
        console.log("Error", e);
    }
})();
```

### Take screenshot and save jpg to file

```javascript
const { Client } = require('@webshotapi/client');

//Image download
const WEBSHOTAPI_KEY = process.env.WEBSHOTAPI_KEY || "YOUR TOKEN HERE";
(async()=>{
    try{
        const client = new Client(WEBSHOTAPI_KEY);
        const result = await client.screenshot({
            url: 'https://www.example.com',
            remove_modals: true, // Remove cookies popup
            viewport_width: 1920,
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
const { Client } = require('@webshotapi/client');

//Image download
const WEBSHOTAPI_KEY = process.env.WEBSHOTAPI_KEY || "YOUR TOKEN HERE";
(async()=>{
    try{
        const client = new Client(WEBSHOTAPI_KEY);
        const result = await client.pdf({
            url: 'https://www.example.com',
            remove_modals: true,
            viewport_width: 1920,
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
const { Client } = require('@webshotapi/client');

//Image download
const WEBSHOTAPI_KEY = process.env.WEBSHOTAPI_KEY || "YOUR TOKEN HERE";
(async()=> {
    try {
        const client = new Client(WEBSHOTAPI_KEY);
        const result = await client.extract({
            url: 'https://www.example.com',
            ads: true,
            viewport_width: 1680,
            viewport_height: 960,
            extract_elements: true,
            extract_words: true,
            extract_style: 1,
            extract_text: true,
            extract_html: true,
        });

        //show result data
        console.log(JSON.stringify(result, null, 2));

    } catch (e) {
        console.log("Error", e);
    }
})();
```
#### Results

```json
{
  "elements": [
    {
      "xpath": "/html[1]",
      "css_selector": "html",
      "x": 0,
      "y": 0,
      "width": 1920,
      "height": 413,
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
  "html": "<!doctype html><html lang='en' dir='ltr'><head><base hr...",
  "text": "Welcome in our page\nToday is Monday...",
  "status_code": 200,
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
  "saved_in_cloud": {
    "completed": false
  }
}

```

## API docs
Full documentation about our api you can find in this website [API DOCS](https://webshotapi.com/docs/)
Nodejs client docs: https://webshotapi.com/docs/sdk/nodejs/

## License
[MIT](https://choosealicense.com/licenses/mit/)