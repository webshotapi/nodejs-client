import {
  ConvertTypeToMimeType,
  ScreenshotType,
} from "../types/screenshot.type";
import { Params } from "../types";
import { ExtractResponse } from "../types/extract.response";
import {
  ClientInterface,
  Request,
  ProjectUrl,
  Projects,
  Response,
  executor,
  SaveUrlDto,
  ConfigType,
  ResponseInterface,
} from "rest-api-client-framework";
import { SaveProjectUrlWebshotapiDto } from "../types/saveUrl.dto";

export type ClientType = {
  api_key?: string;
};

export class Client implements ClientInterface {
  private api_key: string;

  constructor(api_key: string) {
    this.setApiKey(api_key);
  }

  async pdf(
    url: string,
    params: Params = { link: "" }
  ): Promise<ResponseInterface> {
    return this.screenshot(url, ScreenshotType.PDF, params);
  }

  async screenshot(
    url: string,
    file_type: ScreenshotType,
    params: Params = { link: "" }
  ): Promise<ResponseInterface> {
    const request = this.requestFactory();
    request.addHeaders({
      "Accept-Encoding": "gzip",
      Accept: `${ConvertTypeToMimeType(file_type)}`,
    });

    params.link = url;
    params.image_type = file_type;

    const response = await request.post(`/screenshot/image`, params);

    if (response.status !== 200)
      throw new Error(
        `Cant download screenshot file from server status code: ${response.status}`
      );

    return new Response(response);
  }

  async extract(
    url: string,
    params: Params = { link: "" }
  ): Promise<ResponseInterface> {
    const request = this.requestFactory();
    request.addHeaders({
      "Accept-Encoding": "gzip",
      "Content-Type": "application/json",
    });

    params.link = url;
    const response = await request.post(`/extract`, params);
    if (response.status !== 200)
      throw new Error(
        `Cant download json file from server status code: ${response.status}`
      );

    return new Response(response);
  }

  async info(): Promise<ResponseInterface> {
    const request = this.requestFactory();
    const response = await request.get(`/info`);
    if (response.status !== 200)
      throw new Error(
        `Cant download json file from server status code: ${response.status}`
      );

    return new Response(response);
  }

  protected requestFactory(): Request {
    return new Request(this);
  }

  project() {
    return Projects(this);
  }

  projectUrl() {
    const projectUrl = ProjectUrl(this);
    const createWebshotapi = {
      create: (project_id: string, data: SaveProjectUrlWebshotapiDto) => {
        return executor(this, {
          path: `/projects/${project_id}/urls`,
          data: data,
          method: "POST",
          acceptCode: [201],
        });
      },
    };

    return { ...projectUrl, ...createWebshotapi };
  }

  globalHeaders(): Record<string, string> {
    return {};
  }

  config(): ConfigType {
    return {
      endpoint:
        process.env.WEBSHOTAPI_ENV == "dev"
          ? "http://localhost:3000"
          : "https://api.webshotapi.com/v1",
      timeout: 30000,
    };
  }

  setApiKey(api_key: string) {
    this.api_key = api_key;
  }

  setAuthentication(request: Request): void {
    request.addHeaders({ authorization: `Bearer ${this.api_key}` });
  }
}
