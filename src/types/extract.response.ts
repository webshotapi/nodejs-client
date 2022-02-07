export type ExtractResponse = {
  status_code: number;
  html: string;
  text: string;
  screenshot_url: string;
  selectors: Array<any>;
  words: Array<any>;
};
