import { Client } from "../src/classes/client";
import * as fs from "fs";
import { ProjectStatus } from "rest-api-client-framework";

describe("Test create Project", () => {
  let saved_project_id;
  let example_url_id;
  let client;

  beforeEach(() => {
    client = new Client(
        process.env.WEBSHOTAPI_TEST_API_KEY
    );
  });

  it("Create project", async () => {
    const data = {
      name: "My project",
      status: ProjectStatus.ACTIVE,
    };

    const response = await client.project().create(data);
    expect(response.status()).toBe(201);

    saved_project_id = response.json().id;
  });

  it("Update project", async () => {
    const response = await client.project().update(saved_project_id, {
      name: "Updated project name",
      status: ProjectStatus.DISABLED,
    });

    expect(response.status()).toBe(200);
    expect(response.json()).toMatchObject({
      name: "Updated project name",
      status: "disabled",
    });
  });

  it("Get project Not exists", async () => {
    await expect(client.project().get("fasdfasfsda")).rejects.toThrow(Error);
  });

  it("Get project", async () => {
    const response = await client.project().get(saved_project_id);

    expect(response.status()).toBe(200);
    expect(response.json()).toMatchObject({
      name: "Updated project name",
      status: "disabled",
    });
  });

  it("List project", async () => {
    const response = await client.project().list(1);

    expect(response.status()).toBe(200);
    expect(response.json().projects.length).toBeGreaterThan(0);
  });

  it("Project not exists", async () => {
    await expect(

      client.projectUrl().create("42332d23", {
        urls: [
          "https://example.com",
          "https://example.com/blog/43",
          "https://example.com/page/sdff",
        ],
        command: "screenshot",
        params: {
          ads: false,
          extract_html: true,
          remove_modals: true,
        },
      })
    ).rejects.toThrow(Error);
  });

  it("Add url to project", async () => {
    const response = await client.projectUrl().create(saved_project_id, {
      urls: [
        "https://example.com",
        "https://example.com/blog/43",
        "https://example.com/page/sdff",
      ],
      command: "screenshot",
      params: {
        ads: false,
        extract_html: true,
        remove_modals: true,
      },
    });

    expect(response.status()).toBe(201);

    example_url_id = response.json()[0].id;
  });

  it("Get Project urls", async () => {
    const response = await client.projectUrl().list(saved_project_id, 1);

    expect(response.status()).toBe(200);
    expect(response.json().urls.length).toBe(3);
  });

  it("Get Project url", async () => {
    const response = await client
      .projectUrl()
      .get(saved_project_id, example_url_id);

    expect(response.status()).toBe(200);
    expect(response.json().url).toBe("https://example.com/");
  });

  it("Process project url again", async () => {
    const response = await client
      .projectUrl()
      .process_again(saved_project_id, example_url_id);

    expect(response.status()).toBe(200);
    expect(response.json()).toMatchObject({
      url: "https://example.com/",
      status: "waiting_for_execute",
      errors_sum: 0,
      last_error_info: "",
    });
  });

  it("Delete Project url", async () => {
    const response = await client
      .projectUrl()
      .remove(saved_project_id, example_url_id);

    expect(response.status()).toBe(200);
    expect(response.json().deleted).toBeTruthy();
  });

  it("Delete project", async () => {
    const response = await client.project().remove(saved_project_id);

    expect(response.status()).toBe(200);
    expect(response.json().deleted).toBeTruthy();
  });

  it("Download url", async () => {
    const savePath = "/tmp/test.pdf";
    const response = await client
      .projectUrl()
      .download(
        "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf",
        savePath
      );

    expect(response.status()).toBe(200);
    expect(fs.existsSync(savePath)).toBe(true);
    expect(fs.statSync(savePath).size).toBeGreaterThan(10240);
  },15000);
});
