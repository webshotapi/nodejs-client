type PositionType = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type ElementType = {
  xpath: string;
  css_selector: string;
  style: Record<string, string>;
  attributes: Record<string, string>;
} & PositionType;

export type ExtractResponse = {
  status_code: number;
  html: string;
  text: string;
  elements: Array<ElementType>;
  words: Array<{
    word: string;
    position: PositionType;
    word_index: number;
    xpath: string;
    offset: number;
  }>;
  page_properties: {
    viewport: {
      width: number;
      height: number;
    };
    document: {
      width: number;
      height: number;
    };
  };
  saved_in_cloud: {
    completed: boolean;
  };
};
