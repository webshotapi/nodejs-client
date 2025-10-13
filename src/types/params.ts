import { ParamsBase } from "./params.base";

type UrlParams = {
  url: string;
} & ParamsBase;

type MarkdownParams = {
  markdown: string;
} & ParamsBase;

type HtmlParams = {
  html: string;
} & ParamsBase;

export type Params = UrlParams | MarkdownParams | HtmlParams;