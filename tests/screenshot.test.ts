import { Client } from "../src/classes/client";
import * as fs from "fs";
import * as crypto from "crypto";
import * as path from "path";
import * as Jimp from "jimp";

const calcHash = (buffer: Buffer) => {
  return crypto.createHash("md5").update(buffer).digest("hex");
};

const calcMd5OfTestFile = (file_path: string) => {
  const buffer = fs.readFileSync(file_path);
  return calcHash(buffer);
};

const compareImages = async (
  correct_image_path: string,
  buffer: Buffer,
  threshold = 0.05
) => {
  const tmpname = `/tmp/${new Date().getTime()}`;
  fs.writeFileSync(tmpname, buffer);

  const i = await Jimp.read(tmpname);
  const i2 = await Jimp.read(correct_image_path);

  const diff = Jimp.diff(i2, i).percent;
  expect(diff).toBeLessThanOrEqual(threshold);
};

describe("Screenshot test", () => {
  let client;

  beforeEach(() => {
    client = new Client({
      api_key: process.env.WEBSHOTAPI_TEST_API_KEY,
    });
  });

  it("Screenshot JPG", async () => {

    const response = await client.screenshot("https://www.example.com", "jpg", {
      ads: true,
      remove_modals: true,
      width: 1920,
      link: "https://example.com",
    });


    expect(response.contentType()).toContain("image/jpeg");
    compareImages(
      path.join(__dirname, "../openapi/screenshot-data/example.jpeg"),
      response.body()
    );
  }, 7000);

  it("Screenshot PNG", async () => {
    const response = await client.screenshot("https://www.example.com", "png", {
      ads: true,
      remove_modals: true,
      width: 1920,
      link: "https://example.com",
    });

    expect(response.contentType()).toContain("image/png");
    compareImages(
      path.join(__dirname, "../openapi/screenshot-data/example.png"),
      response.body()
    );
  });

  it("Screenshot PDF", async () => {
    const response = await client.screenshot("https://www.example.com", "pdf", {
      ads: true,
      remove_modals: true,
      width: 1920,
      link: "https://example.com",
    });

    expect(response.contentType()).toContain("application/pdf");

  });

  it("Extract JSON", async () => {
    const response = await client.extract("https://www.example.com", {
      ads: true,
      remove_modals: true,
      width: 1920,
      extract_words: true,
      link: "https://example.com",
    });

    expect(response.contentType()).toContain("application/json");
    expect(response.json()).toMatchObject(
      JSON.parse(
          '{"status_code":200,"html":"","text":"","screenshot_url":"https://api.webshotapi.com/v1/screenshot/image/?remove_modals=true&premium_proxy=false&geotargeting=&ads=true&width=1920&thumbnail_width=0&height=1080&scroll_to_bottom=false&retina=false&wait_for_selector=&wait_for_xpath=&image_quality=85&transparent_background=false&user_agent=&accept_language=en%2FUS&cookies=&headers=&full_page=false&timezone=&fail_statuscode=&extract_text=false&extract_html=false&capture_element_selector=&injection_css=&injection_css_url=&injection_js=&injection_js_function=&response_save_cloud=&s3_access_key_id=&s3_bucket=&s3_region=&s3_key=&extract_words=true&url=https%3A%2F%2Fwww.example.com","selectors":[],"words":[{"word":"Example","position":{"x":660,"y":133,"w":153,"h":38},"word_index":0,"xpath":"/html[1]/body[1]/div[1]/h1[1]","offset":0},{"word":"Domain","position":{"x":824,"y":133,"w":137,"h":38},"word_index":1,"xpath":"/html[1]/body[1]/div[1]/h1[1]","offset":8},{"word":"This","position":{"x":660,"y":193,"w":33,"h":19},"word_index":0,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":0},{"word":"domain","position":{"x":698,"y":193,"w":60,"h":19},"word_index":1,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":5},{"word":"is","position":{"x":763,"y":193,"w":13,"h":19},"word_index":2,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":12},{"word":"for","position":{"x":781,"y":193,"w":22,"h":19},"word_index":3,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":15},{"word":"use","position":{"x":808,"y":193,"w":28,"h":19},"word_index":4,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":19},{"word":"in","position":{"x":841,"y":193,"w":15,"h":19},"word_index":5,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":23},{"word":"illustrative","position":{"x":861,"y":193,"w":85,"h":19},"word_index":6,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":26},{"word":"examples","position":{"x":950,"y":193,"w":77,"h":19},"word_index":7,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":39},{"word":"in","position":{"x":1033,"y":193,"w":15,"h":19},"word_index":8,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":48},{"word":"documents.","position":{"x":1052,"y":193,"w":94,"h":19},"word_index":9,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":51},{"word":"You","position":{"x":1152,"y":193,"w":28,"h":19},"word_index":10,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":62},{"word":"may","position":{"x":1184,"y":193,"w":35,"h":19},"word_index":11,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":66},{"word":"use","position":{"x":1224,"y":193,"w":28,"h":19},"word_index":12,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":70},{"word":"this","position":{"x":660,"y":212,"w":34,"h":19},"word_index":13,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":74},{"word":"domain","position":{"x":694,"y":212,"w":60,"h":19},"word_index":17,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":83},{"word":"in","position":{"x":759,"y":212,"w":15,"h":19},"word_index":18,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":90},{"word":"literature","position":{"x":779,"y":212,"w":74,"h":19},"word_index":19,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":93},{"word":"without","position":{"x":858,"y":212,"w":60,"h":19},"word_index":20,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":104},{"word":"prior","position":{"x":923,"y":212,"w":38,"h":19},"word_index":21,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":112},{"word":"coordination","position":{"x":966,"y":212,"w":100,"h":19},"word_index":22,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":118},{"word":"or","position":{"x":1071,"y":212,"w":16,"h":19},"word_index":23,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":131},{"word":"asking","position":{"x":1092,"y":212,"w":52,"h":19},"word_index":24,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":134},{"word":"for","position":{"x":1149,"y":212,"w":22,"h":19},"word_index":25,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":141},{"word":"permission.","position":{"x":660,"y":231,"w":92,"h":19},"word_index":26,"xpath":"/html[1]/body[1]/div[1]/p[1]","offset":145},{"word":"More","position":{"x":660,"y":266,"w":40,"h":19},"word_index":0,"xpath":"/html[1]/body[1]/div[1]/p[2]/a[1]","offset":0},{"word":"information...","position":{"x":705,"y":266,"w":108,"h":19},"word_index":1,"xpath":"/html[1]/body[1]/div[1]/p[2]/a[1]","offset":5}],"page_properties":{"viewport":{"width":1920,"height":1080},"document":{"width":1920,"height":1080}},"saved_in_cloud":{}}'
      )
    );
  });

});
