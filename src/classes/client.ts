import { ConvertTypeToMimeType } from "../types/screenshot.type";
import { ExtractResponse, Params } from "../types";

import {
  ClientInterface,
  Request,
  ConfigType,
  convertAxiosResponse,
  ResponseInterface,
} from "rest-api-client-framework";
import { WebshotapiClientException } from "../exceptions";
import { ScreenshotJsonResponseInterface } from "../types/screenshot.json.response";

export type ClientConfig = {
  api_key?: string;
  endpoint?: string;
  timeout?: number;
  timeout_connection?: number;
};

export class Client implements ClientInterface {
  private data: ClientConfig;

  /**
   * @param data ClientConfig
   */
  constructor(data: ClientConfig) {
    this.data = {
      timeout: 50_000,
      endpoint:
        process.env.WEBSHOTAPI_ENDPOINT ?? "https://api.webshotapi.com/v1",
      api_key: process.env.WEBSHOTAPI_KEY,
      ...data,
    };
  }

  /**
   * Generate screenshot in PDF format
   * @param url
   * @param params
   */
  async pdf(url: string, params: Params): Promise<ResponseInterface> {
    return await this.screenshot(url, {
      image_type: "pdf",
      ...params,
    });
  }

  /**
   * Take website screenshot in specific file format
   * @param url - url to website
   * @param params - params like {no_cache: true, width: 1024}
   * @param json_response - return screenshot as json or image
   */
  async screenshot(
    url: string,
    params: Params,
    json_response = false,
  ): Promise<ResponseInterface> {
    try {
      const request = this.requestFactory();
      request.addHeaders({
        "Accept-Encoding": "gzip",
        Accept: `${ConvertTypeToMimeType(params?.image_type ?? "jpg")}`,
      });

      const requestParams = {
        url: url,
        ...params,
      };

      const response = await request.post(
        `/screenshot/${json_response ? "json" : "image"}`,
        requestParams,
      );

      if (response.status !== 200)
        throw new Error(
          `Cant download screenshot file from server status code: ${response.status}`,
        );

      return convertAxiosResponse(response);
    } catch (err) {
      throw new WebshotapiClientException(err);
    }
  }

  /**
   * Helper function for create screenshot and return json object with url
   * @param url
   * @param params
   */
  async screenshotJson(url: string, params: Params) {
    const response = await this.screenshot(url, params, true);
    return response.json<ScreenshotJsonResponseInterface>();
  }

  /**
   * Extract words with position, html, text or selectors from website
   *
   * @param url
   * @param params
   */
  async extract(url: string, params: Params): Promise<ExtractResponse> {
    try {
      const request = this.requestFactory();
      request.addHeaders({
        "Accept-Encoding": "gzip",
        "Content-Type": "application/json",
      });

      const response = await request.post(`/extract`, {
        url,
        ...params,
      });
      if (response.status !== 200)
        throw new Error(
          `Cant download json file from server status code: ${response.status}`,
        );

      const responseObj = convertAxiosResponse(response);
      return responseObj.json<ExtractResponse>();
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
          `Cant download json file from server status code: ${response.status}`,
        );

      return convertAxiosResponse(response);
    } catch (err) {
      throw new WebshotapiClientException(err);
    }
  }

  protected requestFactory(): Request {
    return new Request(this);
  }

  globalHeaders(): Record<string, string> {
    return {};
  }

  config(): ConfigType {
    return {
      endpoint: this.data.endpoint,
      timeout: this.data.timeout,
      timeout_connection: this.data.timeout_connection,
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
