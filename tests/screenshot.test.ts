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
      api_key: process.env.WEBSHOTAPI_API_KEY,
    });
  });

  it("Screenshot JPG", async () => {

    const response = await client.screenshot("https://www.example.com",  {
      ads: true,
      remove_modals: true,
      width: 1920,
    },"jpg");


    expect(response.contentType()).toContain("image/jpeg");
    compareImages(
      path.join(__dirname, "../openapi/screenshot-data/example.jpeg"),
      response.body()
    );
  }, 7000);

  it("Screenshot PNG", async () => {
    const response = await client.screenshot("https://www.example.com", {
      ads: true,
      remove_modals: true,
      width: 1920,
    }, "png");

    expect(response.contentType()).toContain("image/png");
    compareImages(
      path.join(__dirname, "../openapi/screenshot-data/example.png"),
      response.body()
    );
  });

  it("Screenshot PDF", async () => {
    const response = await client.pdf("https://www.example.com", {
      ads: true,
      remove_modals: true,
      width: 1920,
    });

    expect(response.contentType()).toContain("application/pdf");

  });

  it("Extract JSON", async () => {
    const response = await client.extract("https://www.example.com", {
      ads: true,
      remove_modals: true,
      width: 1920,
      extract_words: true,
    });

    expect(response.contentType()).toContain("application/json");
    const data = response.json()
    expect(data.words[1]).toMatchObject({
      "word": "Domain",
      "position": {
        "x": 795,
        "y": 133,
        "w": 110,
        "h": 51
      },
      "word_index": 1,
      "xpath": "/html[1]/body[1]/div[1]/h1[1]",
      "offset": 8
    })

  });

});
