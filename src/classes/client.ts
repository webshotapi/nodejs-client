import {
  ConvertTypeToMimeType,
  ScreenshotType,
} from "../types/screenshot.type";
import { Params } from "../types";

import {
  ClientInterface,
  Request,
  ProjectUrl,
  Projects,
  executor,
  ConfigType,
  convertAxiosResponse,
  ResponseInterface,
} from "rest-api-client-framework";
import { SaveProjectUrlWebshotapiDto } from "../types/saveUrl.dto";
import { WebshotapiClientException } from "../exceptions";

export type ClientConfig = {
  api_key?: string
  endpoint?: string
  timeout?: number
  timeout_connection?: number;
}

export class Client implements ClientInterface {

  private data: ClientConfig;

  /**
   * Contructor with your API KEY
   * @param api_key
   */
  constructor( data: ClientConfig) {
      this.data = {
        timeout: 32000,
        endpoint: process.env.WEBSHOTAPI_ENDPOINT ?? "https://api.webshotapi.com/v1",
        api_key: process.env.WEBSHOTAPI_KEY,
        ...data,
      }
  }

  /**
   * Generate screenshot in PDF format
   * @param url
   * @param params
   */
  async pdf(
    url: string,
    params: Params = { url: "" }
  ): Promise<ResponseInterface> {
    return await this.screenshot(url, ScreenshotType.PDF, params);
  }

  /**
   * Take website screenshot in specific file format
   * @param url - url to website
   * @param file_type - jpg, png, pdf
   * @param params - params like {no_cache: true, width: 1024}
   */
  async screenshot(
    url: string,
    file_type: ScreenshotType,
    params: Params = {
      url: ""
    }
  ): Promise<ResponseInterface> {
    try {
      const request = this.requestFactory();
      request.addHeaders({
        "Accept-Encoding": "gzip",
        Accept: `${ConvertTypeToMimeType(file_type)}`,
      });

      params.url = url;
      params.image_type = file_type;

      const response = await request.post(`/screenshot/image`, params);

      if (response.status !== 200)
        throw new Error(
          `Cant download screenshot file from server status code: ${response.status}`
        );

      return convertAxiosResponse(response);
    } catch (err) {
      throw new WebshotapiClientException(err);
    }
  }

  /**
   * Extract words with position, html, text or selectors from website
   *
   * @param url
   * @param params
   */
  async extract(
    url: string,
    params: Params = { url: "" }
  ): Promise<ResponseInterface> {
    try {
      const request = this.requestFactory();
      request.addHeaders({
        "Accept-Encoding": "gzip",
        "Content-Type": "application/json",
      });

      params.url = url;
      const response = await request.post(`/extract`, params);
      if (response.status !== 200)
        throw new Error(
            `Cant download json file from server status code: ${response.status}`
        );

      return convertAxiosResponse(response);
    } catch (err) {
      throw new WebshotapiClientException(err);
    }
  }

  /**
   * Download your account plan info.
   */
  async info(): Promise<ResponseInterface> {
    try {
      const request = this.requestFactory();
      const response = await request.get(`/info`);
      if (response.status !== 200)
        throw new Error(
            `Cant download json file from server status code: ${response.status}`
        );

      return convertAxiosResponse(response);
    } catch (err) {
      throw new WebshotapiClientException(err);
    }
  }

  protected requestFactory(): Request {
    return new Request(this);
  }

  /**
   * Operation in your projects
   */
  project() {
    return Projects(this);
  }

  /**
   * Add url to project or download completed requests
   */
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
      endpoint: this.data.endpoint,
      timeout: this.data.timeout,
      timeout_connection: this.data.timeout_connection
    };
  }

  /**
   * Set api key to our service
   * @param api_key
   */
  setApiKey(api_key: string) {
    this.data.api_key = api_key;
  }

  setAuthentication(request: Request): void {
    request.addHeaders({ authorization: `Bearer ${this.data.api_key}` });
  }
}
