import { AxiosResponse } from "axios";

export class WebshotapiClientException extends Error {
  public code: number = 0;
  public message: string = "";
  public response: AxiosResponse | undefined = undefined;

  constructor(err: any) {
    super();

    if (err?.response) {
      this.code = err?.response?.status;
      this.message = err?.response?.data?.toString() ?? err?.response?.data;
      this.response = err?.response;
    } else {
      this.code = err?.code ?? 0;
      this.message = err?.message ?? "Unknown error";
    }
  }
}
