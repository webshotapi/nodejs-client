import { Client } from "../src/classes/client";
import * as fs from "fs";
import * as crypto from "crypto";
import * as path from "path";
import { Jimp, diff } from "jimp";

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

  const diffPercent = diff(i2, i).percent;
  expect(diffPercent).toBeLessThanOrEqual(threshold);
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
    });


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
      image_type: "png",
      width: 1920,
    });

    expect(response.contentType()).toContain("image/png");
    compareImages(
      path.join(__dirname, "../openapi/screenshot-data/example.png"),
      response.body()
    );
  },10_000);

  it("Screenshot PDF", async () => {
    const response = await client.pdf("https://www.example.com", {
      ads: true,
      remove_modals: true,
      width: 1920,
    });

    expect(response.contentType()).toContain("application/pdf");

  },10_000);

  it("Screenshot WEBP", async () => {
    const response = await client.screenshot("https://www.example.com", {
      ads: true,
      remove_modals: true,
      image_type: "webp",
      width: 1920,
    });

    expect(response.contentType()).toContain("image/webp");

  },10_000);


  it("Extract JSON", async () => {
    const data = await client.extract("https://www.example.com", {
      ads: true,
      remove_modals: true,
      width: 1920,
      extract_words: true,
    });

    expect(data.words[1]).toMatchObject({
      "word": "Domain",
      "position": {
        "x": 795,
        "y": 133,
        "width": 110,
        "height": 51
      },
      "word_index": 1,
      "xpath": "/html[1]/body[1]/div[1]/h1[1]",
      "offset": 8
    })

  },10_000);

});
